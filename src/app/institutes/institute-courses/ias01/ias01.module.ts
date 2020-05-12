import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IAS01PageRoutingModule } from './ias01-routing.module';

import { IAS01Page } from './ias01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IAS01PageRoutingModule
  ],
  declarations: [IAS01Page]
})
export class IAS01PageModule {}
