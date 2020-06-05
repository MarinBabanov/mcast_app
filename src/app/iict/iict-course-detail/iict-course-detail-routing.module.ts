import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IictCourseDetailPage } from './iict-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IictCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IictCourseDetailPageRoutingModule {}
