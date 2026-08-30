import { inject, Injectable } from '@angular/core';

import { ProductDto } from '../../request/productDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
import { ProductInfoDto } from '../../dtos/productInfoDto';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  private http = inject(HttpClient);

  apiUrl = "http://localhost:8080/skeycha/"

  addProduct(product:ProductDto): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = this.apiUrl+"products/add";

    return this.http.post(url, product);

  }

  fetchProducts():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = this.apiUrl+"products/productInfoList";

    return this.http.get(url);
  }

  fetchProduct(productId:string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = this.apiUrl+"products/"+productId;
    console.log("Fetching product :"+productId);
    return this.http.get(url);
  }
  
}
