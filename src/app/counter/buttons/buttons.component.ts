import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppStore } from '../../store';
import { INCREMENT, DECREMENT } from '../../action';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppStore>) { }

  ngOnInit() {
  }


  inc() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  dec() {
    this.ngRedux.dispatch({ type: DECREMENT });

  }
}
