import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IETPage } from './iet.page';

const routes: Routes = [
  {
    path: '',
    component: IETPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IETPageRoutingModule {}
