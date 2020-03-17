import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];

  toggle(todo: Todo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Todo) {
    let index = this.todos.indexOf(todo);

    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  // delete(todo: Todo) {
  // let index = this.todos.indexOf(todo);
  // console.log('delete');
  //   this.todos = this.todos.filter(todo => todo.index !== index);
  // }

  constructor() { }

  ngOnInit(): void {
  }
}
