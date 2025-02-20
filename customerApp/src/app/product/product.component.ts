import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductFormComponent } from '../product-form/product-form.component';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-product',
  providers: [provideNativeDateAdapter()],
  imports: [MenuComponent,NgFor,FormsModule,ProductFormComponent,MatFormFieldModule,MatInputModule,MatButtonModule,MatCheckboxModule,MatTableModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  selectProductId = 0;
  displayedColumns: string[] = [ 'id','name', 'type', 'country', 'to','from', 'edit','copy'];
  products:Product[] = [
    {
      id: 1,
      name: 'Television',
      type: 'electronics',
      country: 'IN',
      to: 'vizag',
      from:'bangalore'
    },
    {
      id: 2,
      name: 'Laptop',
      type: 'electronics',
      country: 'IN',
      to: 'hyd',
      from:'bangalore'
    },
    {
      id: 3,
      name: 'camera',
      type: 'electronics',
      country: 'IN',
      to: 'chennai',
      from:'vijaywada'
    },
  ];
  product:Product = {id:0, name:'',type:'',country:'',to:'',from:''}
  addButtonLabel = 'Add';
  getproductById(id: number) {
    return this.products.filter((cus:Product) => cus.id == id);
  }
  getNextId() {
    if (this.products.length == 0) {
      return 1;
    }
    const numArr = this.products.map(({ id }) => id);
    return Math.max(...numArr) + 1;
  }

  doCopy(id: number) {
    let [customer] = this.getproductById(id);
    customer = { ...customer, id: this.getNextId() };
    this.products.push(customer);
  }
  resetForm() {
    this.product = {id:0, name:'',type:'',country:'',to:'',from:''}
  }
  addProduct() {
    console.log('added product');
    this.product.id = this.getNextId();
    this.products.push(this.product);
    this.resetForm();
  }
  doEdit(id: number) {
    this.addButtonLabel = 'Update';
    let [product] = this.getproductById(id);
    this.product = { ...product };
  }
  addUpdateProduct() {
    if (this.product.id == 0) {
      //add
      this.product.id = this.getNextId();
      this.products.push(this.product);
    } else {
      let [product] = this.products.filter(
        (cus) => cus.id == this.product.id
      );
      product.name = this.product.name;
      product.type = this.product.type;
      product.country = this.product.country;
      product.to = this.product.to;
      product.from = this.product.from;

    }
    this.resetForm();
  }
  updateProduct(product:Product){
      this.product = product;
      this.addUpdateProduct();
      console.log("customer id @parent "+product.id);
      console.log("new customer name is "+product.name);
    }
}
