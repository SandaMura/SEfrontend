import { Component } from '@angular/core';
import {ConclusionsService} from "./conclusions.service";

import {Rule} from 'libs/domain/src/lib/rule';

@Component({
  selector: 'lib-conclusions',
  templateUrl:'conclusions.component.html',
  styleUrls: ['conclusions.component.scss'
  ],
  providers: [ConclusionsService]
})
export class ConclusionsComponent {

  ConclusionsList: Rule[]=[];
  constructor(private ConclusionsService: ConclusionsService) {

  }

  ngOnInit(): void{
    this.getConclusions();
  }

  public getConclusions() {
    this.ConclusionsService.getConclusions().subscribe({
      next: respond => {
        this.ConclusionsList=respond;
      }

    })
  }
}


