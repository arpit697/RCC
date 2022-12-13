import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OBSERVABLE } from '../constant/route';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }, { path: OBSERVABLE.path, loadChildren: () => import('./observable/observable.module').then(m => m.ObservableModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
