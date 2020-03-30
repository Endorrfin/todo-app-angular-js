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
    this.taskSource$.next([task, ...this.taskSource$.getValue()]); // данные получаю из потока
  }


  deleteTodo(todo: Todo) {
    this.taskSource$.next(this.taskSource$.getValue().filter(task => task.id !== todo.id));
    console.log(this.taskSource$.getValue());
  }


  toggleTodo(task) {
    this.taskSource$.next(this.taskSource$.getValue().map((value) => value.id ? task : value));
  }

}




















