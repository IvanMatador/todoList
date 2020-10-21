import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../app.component';
import { TodosService } from '../shared/todos.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];
 /*  @Output() onTogle = new EventEmitter<number> () */
constructor(private todosService: TodosService) { }

onChange(id: number){
    this.todosService.onTogle(id);
  };

ngOnInit(): void {
  }


  removeTodo (id: number){
    this.todosService.removeTodo(id)
  }

}
