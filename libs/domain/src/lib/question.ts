import {IdType} from "./id-type";

export class Answer {
  id: IdType | undefined;
  response: string | number | undefined;
}

export class Question {
  id: IdType | undefined;
  questionText: string | undefined;
  answers: Array<Answer> | undefined;
}
