import { ADD_TODOS } from "../actions/todo.action";
import { IAppStore } from "../../store";
import { NgRedux } from "ng2-redux/lib/components/ng-redux";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppStore>) {}

  ngOnInit() {
  }


  addItem(item: HTMLInputElement) {
    
    this.ngRedux.dispatch({ type: ADD_TODOS, newItem: item.value });
  }
}
