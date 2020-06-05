import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IetCourseDetailPage } from './iet-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IetCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IetCourseDetailPageRoutingModule {}
