import { Component } from '@angular/core';
import { ASYNC_AWAIT, CUSTOM_OBSERVABLE, DT_DUC, FILTER, FROM_EVENT, INTERVAL, MAP, OF_FROM, PLUCK, PROMISE, R_RW_S_D, TAKE, TAP, TO_ARRAY } from 'src/app/constant/route';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent {
  data = [
    {
      name: 'From Event',
      routerLink: FROM_EVENT.path,
    },
    {
      name: 'To Array',
      routerLink: TO_ARRAY.path,
    },
    {
      name: 'Of And From',
      routerLink: OF_FROM.path,
    },
    {
      name: 'Interval',
      routerLink: INTERVAL.path,
    },
    {
      name: 'Custom Observable',
      routerLink: CUSTOM_OBSERVABLE.path,
    },
    {
      name: 'Promise',
      routerLink: PROMISE.path,
    },
    {
      name: 'Async Awiat',
      routerLink: ASYNC_AWAIT.path,
    },
    {
      name: 'Map',
      routerLink: MAP.path,
    },
    {
      name: 'Pluck',
      routerLink: PLUCK.path,
    },
    {
      name: 'Filter',
      routerLink: FILTER.path,
    },
    {
      name: 'Tap',
      routerLink: TAP.path,
    },

    {
      name: 'Take , Take Last and Take Until',
      routerLink : TAKE.path
    },
    {
      name: 'Retry , Retry When , Scan and Delay',
      routerLink : R_RW_S_D.path
    },
    {
      name: 'DebounceTime & DistinctUntilChanged',
      routerLink : DT_DUC.path
    }
  ];
}
