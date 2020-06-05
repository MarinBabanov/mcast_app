import { Component, OnInit } from '@angular/core';
import { ICScourse } from './icscourses.model';
import { IcsService } from './ics.service';

@Component({
  selector: 'app-ics',
  templateUrl: './ics.page.html',
  styleUrls: ['./ics.page.scss'],
})
export class ICSPage implements OnInit {

  ICScourses: ICScourse[];

  constructor(private icsService: IcsService) { }

  ngOnInit() {
    this.ICScourses = this.icsService.getAllICScourses();
  }

}
