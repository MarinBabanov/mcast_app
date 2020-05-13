import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAScourse } from '../iascourses.model';
import { IasService } from '../ias.service';

@Component({
  selector: 'app-ias-course-detail',
  templateUrl: './ias-course-detail.page.html',
  styleUrls: ['./ias-course-detail.page.scss'],
})
export class IasCourseDetailPage implements OnInit {

  loadedIAScourse: IAScourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private IAScoursesService: IasService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('IAScourseId')){
        //redirectUser
        return;
      }
      const IAScourseId = paramMap.get('IAScourseId');
      this.loadedIAScourse = this.IAScoursesService.getIAScourse(IAScourseId);
    });
  }

}
