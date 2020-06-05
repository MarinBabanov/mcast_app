import { Component, OnInit } from '@angular/core';
import { GOZOcourse } from '../gozocourses.model';
import { ActivatedRoute } from '@angular/router';
import { GozoService } from '../gozo.service';

@Component({
  selector: 'app-gozo-course-detail',
  templateUrl: './gozo-course-detail.page.html',
  styleUrls: ['./gozo-course-detail.page.scss'],
})
export class GozoCourseDetailPage implements OnInit {

  loadedGOZOcourse: GOZOcourse;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private GOZOcoursesService: GozoService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('GOZOcourseId')){
        //redirectUser
        return;
      }
      const GOZOcourseId = paramMap.get('GOZOcourseId');
      this.loadedGOZOcourse = this.GOZOcoursesService.getGOZOcourse(GOZOcourseId);
    });
  }

}
