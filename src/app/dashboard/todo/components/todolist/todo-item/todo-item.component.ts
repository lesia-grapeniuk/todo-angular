import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../../../../shared/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgIf, NgClass, FormsModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
  // public isChecked: boolean = false;
  public isEditing: boolean = false;

  @Input() public todo!: Todo;
  @Output() public checkedText: EventEmitter<boolean> = new EventEmitter();
  @Output() public removeBlock: EventEmitter<void> = new EventEmitter();
  @Output() public editedText: EventEmitter<string> = new EventEmitter();
  @ViewChild('editInput') private editInput!: ElementRef;

  public editText(): void {
    this.isEditing = true;
    setTimeout(() => {
      // Після рендеру input фокусуємо поле вводу
      this.editInput.nativeElement.focus();
    });
  }

  public isChekedText (): void {
    this.checkedText.emit(!this.todo.isDone);

  }

  public updateTodo(): void {
    this.editedText.emit(this.todo.text)
  }

  public confirmEdit(): void {
    this.updateTodo()
    this.isEditing = false;

  }

  public toRemoveBlock(): void {
    this.removeBlock.emit();
  }
}
