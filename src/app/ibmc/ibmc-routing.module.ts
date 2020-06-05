import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IBMCPage } from './ibmc.page';

const routes: Routes = [
  {
    path: '',
    component: IBMCPage
  },
  {
    path: 'ibmc-course-detail',
    loadChildren: () => import('./ibmc-course-detail/ibmc-course-detail.module').then( m => m.IbmcCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IBMCPageRoutingModule {}
