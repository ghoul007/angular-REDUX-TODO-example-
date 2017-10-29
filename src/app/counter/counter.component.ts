import { Component, OnInit } from '@angular/core';
import { IAppStore, rootReducer } from '../store'
import { NgReduxModule, NgRedux, select } from 'ng2-redux'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {



//  @select() counter: number;
 @select('counter') num: number;
//  @select((p:IAppStore)=>p.person.name) name;
  // constructor(private ngRedux: NgRedux<IAppStore>) {

  // }

  ngOnInit() {
    // this.ngRedux.subscribe(() => {
    //   this.counter = this.ngRedux.getState().counter;
    // })

    // this.ngRedux.dispatch({type: ''})
  }
}
