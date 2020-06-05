import { Component, OnInit } from '@angular/core';
import { ICAcourse } from './icacourses.model';
import { IcaService } from './ica.service';

@Component({
  selector: 'app-ica',
  templateUrl: './ica.page.html',
  styleUrls: ['./ica.page.scss'],
})
export class ICAPage implements OnInit {

  ICAcourses: ICAcourse[];

  constructor(private icaService: IcaService) { }

  ngOnInit() {
    this.ICAcourses = this.icaService.getAllICAcourses();
  }

}
