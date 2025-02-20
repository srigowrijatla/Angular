import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from './about/about.component'
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-main-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:any = 'Customer App';
  
  doLogin= () =>{
    this.title = 90;
    alert("Hello login");
  }
}
