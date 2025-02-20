import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports:[FormsModule]
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
    console.log(" username is "+this.user.username);
    console.log(" username is "+this.user.password);
    this.router.navigate(['/dashboard']);
  	//alert('do Login tested..');
  }
}
