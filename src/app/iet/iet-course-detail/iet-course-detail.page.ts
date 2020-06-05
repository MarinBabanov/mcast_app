import { Component, OnInit } from '@angular/core';
import { IetService } from '../iet.service';
import { ActivatedRoute } from '@angular/router';
import { IETcourse } from '../ietcourses.model';

@Component({
  selector: 'app-iet-course-detail',
  templateUrl: './iet-course-detail.page.html',
  styleUrls: ['./iet-course-detail.page.scss'],
})
export class IetCourseDetailPage implements OnInit {

  loadedIETcourse: IETcourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private IETcoursesService: IetService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('IETcourseId')){
        //redirectUser
        return;
      }
      const IETcourseId = paramMap.get('IETcourseId');
      this.loadedIETcourse = this.IETcoursesService.getIETcourse(IETcourseId);
    });
  }

}
