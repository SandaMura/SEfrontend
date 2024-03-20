import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {MenuComponent} from "./menu.component";

const ROUTES = [
  {
    path: '',
    component: MenuComponent
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
export class MenuRoutingModule{

}
