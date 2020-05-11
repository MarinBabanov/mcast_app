import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteCoursesPageRoutingModule } from './institute-courses-routing.module';

import { InstituteCoursesPage } from './institute-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteCoursesPageRoutingModule
  ],
  declarations: [InstituteCoursesPage]
})
export class InstituteCoursesPageModule {}
