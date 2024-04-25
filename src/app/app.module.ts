import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './mycomponent/todo/todo.component';
import { TodoItemComponent } from './mycomponent/todo-item/todo-item.component';
import { AddTodoComponent } from './mycomponent/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { HelpTodoComponent } from './mycomponent/help-todo/help-todo.component';
import { HomeTodoComponent } from './mycomponent/home-todo/home-todo.component';
import { ErrorComponent } from './mycomponent/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddTodoComponent,
    HelpTodoComponent,
    HomeTodoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
