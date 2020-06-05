import { Component, OnInit } from '@angular/core';
import { IETcourse } from './ietcourses.model';
import { IetService } from './iet.service';

@Component({
  selector: 'app-iet',
  templateUrl: './iet.page.html',
  styleUrls: ['./iet.page.scss'],
})
export class IETPage implements OnInit {

  IETcourses: IETcourse[];

  constructor(private ietService: IetService) { }

  ngOnInit() {
    this.IETcourses = this.ietService.getAllIETcourses();
  }

}
