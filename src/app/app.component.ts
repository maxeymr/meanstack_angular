import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  // Declare empty list of todos
  todos: any[] = [];

  constructor(private http: HttpClient) {}

  // Angular 2 Life Cycle event when component has been initialized
  ngOnInit() {
    this.getAllTodos();
  }

  // Add one todo to the API
  addTodo(tag, task) {
    this.http.post(`${this.API}/todos`, {tag, task})
      .subscribe(() => {
        this.getAllTodos();
      })
  }

  // Get all todos from the API
  getAllTodos() {
    this.http.get(`${this.API}/todos`)
      .subscribe((todos: any) => {
        console.log(todos)
        this.todos = todos
      })
  }
}