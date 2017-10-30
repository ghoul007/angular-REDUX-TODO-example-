import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { IAppStore, rootReducer, INIT_STATE } from './store'

import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { TodoComponent } from './todo/todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component'
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent,
    TodoComponent,
    AddTodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule, NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



  constructor(private ngRedux: NgRedux<IAppStore>, private dev: DevToolsExtension) {
    let enhancer = (isDevMode) ? [dev.enhancer()] : [];
    this.ngRedux.configureStore(rootReducer, INIT_STATE, [], enhancer)

  }

}
