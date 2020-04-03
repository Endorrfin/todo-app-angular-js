import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {HomeComponent} from './home/home.component';


// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/news -> NewsComponent
// http://localhost:4200/todolist -> TodoListComponent

const routers: Routes = [
  {path: '', component: HomeComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'news', component: NewsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

