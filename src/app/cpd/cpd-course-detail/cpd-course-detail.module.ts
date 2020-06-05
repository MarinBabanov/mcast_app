import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpdCourseDetailPageRoutingModule } from './cpd-course-detail-routing.module';

import { CpdCourseDetailPage } from './cpd-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpdCourseDetailPageRoutingModule
  ],
  declarations: [CpdCourseDetailPage]
})
export class CpdCourseDetailPageModule {}
