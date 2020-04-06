import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Todo } from '../../shared/todo';
import { TodoService } from "../../shared/todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo;
  @Output() delete = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {}

  toggle() {
    this.todoService.toggleTodo(this.task);
  }

  onDelete() {
    this.delete.emit(this.task);
  }

}
