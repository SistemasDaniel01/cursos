import { Product } from '../models/product/product';
import { Component, Input, OnInit } from '@angular/core';

/* Model */
import { MessageeService } from '../services/message/messagee.service';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent implements OnInit {

  @Input() product: Product;

  constructor(private messageeService: MessageeService) { }

  ngOnInit(): void { }

  addtoCart(): void { this.messageeService.sendMessage(this.product); }

}
