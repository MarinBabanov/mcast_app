import { Component, OnInit } from '@angular/core';
import { IICTcourse } from './iictcourses.model';
import { IictService } from './iict.service';

@Component({
  selector: 'app-iict',
  templateUrl: './iict.page.html',
  styleUrls: ['./iict.page.scss'],
})
export class IICTPage implements OnInit {

  IICTcourses: IICTcourse[];

  constructor(private iictService: IictService) { }

  ngOnInit() {
    this.IICTcourses = this.iictService.getAllIICTcourses();
  }

}
