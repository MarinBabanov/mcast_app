import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutesPage } from './institutes.page';

const routes: Routes = [
  {
    path: '',
    component: InstitutesPage
  },
  {
    path: 'institute-courses',
    loadChildren: () => import('./institute-courses/institute-courses.module').then( m => m.InstituteCoursesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutesPageRoutingModule {}
