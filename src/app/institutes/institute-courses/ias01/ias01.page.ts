import { Component, OnInit } from '@angular/core';
import { IAS01 } from './ias01.model';

@Component({
  selector: 'app-ias01',
  templateUrl: './ias01.page.html',
  styleUrls: ['./ias01.page.scss'],
})
export class IAS01Page implements OnInit {

  ISA01_instititute: IAS01[] = [
    {
      id: '0101',
      number: '0101',
      title: 'Course 0101',
      description: ['Course Description', 'Level', 'Course duration', 'Entry Requirements']
    },
    {
      id: '0102',
      number: '0102',
      title: 'Course 0102',
      description: ['Course Description', 'Level', 'Course duration', 'Entry Requirements']
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
