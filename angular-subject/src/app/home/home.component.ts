import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public messageService:MessageService) { }

  ngOnInit() {
  }
   setMessage(event:any) {
    console.log(event.value);
    this.messageService.setMessage(event.value);
  }
}