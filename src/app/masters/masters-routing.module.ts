import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MASTERSPage } from './masters.page';

const routes: Routes = [
  {
    path: '',
    component: MASTERSPage
  },
  {
    path: 'masters-course-detail',
    loadChildren: () => import('./masters-course-detail/masters-course-detail.module').then( m => m.MastersCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MASTERSPageRoutingModule {}
