import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import *as featureInterface from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }


    showProfile(data:any): Observable<any>{
      return this.http.get<any>(`${featureInterface.showProfile}/${data}`);
     }
  

  updatProfile(data:any, id:any): Observable<any>{
    return this.http.post<any>(`${featureInterface.udateProfile}/${id}`,data);
  }

  changesPassword(data:any): Observable<any>{
    return this.http.post<any>(featureInterface.changepassword,data);
  }

}
