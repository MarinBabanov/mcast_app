import { Component, OnInit } from '@angular/core';
import { MASTERScourse } from '../masterscourses.model';
import { ActivatedRoute } from '@angular/router';
import { MastersService } from '../masters.service';

@Component({
  selector: 'app-masters-course-detail',
  templateUrl: './masters-course-detail.page.html',
  styleUrls: ['./masters-course-detail.page.scss'],
})
export class MastersCourseDetailPage implements OnInit {

  loadedMASTERScourse: MASTERScourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private MASTERScoursesService: MastersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('MASTERScourseId')){
        //redirectUser
        return;
      }
      const MASTERScourseId = paramMap.get('MASTERScourseId');
      this.loadedMASTERScourse = this.MASTERScoursesService.getMASTERScourse(MASTERScourseId);
    });
  }

}
