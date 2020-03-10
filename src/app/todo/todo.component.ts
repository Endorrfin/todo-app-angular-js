import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];


  todo: Todo = {
    id: '',
    title: '',
    text: '',
    complete: false
  };


  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: '1',
        title: 'Task 1',
        text: 'create new repositories TODO App on gitHub',
        complete: false
      },
      {
        id: '2',
        title: 'Task 2',
        text: 'create new branch',
        complete: true
      },
      {
        id: '3',
        title: 'Task 3',
        text: 'create markup for to-do list in html',
        complete: false
      },
      {
        id: '4',
        title: 'Task 4',
        text: 'create components',
        complete: false
      },
      {
        id: '5',
        title: 'Task 5',
        text: 'create services',
        complete: false
      },
    ];
  }


  addTodo(form) {
    const newTask = {
      id: String(this.todos.length + 1),
      title: this.todo.title,
      text: this.todo.text,
      complete: false
    };

    this.todos.unshift(newTask);
    form.reset();
  }



  deleteTask(id: string) {
    this.todos = this.todos.filter(task => task.id !== id);
  }

}
