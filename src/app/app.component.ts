import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Todo } from './shared/todo';
import { TodoService } from "./shared/todo.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title: string = 'ToDo & News App';
  todos$: Observable<Todo[]>;

  create(title: string) {
    this.todoService.createTodo(title);
    // const todo = new Todo(title, id);
    // id: String(this.todos.length + Date.now()),
    // this.todos = [todo, ...this.todos];
  }

  ngOnInit() {
    this.todos$ = this.todoService.getTodos();
  }

  constructor(private todoService: TodoService) {
  }
}
