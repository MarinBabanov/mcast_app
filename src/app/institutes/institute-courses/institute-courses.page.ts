import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstitutesService } from '../institutes.service';
import { Institute } from '../Institute.model';

@Component({
  selector: 'app-institute-courses',
  templateUrl: './institute-courses.page.html',
  styleUrls: ['./institute-courses.page.scss'],
})
export class InstituteCoursesPage implements OnInit {

  loadedInstitute: Institute;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private institutesService: InstitutesService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if (!paramMap.has('instituteId')){
        //redirect the user
        return;
      }
      const instituteId = paramMap.get('instituteId');
      this.loadedInstitute = this.institutesService.getInstitute(instituteId);
    });
  }

}
