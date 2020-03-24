import {Injectable} from '@angular/core';
import { todos } from './data';
import { Todo } from './todo';

import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Observable<Todo[]> {
    return this.taskSource$.asObservable();
  }

  private taskSource$ = new BehaviorSubject<Todo[]>(todos);
  newTask = this.taskSource$.asObservable();
  createTodo(title) {
    // const todo = new Todo(title);
    const todo = {
      title: title,
      id: String(Date.now()),
      completed: false
    }


    this.todos = [todo, ...this.todos];
    this.taskSource$.next(this.todos);
    }


  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
