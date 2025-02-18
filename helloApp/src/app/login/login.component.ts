import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  user = {
  	username:"",
  	password:"",
  }
  
  ngOnInit() {
  }
  doLogin(){
  	console.log('do Login tested..'+this.user.username);
    this.router.navigate(['/customer']);
  }
}
