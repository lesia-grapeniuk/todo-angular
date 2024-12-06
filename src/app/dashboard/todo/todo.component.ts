import { Component } from '@angular/core';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { LocalStorageService } from '../../services/local-storage.service';
import { Todo } from '../../shared/interfaces/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AddtodoComponent, TodolistComponent, CommonModule, TitleComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  public todos: Todo[] = [];

  constructor(private localStorage: LocalStorageService) {
    this.todos = localStorage.getLocalStorageTodo();
  }

  public addTodoItem(text: string): void {
    if (this.todos.length > 5) {
      throw new Error('Your todos list contain 5 element\'s')
    }
    const newTodo: Todo = {
      text: text,
      isDone: false,
    };
    this.todos = [newTodo, ...this.todos];
    this.localStorage.setLocalStorageTodo(this.todos);
  }
}
