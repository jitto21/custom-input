import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-customInput',
  template: `
    <input type="text" mask [start]="start" [limit]="limit" />
  `,
  styles: [],
})
export class CustomInputComponent implements OnInit {
  params = {};
  @Input() start: boolean = false;
  @Input() limit: number = 4;

  ngOnInit(): void {
    this.params = {
      limit: this.limit,
      start: this.start
    }
  }
}
