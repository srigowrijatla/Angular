import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CustomerService } from '../CustomerDB.service';
import { ProductService } from '../product.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent,AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // constructor(private customerService:CustomerService,private productService:ProductService){
  //   this.count = customerService.getCustomers().length;
  //   this.counting = productService.getProducts().length;
  // }
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
  color = "green"
  count:string|number = ""
  counting:string|number = ""
   
  }