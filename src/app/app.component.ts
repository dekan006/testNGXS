import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddPositive, AddNegative, CountState, Count } from './app.state';

@Component({
  selector: 'my-app',
  template: `
    <h1>Count Positive {{countPositive$ | async}}</h1>
    <button (click)="onClick()">+</button>
    <button (click)="onClick2()">-</button>

    <h1>Count Negative {{countNegative$ | async}}</h1>
  `,
  styleUrls: ['app.component.css'],
})
export class AppComponent  {

  @Select((state:any) => state.count.positive) countPositive$: Observable<number> | undefined;
  @Select((state:any) => state.count.negative) countNegative$: Observable<number> | undefined;

  constructor(private store: Store) {}

  onClick() {
    this.store.dispatch(new AddPositive());
  }

  onClick2() {
    this.store.dispatch(new AddNegative());
  }

}
