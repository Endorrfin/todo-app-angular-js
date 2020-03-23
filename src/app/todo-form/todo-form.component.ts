import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

import {TodoService} from '../shared/todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoFormComponent {
  title: string = '';

  constructor(public todoService: TodoService) {}

  onSubmit() {
    this.todoService.createTodo(this.title);
  }
}
