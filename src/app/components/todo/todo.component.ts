import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo;


  constructor() { }
  ngOnInit(): void {
  }

  
  public onCompliteTodo(todo: ITodo):void{
    todo.isCompleted = true;
  }
  public onArchiveTodo(todo: ITodo):void{
    todo.isArchived = true;
  }
}
