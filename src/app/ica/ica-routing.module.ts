import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ICAPage } from './ica.page';

const routes: Routes = [
  {
    path: '',
    component: ICAPage
  },
  {
    path: 'ica-course-detail',
    loadChildren: () => import('./ica-course-detail/ica-course-detail.module').then( m => m.IcaCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ICAPageRoutingModule {}
