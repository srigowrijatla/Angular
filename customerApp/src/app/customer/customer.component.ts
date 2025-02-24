// With Proper TypeScript
import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Router } from '@angular/router';
//import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/customer';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { CustomerService } from '../customerAPI.service';

@Component({
  selector: 'app-customer',
  providers: [provideNativeDateAdapter()],
  imports: [
    MenuComponent,
    FormsModule,
    CustomerFormComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    DatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  ngOnInit() {}
  loadRecords() {
    this.customerService.getCustomers().subscribe((records) => {
      this.customers = records;
      this.cdRef.detectChanges();
    });
  }
  constructor(
    private router: Router,
    private customerService: CustomerService,
    private cdRef: ChangeDetectorRef,
  ) {
    this.loadRecords();
  }
  customers: Customer[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phone',
    'address',
    'DoB',
    'edit',
    'copy',
    'delete',
  ];
  selectCustomerId = 0;

  customer: Customer = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: new Date('12-4-1998'),
  };
  addButtonLabel: string = 'Add';
  // customers:Customer[] = [
  //   {id:1,name:'Vivek',email:'vivek@abc.com',phone:'2356422433', address:'India', dob:new Date('12-4-1998')},
  //   {id:2,name:'Pratistha',email:'pari@abc.com',phone:'28896422433', address:'India', dob:new Date('12-4-1998')},
  //   {id:3,name:'Samridh',email:'samar@abc.com',phone:'288922433', address:'India', dob:new Date('12-4-1998')},
  //   {id:4,name:'Vishal',email:'vishal@abc.com',phone:'28899822433', address:'India', dob:new Date('12-4-1998')}
  // ];
  // in customer.component.ts

  gotoAddCustomer(){
    this.router.navigate(['/customer/add']);
  }
  
  doCancel(){
    // this.router.navigate(['/customer']);
    // this.customer =  {
    //   id:0, name:'',email:'',phone:'',address:'',dob:null
    // }
    // this.addButtonLabel = "Add";
  }
  doDelete(id: number) {
    let c = new Customer();
    c.id = id;
    this.customerService.deleteCustomer(c).subscribe(() => {
      this.loadRecords();
    });
    // this.customerService.deleteCustomer(c);
    // this.loadRecords();
    // this.customers=this.customerService.getCustomers();
    // console.log("id ::"+id);
    // const callback = (cus:Customer)=>{
    //   return (cus.id!=id)
    // }
    // this.customers = this.customers.filter(callback);
  }
  // in customer.component.html
  //<button (click)="doDelete(customer.id)">Delete</button>&nbsp;

  getCustomerById = (id: number) => {
    return this.customers.filter((cus: Customer) => cus.id == id);
  };

  //  getNextId(){
  //   if(this.customers.length == 0){
  //     return 1;
  //   }
  //     const numArr = this.customers.map(({id})=>id);
  //     return  Math.max(...numArr) + 1;
  //   }

  doCopy(id: number) {
    let [customer] = this.getCustomerById(id);
    this.customerService.addCustomer(customer).subscribe((rec) => {
      this.loadRecords();
    });
    // this.customerService.copyCustomer(customer);
    // this.loadRecords();
    // this.customers = this.customerService.getCustomers();
  }
  resetForm = () => {
    this.addButtonLabel = 'Add';
    this.customer = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      address: '',
      dob: null,
    };
  };
  doEdit(id:any){
    this.router.navigate([`/customer/edit/${id}`]);
    // this.addButtonLabel = "Update";
    // let [customer] = this.getCustomerById(id);
    // this.customer = {...customer};
  }
  addUpdateCustomer() {
    if (this.customer.id == 0) {
      //add
      this.customerService.addCustomer(this.customer).subscribe((rec) => {
        this.loadRecords();
      });
      // this.customerService.addCustomer(this.customer);
      // this.loadRecords();
      // this.customers=this.customerService.getCustomers();
      // this.customer.id =this.getNextId();
      // this.customers = [this.customer, ...this.customers]
      //this.customers.push(this.customer);
    } else {
      this.customerService.updateCustomer(this.customer).subscribe((rec) => {
        this.loadRecords();
        this.doCancel();
      });
      // this.customerService.updateCustomer(this.customer);
      // let [customer] = this.customers.filter((cus:Customer)=>(cus.id==this.customer.id));
      // customer.name = this.customer.name;
      // customer.email = this.customer.email;
      // customer.phone = this.customer.phone;
      // customer.address = this.customer.address;
    }
    // this.loadRecords();
    // this.customers=this.customerService.getCustomers();
    this.resetForm();
  }
  // updateCustomer(customer:Customer){
  // 	console.log("customer id @parent "+customer.id);
  // 	console.log("new customer name is "+customer.name);
  // 	//this.router.navigate(['/add-customer']);
  // }
  updateCustomer(customer: Customer) {
    this.customer = customer;
    this.addUpdateCustomer();

    // console.log("customer id @parent "+customer.id);
    // console.log("new customer name is "+customer.name);
  }
}
