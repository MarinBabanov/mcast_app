import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IBMCPage } from './ibmc.page';

const routes: Routes = [
  {
    path: '',
    component: IBMCPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IBMCPageRoutingModule {}
