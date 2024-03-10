import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Question } from 'libs/domain/src/lib/question';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) {

  }

  public getQuestions() : Observable<Question[]>{
    return this.httpClient.get<Question[]>('assets/questions.json');
  }
}
