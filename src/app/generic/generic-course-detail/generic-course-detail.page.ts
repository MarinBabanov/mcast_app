import { Component, OnInit } from '@angular/core';
import { GENERICcourse } from '../genericcourses.model';
import { ActivatedRoute } from '@angular/router';
import { GenericService } from '../generic.service';

@Component({
  selector: 'app-generic-course-detail',
  templateUrl: './generic-course-detail.page.html',
  styleUrls: ['./generic-course-detail.page.scss'],
})
export class GenericCourseDetailPage implements OnInit {

  loadedGENERICcourse: GENERICcourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private GENERICcoursesService: GenericService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('GENERICcourseId')){
        //redirectUser
        return;
      }
      const GENERICcourseId = paramMap.get('GENERICcourseId');
      this.loadedGENERICcourse = this.GENERICcoursesService.getGENERICcourse(GENERICcourseId);
    });
  }

}
