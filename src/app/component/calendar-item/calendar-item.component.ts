import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calendar-item',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarItemComponent implements OnInit {

  @Input()
  index: number;
  opened: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleOpened() {
    this.opened = !this.opened;
  }

}
