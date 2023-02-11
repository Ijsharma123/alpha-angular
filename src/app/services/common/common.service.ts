import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
// npm install  npm install jwt-decode
tokens:any
  constructor() { }
  isLoggedIn(){
    return localStorage.getItem('token')!=null;   //it will return false otherWise its will be true
   }

   async jwtToken(){
    this.tokens =  localStorage.getItem('token')
      return jwt_decode(this.tokens);
   }
}
