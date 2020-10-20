import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() todos: Todo[] = [];
  @Output() onTogle = new EventEmitter<number> ()

  onChange(id: number){
    this.onTogle.emit(id);
  };

  constructor() { }

  ngOnInit(): void {
  }

}
