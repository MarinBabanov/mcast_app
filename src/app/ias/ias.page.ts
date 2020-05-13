import { Component, OnInit } from '@angular/core';
import { IAScourse } from './iascourses.model';
import { IasService } from './ias.service';

@Component({
  selector: 'app-ias',
  templateUrl: './ias.page.html',
  styleUrls: ['./ias.page.scss'],
})
export class IASPage implements OnInit {

  IAScourses: IAScourse[];

  constructor(private iasService: IasService) { }

  ngOnInit() {
    this.IAScourses = this.iasService.getAllIAScourses();
  }

}
