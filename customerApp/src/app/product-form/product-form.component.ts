import { Component, OnInit,Input,Output, EventEmitter,SimpleChanges,OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-form',
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent implements OnInit,OnChanges {
  constructor(private router:Router) { }
    addButtonLabel = "Add";
    @Input() selectId: number = 0;
    @Input() product:Product =  {id:0, name:'',type:'',country:'',to:'',from:''}
    @Output() doUpdate = new EventEmitter<Product>();
    @Output() doCancel = new EventEmitter();
  
    cancel(){
      this.router.navigate(['/customer']);
      // this.product =  {id:0, name:'',type:'',country:'',to:'',from:''}
      // this.addButtonLabel = "Add";
      this.doCancel.emit();
    }
    addUpdateProduct(){
      let customer = {...this.product};
      this.doUpdate.emit(customer);
  
    }
    ngOnChanges(changes: SimpleChanges) {
      if(this.product.id !=0){
        this.addButtonLabel = "Update";
      }else{
        this.addButtonLabel = "Add";
      }
    }
    ngOnInit() {
    }

}
