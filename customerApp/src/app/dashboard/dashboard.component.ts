import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CustomerService } from '../CustomerDB.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private customerService:CustomerService,private productService:ProductService){
    this.count = customerService.getCustomers().length;
    this.counting = productService.getProducts().length;
  }
  color = "green"
  count:string|number = ""
  counting:string|number = ""
   
  }