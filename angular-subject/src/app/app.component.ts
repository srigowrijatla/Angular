import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-subject';
  message: string="";
  subscription: Subscription = new Subscription();  
  constructor(public messageService: MessageService) { }
  ngOnInit() {
    this.subscription = this.messageService.message.subscribe(
      (message) => {
        this.message = message;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}