import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericCourseDetailPage } from './generic-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GenericCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericCourseDetailPageRoutingModule {}
