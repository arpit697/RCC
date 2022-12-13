import { Component } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent {
  data = [
    {
      name: 'From Event',
      routerLink: '/home/observable/form-event',
    },
    {
      name: 'To Array',
      routerLink: '/home/observable/to-array',
    },
    {
      name: 'Of And From',
      routerLink: '/home/observable/of-from',
    },
    {
      name: 'Interval',
      routerLink: '/home/observable/interval',
    },
    {
      name: 'Custom Observable',
      routerLink: '/home/observable/custom-observable',
    },
    {
      name: 'Promise',
      routerLink: '/home/observable/promise',
    },
    {
      name: 'Async Awiat',
      routerLink: '/home/observable/async-await',
    },
    {
      name: 'Map',
      routerLink: '/home/observable/map',
    },
    {
      name: 'Pluck',
      routerLink: '/home/observable/pluck',
    },
    {
      name: 'Filter',
      routerLink: '/home/observable/filter',
    },
    {
      name: 'Tap',
      routerLink: '/home/observable/tap',
    },

    {
      name: 'Take , Take Last and Take Until',
      routerLink : '/home/observable/take-tl-tu-ta-timer'
    },
    {
      name: 'Retry , Retry When , Scan and Delay',
      routerLink : '/home/observable/r-rw-s-d'
    },
    {
      name: 'DebounceTime & DistinctUntilChanged', 
      routerLink : '/home/observable/dt-duc'
    }
  ];
}
