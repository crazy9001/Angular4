import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'myDate',
    pure: true
})
export class MyDatePipe extends DatePipe {
    transform(value: any, pattern: string = 'mediumDate'): string|null {
        let result = super.transform(value, pattern);
        result += ' ' + this.map[Intl.DateTimeFormat().resolvedOptions().timeZone];
        return result;
    }
    map = {
        'Asia/HoChiMinh': 'IST'
    };
}
