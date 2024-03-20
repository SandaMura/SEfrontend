import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import {MenuRoutingModule} from "./menu-routing.module";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {RouterModule} from "@angular/router";
import { DialogModule } from "primeng/dialog";


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    MenuRoutingModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    DialogModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
