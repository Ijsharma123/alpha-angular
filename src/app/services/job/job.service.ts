import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import *as featureInterface from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }


  jobList(): Observable<any>{
    return this.http.get<any>(`${featureInterface.jobList}`);
  }

  activeUsers(): Observable<any>{
    return this.http.get<any>(`${featureInterface.activeUser}`);
  }

  jobAdd(data:any): Observable<any>{
    return this.http.post<any>(featureInterface.jobAdd,data);
  }

  jobEdits(data:any, id:any): Observable<any>{
    return this.http.post<any>(`${featureInterface.jobEdit}/${id}`,data);
  }

  jobDelete(id:any): Observable<any>{
    return this.http.get<any>(`${featureInterface.jobDelete}/${id}`);
  }

}
