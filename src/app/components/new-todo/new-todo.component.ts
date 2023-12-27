import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss'
})
export class NewTodoComponent {
  @ViewChild('f') form: NgForm;

  public minData: Date = new Date();
  constructor(private todoService: TodoService, public dialog: MatDialog) { }

  public onNewTodoSubnit(): void {
    if (this.form.valid) {
      const formValue = this.form.form.value;
      console.log(formValue);
      const newTodo: ITodo = {
        id: uuidv4(),
        title: formValue.title,
        description: formValue.description,
        isCompleted: false,
        isArchived: false,
        endDate: formValue.date,
        selected: false
      }
      this.dialog.closeAll();
      this.todoService.addNewTodo(newTodo);
      
    }

  }

}
