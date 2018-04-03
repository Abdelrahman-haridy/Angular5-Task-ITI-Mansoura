import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  task: string;
  todoList = [];
  constructor() { }

  ngOnInit() {
  }

  addTask(val) {
    // console.log(val);
    this.todoList.push(this.task);
  }

  delTask(i) {
    this.todoList.splice(i, 1);
  }

}
