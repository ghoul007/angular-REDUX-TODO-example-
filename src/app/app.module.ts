import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';
import { IAppStore, rootReducer, INIT_STATE } from './store'

import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux'
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent
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
