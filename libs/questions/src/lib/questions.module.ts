import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import {QuestionsRoutingModule} from "./questions-routing.module";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule, JsonPipe} from "@angular/common";
import {InferenceMachineModule} from "@inference-machine/inference-machine.module";

@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    InferenceMachineModule,
    QuestionsRoutingModule,
    RadioButtonModule,
    FormsModule,
    HttpClientModule,
    JsonPipe,
    CommonModule
  ],
  exports: [
    QuestionsComponent
  ]
})
export class QuestionsModule { }
