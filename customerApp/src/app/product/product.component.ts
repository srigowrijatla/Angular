import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductFormComponent } from '../product-form/product-form.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ProductService } from '../productAPI.service';

@Component({
  selector: 'app-product',
  providers: [provideNativeDateAdapter()],
  imports: [
    MenuComponent,
    NgFor,
    FormsModule,
    ProductFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  loadRecords() {
    this.productService.getProducts().subscribe((records) => {
      this.products = records;
      this.cdRef.detectChanges();
    });
  }
  constructor(
    private productService: ProductService,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.loadRecords();
  }
  selectProductId = 0;
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'country',
    'to',
    'from',
    'edit',
    'copy',
    'delete',
  ];
  products: Product[] = [];
  product: Product = {
    id: 0,
    name: '',
    type: '',
    country: '',
    to: '',
    from: '',
  };
  addButtonLabel = 'Add';
  getproductById(id: number) {
    return this.products.filter((cus: Product) => cus.id == id);
  }

  doCopy(id: number) {
    let [product] = this.getproductById(id);
    this.productService.addProduct(product).subscribe((rec) => {
      this.loadRecords();
    });
  }
  resetForm() {
    this.product = { id: 0, name: '', type: '', country: '', to: '', from: '' };
  }

  doEdit(id: number) {
    this.addButtonLabel = 'Update';
    let [product] = this.getproductById(id);
    this.product = { ...product };
  }
  addUpdateProduct() {
    if (this.product.id == 0) {
      //add
      this.productService.addProduct(this.product).subscribe((rec) => {
        this.loadRecords();
      });
    } else {
      this.productService.updateProduct(this.product).subscribe((rec) => {
        this.loadRecords();
      });
    }

    this.resetForm();
  }
  updateProduct(product: Product) {
    this.product = product;
    this.addUpdateProduct();
  }
  doDelete(id: number) {
    let d = new Product();
    d.id = id;
    this.productService.deleteProduct(d).subscribe((rec) => {
      console.log('message');
      this.loadRecords();
    });
  }

  getProductById = (id: number) => {
    return this.products.filter((cus: Product) => cus.id == id);
  };
}