import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ASYNC_AWAIT, ASYNC_SUBJECT, CONCAT_MAP, CUSTOM_OBSERVABLE, DT_DUC, ERROR, FILTER, FLAT, FROM_EVENT, INTERVAL, MAP, MERGE, MERGE_MAP, OF_FROM, PLUCK, PROMISE, REDUCE, REPLAY_SUBJECT, R_RW_S_D, START_WITH, SWITCH_MAP, TAKE, TAP, TO_ARRAY } from 'src/app/constant/route';
import { ObservableComponent } from './observable.component';

const routes: Routes = [
  { path: '', component: ObservableComponent },
  {
    path: OF_FROM.path,
    loadChildren: () =>
      import('./of-from/of-from.module').then((m) => m.OfFromModule),
  },
  {
    path: INTERVAL.path,
    loadChildren: () =>
      import('./interval/interval.module').then((m) => m.IntervalModule),
  },
  {
    path: CUSTOM_OBSERVABLE.path,
    loadChildren: () =>
      import('./custom-observable/custom-observable.module').then(
        (m) => m.CustomObservableModule
      ),
  },
  {
    path: MAP.path,
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: R_RW_S_D.path,
    loadChildren: () =>
      import('./r-rw-s-d/r-rw-s-d.module').then((m) => m.RRwSDModule),
  },
  {
    path: DT_DUC.path,
    loadChildren: () =>
      import('./dt-duc/dt-duc.module').then((m) => m.DtDucModule),
  },
  {
    path: PLUCK.path,
    loadChildren: () =>
      import('./pluck/pluck.module').then((m) => m.PluckModule),
  },
  {
    path: TAKE.path,
    loadChildren: () =>
      import('./take-tl-tu-ta-timer/take-tl-tu-ta-timer.module').then(
        (m) => m.TakeTlTuTaTimerModule
      ),
  },
  {
    path: REPLAY_SUBJECT.path,
    loadChildren: () =>
      import('./replay-subject/replay-subject.module').then(
        (m) => m.ReplaySubjectModule
      ),
  },
  {
    path: ASYNC_SUBJECT.path,
    loadChildren: () =>
      import('./async-subject/async-subject.module').then(
        (m) => m.AsyncSubjectModule
      ),
  },
  {
    path: ERROR.path,
    loadChildren: () =>
      import(
        './error-handling-catch-retry/error-handling-catch-retry.module'
      ).then((m) => m.ErrorHandlingCatchRetryModule),
  },
  {
    path: SWITCH_MAP.path,
    loadChildren: () =>
      import('./switch-map/switch-map.module').then((m) => m.SwitchMapModule),
  },
  {
    path: MERGE_MAP.path,
    loadChildren: () =>
      import('./merge-map/merge-map.module').then((m) => m.MergeMapModule),
  },
  {
    path: CONCAT_MAP.path,
    loadChildren: () =>
      import('./concat-map/concat-map.module').then((m) => m.ConcatMapModule),
  },
  {
    path: MERGE.path,
    loadChildren: () =>
      import('./merge/merge.module').then((m) => m.MergeModule),
  },
  {
    path: FLAT.path,
    loadChildren: () => import('./flat/flat.module').then((m) => m.FlatModule),
  },
  {
    path: TO_ARRAY.path,
    loadChildren: () =>
      import('./to-array/to-array.module').then((m) => m.ToArrayModule),
  },
  {
    path: REDUCE.path,
    loadChildren: () =>
      import('./reduce/reduce.module').then((m) => m.ReduceModule),
  },
  {
    path: TAP.path,
    loadChildren: () => import('./tap/tap.module').then((m) => m.TapModule),
  },
  {
    path: START_WITH.path,
    loadChildren: () =>
      import('./start-with/start-with.module').then((m) => m.StartWithModule),
  },
  { path: FROM_EVENT.path, loadChildren: () => import('./form-event/form-event.module').then(m => m.FormEventModule) },
  { path: PROMISE.path, loadChildren: () => import('./promise/promise.module').then(m => m.PromiseModule) },
  { path: ASYNC_AWAIT.path, loadChildren: () => import('./async-await/async-await.module').then(m => m.AsyncAwaitModule) },
  { path: FILTER.path, loadChildren: () => import('./filter/filter.module').then(m => m.FilterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservableRoutingModule {}
