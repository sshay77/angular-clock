import {Component, OnDestroy, OnInit} from '@angular/core';
import * as data from '../data/time-zone.json';

@Component({
  selector: 'app-central-clock',
  templateUrl: './central-clock.component.html',
  styleUrls: ['./central-clock.component.css']
})
export class CentralClockComponent implements OnInit, OnDestroy {

  clocks: any = (data as any).default;
  selectedCount: any = 4;
  clocksToDisplay: any;
  time: Date = new Date();
  private timer: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.timer = setInterval(()=>this.time = new Date(), 1000);
    this.clocksToDisplay = this.clocks;
  }
  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  onSelectedCount($event?: any) {
    this.selectedCount = $event.target.value;
    this.clocksToDisplay = this.clocks.slice(0, this.selectedCount);
  }
}
