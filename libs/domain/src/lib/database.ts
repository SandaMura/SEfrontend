import {Rule} from "./rule";

export interface Database {
  meta: {
    description: string;
    types: {[p: string]: string[] | number[]};
    answers: Rule[];
  }
}
