import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPDPage } from './cpd.page';

const routes: Routes = [
  {
    path: '',
    component: CPDPage
  },
  {
    path: 'cpd-course-detail',
    loadChildren: () => import('./cpd-course-detail/cpd-course-detail.module').then( m => m.CpdCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPDPageRoutingModule {}
