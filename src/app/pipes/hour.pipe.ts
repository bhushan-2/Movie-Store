import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hourTime'
  })
  export class HourTimePipe implements PipeTransform {
    transform(value: string): string {
      if(value){
        let num = parseInt(value.split(/(\d+)/)[1]);
        let hour = Math.floor(num / 60);
        let min = num % 60;
        return hour + ' hr ' + min + ' min';
      }
      return value;
    }
  }