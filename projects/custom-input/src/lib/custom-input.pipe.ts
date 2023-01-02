import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: '[mask]'
})

export class MaskPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    return value.slice(-value.length, -4).concat('XXXX');
  }
}
