import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  imports: [MenuComponent,NgFor,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
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
}
