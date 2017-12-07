import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  AfterViewChecked,
  ElementRef,
  NgZone
} from '@angular/core';

@Component({
  selector: 'app-calendar-item-onpush',
  templateUrl: './calendar-item.component.html',
  styleUrls: ['./calendar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarItemOnPushComponent implements OnInit {
  @Input() index: number;
  open: boolean;

  @Input() displayChange: boolean;

  get changeDetection() {
    if (this.displayChange) {
      this.showChangeDection();
    }
    return '';
  }

  constructor(private zone: NgZone, private elementRef: ElementRef) {}

  ngOnInit() {}

  showChangeDection() {
    const element = this.elementRef.nativeElement;
    this.zone.runOutsideAngular(() => {
      element.classList.add('cd-inprogress');

      setTimeout(() => {
        element.classList.remove('cd-inprogress');
      }, 500);
    });
  }
}
