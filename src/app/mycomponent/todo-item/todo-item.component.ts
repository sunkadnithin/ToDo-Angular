import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoModule } from '../todo/todo.module';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  
  @Input() todoItem: ToDoModule = new ToDoModule;
  @Output() todoDelete : EventEmitter<ToDoModule> = new EventEmitter();
  constructor(){}
  
  ngOnInit(): void {
    
  }

  onClick(todoItem : ToDoModule) : void{
    console.log("Delete has been Triggered");
    this.todoDelete.emit(todoItem);    
  }

}
