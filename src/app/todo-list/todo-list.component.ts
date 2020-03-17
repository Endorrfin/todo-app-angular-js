import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {
    this.todos = []; // инициализация свойства
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  toggle(todo: Todo) {
    this.todoService.toggleTodo(todo);
  }

}
