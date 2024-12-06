import { Component, Input } from "@angular/core";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { CommonModule } from "@angular/common";
import { LocalStorageService } from "../../../../services/local-storage.service";
import { Todo } from "../../../../shared/interfaces/todo";

@Component({
  selector: "app-todolist",
  standalone: true,
  imports: [TodoItemComponent, CommonModule],
  templateUrl: "./todolist.component.html",
  styleUrl: "./todolist.component.scss",
})
export class TodolistComponent {
  @Input() public todos: Todo[] = [];

  constructor(private localStorage: LocalStorageService) {
    this.todos = localStorage.getLocalStorageTodo();
  }

  public onCompleteTodo(index: number, isCompleted: boolean): void {
    this.todos[index].isDone = isCompleted;
    this.localStorage.setLocalStorageTodo(this.todos);
  }

  public onUpdateText(index: number, updateTodo: string): void {
    // const arr = [{id: 0, name: 'Alex'}, {id:1, name: 'Oleg'}]
    // const arr2 = ['vasya', 'Anna']
    // arr2[1] = 'Lesia'
    // arr[1].name = 'Ivan'

    this.todos[index].text = updateTodo;
    this.localStorage.setLocalStorageTodo(this.todos);
  }

  public onRemoveBlock(index: number): void {
    // this.todos.splice(index, 1);
    // this.todos = this.todos.filter((el, idx) => index !== idx);
    this.todos = this.todos.toSpliced(index, 1);
    this.localStorage.setLocalStorageTodo(this.todos);
  }
}
