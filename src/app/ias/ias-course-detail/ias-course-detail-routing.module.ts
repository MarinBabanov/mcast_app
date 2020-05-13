import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IasCourseDetailPage } from './ias-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IasCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IasCourseDetailPageRoutingModule {}
