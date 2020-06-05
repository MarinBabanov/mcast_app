import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICAcourse } from '../icacourses.model';
import { IcaService } from '../ica.service';

@Component({
  selector: 'app-ica-course-detail',
  templateUrl: './ica-course-detail.page.html',
  styleUrls: ['./ica-course-detail.page.scss'],
})
export class IcaCourseDetailPage implements OnInit {

  loadedICAcourse: ICAcourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private ICAcoursesService: IcaService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('ICAcourseId')){
        //redirectUser
        return;
      }
      const ICAcourseId = paramMap.get('ICAcourseId');
      this.loadedICAcourse = this.ICAcoursesService.getICAcourse(ICAcourseId);
    });
  }

}
