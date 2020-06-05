import { Component, OnInit } from '@angular/core';
import { CPDcourse } from '../cpdcourses.model';
import { ActivatedRoute } from '@angular/router';
import { CpdService } from '../cpd.service';

@Component({
  selector: 'app-cpd-course-detail',
  templateUrl: './cpd-course-detail.page.html',
  styleUrls: ['./cpd-course-detail.page.scss'],
})
export class CpdCourseDetailPage implements OnInit {

  loadedCPDcourse: CPDcourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private CPDcoursesService: CpdService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('CPDcourseId')){
        //redirectUser
        return;
      }
      const CPDcourseId = paramMap.get('CPDcourseId');
      this.loadedCPDcourse = this.CPDcoursesService.getCPDcourse(CPDcourseId);
    });
  }

}
