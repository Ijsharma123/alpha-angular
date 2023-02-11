import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import *as featureInterface from '../Interface/interface';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  groupList(): Observable<any>{
    return this.http.get<any>(featureInterface.group);
   }
}
