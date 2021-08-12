import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdctService {
  baseurl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    const url = `${this.baseurl}/product`
    return this.http.get(url)
  }

  getUSers(): Observable<any>{
    const url = `${this.baseurl}/User/signup`
    return this.http.get(url)
  }
  addUSers(data:any): Observable<any>{
    const url = `${this.baseurl}/User/signup`
    return this.http.post(url,data)
  }
}

