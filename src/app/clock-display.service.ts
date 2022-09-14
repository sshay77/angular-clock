import {Injectable} from '@angular/core';
import {min} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClockDisplayService {

  constructor() {
  }

  getAnalog(time: Date): [number, number, number] {
    const seconds = time.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    const secondHandTransform = secondsDegrees + 90;

    const mins = time.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6);
    const minsHandTransform = minsDegrees + 90;

    const hour = time.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30);
    const hourHandTransform = hourDegrees + 90;

    return [hourHandTransform, minsHandTransform, secondHandTransform];
  }

  getDigital(time: Date): [string, string, string] {
    let seconds = time.getSeconds().toString();
    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    let minutes = time.getMinutes().toString();
    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }
    const hours = time.getHours().toString();
    return [hours, minutes, seconds]
  }

  calculateOffset(time:Date, offset: number): Date {
    const newTime = new Date(time.getTime())
    newTime.setHours(time.getHours() + offset);
    return newTime;
  }
}
