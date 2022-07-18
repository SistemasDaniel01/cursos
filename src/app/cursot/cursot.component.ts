import { MessageboxComponent } from './../messagebox/messagebox.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-cursot',
  templateUrl: './cursot.component.html',
  styleUrls: ['./cursot.component.css']
})
export class CursotComponent implements OnInit {

  key : string = "shoppingCart";

  cart: Array<any> = [];

  products:Array<any>= [
    {
      url : "../../assets/img/angular.webp",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Angular",
      price: 200
    },
    {
      url : "../../assets/img/java.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "Java",
      price: 200
    },
    {
      url : "../../assets/img/javascript.png",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "JavaScript",
      price: 200
    },
    {
      url : "../../assets/img/php.jpg",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "PHP",
      price: 300
    },
    {
      url : "../../assets/img/spring.png",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      title: "SpringBoot",
      price: 300
    },

  ]

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void { }

  saveOnCart( index : number ) : void {
    let product = this.products[index];
    product.amount = 1;

    this.cart.push(product);
    let data: string = JSON.stringify(this.cart);
    localStorage.setItem(this.key, data);

this.dialog.open(MessageboxComponent,{data:{name:product.title}});




  }

  loadFromCart ( ) : any {
    let data : any = localStorage.getItem(this.key);
    return JSON.parse(data);
  }

}
