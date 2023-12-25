import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _mock: ITodo[] = [
    { id: 1, title: "European badger", description: "Meles meles", isCompleted: false, isArchived: false, endDate: "9/10/2023", selected:true },
    { id: 2,title: "White-bellied sea eagle", description: "Haliaetus leucogaster", isCompleted: false, "isArchived": false, endDate: "6/9/2023", selected:false},
    { id: 3,title: "Crane, sarus", description: "Grus antigone", isCompleted: false, isArchived: false, endDate: "9/11/2023", selected:false },
    { id: 4,title: "African buffalo", description: "Snycerus caffer", isCompleted: false, isArchived: false, endDate: "8/31/2023", selected:false },
    { id: 5,title: "Slender loris", description: "Loris tardigratus", isCompleted: false, isArchived: false, endDate: "2/24/2023", selected:false },
    { id: 6,title: "Roseat flamingo", description: "Phoenicopterus ruber", isCompleted: false, isArchived: false, endDate: "4/25/2023", selected:false },
    { id: 7,title: "Squirrel, palm", description: "Funambulus pennati", isCompleted: false, isArchived: false, endDate: "12/13/2023", selected:false },
   
  ]
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this._mock);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this._mock[0]);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable()
  }

  public getSelectedTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable()
  }

  public setSelectedTodo(todo: ITodo){
    this._singleTodoSubject.next(todo)
  }
}
