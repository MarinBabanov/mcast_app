import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IasCourseDetailPageRoutingModule } from './ias-course-detail-routing.module';

import { IasCourseDetailPage } from './ias-course-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IasCourseDetailPageRoutingModule
  ],
  declarations: [IasCourseDetailPage]
})
export class IasCourseDetailPageModule {}
