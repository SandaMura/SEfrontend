import {Component, OnInit} from '@angular/core';

import {Rule} from 'libs/domain/src/lib/rule';

@Component({
  selector: 'lib-conclusions',
  templateUrl:'conclusions.component.html',
  styleUrls: ['conclusions.component.scss']
})
export class ConclusionsComponent implements OnInit{

  conclusionsList: Rule[]=[];

  ngOnInit(): void{
    this.getConclusions();
  }

  public getConclusions() {
    this.conclusionsList = JSON.parse(localStorage.getItem("conclusions")!);
  }
}


