import { Product } from './../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products: Product [] = [
    new Product(1,'Angular','Aprende Angular desde 0',500,'../../assets/img/angular.png'),
    new Product(2,'Java','Curso Java desde 0',400,'../../assets/img/java.png'),
    new Product(3,'Php','Curso Php desde 0',300,'../../assets/img/php.png'),
    new Product(4,'Spring','Curso Spring desde 0',400,'../../assets/img/spring.png'),
    new Product(5,'Vue','Curso Vue desde 0',300,'../../assets/img/vue.png'),
    new Product(6,'JavaScript','Curso JavaScript desde 0',500,'../../assets/img/javascript.png')

  ];

  constructor() { }


  getProducts():Product[]{

    return this.products;

  }
}
