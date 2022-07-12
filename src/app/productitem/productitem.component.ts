import { MessageeService } from './../services/messagee.service';
import { Product } from './../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {


  @Input() product: Product;

  constructor(

    private messageeService: MessageeService

  ) { }

  ngOnInit(): void {
  }

  addtoCart():void{

    
    this.messageeService.sendMessage(this.product);
  }

}
