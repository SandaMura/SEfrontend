import {IdType} from "./id-type";

export interface Answer {
  id: IdType;
  response: string | number | Array<string>;
}

export interface Question {
  id: IdType;
  questionText: string;
  answers: Array<Answer>;
}
