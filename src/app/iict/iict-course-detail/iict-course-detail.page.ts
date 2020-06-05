import { Component, OnInit } from '@angular/core';
import { IICTcourse } from '../iictcourses.model';
import { ActivatedRoute } from '@angular/router';
import { IictService } from '../iict.service';

@Component({
  selector: 'app-iict-course-detail',
  templateUrl: './iict-course-detail.page.html',
  styleUrls: ['./iict-course-detail.page.scss'],
})
export class IictCourseDetailPage implements OnInit {

  loadedIICTcourse: IICTcourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private IICTcoursesService: IictService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('IICTcourseId')){
        //redirectUser
        return;
      }
      const IICTcourseId = paramMap.get('IICTcourseId');
      this.loadedIICTcourse = this.IICTcoursesService.getIICTcourse(IICTcourseId);
    });
  }

}
