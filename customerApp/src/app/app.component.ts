import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: string = '';
  subscription: Subscription = new Subscription();
  constructor(public messageService: MessageService) {}
  title: any = 'Customer App';
  ngOnInit() {
    this.subscription = this.messageService.message.subscribe((message) => {
      this.message = message;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  doLogin = () => {
    this.title = 90;
    alert('Hello login');
  };
}
