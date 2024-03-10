import { NgModule } from '@angular/core';
import { ConclusionsComponent } from './conclusions.component';
import {ConclusionsRoutingModule} from "./conclusions-routing.module";
import {JsonPipe} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ConclusionsComponent
  ],
  imports: [
    ConclusionsRoutingModule,
    JsonPipe,
    HttpClientModule,
  ],
  exports: [
    ConclusionsComponent
  ]
})
export class ConclusionsModule { }
