import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../models/customer';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DatePipe} from '@angular/common';



@Component({
  selector: 'app-customer',
  providers: [provideNativeDateAdapter()],
  imports: [
    MenuComponent,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    DatePipe,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'address',
    'dob',
    'edit',
    'copy',
    'delete',
  ];
  customers: Customer[] = [
    {
      id: 1,
      name: 'Vivek',
      email: 'vivek@abc.com',
      phone: '2356422433',
      address: 'India',
      dob: new Date('1990,11,16'),
    },
    {
      id: 2,
      name: 'Pratistha',
      email: 'pari@abc.com',
      phone: '28896422433',
      address: 'India',
      dob: new Date('1991,12,17'),
    },
    {
      id: 3,
      name: 'Samridh',
      email: 'samar@abc.com',
      phone: '2889rr22433',
      address: 'India',
      dob: new Date('1992,10,18'),
    },
    {
      id: 4,
      name: 'Vishal',
      email: 'vishal@abc.com',
      phone: '28899822433',
      address: 'India',
      dob: new Date('1993,5,19'),
    },
  ];
  customer: Customer = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: new Date(''),
  };
  addButtonLabel: string = 'Add';

  doDelete(id: any) {
    console.log('id ::' + id);
    this.customers = this.customers.filter((cus) => cus.id != id);
  }
  getCustomerById(id: number) {
    return this.customers.filter((cus: Customer) => cus.id == id);
  }
  getNextId() {
    if (this.customers.length == 0) {
      return 1;
    }
    const numArr = this.customers.map(({ id }) => id);
    return Math.max(...numArr) + 1;
  }

  doCopy(id: number) {
    let [customer] = this.getCustomerById(id);
    customer = { ...customer, id: this.getNextId() };
    this.customers = [customer, ...this.customers];
  }

  resetForm() {
    this.customer = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      address: '',
      dob: new Date(''),
    };
  }
  addCustomer() {
    console.log('added customer');
    this.customer.id = this.getNextId();
    this.customers.push(this.customer);
    this.resetForm();
  }
  doEdit(id: number) {
    this.addButtonLabel = 'Update';
    let [customer] = this.getCustomerById(id);
    this.customer = { ...customer };
  }
  addUpdateCustomer() {
    if (this.customer.id == 0) {
      //add
      this.customer.id = this.getNextId();
      this.customers = [this.customer, ...this.customers];
      // this.customers.push(this.customer);
    } else {
      let [customer] = this.customers.filter(
        (cus) => cus.id == this.customer.id
      );
      customer.name = this.customer.name;
      customer.email = this.customer.email;
      customer.phone = this.customer.phone;
      customer.address = this.customer.address;
      customer.dob = this.customer.dob;
    }
    this.resetForm();
  }
}