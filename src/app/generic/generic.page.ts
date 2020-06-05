import { Component, OnInit } from '@angular/core';
import { GENERICcourse } from './genericcourses.model';
import { GenericService } from './generic.service';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.page.html',
  styleUrls: ['./generic.page.scss'],
})
export class GENERICPage implements OnInit {

  GENERICcourses: GENERICcourse[];

  constructor(private genericService: GenericService) { }

  ngOnInit() {
    this.GENERICcourses = this.genericService.getAllGENERICcourses();
  }

}
