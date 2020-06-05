import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericCourseDetailPageRoutingModule } from './generic-course-detail-routing.module';

import { GenericCourseDetailPage } from './generic-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericCourseDetailPageRoutingModule
  ],
  declarations: [GenericCourseDetailPage]
})
export class GenericCourseDetailPageModule {}
