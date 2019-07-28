import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },

  { path: 'create-schedule', component: CreateScheduleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
