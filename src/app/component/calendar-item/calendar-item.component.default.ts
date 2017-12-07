import { Component } from '@angular/core';
import { CalendarItemOnPushComponent } from './calendar-item.component.onpush';

@Component({
  selector: 'app-calendar-item-default',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss']
})
export class CalendarItemDefaultComponent extends CalendarItemOnPushComponent {
}
