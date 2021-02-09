import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTime',
})
export class MyTimePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    const val = parseInt(value, 10);
    if (val > 60) {
      let hours = val / 60;
      let minutes = val % 60;
      return `${Math.round(hours)} hour ${minutes} min`;
    } else {
      return `${val} min`;
    }
  }
}
