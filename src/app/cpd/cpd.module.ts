import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPDPageRoutingModule } from './cpd-routing.module';

import { CPDPage } from './cpd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPDPageRoutingModule
  ],
  declarations: [CPDPage]
})
export class CPDPageModule {}
