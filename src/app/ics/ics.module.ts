import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ICSPageRoutingModule } from './ics-routing.module';

import { ICSPage } from './ics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ICSPageRoutingModule
  ],
  declarations: [ICSPage]
})
export class ICSPageModule {}
