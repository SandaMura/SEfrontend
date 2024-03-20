import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "./questions.service";
import {Answer, Question} from "@domain/question";
import {IdType} from "@domain/id-type";
import {InferenceMachineService} from "@inference-machine/inference-machine.service";

@Component({
  selector: 'lib-questions',
  templateUrl: 'questions.component.html',
  styleUrls: ['questions.component.scss'],
  providers: [QuestionsService, InferenceMachineService]
})
export class QuestionsComponent implements OnInit {

  questionsList: Question[] = [];
  answers: {[p: string]: Answer} = {
    'scope': {id: IdType.SCOPE, response: []},
  };
  finalAnswers: Answer[] = [];

  constructor(private questionsService: QuestionsService, private inferenceMachine: InferenceMachineService) {

  }

  ngOnInit(): void {
    this.getQuestions();
    console.log(this.questionsList);
  }

  private getQuestions() {
    this.questionsService.getQuestions().subscribe({
      next: response => {
        Object.entries(response).forEach(res => {
          const answers: Answer[] = [];
          const idType = this.getIdTypeForEntryResponse(res[0]);
          res[1].forEach(r => {
            answers.push({id: idType, response: r})
          })

          this.questionsList.push({
            id: idType,
            questionText: this.getQuestionTextForIdType(idType),
            answers: answers
          })
        })
      }
    });
  }

  private getIdTypeForEntryResponse(res: string): IdType {
    switch (res) {
      case "category":
        return IdType.CATEGORY;
      case "budget":
        return IdType.BUDGET;
      case "distance":
        return IdType.DISTANCE;
      case "duration":
        return IdType.DURATION;
      case "scope":
        return IdType.SCOPE;
      default: {
        throw new Error("not one of the excepted strings!");
      }
    }
  }

  private getQuestionTextForIdType(res: IdType): string {
    switch (res) {
      case IdType.CATEGORY:
        return "#1: Which type of vacation would you prefer to go?";
      case IdType.BUDGET:
        return "#2: What is your approximate budget for this trip?";
      case IdType.DISTANCE:
        return "#3: How far would you like to go? (approximate a value)";
      case IdType.DURATION:
        return "#4: How much do you plan to be in this destination?";
      case IdType.SCOPE:
        return "#5: What other thing would you like to do in this trip?";
      default: {
        throw new Error("not one of the excepted strings!");
      }
    }
  }

  onChange(answer: string, checked: boolean) {
    console.log(this.answers['scope'])
    const index = (<string[]>this.answers['scope'].response).indexOf(answer);
    if(checked && index < 0) {
      this.answers['scope'].response = [...<string[]>this.answers['scope'].response, answer];
    } else if(!checked && index >= 0) {
      (<string[]>this.answers['scope'].response).splice(index, 1);
    }
  }

  public submit() {
      this.finalAnswers = Object.values(this.answers);
      console.log(this.answers, this.finalAnswers);
      this.inferenceMachine.processAnswers(this.finalAnswers);
    }

}
