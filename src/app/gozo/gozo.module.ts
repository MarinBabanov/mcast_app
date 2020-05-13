import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GOZOPageRoutingModule } from './gozo-routing.module';

import { GOZOPage } from './gozo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GOZOPageRoutingModule
  ],
  declarations: [GOZOPage]
})
export class GOZOPageModule {}
