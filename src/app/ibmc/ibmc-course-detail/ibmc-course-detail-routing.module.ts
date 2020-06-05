import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IbmcCourseDetailPage } from './ibmc-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IbmcCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbmcCourseDetailPageRoutingModule {}
