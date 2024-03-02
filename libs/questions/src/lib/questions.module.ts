import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import {QuestionsRoutingModule} from "./questions-routing.module";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    QuestionsRoutingModule,
    RadioButtonModule,
    FormsModule
  ],
  exports: [
    QuestionsComponent
  ]
})
export class QuestionsModule { }
