import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './observable.component';

const routes: Routes = [
  { path: '', component: ObservableComponent },
  {
    path: 'of-from',
    loadChildren: () =>
      import('./of-from/of-from.module').then((m) => m.OfFromModule),
  },
  {
    path: 'interval',
    loadChildren: () =>
      import('./interval/interval.module').then((m) => m.IntervalModule),
  },
  {
    path: 'custom-observable',
    loadChildren: () =>
      import('./custom-observable/custom-observable.module').then(
        (m) => m.CustomObservableModule
      ),
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'r-rw-s-d',
    loadChildren: () =>
      import('./r-rw-s-d/r-rw-s-d.module').then((m) => m.RRwSDModule),
  },
  {
    path: 'dt-duc',
    loadChildren: () =>
      import('./dt-duc/dt-duc.module').then((m) => m.DtDucModule),
  },
  {
    path: 'pluck',
    loadChildren: () =>
      import('./pluck/pluck.module').then((m) => m.PluckModule),
  },
  {
    path: 'take-tl-tu-ta-timer',
    loadChildren: () =>
      import('./take-tl-tu-ta-timer/take-tl-tu-ta-timer.module').then(
        (m) => m.TakeTlTuTaTimerModule
      ),
  },
  {
    path: 'replay-subject',
    loadChildren: () =>
      import('./replay-subject/replay-subject.module').then(
        (m) => m.ReplaySubjectModule
      ),
  },
  {
    path: 'async-subject',
    loadChildren: () =>
      import('./async-subject/async-subject.module').then(
        (m) => m.AsyncSubjectModule
      ),
  },
  {
    path: 'error-handling-catch-retry',
    loadChildren: () =>
      import(
        './error-handling-catch-retry/error-handling-catch-retry.module'
      ).then((m) => m.ErrorHandlingCatchRetryModule),
  },
  {
    path: 'switch-map',
    loadChildren: () =>
      import('./switch-map/switch-map.module').then((m) => m.SwitchMapModule),
  },
  {
    path: 'merge-map',
    loadChildren: () =>
      import('./merge-map/merge-map.module').then((m) => m.MergeMapModule),
  },
  {
    path: 'concat-map',
    loadChildren: () =>
      import('./concat-map/concat-map.module').then((m) => m.ConcatMapModule),
  },
  {
    path: 'merge',
    loadChildren: () =>
      import('./merge/merge.module').then((m) => m.MergeModule),
  },
  {
    path: 'flat',
    loadChildren: () => import('./flat/flat.module').then((m) => m.FlatModule),
  },
  {
    path: 'to-array',
    loadChildren: () =>
      import('./to-array/to-array.module').then((m) => m.ToArrayModule),
  },
  {
    path: 'reduce',
    loadChildren: () =>
      import('./reduce/reduce.module').then((m) => m.ReduceModule),
  },
  {
    path: 'tap',
    loadChildren: () => import('./tap/tap.module').then((m) => m.TapModule),
  },
  {
    path: 'start-with',
    loadChildren: () =>
      import('./start-with/start-with.module').then((m) => m.StartWithModule),
  },
  { path: 'form-event', loadChildren: () => import('./form-event/form-event.module').then(m => m.FormEventModule) },
  { path: 'promise', loadChildren: () => import('./promise/promise.module').then(m => m.PromiseModule) },
  { path: 'async-await', loadChildren: () => import('./async-await/async-await.module').then(m => m.AsyncAwaitModule) },
  { path: 'filter', loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableRoutingModule {}
