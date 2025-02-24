import { Component,OnInit } from '@angular/core';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { MenuComponent } from '../menu/menu.component';
import { Customer } from "../models/customer";
import { CustomerService } from '../customerAPI.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-add',
  imports: [CustomerFormComponent,MenuComponent],
  templateUrl: './customer-add.component.html',
  styleUrl: './customer-add.component.css'
})
export class CustomerAddComponent implements  OnInit{
  constructor (private service:CustomerService, private router:Router, private activatedRoute:ActivatedRoute){

  }
  heading = "Add Customer";
  id:any = 0;
  loadCustomer (){
    if(this.id){
      this.heading = "Update Customer"
      this.service.getCustomerById(this.id).subscribe((customer)=>{
        this.customer = customer;
      })
    }else{
      this.heading = "Add Customer"
    }
  }
  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadCustomer();
  }

  customer:Customer = {
    id:0, name:'',email:'',phone:'',address:'',dob:new Date('12-4-1998')
  }

  doCancel(){
    this.router.navigate(['/customer']);
  }
  updateCustomer(customer:Customer){
    this.customer = customer;
    if(this.customer.id == 0){
      this.service.addCustomer(this.customer).subscribe((rec)=>{
        this.doCancel();
        console.log(rec);
        this.router.navigate(['/customer']);
      })
    }
    else{
      this.service.updateCustomer(this.customer).subscribe((rec)=>{
        console.log(rec)
        this.doCancel();
        // this.router.navigate(['/customer']);
      })
    }

	}
  
}
