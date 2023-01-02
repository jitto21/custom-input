import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[mask]',
})
export class MaskDirective {
  @Input() limit: any;
  @Input() start: any;
  prevValue: string = '';
  inputElt = this.el.nativeElement as HTMLInputElement;

  constructor(private el: ElementRef) {}

  @HostListener('blur', ['$event']) onBlur(event: any) {
    this.prevValue = event.target.value;
    const inputValue: string = event.target.value;
    let maskValue = inputValue.slice(-inputValue.length, -this.limit);
    if (inputValue.length >= this.limit) {
      maskValue = maskValue.concat(
        this.genMaskCharacter(inputValue.length - maskValue.length)
      );
      this.inputElt.value = maskValue;
    }
  }

  @HostListener('focus', ['$event']) onFocus(event: any) {
    this.inputElt.value = this.prevValue;
  }

  genMaskCharacter(maskLength: number) {
    let mask = '';
    while (maskLength > 0) {
      mask = mask.concat('X');
      maskLength--;
    }
    return mask;
  }
}
