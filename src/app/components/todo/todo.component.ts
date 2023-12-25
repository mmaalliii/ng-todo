import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { ITodo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public todo: ITodo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe((data) => {
        this.todo = data
      })
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
  public onCompliteTodo(todo: ITodo):void{
    todo.isCompleted = true;
  }
  public onArchiveTodo(todo: ITodo):void{
    todo.isArchived = true;
  }
}
