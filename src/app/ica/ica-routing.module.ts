import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ICAPage } from './ica.page';

const routes: Routes = [
  {
    path: '',
    component: ICAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ICAPageRoutingModule {}
