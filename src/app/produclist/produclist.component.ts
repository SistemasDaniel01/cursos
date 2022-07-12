import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produclist',
  templateUrl: './produclist.component.html',
  styleUrls: ['./produclist.component.css']
})
export class ProduclistComponent implements OnInit {


  products:Product[] = [];


  constructor(

    private productService: ProductService


  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts():void{
    
    this.products = this.productService.getProducts();
  }


}
