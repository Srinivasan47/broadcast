import { Component, OnInit } from '@angular/core';
import { Broadcaster } from './../../shared/broadcast';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchCity:string;
  constructor(public broadcast:Broadcaster) { }

  ngOnInit() {
  }

  getWeather(){
  	if(this.searchCity&&this.searchCity!=''){
  		this.broadcast.broadcast('globalCountUpdate', this.searchCity);
  	}
  }
}
