import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

/* Model */
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class MessageeService {

  message = new Subject();

  constructor() { }

  sendMessage(product: Product): void { this.message.next(product); }

  getMessage(): Observable<any> { return this.message.asObservable(); }

}
