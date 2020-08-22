import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NglibModule} from '@waynegakuo/nglib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NglibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
