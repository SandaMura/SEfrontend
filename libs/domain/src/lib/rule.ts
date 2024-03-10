export interface Rule {
  destinationName: string;
  description: string;
  imageUrl: string;
  category: string;
  budget: number;
  distance: number;
  duration: string;
  scope: Array<string>;
}
