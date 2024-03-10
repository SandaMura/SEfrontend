import { NgModule } from '@angular/core';
import { ConclusionsComponent } from './conclusions.component';
import {ConclusionsRoutingModule} from "./conclusions-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, JsonPipe} from "@angular/common";


@NgModule({
  declarations: [
    ConclusionsComponent
  ],
  imports: [
    ConclusionsRoutingModule,
    JsonPipe,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    ConclusionsComponent
  ]
})
export class ConclusionsModule { }
