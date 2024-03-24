import {Injectable} from '@angular/core';
import {Answer} from "@domain/question";
import {Rule} from "@domain/rule";
import {HttpClient} from "@angular/common/http";
import {Database} from "@domain/database";
import {map, Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {IdType} from "@domain/id-type";

@Injectable({
  providedIn: 'root'
})
export class InferenceMachineService {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  public processAnswers(finalAnswers: Answer[]) {
    let finalDestinations = this.initializeDestinationResult();
    let allDestination: Rule[] = [];
    this.getAllDestinations().subscribe({
      next: res => {
        allDestination = res;
        console.log(res);
        finalDestinations.push(...this.filterDestinationsBasedOnAnswers(allDestination, finalAnswers));
        if (finalDestinations.length != 0) {
          let scopes: Array<string> = [];
          finalAnswers.forEach(a => {
            a.response instanceof Array<string> ? scopes = a.response : null;
          });
          const finalDestinationsWithScope = this.filterDestinationBasedOnScope(finalDestinations, scopes);
          finalDestinations = [];
          finalDestinations = [...finalDestinationsWithScope];
        }
        if(localStorage.getItem("conclusions")) {
          localStorage.removeItem("conclusions");
        }
        localStorage.setItem("conclusions", JSON.stringify(finalDestinations));
        this.router.navigate(['/conclusions'], {relativeTo: this.route});
      }
    });
  }

  private initializeDestinationResult() {
    const result: Rule[] = []
    return result;
  }

  private getAllDestinations(): Observable<Rule[]> {
    return this.http.get<Database>('assets/database.json').pipe(
      map(res => res.answers),
    );
  }

  private filterDestinationsBasedOnAnswers(destinations: Rule[], answers: Answer[]) {
    return destinations.filter(d => this.filterRuleExceptScope(d, answers));
  }

  private filterRuleExceptScope(destination: Rule, answers: Answer[]): boolean {
    let ok = true;
    answers.forEach(a => {
      switch (a.id) {
        case IdType.CATEGORY:{
          if (destination[IdType.CATEGORY] != a.response) {
            ok = false;
          }
          break;
        }
        case IdType.DURATION: {
          if (destination[IdType.DURATION] != a.response) {
            ok = false;
          }
          break;
        }
        case IdType.BUDGET: {
          if(a.response === 50 && destination[IdType.BUDGET] > a.response) {
            ok = false;
          } else if(a.response === 150 && destination[IdType.BUDGET] > a.response){
            ok = false;
          } else if(a.response === 400 && destination[IdType.BUDGET] > a.response){
            ok = false;
          // } else if(a.response === 500 && destination[IdType.BUDGET] > a.response){
          //   ok = false;
          }
          break;
        }
        case IdType.DISTANCE: {
          if(a.response === 500 && destination[IdType.DISTANCE] > a.response) {
            ok = false;
          } else if(a.response === 1000 && destination[IdType.DISTANCE] > a.response){
            ok = false;
          } else if(a.response === 2000 && destination[IdType.DISTANCE] > a.response){
            ok = false;
          // } else if(a.response === 3000 && !(destination[IdType.DISTANCE] > 2000)){
          //   ok = false;
          }
          break;
        }
      }
    });
    return ok;
  }

  private filterDestinationBasedOnScope(destinations: Rule[], scopes: Array<string>) {
    return destinations.filter(d => this.filterRuleForScopes(d, scopes))
  }

  private filterRuleForScopes(destination: Rule, scopes: Array<string>) {
    let ok = false;
    scopes.forEach(s => {
      destination.scope.forEach(ds => {
        if(s === ds) ok = true;
      })
    });
    return ok;
  }

}
