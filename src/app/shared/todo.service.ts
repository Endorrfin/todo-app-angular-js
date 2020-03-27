import { todos } from './data';
import { Todo } from './todo';

import {BehaviorSubject, Observable} from 'rxjs';


export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Observable<Todo[]> {
    return this.taskSource$.asObservable();
  }

  private taskSource$ = new BehaviorSubject<Todo[]>(todos);
  newTask = this.taskSource$.asObservable();

  createTodo(title) {
    const todo = {
      title: title,
      id: String(Date.now()),
      completed: false
    }

    this.todos = [todo, ...this.todos];
    this.taskSource$.next(this.todos);
    }


  // deleteTodo(payload) {
  //   this.http.delete<Todo[]>(this.heroesUrl + '/' + payload.id).subscribe();
  //   this.list$.next(this.list$.getValue().filter(value => value.id !== payload.id));
  // }

  deleteTodo(todo: Todo) {
    // this.todos = this.todos.filter(task => task.id !== task.id)
    // this.taskSource$.next(this.todos.filter(task => task.id !== todo.id)); // changed tasks
    // this.todos = this.todos.filter((task) => task.id !== todo.id);


    let index = this.todos.indexOf(todo);
    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
