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
    this.days = new Array(25).fill(0).map((x, i) => ({ index: i + 1, open: false }));
  }

  openDay(day: number) {
    this.days.find(x => x.index === day).open = true;
  }
}
