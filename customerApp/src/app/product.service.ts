import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  products: Product[] = [
    {
      id: 1,
      name: 'Television',
      type: 'electronics',
      country: 'IN',
      to: 'vizag',
      from: 'bangalore',
    },
    {
      id: 2,
      name: 'Laptop',
      type: 'electronics',
      country: 'IN',
      to: 'hyd',
      from: 'bangalore',
    },
    {
      id: 3,
      name: 'camera',
      type: 'electronics',
      country: 'IN',
      to: 'chennai',
      from: 'vijaywada',
    },
  ];
  getNextId = () => {
    if (this.products.length == 0) {
      return 1;
    }
    const numArr = this.products.map(({ id }) => id);
    return Math.max(...numArr) + 1;
  };

  getProducts() {
    return this.products;
  }
  getProductById(id: number) {
    const list = this.products.filter((rec) => rec.id == id);
    if (list.length) {
      return list[0];
    } else {
      return null;
    }
  }
  addProduct(product: Product) {
    product.id = this.getNextId();
    this.products = [...this.products, product];
  }
  copyProduct(product: Product) {
    product.id = this.getNextId();
    this.products = [product, ...this.products];
  }
  updateProduct(product: Product) {
    this.products = this.products.map((rec) => {
      if (rec.id === product.id) {
        return product;
      }
      return rec;
    });
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter((rec) => rec.id != product.id);
  }
}
