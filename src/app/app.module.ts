import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomInputModule } from 'customInput';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
