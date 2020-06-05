import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICScourse } from '../icscourses.model';
import { IcsService } from '../ics.service';

@Component({
  selector: 'app-ics-course-detail',
  templateUrl: './ics-course-detail.page.html',
  styleUrls: ['./ics-course-detail.page.scss'],
})
export class IcsCourseDetailPage implements OnInit {

  loadedICScourse: ICScourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private ICScoursesService: IcsService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('ICScourseId')){
        //redirectUser
        return;
      }
      const ICScourseId = paramMap.get('ICScourseId');
      this.loadedICScourse = this.ICScoursesService.getICScourse(ICScourseId);
    });
  }

}
