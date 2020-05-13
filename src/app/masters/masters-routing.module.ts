import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MASTERSPage } from './masters.page';

const routes: Routes = [
  {
    path: '',
    component: MASTERSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MASTERSPageRoutingModule {}
