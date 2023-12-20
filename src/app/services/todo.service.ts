import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _mock: ITodo[] = [
    { title: "European badger", description: "Meles meles", isCompleted: false, isArchived: true, endDate: "9/10/2023" },
    { title: "White-bellied sea eagle", description: "Haliaetus leucogaster", isCompleted: false, "isArchived": false, endDate: "6/9/2023" },
    { title: "Crane, sarus", description: "Grus antigone", isCompleted: true, isArchived: true, endDate: "9/11/2023" },
    { title: "African buffalo", description: "Snycerus caffer", isCompleted: false, isArchived: true, endDate: "8/31/2023" },
    { title: "Slender loris", description: "Loris tardigratus", isCompleted: true, isArchived: true, endDate: "2/24/2023" },
    { title: "Roseat flamingo", description: "Phoenicopterus ruber", isCompleted: false, isArchived: false, endDate: "4/25/2023" },
    { title: "Squirrel, palm", description: "Funambulus pennati", isCompleted: false, isArchived: true, endDate: "12/13/2023" },
    { title: "Otter, cape clawless", description: "Aonyx capensis", isCompleted: true, isArchived: true, endDate: "7/29/2023" },
    { title: "Oriental white-backed vulture", description: "Gyps bengalensis", isCompleted: true, isArchived: false, endDate: "11/25/2023" },
    { title: "Magistrate black colobus", description: "Colobus guerza", isCompleted: true, isArchived: false, endDate: "10/7/2023" }

  ]
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this._mock)

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable()
  }
}
