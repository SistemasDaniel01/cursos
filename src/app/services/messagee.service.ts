import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageeService {


  message = new Subject();


  constructor() { }

  sendMessage(product:Product): void{

    this.message.next(product);

  }


  getMessage():Observable<any>{
    return this.message.asObservable();
  }

}
