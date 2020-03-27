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
    const task = {
      title: title,
      id: String(Date.now()),
      completed: false
    }

    this.todos = [task, ...this.todos];
    this.taskSource$.next(this.todos);
    }

  deleteTodo(todo: Todo) {
    this.taskSource$.next(this.todos.filter(task => task.id !== todo.id));
    // this.todos = this.todos.filter(task => todo.id !== task.id)


    // let index = this.todos.indexOf(todo);
    // console.log(index);
    // console.log(this.todos);
    // console.log(todo);
    // if(index !== -1) {
    //   this.todos.splice(index, 1);
    // }
  }

  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
