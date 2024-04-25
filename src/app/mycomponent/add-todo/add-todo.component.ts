import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToDoModule } from '../todo/todo.module';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent  implements OnInit{

  @Output() todoAdd : EventEmitter<ToDoModule> = new EventEmitter(); // event
  title :any ;
  desc: any;
  constructor(){}

  ngOnInit(): void {
    
  }

  onSumbit(){
    const todo = {
      title : this.title,
      desc : this.desc,
    }
    this.todoAdd.emit(todo);
  }
}
