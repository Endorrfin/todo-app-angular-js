import {Injectable} from '@angular/core';
import { todos } from './data';
import { Todo } from './todo';

import {BehaviorSubject} from 'rxjs';

@Injectable()
export class TodoService {
  todos: Todo[] = todos;

  getTodos(): Todo[] {
    return this.todos;
  }

  private taskSource = new BehaviorSubject<Todo>({id: '', title: '', completed: false});
  newTask = this.taskSource.asObservable();
  createTodo(title, string) {
    let todo = new Todo(title);

    // this.todos.unshift(todo);
    this.todos = [todo, ...this.todos];
    }
  }

  deleteTodo(todo, Todo) {
    let index = this.todos.indexOf(todo);
    if(index !== -1) {
      this.todos.splice(index, 1);
    }



  toggleTodo(todo, Todo) {
    todo.completed = !todo.completed;
  }
}
