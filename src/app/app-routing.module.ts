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
    children:[
      {
        path:'',
        loadChildren: () => import('./ibmc/ibmc.module').then( m => m.IBMCPageModule)
      },
      {
        path:':IBMCcourseId',
        loadChildren: () => import('./ibmc/ibmc-course-detail/ibmc-course-detail.module').then( m => m.IbmcCourseDetailPageModule)
      }
    ]
    
  },
  {
    path: 'ics',
    children:[
      {
        path:'',
        loadChildren: () => import('./ics/ics.module').then( m => m.ICSPageModule)
      },
      {
        path:':ICScourseId',
        loadChildren: () => import('./ics/ics-course-detail/ics-course-detail.module').then( m => m.IcsCourseDetailPageModule)
      }
    ]
  },
  {
    path: 'ica',
    children:[
      {
        path:'',
        loadChildren: () => import('./ica/ica.module').then( m => m.ICAPageModule)
      },
      {
        path:':ICAcourseId',
        loadChildren: () => import('./ica/ica-course-detail/ica-course-detail.module').then( m => m.IcaCourseDetailPageModule)
      }
    ]
  },
  {
    path: 'iet',
    children:[
      {
        path:'',
        loadChildren: () => import('./iet/iet.module').then( m => m.IETPageModule)
      },
      {
        path:':IETcourseId',
        loadChildren: () => import('./iet/iet-course-detail/iet-course-detail.module').then( m => m.IetCourseDetailPageModule)
      }
    ]
  },
  {
    path: 'iict',
    children:[
      {
        path:'',
        loadChildren: () => import('./iict/iict.module').then( m => m.IICTPageModule)
      },
      {
        path:':IICTcourseId',
        loadChildren: () => import('./iict/iict-course-detail/iict-course-detail.module').then( m => m.IictCourseDetailPageModule)
      }
    ]
  },
  {
    path: 'gozo',
    children:[
      {
        path:'',
        loadChildren: () => import('./gozo/gozo.module').then( m => m.GOZOPageModule)
      },
      {
        path:':GOZOcourseId',
        loadChildren: () => import('./gozo/gozo-course-detail/gozo-course-detail.module').then( m => m.GozoCourseDetailPageModule)
      }
    ]
  },
  {
    path: 'generic',
    children:[
      {
        path:'',
        loadChildren: () => import('./generic/generic.module').then( m => m.GENERICPageModule)
      },
      {
        path:':GENERICcourseId',
        loadChildren: () => import('./generic/generic-course-detail/generic-course-detail.module').then( m => m.GenericCourseDetailPageModule)
      }
    ]
  },
  {
    path: 'masters',
    children:[
      {
        path:'',
        loadChildren: () => import('./masters/masters.module').then( m => m.MASTERSPageModule)
      },
      {
        path:':MASTERScourseId',
        loadChildren: () => import('./masters/masters-course-detail/masters-course-detail.module').then( m => m.MastersCourseDetailPageModule)
      }
    ]
  },
   {
     path: 'cpd',
     children:[
       {
         path:'',
         loadChildren: () => import('./cpd/cpd.module').then( m => m.CPDPageModule)
       },
       {
         path:':CPDcourseId',
         loadChildren: () => import('./cpd/cpd-course-detail/cpd-course-detail.module').then( m => m.CpdCourseDetailPageModule)
       }
     ]
   },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
