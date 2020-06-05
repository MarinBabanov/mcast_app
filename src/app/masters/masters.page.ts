import { Component, OnInit } from '@angular/core';
import { MASTERScourse } from './masterscourses.model';
import { MastersService } from './masters.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.page.html',
  styleUrls: ['./masters.page.scss'],
})
export class MASTERSPage implements OnInit {

  MASTERScourses: MASTERScourse[];

  constructor(private mastersService: MastersService) { }

  ngOnInit() {
    this.MASTERScourses = this.mastersService.getAllMASTERScourses();
  }

}
