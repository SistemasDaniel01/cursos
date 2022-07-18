import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';

/* Model */
import { Product } from '../models/product/product';

@Component({
  selector: 'app-produclist',
  templateUrl: './produclist.component.html',
  styleUrls: ['./produclist.component.css']
})
export class ProduclistComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
  }

}
