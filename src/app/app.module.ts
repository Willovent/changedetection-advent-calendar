import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarItemOnPushComponent } from './component/calendar-item/calendar-item.component.onpush';
import { CalendarItemDefaultComponent } from './component/calendar-item/calendar-item.component.default';


@NgModule({
  declarations: [
    AppComponent,
    CalendarItemOnPushComponent,
    CalendarItemDefaultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
