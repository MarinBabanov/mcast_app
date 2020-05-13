import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IBMCPageRoutingModule } from './ibmc-routing.module';

import { IBMCPage } from './ibmc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IBMCPageRoutingModule
  ],
  declarations: [IBMCPage]
})
export class IBMCPageModule {}
