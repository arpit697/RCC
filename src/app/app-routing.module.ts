import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME } from './constant/route';

const routes: Routes = [
  {path:'',redirectTo:HOME.path,pathMatch:'full'},
  {
    path: HOME.path,
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
