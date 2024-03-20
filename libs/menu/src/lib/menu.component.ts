import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'lib-menu',
  templateUrl: "menu.component.html",
  styleUrls: [ 'menu.component.scss'
  ]
})
export class MenuComponent {


  constructor(private router:Router){}
  public goToQuestions(){

      this.router.navigate([
        "/questions"
      ])


  }

  visible: boolean | undefined;

  showDialog() {
    this.visible = true;
  }

}

