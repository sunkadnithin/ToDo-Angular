import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpTodoComponent } from './mycomponent/help-todo/help-todo.component';
import { HomeTodoComponent } from './mycomponent/home-todo/home-todo.component';
import { ErrorComponent } from './mycomponent/error/error.component';

const routes: Routes = [
  {path : "", component : HomeTodoComponent},
  {path : "help", component : HelpTodoComponent},
  {path : "**", component : ErrorComponent}, // loads default page 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
