import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBMCcourse } from '../ibmccourses.model';
import { IbmcService } from '../ibmc.service';

@Component({
  selector: 'app-ibmc-course-detail',
  templateUrl: './ibmc-course-detail.page.html',
  styleUrls: ['./ibmc-course-detail.page.scss'],
})
export class IbmcCourseDetailPage implements OnInit {

  loadedIBMCcourse: IBMCcourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private IBMCcoursesService: IbmcService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('IBMCcourseId')){
        //redirectUser
        return;
      }
      const IBMCcourseId = paramMap.get('IBMCcourseId');
      this.loadedIBMCcourse = this.IBMCcoursesService.getIBMCcourse(IBMCcourseId);
    });
  }

}
