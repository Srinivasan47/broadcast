import { Component, OnInit } from '@angular/core';
import {Shared} from './../../shared/shared';
import { Broadcaster } from './../../shared/broadcast';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends Shared {

  constructor(public broadcast:Broadcaster) { super(broadcast); }

  ngOnInit() {
  }
	onUpdate(event) {
    console.log('List Component'+event.value);
  }
}
