import { todos } from './data';
import { Todo } from './todo';


export class TodoService {
  todos: Todo[] = todos;

  getService(): Todo[] { // :Todo[] - возвращаемый тип данных
    return this.todos;
  }

  createTodo(title, string) {
    let todo = new Todo(title);

    // this.todos.unshift(todo);
    this.todos = [todo, ...this.todos];
    }
  }

  deleteTodo(todo, Todo) {
    let index = this.todos.indexOf(todo);
    if(index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo, Todo) {
    todo.completed = !todo.completed;
  }
}
