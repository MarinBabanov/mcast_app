import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ias',
    children:[
      {
        path: '',
        loadChildren: () => import('./ias/ias.module').then( m => m.IASPageModule),
      },
      {
        path:':IAScourseId',
        loadChildren: () => import('./ias/ias-course-detail/ias-course-detail.module').then( m => m.IasCourseDetailPageModule)
      }
    ]
  },
  {
    path: 'ibmc',
    loadChildren: () => import('./ibmc/ibmc.module').then( m => m.IBMCPageModule)
  },
  {
    path: 'ics',
    loadChildren: () => import('./ics/ics.module').then( m => m.ICSPageModule)
  },
  {
    path: 'ica',
    loadChildren: () => import('./ica/ica.module').then( m => m.ICAPageModule)
  },
  {
    path: 'iet',
    loadChildren: () => import('./iet/iet.module').then( m => m.IETPageModule)
  },
  {
    path: 'iict',
    loadChildren: () => import('./iict/iict.module').then( m => m.IICTPageModule)
  },
  {
    path: 'gozo',
    loadChildren: () => import('./gozo/gozo.module').then( m => m.GOZOPageModule)
  },
  {
    path: 'generic',
    loadChildren: () => import('./generic/generic.module').then( m => m.GENERICPageModule)
  },
  {
    path: 'masters',
    loadChildren: () => import('./masters/masters.module').then( m => m.MASTERSPageModule)
  },
  {
    path: 'cpd',
    loadChildren: () => import('./cpd/cpd.module').then( m => m.CPDPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
