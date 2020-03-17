import {ChangeDetectionStrategy, Component} from '@angular/core';

import { Todo } from './shared/todo';
import { todos } from './shared/data';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title: string = 'ToDo List Angular';
  todos: Todo[] = todos;

  create(title: string) {
    const todo = new Todo(title);
    // this.todos.push(todo);
    this.todos = [todo, ...this.todos];
  }
}


