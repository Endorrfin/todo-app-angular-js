import {Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy} from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() task: Todo;
  @Output() delete = new EventEmitter();

  toggle() {
    this.task.completed = !this.task.completed;
  }

  onDelete() {
    this.delete.emit(this.task);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
