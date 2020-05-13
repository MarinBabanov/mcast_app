import { Injectable } from '@angular/core';
import { IAScourse } from './iascourses.model';

@Injectable({
  providedIn: 'root'
})
export class IasService {

  private IAScourses: IAScourse[] = [
    {
      id: '0101',
      number: '0101',
      title: 'Introductory Certificate in Applied Science',
      
      level: 'Level 1',
      duration: '1 Year Full-time',
      entryRequirements: ['Finished Compulsory Education Initial Assessment Tests (as may be applicable)'],

      description: 'This course of studies aims to provide the learner with the basic knowledge of scienceand technology and how these apply to everyday life. The study units deal with the different disciplines of science hence giving the learner an overview of all the main scientific concepts necessary as a basis for further vocational studies within the science sector.'
    },
    {
      id: '0102',
      number: '0102',
      title: 'Foundation Certificate in Applied Science',
      
      level: 'Level 2',
      duration: '1 Year Full-time',
      entryRequirements: ['Finished Compulsory Education', 'or', 'MCAST Introductory Certificate Initial Assessment Tests (as may be applicable)'],

      description: 'This programme of studies is aimed at giving learners the opportunity to further their studies in several diverse sciencerelated areas including environmental, health and industrial sciences. Learners will cover various topics such as Chemistry, Physics, Biology, English, Maltese, Mathematics and IT which will be taught in an applied manner that is relevant to the various science sectors in which employment may be sought with a higher qualification. This programme is particularly suitable for learners who have a scientific or technical aptitude, even if they have not decided fully on their ultimate career choice.'
    },
    {
      id: '0103',
      number: '0103',
      title: 'Diploma in Applied Science',
      
      level: 'Level 3',
      duration: '1 Year Full-time',
      entryRequirements: ['MCAST Foundation Certificate', 'or', '2 SEC/O-Level/SSC&P (Level 3) passes from English Language, Mathematics, Physics, Chemistry, Biology) Design and Technology, Health and Social Care'],

      description: 'This course of studies provides a strong grounding in fundamental science and technology principles, as well as an initial exposure to vocational science subjects related to health, environment, food and engineering industries. The learner will be able to understand the fundamental principles and laws of science, and how these are applied within the industrial sector. The learner will also be able to understand the science of different materials, and gain an awareness of the principles behind certain technologies.'
    },
  ];

  constructor() { }

  getAllIAScourses(){
    return [...this.IAScourses];
  }

  getIAScourse(IAScourseId: string){
    return {...this.IAScourses.find(IAScourse => {
      return IAScourse.id === IAScourseId;
    })};
  }
}
