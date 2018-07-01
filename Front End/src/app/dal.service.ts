import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DALService {

  constructor(private http: HttpClient) {   }

  public getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
