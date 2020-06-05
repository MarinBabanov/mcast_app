import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcaCourseDetailPageRoutingModule } from './ica-course-detail-routing.module';

import { IcaCourseDetailPage } from './ica-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcaCourseDetailPageRoutingModule
  ],
  declarations: [IcaCourseDetailPage]
})
export class IcaCourseDetailPageModule {}
