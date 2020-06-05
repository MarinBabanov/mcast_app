import { Component, OnInit } from '@angular/core';
import { GOZOcourse } from './gozocourses.model';
import { GozoService } from './gozo.service';

@Component({
  selector: 'app-gozo',
  templateUrl: './gozo.page.html',
  styleUrls: ['./gozo.page.scss'],
})
export class GOZOPage implements OnInit {

  GOZOcourses: GOZOcourse[];

  constructor(private gozoService: GozoService) { }

  ngOnInit() {
    this.GOZOcourses = this.gozoService.getAllGOZOcourses();
  }

}
