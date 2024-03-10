import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConclusionsComponent} from "./conclusions.component";
import {RouterModule} from "@angular/router";
import {ConclusionsModule} from "./conclusions.module";


const ROUTES = [
  {
    path: '',
    component: ConclusionsComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule,
  ]

})
export class ConclusionsRoutingModule { }
