import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { Page404Component } from './page404/page404.component';
import { BuildComponent } from './build/build.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'comingsoon', component: ComingsoonComponent },
  { path: 'pagenotfound', component: Page404Component },
  { path: 'buildmodel', component:  BuildComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
