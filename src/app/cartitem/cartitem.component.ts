import { CartItemModel } from './../models/cart-item-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {


  @Input() cartItem: CartItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
