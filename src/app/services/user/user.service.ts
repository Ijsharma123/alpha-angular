import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import *as featureInterface from '../Interface/interface';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userList(): Observable<any>{
    return this.http.get<any>(`${featureInterface.userList}`);
  }

  groupList(): Observable<any>{
    return this.http.get<any>(`${featureInterface.group}`);
  }


  userAdd(data:any): Observable<any>{
    return this.http.post<any>(featureInterface.userAdd,data);
  }

  userEdits(data:any, id:any): Observable<any>{
    return this.http.post<any>(`${featureInterface.userEdit}/${id}`,data);
  }

  deletUser(id:any): Observable<any>{
    return this.http.get<any>(`${featureInterface.userDelete}/${id}`);
  }

  // changesPassword(data:any): Observable<any>{
//      return this.http.post<any>(featureInterface.changepassword,data);
  // }
}
