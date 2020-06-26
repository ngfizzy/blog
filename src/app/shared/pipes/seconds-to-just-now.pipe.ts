import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToJustNow'
})
export class SecondsToJustNowPipe implements PipeTransform {

  transform(value: string): string {
    if (value.includes('seconds')) {
      return 'Just now';
    }

    return value;
  }

}
