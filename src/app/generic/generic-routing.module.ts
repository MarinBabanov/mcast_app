import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GENERICPage } from './generic.page';

const routes: Routes = [
  {
    path: '',
    component: GENERICPage
  },
  {
    path: 'generic-course-detail',
    loadChildren: () => import('./generic-course-detail/generic-course-detail.module').then( m => m.GenericCourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GENERICPageRoutingModule {}
