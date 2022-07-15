import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

/* Model */
import { CartItemModel } from 'src/app/models/cart-item/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }


  existsCart(): boolean {
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CartItemModel[] {

    return JSON.parse(localStorage.getItem('cart')!);
  }

  clear(): void {
    localStorage.removeItem('cart');
  }



}
