import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GozoCourseDetailPage } from './gozo-course-detail.page';

const routes: Routes = [
  {
    path: '',
    component: GozoCourseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GozoCourseDetailPageRoutingModule {}
