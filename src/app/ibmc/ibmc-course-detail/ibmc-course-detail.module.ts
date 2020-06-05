import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IbmcCourseDetailPageRoutingModule } from './ibmc-course-detail-routing.module';

import { IbmcCourseDetailPage } from './ibmc-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IbmcCourseDetailPageRoutingModule
  ],
  declarations: [IbmcCourseDetailPage]
})
export class IbmcCourseDetailPageModule {}
