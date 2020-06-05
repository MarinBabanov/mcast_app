import { Component, OnInit } from '@angular/core';
import { CPDcourse } from './cpdcourses.model';
import { CpdService } from './cpd.service';

@Component({
  selector: 'app-cpd',
  templateUrl: './cpd.page.html',
  styleUrls: ['./cpd.page.scss'],
})
export class CPDPage implements OnInit {

  CPDcourses: CPDcourse[];

  constructor(private cpdService: CpdService) { }

  ngOnInit() {
    this.CPDcourses = this.cpdService.getAllCPDcourses();
  }

}
