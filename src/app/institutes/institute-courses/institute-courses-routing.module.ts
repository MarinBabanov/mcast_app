import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstituteCoursesPage } from './institute-courses.page';

const routes: Routes = [
  {
    path: '',
    component: InstituteCoursesPage
  },
  {
    path: 'ias01',
    loadChildren: () => import('./ias01/ias01.module').then( m => m.IAS01PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstituteCoursesPageRoutingModule {}


