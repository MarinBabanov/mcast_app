import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IICTPage } from './iict.page';

const routes: Routes = [
  {
    path: '',
    component: IICTPage
  },
  {
    path: 'iict-course-detail',
    loadChildren: () => import('./iict-course-detail/iict-course-detail.module').then( m => m.IictCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IICTPageRoutingModule {}
