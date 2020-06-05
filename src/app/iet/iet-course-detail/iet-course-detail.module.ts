import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IetCourseDetailPageRoutingModule } from './iet-course-detail-routing.module';

import { IetCourseDetailPage } from './iet-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IetCourseDetailPageRoutingModule
  ],
  declarations: [IetCourseDetailPage]
})
export class IetCourseDetailPageModule {}
