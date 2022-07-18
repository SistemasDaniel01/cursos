import { Component, Input, OnInit } from '@angular/core';

/* Model */
import { CartItemModel } from '../models/cart-item/cart-item-model';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  @Input() cartItem: CartItemModel;

  constructor() { }

  ngOnInit(): void { }

}
