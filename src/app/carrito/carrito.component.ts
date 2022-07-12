import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ModalComponent } from './../modal/modal.component';
import { environment } from './../../environments/environment';
import { StorageService } from './../services/storage.service';
import { CartItemModel } from './../models/cart-item-model';
import { Product } from './../models/product';
import { MessageeService } from './../services/messagee.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { CargarScriptsService } from '../cargar-scripts.service';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  cartItems: CartItemModel[] = [];
  total: number = 0;

  public payPalConfig?: IPayPalConfig;

  constructor(

    private messageeService: MessageeService,
    private storageService: StorageService,
    private modalService:NgbModal,
    private spinner:NgxSpinnerService

  ) { }

  ngOnInit(): void {
    this.initConfig();

    if (this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();


  }


  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: this.getTotal().toString(),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: this.getTotal().toString()
              }
            }
          },
          items: this.getItemsList()
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        this.spinner.show();
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point',
         JSON.stringify(data));
         this.openModal(
          data.purchase_units[0].items,
          data.purchase_units[0].amount.value
         );
         this.emptyCart();
         this.spinner.hide();

      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);


      },
      onError: err => {
        console.log('OnError', err);

      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);

      }
    };
  }


  getItem(): void {

    this.messageeService.getMessage().subscribe((product: Product) => {

      let exists = false;
      this.cartItems.forEach(item => {

        if (item.productId === product.id) {
          exists = true;
          item.qty++;
        }

      });

      if (!exists) {
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);
      }
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });
  }

  getItemsList(): any[]{


    const items:any[] = [];
    let item={};
    this.cartItems.forEach((it:CartItemModel)=>{
      item = {
        name:it.productName,
        quantity: it.qty,
        unit_amount:{value:it.productPrice, currency_code:'USD'}
      };
      items.push(item);

    });

    return items;

  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach(item => {

      total += item.qty * item.productPrice;

    });

    return +total.toFixed(2);

  }


  emptyCart(): void {
    this.cartItems = [];
    this.total = 0;
    this.storageService.clear();
  }

  deleteItem(i: number): void {
    if (this.cartItems[i].qty > 1) {
      this.cartItems[i].qty--;
    } else {
      this.cartItems.splice(i, 1);
    }

    this.total = this.getTotal();
    this.storageService.setCart(this.cartItems);
  }

  openModal(items: any,amount: any):void{

    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.items = items;
    modalRef.componentInstance.amount = amount;
}
}
