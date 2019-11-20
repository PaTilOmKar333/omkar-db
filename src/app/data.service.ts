import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }


  GETDATA()
  {
    return this.http.get("http://192.168.43.207:5000/emp");
  }
}
