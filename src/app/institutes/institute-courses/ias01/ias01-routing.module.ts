import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IAS01Page } from './ias01.page';

const routes: Routes = [
  {
    path: '',
    component: IAS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IAS01PageRoutingModule {}
