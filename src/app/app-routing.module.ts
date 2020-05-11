import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'institutes',
    pathMatch: 'full'
  },
  {
    path: 'institutes',    
    children: [
      {
        path: '',
        loadChildren: () => import('./institutes/institutes.module').then( m => m.InstitutesPageModule)
      },
      {
        path: ':instituteId',
        loadChildren: () => import('./institutes/institute-courses/institute-courses.module').then( m => m.InstituteCoursesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
