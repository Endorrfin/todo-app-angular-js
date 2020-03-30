import { todos } from './data';
import { Todo } from './todo';

import {BehaviorSubject, Observable} from 'rxjs';


export class TodoService {

  getTodos(): Observable<Todo[]> {
    return this.taskSource$.asObservable();
  }

  private taskSource$ = new BehaviorSubject<Todo[]>(todos);

  createTodo(title) {
    const task = {
      title: title,
      id: String(Date.now()),
      completed: false
    }
    this.taskSource$.next([task, ...this.taskSource$.getValue()]);
  }

  deleteTodo(todo: Todo) {
    this.taskSource$.next(this.taskSource$.getValue().filter(task => task.id !== todo.id));
  }

  toggleTodo(task) {
    this.taskSource$.next(this.taskSource$.getValue().map((value) => value.id === task.id ? task : value));
  }

}




















