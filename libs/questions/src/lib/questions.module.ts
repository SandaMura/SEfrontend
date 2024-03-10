import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import {QuestionsRoutingModule} from "./questions-routing.module";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {JsonPipe} from "@angular/common";



@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    QuestionsRoutingModule,
    RadioButtonModule,
    FormsModule,
    HttpClientModule,
    JsonPipe
  ],
  exports: [
    QuestionsComponent
  ]
})
export class QuestionsModule { }
