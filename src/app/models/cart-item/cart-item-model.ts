/* Model */
import { Product } from "../product/product";

export class CartItemModel {
  productId : Number;
  productName: String;
  productPrice: number;
  qty: number;

  constructor(product: Product){
    this.productId = product.id;
    this.productName = product.name;
    this.productPrice = product.price;
    this.qty = 1;
  }

}
