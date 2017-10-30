import { Component, OnInit } from '@angular/core';
import { select } from 'ng2-redux';
import { FETCH_TODOS, DELETE_TODOS } from "../actions/todo.action";
import { IAppStore } from "../../store";
import { NgRedux } from "ng2-redux/lib/components/ng-redux";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  @select() todos;
  constructor(private ngRedux: NgRedux<IAppStore>) {}

  ngOnInit() {
    this.ngRedux.dispatch({ type: FETCH_TODOS });
  }


  deleteIteme(id) {
    this.ngRedux.dispatch({ type: DELETE_TODOS, idItem: id });
  }

}
