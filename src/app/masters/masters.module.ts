import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MASTERSPageRoutingModule } from './masters-routing.module';

import { MASTERSPage } from './masters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MASTERSPageRoutingModule
  ],
  declarations: [MASTERSPage]
})
export class MASTERSPageModule {}
