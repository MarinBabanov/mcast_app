import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcaCourseDetailPage } from './ica-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: IcaCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcaCourseDetailPageRoutingModule {}
