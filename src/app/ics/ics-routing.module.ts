import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ICSPage } from './ics.page';

const routes: Routes = [
  {
    path: '',
    component: ICSPage
  },
  {
    path: 'ics-course-detail',
    loadChildren: () => import('./ics-course-detail/ics-course-detail.module').then( m => m.IcsCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ICSPageRoutingModule {}
