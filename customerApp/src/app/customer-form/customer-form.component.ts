import { Component, OnInit,Input,Output, EventEmitter,SimpleChanges,OnChanges } from '@angular/core';
import { Customer } from '../models/customer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  imports: [FormsModule],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.css'
})
export class CustomerFormComponent implements OnInit,OnChanges {

  constructor() { }
  addButtonLabel = "Add";
  @Input() selectId: number = 0;
  @Input() customer:Customer =  {
    id:0, name:'',email:'',phone:'',address:'',dob:new Date('12-4-1998')
  }
  @Output() doUpdate = new EventEmitter<Customer>();

  cancel(){
    this.customer =  {
      id:0, name:'',email:'',phone:'',address:'',dob:null
    }
    this.addButtonLabel = "Add";
  }
  addUpdateCustomer(){
    let customer = {...this.customer};
    this.doUpdate.emit(customer);

  }
  ngOnChanges(changes: SimpleChanges) {
    if(this.customer.id !=0){
      this.addButtonLabel = "Update";
    }else{
      this.addButtonLabel = "Add";
    }
  }
  ngOnInit() {
  }
}