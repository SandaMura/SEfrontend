import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {QuestionsComponent} from "./questions.component";

const ROUTES = [
  {
    path: '',
    component: QuestionsComponent
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(ROUTES),
  ],
  exports:[
    RouterModule
  ]
})
export class QuestionsRoutingModule{

}
