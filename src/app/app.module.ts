import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImprimeComponent } from './components/imprime/imprime.component';
import { rounting } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    ImprimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    rounting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
