import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { Todo } from "../../models/todo";

@Component({
  selector: "app-todo-input",
  templateUrl: "./todo-input.component.html",
  styleUrls: ["./todo-input.component.css"],
})
export class TodoInputComponent implements OnInit {
  model: Todo = new Todo();

  private todoText: string;
  private timeToComplete: string;
  private description: string;
  private itemsNeeded: string;

  constructor(private todoService: TodoService) {
    this.todoText = "";
    this.timeToComplete = "";
    this.description = "";
    this.itemsNeeded = "";
  }

  ngOnInit() {}

  private onSubmit(): void {
    this.todoService.addTodo(this.model);
    console.log("Submit Successful: ", this.model);
    this.model = new Todo();
  }
}
