import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ITodo } from '../../models/todo.interface';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit{
  @Input() todos: Array<ITodo> = [];
  
  constructor(public todoService: TodoService) {

  }
  ngOnInit(): void {
    
  }

  
  public onTodoClick(todo: ITodo, index: number){
    this.todoService.setSelectedTodo(todo);
    this.todos.forEach((todo)=>{
      if(todo.selected)
      {
        todo.selected = false
      }
    })
    this.todos[index].selected = true;
  }

 
}

const temp = [{ title: "European badger", description: "Meles meles", isCompleted: false, isArchived: true, endDate: "9/10/2023" },
{ title: "White-bellied sea eagle", description: "Haliaetus leucogaster", isCompleted: false, isArchived: false, endDate: "6/9/2023" },
{ title: "Crane, sarus", description: "Grus antigone", isCompleted: true, isArchived: true, endDate: "9/11/2023" },
{ title: "African buffalo", description: "Snycerus caffer", isCompleted: false, isArchived: true, endDate: "8/31/2023" },
{ title: "Badger, honey", description: "Mellivora capensis", isCompleted: false, isArchived: false, endDate: "1/17/2023" },
{ title: "Shrike, crimson-breasted", description: "Laniaurius atrococcineus", isCompleted: true, isArchived: false, endDate: "8/14/2023" },
{ title: "Darwin ground finch (unidentified)", description: "Geospiza sp.", isCompleted: true, isArchived: true, endDate: "8/16/2023" },
{ title: "Field flicker", description: "Colaptes campestroides", isCompleted: true, isArchived: true, endDate: "3/7/2023" },
{ title: "Eagle owl (unidentified)", description: "Bubo sp.", isCompleted: true, isArchived: false, endDate: "8/20/2023" },
{ title: "Porcupine, crested", description: "Hystrix cristata", isCompleted: true, isArchived: false, endDate: "6/10/2023" },
{ title: "Pallas's fish eagle", description: "Haliaeetus leucoryphus", isCompleted: false, isArchived: false, endDate: "9/16/2023" },
{ title: "Opossum, american virginia", description: "Didelphis virginiana", isCompleted: true, isArchived: false, endDate: "6/25/2023" },
{ title: "Ring-necked pheasant", description: "Phasianus colchicus", isCompleted: true, isArchived: true, endDate: "4/15/2023" },
{ title: "Cliffchat, mocking", description: "Thamnolaea cinnmomeiventris", isCompleted: true, isArchived: true, endDate: "9/12/2023" },
{ title: "Slender loris", description: "Loris tardigratus", isCompleted: true, isArchived: true, endDate: "2/24/2023" },
{ title: "Roseat flamingo", description: "Phoenicopterus ruber", isCompleted: false, isArchived: false, endDate: "4/25/2023" },
{ title: "Squirrel, palm", description: "Funambulus pennati", isCompleted: false, isArchived: true, endDate: "12/13/2023" },
{ title: "Otter, cape clawless", description: "Aonyx capensis", isCompleted: true, isArchived: true, endDate: "7/29/2023" },
{ title: "Oriental white-backed vulture", description: "Gyps bengalensis", isCompleted: true, isArchived: false, endDate: "11/25/2023" },
{ title: "Magistrate black colobus", description: "Colobus guerza", isCompleted: true, isArchived: false, endDate: "10/7/2023" }]
