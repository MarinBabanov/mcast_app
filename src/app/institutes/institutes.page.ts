import { Component, OnInit } from '@angular/core';
import { Institute } from './Institute.model';
import { InstitutesService } from './institutes.service';

@Component({
  selector: 'app-institutes',
  templateUrl: './institutes.page.html',
  styleUrls: ['./institutes.page.scss'],
})
export class InstitutesPage implements OnInit {

  institutes: Institute[];

  constructor(private institutesService: InstitutesService) { }

  ngOnInit() {
    this.institutes = this.institutesService.getAllInstitutes();
  }

}
