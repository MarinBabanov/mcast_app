import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IASPageRoutingModule } from './ias-routing.module';

import { IASPage } from './ias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IASPageRoutingModule
  ],
  declarations: [IASPage]
})
export class IASPageModule {}
