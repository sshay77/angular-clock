import {Component, Input} from '@angular/core';
import {ClockDisplayService} from "../clock-display.service";

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent {
  @Input() time = new Date();
  @Input() offset = 0;

  secondHandTransform: number = 0;
  minsHandTransform: number = 0;
  hourHandTransform: number = 0;

  constructor(private clockDisplay: ClockDisplayService) {
  }

  setTime(): void {
    const newTime = this.clockDisplay.calculateOffset(this.time, this.offset);
    [this.hourHandTransform, this.minsHandTransform, this.secondHandTransform] =
      this.clockDisplay.getAnalog(newTime);
  }

  ngOnChanges(): void {
    this.setTime();
  }
}
