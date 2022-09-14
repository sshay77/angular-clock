import {Component, Input} from '@angular/core';
import {ClockDisplayService} from "../clock-display.service";

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent {
  @Input() time = new Date();
  @Input() offset = 0;

  hours: string = '';
  minutes: string = '';
  seconds: string = '';

  constructor(private clockDisplay: ClockDisplayService) {
  }

  setTime(): void {
    const newTime = this.clockDisplay.calculateOffset(this.time, this.offset);
    [this.hours, this.minutes, this.seconds] = this.clockDisplay.getDigital(newTime);
  }

  ngOnChanges(): void {
    this.setTime();
  }
}
