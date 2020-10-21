import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Todo Angular application';
}
export class Todo {
  title: string
  complited: boolean
  date: number
  id: number
}
