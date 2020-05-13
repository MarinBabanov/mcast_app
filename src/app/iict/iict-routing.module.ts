import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IICTPage } from './iict.page';

const routes: Routes = [
  {
    path: '',
    component: IICTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IICTPageRoutingModule {}
