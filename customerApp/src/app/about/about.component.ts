import { Component,OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-about',
  imports: [MenuComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  constructor(public messageService:MessageService) { }
  ngOnInit() {
  }
   setMessage(event:any) {
    console.log(event.value);
    this.messageService.setMessage(event.value);
  }
  title :string = 'helloApp';
  name = 'Gowri'; 

}
