import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Broadcaster } from './../shared/broadcast';
import { SampleRoutingModule } from './sample-routing.module';
import { SampleComponent } from './sample.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SampleRoutingModule
  ],
  providers: [Broadcaster],
  declarations: [SampleComponent, SearchComponent, DetailComponent, ListComponent, ItemComponent]
})
export class SampleModule { }
