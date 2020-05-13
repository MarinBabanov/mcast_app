import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ICSPage } from './ics.page';

const routes: Routes = [
  {
    path: '',
    component: ICSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ICSPageRoutingModule {}
