import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-dashboard',
  imports: [MenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private customerService:CustomerService){
    this.count = customerService.getCustomers().length;
  }
  color = "green"
  count:string|number = ""
}
