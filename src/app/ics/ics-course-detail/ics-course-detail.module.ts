import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcsCourseDetailPageRoutingModule } from './ics-course-detail-routing.module';

import { IcsCourseDetailPage } from './ics-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcsCourseDetailPageRoutingModule
  ],
  declarations: [IcsCourseDetailPage]
})
export class IcsCourseDetailPageModule {}
