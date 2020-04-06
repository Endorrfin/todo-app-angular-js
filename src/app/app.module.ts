import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { TodoService } from "./shared/todo.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoFormComponent, TodoItemComponent, HomeComponent, NewsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
