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
}
