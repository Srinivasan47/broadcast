import { Component, OnInit } from '@angular/core';
import {Shared} from './../../shared/shared';
import { Broadcaster } from './../../shared/broadcast';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent extends Shared {

 constructor(public broadcast:Broadcaster) { super(broadcast); }

  ngOnInit() {
  }
onUpdate(event) {
    console.log('Item Component'+event.value);
  }
}
