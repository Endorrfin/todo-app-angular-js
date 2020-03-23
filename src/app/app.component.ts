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
  headTitle: string = 'ToDo List App Angular';
  todos: Todo[] = todos;




  create(title: string, id: string) {
    const todo = new Todo(title, id);
    id: String(this.todos.length + Date.now()),
    this.todos = [todo, ...this.todos];
  }
}


