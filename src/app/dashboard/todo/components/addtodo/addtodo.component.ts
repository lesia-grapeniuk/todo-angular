import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-addtodo",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./addtodo.component.html",
  styleUrl: "./addtodo.component.scss",
})
export class AddtodoComponent {
  @Output() public todoTextChanged: EventEmitter<string> = new EventEmitter();

  public todoText: string = "";

  public addText(): void {
    if (this.todoText.trim()) {
      this.todoTextChanged.emit(this.todoText);
    }
    this.clearText();
  }

  public clearText(): void {
    this.todoText = "";
  }
}
