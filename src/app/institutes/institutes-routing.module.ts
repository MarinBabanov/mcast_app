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
    children:[
      {
        path: '',
        loadChildren: () => import('./institute-courses/institute-courses.module').then( m => m.InstituteCoursesPageModule)
      },
      {
        path: ':courseId',
        loadChildren: () => import('./institute-courses/ias01/ias01.module').then( m => m.IAS01PageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstitutesPageRoutingModule {}
