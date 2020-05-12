import { Injectable } from '@angular/core';
import { Institute } from './Institute.model';

@Injectable({
  providedIn: 'root'
})
export class InstitutesService {

  private institutes: Institute[] = [
    {
      id: 'inst1',
      title: 'Institute 1',
      // Courses placeholder to be changed to a separate page with individual clickable courses
      // I have no idea what the fuck is going on...
      courses: ['./institutes/institute-courses/ias01']
    },
    {
      id: 'inst2',
      title: 'Institute 2',
      courses: [
        'Institute 2 Course 1', 
        'Institute 2 Course 2', 
        'Institute 2 Course 3']
    },
    {
      id: 'inst3',
      title: 'Institute 3',
      courses: [
      'Institute 3 Course 1', 
      'Institute 3 Course 2', 
      'Institute 3 Course 3']
    },
    {
      id: 'inst4',
      title: 'Institute 4',
      courses: [
        'Institute 4 Course 1', 
        'Institute 4 Course 2', 
        'Institute 4 Course 3']
    },
    {
      id: 'inst5',
      title: 'Institute 5',
      courses: [
        'Institute 5 Course 1', 
        'Institute 5 Course 2', 
        'Institute 5 Course 3']
    },
    {
      id: 'inst6',
      title: 'Institute 6',
      courses: [
        'Institute 6 Course 1', 
        'Institute 6 Course 2', 
        'Institute 6 Course 3']
    },
    {
      id: 'inst7',
      title: 'Institute 7',
      courses: [
        'Institute 7 Course 1', 
        'Institute 7 Course 2', 
        'Institute 7 Course 3']
    },
    {
      id: 'inst8',
      title: 'Institute 8',
      courses: [
        'Institute 8 Course 1', 
        'Institute 8 Course 2', 
        'Institute 8 Course 3']
    },
    {
      id: 'inst9',
      title: 'Institute 9',
      courses: [
        'Institute 9 Course 1', 
        'Institute 9 Course 2', 
        'Institute 9 Course 3']
    },
    {
      id: 'inst10',
      title: 'Institute 10',
      courses: [
        'Institute 10 Course 1', 
        'Institute 10 Course 2', 
        'Institute 10 Course 3']
    },
  ]

  constructor() { }

  getAllInstitutes(){
    return [...this.institutes];
  }

  getInstitute(instituteId: string){
    return {...this.institutes.find(institute => {
      return institute.id === instituteId;
    })};
  }
}
