import { NgModule } from '@angular/core';
import { ConclusionsComponent } from './conclusions.component';
import {ConclusionsRoutingModule} from "./conclusions-routing.module";



@NgModule({
  declarations: [
    ConclusionsComponent
  ],
  imports: [
    ConclusionsRoutingModule
  ],
  exports: [
    ConclusionsComponent
  ]
})
export class ConclusionsModule { }
