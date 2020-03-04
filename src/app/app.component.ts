import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TODO App';
  todos = [
    { 
      label: 'create new repositories TODO App on gitHub',
      done: true,
      priority: 1
    },
    { 
      label: 'create new branch',
      done: true,
      priority: 3
    },
    { 
      label: 'create markup for to-do list in html',
      done: false,
      priority: 2
    },
    { 
      label: 'create components',
      done: false,
      priority: 3
    },
    { 
      label: 'create services',
      done: false,
      priority: 3
    }
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( t => t.label !== todo.label );
  }
}
