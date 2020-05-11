import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteCoursesPage } from './institute-courses.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteCoursesPageRoutingModule {}
