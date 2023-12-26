import { Component, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.scss'
})
export class NewTodoComponent {
  @ViewChild('f') form: Form;

  public onNewTodoSubnit(): void{
    console.log('on submit');
    
    console.log(this.form);
    
  } 

}
