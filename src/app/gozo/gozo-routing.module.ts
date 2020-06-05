import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GOZOPage } from './gozo.page';

const routes: Routes = [
  {
    path: '',
    component: GOZOPage
  },
  {
    path: 'gozo-course-detail',
    loadChildren: () => import('./gozo-course-detail/gozo-course-detail.module').then( m => m.GozoCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GOZOPageRoutingModule {}
