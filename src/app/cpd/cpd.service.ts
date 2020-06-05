import { Injectable } from '@angular/core';
import { CPDcourse } from './cpdcourses.model';

@Injectable({
  providedIn: 'root'
})
export class CpdService {

  private CPDcourses: CPDcourse[] = [
    {
      "index": "10-01",
      "institute": "cpd",
      "code": "PD6-E16-20",
      "title": "Bachelor in Vocational Education and Training (Honours)",
      "title_notes": "",
      "desc_en": [
          "This Bachelor\u2019s programme aims to provide practitioners or intending practitioners in Vocational Education and Training (VET) settings with the knowledge, skills and competences to work effectively, efficiently and confidently as professional teachers, supervisors, mentors, educational designers and agents of change in the fast changing reality of industry 4.0.",
          "Participants on the programme will have the opportunity to build upon their existing disciplinary knowledge, while integrating it with the educational learning that is the core of the programme."
      ],
      "desc_mt": [
          "Dan il-Ba\u010bellerat huwa ma\u0127sub g\u0127al g\u0127alliema jew g\u0127alliema prospettivi li jixtiequ ja\u0127dmu f\u2019istituzzjonijiet u entitajiet Edukattivi fil-qasam tat-tag\u0127lim u t-ta\u0127ri\u0121 vokazzjonali. Il-programm jipprovdi opportunitajiet g\u0127al \u017cvilupp u tkabbir ta\u2019 g\u0127erf, \u0127iliet u kompetenzi biex iwassal il-parte\u010bipanti g\u0127al \u0127idma effettiva u effi\u010bjenti u biex jag\u0127tihom il-kunfidenza me\u0127tie\u0121a g\u0127al rwoli spe\u010bifi\u010bi b\u0127al dawk ta\u2019 g\u0127alliema vokazzjonali professjonali, supervi\u017curi u disinjaturi tal-prattika u l-politika edukattiva u a\u0121enti ta\u2019 bidla fl-edukazzjoni.",
          "Il-parte\u010bipanti jing\u0127ataw il-possibbilt\u00e0 li jibnu fuq id-dixxiplini tag\u0127hom billi j\u017cew\u0121u l-bagalja tal-g\u0127erf tag\u0127hom ma\u2019 metodi ta\u2019 tag\u0127lim, ta\u0127rig, u pedago\u0121ija fil-qasam tekniku u vokazzjonali li huma fi\u010b-\u010bentru tal-programm."
      ],
      "mqf": 6,
      "duration": "3 Years Full-Time",
      "req_entry": [
          "A full MCAST Level 4 qualification (120 ECVET) related to the area of specialisation with an overall average Grade of C or better",
          "2 A-Level subjects (with a Grade C or better) and 2 I-Level subjects related to the area of specialisation as indicated in the regulations (refer to website)"
      ],
      "intake_info": "October 2020",
      "exit_strategy": "MQF \/ EQF Level 6 Undergraduate Diploma in Vocational Education and Training 4.0 (60 ECTS)\\nMQF \/ EQF Level 6 Higher Diploma in Vocational Education and Training 4.0 (120 ECTS)\\nMQF \/ EQF Level 6 Bachelor of Vocational Education and Training 4.0 (Honours) (180 ECTS)",
      "fees": "",
      "careers": "Teacher in Vocational Education and Training\\nTeacher for vocational and applied subjects in Secondary Education"
  },
  {
      "index": "10-02",
      "institute": "cpd",
      "code": "PD7-E17-20",
      "title": "Master in Vocational Education Applied Research 4.0",
      "title_notes": "",
      "desc_en": [
          "The Master in Vocational Education and Training Applied Research 4.0 is intended for professionals who are involved in education within a vocational context. It provides pedagogical training through an experiential approach by bridging the contexts of education and industry, both of which influence and determine the nature and scope of vocational education.",
          "Participants are provided with opportunities to extend their knowledge, thinking and behaviours to become more effective professionals within their area of expertise. The Master is a proactive response, shifting from the traditional education programmes to innovative practices, linking teaching and action research based on the Scholarship of Teaching within the context of vocational education in Further and Higher Education."
      ],
      "desc_mt": [
          "Il-Master in Vocational Education and Training Applied Research 4.0 huwa ma\u0127sub g\u0127al professjonisti fil-qasam tal-edukazzjoni u t-ta\u0127ri\u0121 vokazzjonali. Il-programm jirrikonoxxi l-importanza u l-influwenza tal-industrija u l-edukazzjoni fuq l-edukazzjoni u t-ta\u0127ri\u0121 vokazzjonali, u g\u0127aldaqstant il-parte\u010bipanti jir\u010bievu ta\u0127ri\u0121 fil-pedago\u0121ija billi je\u017caminaw u jesperjenzaw mill-qrib il-kuntesti tal-industrija kif ukoll l-edukazzjoni.",
          "Il-Master iwassal lill-parte\u010bipanti g\u0127al tis\u0127i\u0127 fil-\u0127sieb, fl-g\u0127erf u fl-attitudnijiet me\u0127tie\u0121a minn professjonisti fil-qasam vokazzjonali spe\u010bifiku tag\u0127hom. Dan il-programm imur lil hinn minn metodi ta\u2019 tag\u0127lim tradizzjonali u jipproponi metodi innovattivi fejn it-ta\u0127ri\u0121, it-tag\u0127lim u r-ri\u010berka jing\u0127aqdu u ji\u0121u applikati flimkien g\u0127al skoperti \u0121odda u aktar g\u0127olja fil-qasam tat-ta\u0127ri\u0121 vokazzjonali u l-edukazzjoni aktar g\u0127olja."
      ],
      "mqf": 7,
      "duration": "3 Years Part-time Blended",
      "req_entry": [
          "Be a full-time academic member of staff at the Malta College of Arts, Science and Technology",
          "Be a full-time academic member of staff in another vocational education institution",
          "Be in possession of a Bachelor\u2019s Degree in the relevant subject area.",
          "Applicants must be practising in the teaching profession for a minimum of 4 hrs per week for the duration of the qualification.",
          "All eligible candidates shall follow the Post-Graduate Certificate in Vocational Education unless they are already in possession of another teaching qualification recognised by the board towards Recognition of Prior Learning (RPL), in which case such candidates will register for the Award in Vocational Education."
      ],
      "intake_info": "February 2021",
      "exit_strategy": "Post-Graduate Award in Vocational Education (15 ECTS)\\nPost-Graduate Certificate in Vocational Education (45 ECTS)\\nPost-Graduate Diploma in Vocational Education (90 ECTS)\\nMaster in Vocational Education (120 ECTS)",
      "fees": "9,000 euros for the full Master (payable in 1,000 euros per weekend school)",
      "careers": ""
  }
  ]
  constructor() { }

  getAllCPDcourses(){
    return [...this.CPDcourses];
  }

  getCPDcourse(CPDcourseId: string){
    return {...this.CPDcourses.find(CPDcourse => {
      return CPDcourse.index === CPDcourseId;
    })};
  }
}
