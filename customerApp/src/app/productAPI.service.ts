import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
const baseUrl = 'http://127.0.0.1:4000/api/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<any> {
    return this.httpClient.get(`${baseUrl}`);
  }

  getProductById(id: number): Observable<any> {
    return this.httpClient.get(`${baseUrl}/${id}`);
  }

  addProduct(product: Product): Observable<any> {
    return this.httpClient.post(`${baseUrl}`, product);
  }
  copyProduct(product: Product) {
    return this.httpClient.post(`${baseUrl}`, product);
  }
  updateProduct(product: Product) {
    return this.httpClient.put(`${baseUrl}`, product);
  }
  deleteProduct(product: Product) {
    return this.httpClient.delete(`${baseUrl}/${product.id}`);
  }
}
