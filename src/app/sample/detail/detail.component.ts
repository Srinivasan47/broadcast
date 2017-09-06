import { Component, OnInit } from '@angular/core';
import {Shared} from './../../shared/shared';
import { Broadcaster } from './../../shared/broadcast';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent extends Shared {

 constructor(public broadcast:Broadcaster) { super(broadcast); }

  ngOnInit() {
  }
	onUpdate(event) {
    console.log('Details Component'+event.value);
  }
}
