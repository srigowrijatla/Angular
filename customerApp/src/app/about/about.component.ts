import { Component,OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { increment, decrement, reset } from '../actions/counter.actions';

@Component({
  selector: 'app-about',
  imports: [MenuComponent,AsyncPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  // constructor(public messageService:MessageService) { }
  count$: Observable<number>;
 
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
  ngOnInit() {
  }
  //  setMessage(event:any) {
  //   console.log(event.value);
  //   this.messageService.setMessage(event.value);
  // }
  title :string = 'helloApp';
  name = 'Gowri'; 

}
