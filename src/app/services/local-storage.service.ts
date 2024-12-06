import { Injectable } from "@angular/core";
import { Todo } from "../shared/interfaces/todo";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  private readonly STORAGE_KEY = "todoList";

  public getLocalStorageTodo(): Todo[] {
    const todosFromStorage = localStorage.getItem(this.STORAGE_KEY) ?? "[]";
    return JSON.parse(todosFromStorage);
  }

  public setLocalStorageTodo(todos: Todo[]): void {
    const todosStringified = JSON.stringify(todos);
    localStorage.setItem(this.STORAGE_KEY, todosStringified);
  }
}
