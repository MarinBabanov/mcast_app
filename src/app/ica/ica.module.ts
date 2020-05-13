import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ICAPageRoutingModule } from './ica-routing.module';

import { ICAPage } from './ica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ICAPageRoutingModule
  ],
  declarations: [ICAPage]
})
export class ICAPageModule {}
