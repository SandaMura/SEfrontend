import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Database} from '@domain/database';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) {

  }

  public getQuestions(): Observable<{ [p: string]: string[] | number[] }> {
    return this.httpClient.get<Database>('assets/database.json').pipe(
      map(res => res.meta.types)
    );
  }
}
