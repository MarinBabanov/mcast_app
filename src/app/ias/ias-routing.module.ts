import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IASPage } from './ias.page';

const routes: Routes = [
  {
    path: '',
    component: IASPage
  },
  {
    path: 'ias-course-detail',
    loadChildren: () => import('./ias-course-detail/ias-course-detail.module').then( m => m.IasCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IASPageRoutingModule {}
