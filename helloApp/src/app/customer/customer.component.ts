import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-customer',
  imports: [MenuComponent,NgFor],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers = [
    {id:1,name:'Vivek',email:'vivek@abc.com',phone:'2356422433', address:'India'},
    {id:2,name:'Pratistha',email:'pari@abc.com',phone:'28896422433', address:'India'},
    {id:3,name:'Samridh',email:'samar@abc.com',phone:'2889rr22433', address:'India'},
    {id:4,name:'Vishal',email:'vishal@abc.com',phone:'28899822433', address:'India'}
  ];
  doDelete(id:any){
    console.log("id ::"+id);
    this.customers = this.customers.filter((cus)=>(cus.id!=id));
  }
  // doCopy(id:any){
  //   console.log("copy id ::"+id+1);
    
  //    // assignment for day 2
  //   //this.customers = this.customers.filter((cus)=>(cus.id!=id));
  // }
  doCopy(id: any) {
    const customerToCopy = this.customers.find(cus => cus.id === id);
    if (customerToCopy) {
      const copiedCustomer = { ...customerToCopy, id: this.customers.length + 1 }; // New ID
      this.customers.push(copiedCustomer); // Add the copied customer to the list
      console.log("Copied Customer:", copiedCustomer);
    }
  }

}
