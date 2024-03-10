import { Component } from '@angular/core';
import {QuestionsService} from "./questions.service";

@Component({
  selector: 'lib-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.scss']
})
export class QuestionsComponent {

  constructor(private QuestionsService: QuestionsService){

  }

  public getQuestions(){
    this.QuestionsService.getQuestions().subscribe({
      next: respond=>{

      }

    })
  }

}
