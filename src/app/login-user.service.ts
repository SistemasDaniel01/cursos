import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';


import { LoginData } from './core/interfaces/login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {


  constructor(private auth: Auth) {}



}
