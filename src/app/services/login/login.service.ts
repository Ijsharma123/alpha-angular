import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import *as featureInterface from '../Interface/interface';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  signIn(data:any): Observable<any>{
    return this.http.post<any>(featureInterface.signIn, data);
   }
   
}
