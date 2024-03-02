import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import {QuestionsRoutingModule} from "./questions-routing.module";



@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    QuestionsRoutingModule
  ],
  exports: [
    QuestionsComponent
  ]
})
export class QuestionsModule { }
