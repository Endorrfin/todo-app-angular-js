import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import { Todo } from '../shared/todo';
import { TodoService } from '../shared/todo.service';
import { todos } from '../shared/data';
import {Observable} from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  // todos: Observable<Todo[]>;
  @Input() todos: Todo[];

  delete(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
}
