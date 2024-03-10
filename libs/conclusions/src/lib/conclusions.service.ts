import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Rule} from 'libs/domain/src/lib/rule';

@Injectable({
  providedIn: 'root'
})

export class ConclusionsService {

  constructor(private httpClient: HttpClient) {

  }

  public getConclusions(): Observable<Rule[]> {
    return this.httpClient.get<Rule[]>('assets/conclusion.json');
  }
}
