// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product-add',
//   imports: [],
//   templateUrl: './product-add.component.html',
//   styleUrl: './product-add.component.css'
// })
// export class ProductAddComponent {

// }


import { Component,OnInit } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { MenuComponent } from '../menu/menu.component';
import { Product } from '../models/product';
import { ProductService } from '../productAPI.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  imports: [ProductFormComponent,MenuComponent],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements  OnInit{
  constructor (private service:ProductService, private router:Router, private activatedRoute:ActivatedRoute){

  }
  heading = "Add Product";
  id:any = 0;
  loadProduct (){
    if(this.id){
      this.heading = "Update Product"
      this.service.getProductById(this.id).subscribe((product)=>{
        this.product = product;
      })
    }else{
      this.heading = "Add Customer"
    }
  }
  ngOnInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadProduct();
  }

  product:Product = { id: 0, name: '', type: '', country: '', to: '', from: '' };
   doCancel(){
    this.router.navigate(['/product']);
   }

  updateProduct(product:Product){
    this.product = product;
    if(this.product.id == 0){
      this.service.addProduct(this.product).subscribe((rec)=>{
        this.doCancel();
        console.log(rec);
        // this.router.navigate(['/product']);
      })
    }
    else{
      this.service.updateProduct(this.product).subscribe((rec)=>{
        console.log(rec)
       this.doCancel()
        // this.router.navigate(['/product']);
      })
    }

	}
}
