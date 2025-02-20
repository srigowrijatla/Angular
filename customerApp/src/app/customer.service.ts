import { Injectable } from '@angular/core';
import { Customer } from './models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  customers:Customer[] = [
    {id:1,name:'Vivek',email:'vivek@abc.com',phone:'2356422433', address:'India',dob: new Date('1990,11,16'),},
    {id:2,name:'Pratistha',email:'pari@abc.com',phone:'28896422433', address:'India',dob: new Date('1991,12,17'),},
    {id:3,name:'Samridh',email:'samar@abc.com',phone:'2889rr22433', address:'India',dob: new Date('1992,10,18'),},
    {id:4,name:'Vishal',email:'vishal@abc.com',phone:'28899822433', address:'India',dob: new Date('1993,5,19'),}
    ];

    getNextId = () => {
      if(this.customers.length == 0){
        return 1;
      }
        const numArr = this.customers.map(({id})=>id);
        return  Math.max(...numArr) + 1;
      }

  getCustomers(){
    return this.customers;
  }
  getCustomerById(id:number){
    const list = this.customers.filter((rec)=>(rec.id == id));
    if(list.length){
      return list[0]
    }else{
      return null;
    }
  }
  addCustomer(customer:Customer){
    customer.id = this.getNextId()
    this.customers = [...this.customers,customer]
  }
  copyCustomer(customer:Customer){
    customer.id = this.getNextId()
    this.customers = [customer, ...this.customers]
  }
}
