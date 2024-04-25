import { Component, OnInit } from '@angular/core';
import { ToDoModule } from './todo.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todos : ToDoModule[];
   
   constructor(){
    this.todos = [
      {
        title :"This is the first task",
        desc : "this is the discription",
      },
      {
        title :"This is the second task",
        desc : "this is the discription",
      },
      {
        title :"This is the third task",
        desc : "this is the discription",
      },
      
    ]
   }

  ngOnInit(): void { 
    
  }

  DeleteToDOFromList(todo : ToDoModule){
    const index = this.todos.indexOf(todo); // get the index nummber
    this.todos.splice(index, 1); // start removing from index, quantity
    console.log(todo.title + " deleted");
    
  } 

  AddToDOList(todo : ToDoModule){
    this.todos.push(todo); 
    console.log(todo.title + " Added");
    
  } 
  
}
