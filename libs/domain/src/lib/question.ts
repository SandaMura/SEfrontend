export class Answer {
  response: string | number | undefined;
}

export class Question {
  id: string | undefined;
  question: string | undefined;
  answers: Array<Answer> | undefined;

   // category: string | undefined;
   // budget: number | undefined;
   // distance: number | undefined;
   // duration: string | undefined;
   // scope: Array<string> | undefined;
}
