import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { Todo } from '../shared/todo';
import { todos } from '../shared/data';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];

  delete(todo: Todo) {
    this.todos = this.todos.filter((task) => task.id !== todo.id);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
