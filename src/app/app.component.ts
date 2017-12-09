import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'app';
  useOnPush = false;
  showChangeDetection = false;
  days = [];

  ngOnInit(): void {
    this.days = new Array(25).fill(0).map((x, i) => ({ input: { index: i + 1, open: false } }));
  }

  toggleDay(day) {
    day.input.open = !day.input.open;
  }

  toggleDayImmu(day) {
    day.input = Object.assign({}, day.input, { open: !day.input.open });
  }
}
