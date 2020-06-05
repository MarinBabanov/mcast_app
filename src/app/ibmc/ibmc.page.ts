import { Component, OnInit } from '@angular/core';
import { IBMCcourse } from './ibmccourses.model';
import { IbmcService } from './ibmc.service';

@Component({
  selector: 'app-ibmc',
  templateUrl: './ibmc.page.html',
  styleUrls: ['./ibmc.page.scss'],
})
export class IBMCPage implements OnInit {

  IBMCcourses: IBMCcourse[];

  constructor(private ibmcService: IbmcService) { }

  ngOnInit() {
    this.IBMCcourses = this.ibmcService.getAllIBMCcourses();
  }

}
