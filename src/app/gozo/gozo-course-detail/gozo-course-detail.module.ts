import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GozoCourseDetailPageRoutingModule } from './gozo-course-detail-routing.module';

import { GozoCourseDetailPage } from './gozo-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GozoCourseDetailPageRoutingModule
  ],
  declarations: [GozoCourseDetailPage]
})
export class GozoCourseDetailPageModule {}
