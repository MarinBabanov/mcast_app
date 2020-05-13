import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CPDPage } from './cpd.page';

const routes: Routes = [
  {
    path: '',
    component: CPDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CPDPageRoutingModule {}
