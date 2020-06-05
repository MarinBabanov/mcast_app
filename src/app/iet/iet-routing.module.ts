import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IETPage } from './iet.page';

const routes: Routes = [
  {
    path: '',
    component: IETPage
  },
  {
    path: 'iet-course-detail',
    loadChildren: () => import('./iet-course-detail/iet-course-detail.module').then( m => m.IetCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IETPageRoutingModule {}
