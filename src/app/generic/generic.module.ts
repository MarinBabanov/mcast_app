import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GENERICPageRoutingModule } from './generic-routing.module';

import { GENERICPage } from './generic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GENERICPageRoutingModule
  ],
  declarations: [GENERICPage]
})
export class GENERICPageModule {}
