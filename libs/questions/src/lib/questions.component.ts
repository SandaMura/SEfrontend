import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "./questions.service";
import { Question } from 'libs/domain/src/lib/question';

@Component({
  selector: 'lib-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.scss'],
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit{

  QuestionsList: Question[]=[];

  constructor(private QuestionsService: QuestionsService) {

  }

  ngOnInit(): void{
    this.getQuestions();
  }

  public getQuestions() {
    this.QuestionsService.getQuestions().subscribe({
      next: respond => {
            this.QuestionsList=respond;
      }

    })
  }

}
