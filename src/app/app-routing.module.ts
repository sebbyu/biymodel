import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { Page404Component } from './page404/page404.component';
import { BuildComponent } from './build/build.component';
import { RegressionComponent } from './regression/regression.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comingsoon', component: ComingsoonComponent },
  { 
    path: 'buildmodel',
    children: [
      {
        path: '',
        component: BuildComponent,
      },
      {
        path: 'regression',
        component: RegressionComponent,
      },
    ],
  },
  { path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
