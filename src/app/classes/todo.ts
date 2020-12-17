export class Todo {
  id: number;
  text: string;
  timeToComplete: string;
  description: string;
  itemsNeeded: string;

  constructor(
    id: number,
    text: string,
    timeToComplete: string,
    description: string,
    itemsNeeded: string
  ) {
    this.id = id;
    this.text = text;
    this.timeToComplete = timeToComplete;
    this.description = description;
    this.itemsNeeded = itemsNeeded;
  }
}
