import { Injectable } from '@angular/core';


export interface Todo {
  id: number,
  title: string,
  complited: boolean,
  date: Date
}

@Injectable({providedIn: 'root'})
export class TodosService{
  public todos: Todo[] = [
    {id: 1, title: 'first string', complited: false, date: new Date()},
    {id: 2, title: 'second string', complited: true, date: new Date()},
    {id: 3, title: 'last string', complited: false, date: new Date()}
  ];

  onTogle(id: number){
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].complited = !this.todos[idx].complited;
  }

  removeTodo(id: number){
    this.todos = this.todos.filter(item => item.id !== id)
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

}

