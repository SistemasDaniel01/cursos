import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  key: string = "shoppingCart";
  products: Array<any> = [];

  constructor() {
    this.products = this.loadFromCart();
  }

  ngOnInit(): void { }

  loadFromCart(): any {
    let data: any = localStorage.getItem(this.key);
    return JSON.parse(data);
  }

  onDeleteProduct(index: number) {
    delete this.products[index];
    this.products = this.products.filter(ele => ele != null);
    this.saveOnCart();
  }

  saveOnCart(): void {
    let data: string = JSON.stringify(this.products);
    localStorage.setItem(this.key, data);
  }

}
