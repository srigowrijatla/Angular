import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { ProductAddComponent } from './product-add/product-add.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'customer/add', component: CustomerAddComponent },
    { path: 'customer/edit/:id', component: CustomerAddComponent },
    { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: ProductAddComponent },
    { path: 'product/edit/:id', component: ProductAddComponent },
];
