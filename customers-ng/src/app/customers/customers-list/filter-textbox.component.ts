import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-textbox-component',
  template: `
    <div>
      Filter: <input type="text" class="form-control" [(ngModel)]="filter"/>
    </div>
  `,
})
export class FilterTextboxComponent implements OnInit {

  private _filter: string;

  @Input() get filter() {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}
}
