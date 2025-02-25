import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  public message = new Subject<string>();
  setMessage(value: string) {
    this.message.next(value); //it is publishing this value to all the subscribers that have already subscribed to this message
  }
}