import { Component, ChangeDetectionStrategy, ChangeDetectorRef, OnInit } from '@angular/core';

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

  constructor(private detector: ChangeDetectorRef) {
    this.detector.detach();
  }

  ngOnInit(): void {
    this.days = new Array(25).fill(0).map((x, i) => ({ index: i + 1, open: false }));
    this.detector.detectChanges();
  }

  detectChange() {
    this.detector.detectChanges();
  }

  openDay(day: number) {
    this.days.find(x => x.index === day).open = true;
  }
}
