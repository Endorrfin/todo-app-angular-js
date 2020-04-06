import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {NewsComponent} from "./components/news/news.component";


// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/news -> NewsComponent
// http://localhost:4200/todolist -> TodoListComponent

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
