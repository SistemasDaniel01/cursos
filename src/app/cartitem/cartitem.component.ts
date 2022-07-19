import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemModel } from '../models/cart-item/cart-item-model';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {

  @Input() index: number;
  @Input() cartItem: CartItemModel;

  @Output() deleteItem = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void { }

  onDeleteClicked(): void { this.deleteItem.emit(); }

}
