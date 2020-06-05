import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MastersCourseDetailPage } from './masters-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MastersCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MastersCourseDetailPageRoutingModule {}
