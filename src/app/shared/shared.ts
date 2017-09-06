import { EventEmitter, Output, OnDestroy } from '@angular/core';
import { Broadcaster } from './broadcast';

export class Shared {
  
  @Output() cityUpdate = new EventEmitter<any>();
  city:any;
  constructor(private broadcaster: Broadcaster) {
    this.city ='';
    
    this.broadcaster.on('globalCountUpdate')
      .subscribe(message => {
      	console.log(message);
        this.city=message;
        this.cityUpdate.emit({value: this.city});
    });
  }

  onUpdate(event) {
    this.city = event.value;
  }
  
}