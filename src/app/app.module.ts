import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalendarItemComponent } from './component/calendar-item/calendar-item.component';
import { ChangeDetectionDirective } from './directive/change-detection.directive';


@NgModule({
  declarations: [
    AppComponent,
    CalendarItemComponent,
    ChangeDetectionDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
