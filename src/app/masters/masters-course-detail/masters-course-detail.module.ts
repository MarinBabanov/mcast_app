import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MastersCourseDetailPageRoutingModule } from './masters-course-detail-routing.module';

import { MastersCourseDetailPage } from './masters-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MastersCourseDetailPageRoutingModule
  ],
  declarations: [MastersCourseDetailPage]
})
export class MastersCourseDetailPageModule {}
