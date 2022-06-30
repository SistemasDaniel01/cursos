import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {


  private baseUrl=""
  constructor(private httpClient: HttpClient) { }



  loginUser(user: User):Observable<object>{

    console.log(user);
    return this.httpClient.post(`${this.baseUrl}`,user);

  }

}
