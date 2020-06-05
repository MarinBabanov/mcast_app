import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IictCourseDetailPageRoutingModule } from './iict-course-detail-routing.module';

import { IictCourseDetailPage } from './iict-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IictCourseDetailPageRoutingModule
  ],
  declarations: [IictCourseDetailPage]
})
export class IictCourseDetailPageModule {}
