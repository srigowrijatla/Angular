import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customer', component: CustomerComponent },
    { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
];
