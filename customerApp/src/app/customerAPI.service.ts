import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './models/customer';
// const baseUrl = 'https://nodeapi.pyther.com/customer';
const baseUrl = 'http://127.0.0.1:4000/api/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private httpClient:HttpClient) { }
  getCustomers(): Observable<any> {
    return this.httpClient.get(`${baseUrl}`);
    }
    
    getCustomerById(id: number): Observable<any> {
        return this.httpClient.get(`${baseUrl}/${id}`);
      }

  addCustomer(customer:Customer): Observable<any> {
    return this.httpClient.post(`${baseUrl}`,customer);
  }
  copyCustomer(customer:Customer){
    return this.httpClient.post(`${baseUrl}`,customer);
  }
  updateCustomer(customer:Customer){
    return this.httpClient.put(`${baseUrl}`,customer);
  }
  deleteCustomer(customer:Customer){
    return this.httpClient.delete(`${baseUrl}/${customer.id}`);
  }
}
