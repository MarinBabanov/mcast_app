import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IICTPageRoutingModule } from './iict-routing.module';

import { IICTPage } from './iict.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IICTPageRoutingModule
  ],
  declarations: [IICTPage]
})
export class IICTPageModule {}
