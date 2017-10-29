import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  @select() todos;
  constructor() { }

  ngOnInit() {

  }

}
