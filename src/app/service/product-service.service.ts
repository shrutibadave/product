import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listOfProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService{
 
  constructor(private http:HttpClient) { }


  getProductTypes(): Observable<any[]> {
    return this.http.get<any[]>(`https://dummyjson.com/products/categories`);
  }
  getProducts(): Observable<listOfProduct> {
    return this.http.get<listOfProduct>(`https://dummyjson.com/products`);
  }
  getProductByCategoryName(category_name:string): Observable<listOfProduct> {
    return this.http.get<listOfProduct>(`https://dummyjson.com/products/category/${category_name}`);
  }
  getProductById(id:number): Observable<any[]> {
    return this.http.get<any[]>(`https://dummyjson.com/products/${id}`);
  }

}
