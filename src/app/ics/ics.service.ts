import { Injectable } from '@angular/core';
import { ICScourse } from './icscourses.model';

@Injectable({
  providedIn: 'root'
})
export class IcsService {

  private ICScourses: ICScourse[] = [
    {
      "index": "03-01",
      "institute": "ics",
      "code": "CS1-01-19",
      "title": "Introductory Certificate in Care",
      "title_notes": "",
      "desc_en": [
          "This programme of study is an ideal start to a career in Health and Social Care for those learners who have just finished their compulsory education with minimum certification. This one-year full-time programme does not qualify the learner to work in the sector. However, the vocational and key skills modules which make up the course specification will help the learner to progress slowly to higher levels of study.",
          "The course includes both practical and theoretical lectures which cover the basics of health and social care including basic nutrition, first aid and interpersonal communication with service-users that projects respect, integrity, dignity, and anti-discrimination."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studju huwa l-bidu ideali g\u0127al karriera fis-Sa\u0127\u0127a u l-Kura So\u010bjali g\u0127al dawk l-istudenti li jkunu g\u0127adhom kemm lestew l-edukazzjoni obbligatorja tag\u0127hom bi ftit jew xejn \u010bertifikati. Dan il-programm full-time ta\u2019 sena ma jag\u0127tix lill-istudent bi\u017c\u017cejjed kwalifiki biex ja\u0127dem fis-settur. Madankollu, l-unitajiet vokazzjonali u tal-\u0127iliet ewlenin li jiffurmaw l-ispe\u010bifikazzjoni tal-kors iwasslu lill-istudent biex javvanza bil-mod g\u0127al livelli og\u0127la ta\u2019 studju.",
          "Il-kors jinkludi lezzjonijiet pratti\u010bi kif ukoll ta\u2019 teorija li jkopru l-elementi ba\u017ci\u010bi tas-sa\u0127\u0127a u l-kura so\u010bjali, inklu\u017ci n-nutrizzjoni ba\u017cika, l-ewwel g\u0127ajnuna u l-komunikazzjoni ma\u2019 dawk li ju\u017caw is-servizzi, li tkun tirrifletti r-rispett, l-integrit\u00e0, id-dinjit\u00e0 u n-nuqqas ta\u2019 diskriminazzjoni."
      ],
      "mqf": 1,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished Compulsory Education"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Initial Assessment Tests (as may be applicable)"
      ],
      "careers": ""
  },
  {
      "index": "03-02",
      "institute": "ics",
      "code": "CS1-02-19",
      "title": "Introductory Certificate in Hairdressing",
      "title_notes": "",
      "desc_en": [
          "This programme of studies introduces the learner to modules related to this sector. A number of interesting topics will be discussed. Examples include the different types of equipment and products typically found in hairdressing salons, customer care services, communication skills, professional attitudes, window-dressing, personal appearance and hygiene. The study-units incorporate theoretical aspects of hairdressing as well as practical sessions of basic hairdressing procedures using a mannequin head.",
          "Learners are also given the opportunity to strengthen their key skills subjects. Weekly lessons in English Language, Maltese, Mathematics, Science, Information Technology and Individual and Social Responsibility (ISR) are delivered in a manner that will help to render the vocational units more appealing and relevant to the students."
      ],
      "desc_mt": [
          "Dan il-programm jintrodu\u010bi lill-istudent g\u0127al su\u0121\u0121etti relatati ma\u2019 dan is-settur. E\u017cempji jinkludu t-tipi differenti ta\u2019 tag\u0127mir u prodotti li normalment insibu f\u2019salons tal-hairdressing, is-servizzi tal-kura tal-klijenti, il-\u0127iliet ta\u2019 komunikazzjoni, l-attitudnijiet personali, l-arran\u0121ament tal-vetrini tas-salon, id-dehra u l-i\u0121jene personali. L-unitajiet ta\u2019 studju jinkorporaw aspetti teoreti\u010bi tal-hairdressing, kif ukoll sessjonijiet pratti\u010bi dwar il-pro\u010beduri ba\u017ci\u010bi tal-hairdressing fejn tintu\u017ca ras ta\u2019 manikin.",
          "L-istudenti jing\u0127ataw ukoll l-opportunit\u00e0 li jsa\u0127\u0127u s-su\u0121\u0121etti tal-\u0127iliet ewlenin tag\u0127hom. Il-lezzjonijiet ta\u2019 kull \u0121img\u0127a fl-Ingli\u017c, il-Malti, il-Matematika, ix-Xjenza, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali (ISR) jing\u0127ataw b\u2019mod li jg\u0127inu biex l-unitajiet vokazzjonali jkunu aktar attraenti u rilevanti g\u0127all-istudenti."
      ],
      "mqf": 1,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished Compulsory Education"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Initial Assessment Tests (as may be applicable)"
      ],
      "careers": ""
  },
  {
      "index": "03-03",
      "institute": "ics",
      "code": "CS2-01-19",
      "title": "Foundation Certificate in Care",
      "title_notes": "",
      "desc_en": [
          "This programme of studies is aimed at those individuals who wish to embark on a future career in the Health and Social Care Sector. During the year the learners will have a variety of lectures which will give them an understanding of basic concepts related to this sector. Lectures will focus on human behaviour, the way the body works and what constitutes a safe working environment. Learners will also be given the opportunity to strengthen their key skills subjects including Maltese, English, Mathematics and Science through the vocational perspective.",
          "Learners will have the opportunity to visit organisations related to this sector so that they become accustomed to the environment."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studju full-time huwa mmirat lejn dawk l-individwi li fil-futur jixtiequ jibdew karriera fis-Settur tas-Sa\u0127\u0127a u l-Kura So\u010bjali. Matul is-sena, l-istudenti jkollhom varjet\u00e0 ta\u2019 lezzjonijiet li jag\u0127tuhom tag\u0127rif dwar il-kun\u010betti ba\u017ci\u010bi relatati ma\u2019 dan is-settur. Il-lezzjonijiet jiffokaw fuq l-im\u0121iba tal-bniedem, il-mod kif ja\u0127dem il-\u0121isem u x\u2019inhu dak li jag\u0127mel ambjent tax-xog\u0127ol sikur. L-istudenti jing\u0127ataw ukoll l-opportunit\u00e0 li jsa\u0127\u0127u s-su\u0121\u0121etti tal-\u0127iliet ewlenin tag\u0127hom, inklu\u017ci l-Malti, l-Ingli\u017c, il-Matematika u x-Xjenza mil-lat vokazzjonali.",
          "L-istudenti jkollhom l-opportunit\u00e0 li j\u017curu organizzazzjonijiet relatati ma\u2019 dan is-settur sabiex isiru familjari mal-ambjent. Fl-a\u0127\u0127ar ta\u2019 dan il-kors ta\u2019 sena, l-istudenti jkollhom l-opportunit\u00e0 li javvanzaw g\u0127al-livell ta\u2019 Diploma fl-istess settur."
      ],
      "mqf": 2,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished Compulsory Education",
          "MCAST Introductory Certificate"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Initial Assessment Tests (as may be applicable)"
      ],
      "careers": ""
  },
  {
      "index": "03-04",
      "institute": "ics",
      "code": "CS2-02-19",
      "title": "Foundation Certificate in Hairdressing, Beauty and Well-Being",
      "title_notes": "",
      "desc_en": [
          "This programme of study provides an overview of the different routes available to learners within the Institute of Community Services, whilst leaving all their options open.",
          "The modules on offer provide learners with basic knowledge in health and safety practices employed during beauty and hairdressing techniques and procedures. Other modules focus on an understanding of the basic scientific concepts related to all hair and beauty services and treatments, while introducing the learners to basic business concepts.",
          "The course also provides learners with quality work experience exposure where they will be expected to assist and carry out a range of assigned tasks, using approved models. Learners are required to purchase the necessary hairdressing and beauty accessories at the beginning of the academic year."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji jipprovdi \u0127arsa \u0121enerali lejn it-toroq differenti li huma disponibbli g\u0127all-istudenti fl-Istitut tas-Servizzi Komunitarji, filwaqt li j\u0127allilhom miftu\u0127a l-g\u0127a\u017cliet kollha.",
          "L-unitajiet offruti jipprovdu lill-istudenti b\u2019g\u0127arfien ba\u017ciku tal-pratti\u010bi tas-sa\u0127\u0127a u s-sigurt\u00e0 u\u017cati fit-teknika u l-pro\u010beduri tas-sbu\u0127ija u l-hairdressing. Unitajiet o\u0127ra jiffokaw fuq l-g\u0127arfien tal-kun\u010betti xjentifi\u010bi ba\u017ci\u010bi relatati mas-servizzi u t-trattamenti kollha tax-xag\u0127ar u tas-sbu\u0127ija; u jintrodu\u010bu wkoll lill-istudenti g\u0127all-kun\u010betti ba\u017ci\u010bi tan-negozju.",
          "Il-kors jesponi lill-istudenti g\u0127al esperjenza ta\u2019 xog\u0127ol ta\u2019 kwalit\u00e0 fejn ikunu mistennija ju\u017caw mudelli approvati biex jassistu u jwettqu firxa ta\u2019 xog\u0127lijiet assenjati lilhom. L-istudenti huma me\u0127tie\u0121a jixtru l-a\u010b\u010bessorji ne\u010bessarji tal-hairdressing u tas-sbu\u0127ija fil-bidu tas-sena akkademika."
      ],
      "mqf": 2,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished Compulsory Education",
          "MCAST Introductory Certificate"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Initial Assessment Tests (as may be applicable)"
      ],
      "careers": ""
  },
  {
      "index": "03-05",
      "institute": "ics",
      "code": "CS2-03-19",
      "title": "Foundation Certificate in Sport",
      "title_notes": "",
      "desc_en": [
          "This programme of studies serves as a stepping stone to a future working career in the sport sector. The learner experiences the practical and basic theoretical components of a number of sports and fitness related subjects. The vocational study-units cover the basics of health and active lifestyles, community sports, fitness training methods and include an introduction to gym-based exercise. Concurrently, learners strengthen their knowledge of the key skills in English, Maltese, Mathematics, Science, Information Technology, and Individual and Social Responsibility. Throughout the academic year, MCAST and the Institute of Community Services organise a number of sport related extra-curricular activities in which the learners will be invited to participate in order to enrich their experience on campus."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji jservi b\u0127ala pass lejn karriera ta\u2019 xog\u0127ol futura fis-settur tal-isport. L-istudent jesperjenza l-komponenti teoreti\u010bi pratti\u010bi u ba\u017ci\u010bi ta\u2019 g\u0127add ta\u2019 su\u0121\u0121etti relatati mal-isport u mal-kundizzjoni fi\u017cika tajba. L-unitajiet ta\u2019 studju vokazzjonali jkopru l-elementi ba\u017ci\u010bi ta\u2019 sa\u0127\u0127a tajba u stili ta\u2019 \u0127ajja attiva, l-isport fil-komunit\u00e0, il-metodi ta\u2019 ta\u0127ri\u0121 g\u0127al kundizzjoni fi\u017cika tajba, u jinkludu introduzzjoni g\u0127all-e\u017cer\u010bizzju bba\u017cat fil-gym. Fl-istess \u0127in, l-istudenti jsa\u0127\u0127u l-g\u0127arfien tag\u0127hom tal-\u0127iliet ewlenin fl-Ingli\u017c, il-Malti, il-Matematika, ix-Xjenza, it-Teknolo\u0121ija tal-Informazzjoni, u r-Responsabbilt\u00e0 Individwali u So\u010bjali. Matul is-sena akkademika, l-MCAST u l-Istitut tas-Servizzi Komunitarji jorganizzaw g\u0127add ta\u2019 attivitajiet extrakurrikulari relatati mal-isport li fihom l-istudenti jkunu mistiedna jipparte\u010bipaw sabiex l-esperjenza tag\u0127hom fil-kampus tkun ferm isba\u0127."
      ],
      "mqf": 2,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished Compolsory Education",
          "MCAST Introductory Certificate"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Initial Assesment Tests (as may be applicable)",
          "Medical clearance required"
      ],
      "careers": ""
  },
  {
      "index": "03-06",
      "institute": "ics",
      "code": "CS3-01-19",
      "title": "Diploma for Beauty Specialists",
      "title_notes": "",
      "desc_en": [
          "This programme of studies offers learners the possibility to seek employment in salons as Beauty Specialists. Alternatively, students who complete successfully this one-year full-time course may wish to consider furthering their studies by progressing to the Level 4 Advanced Diploma programme in Beauty and Complementary Therapies.",
          "Leaners are guided on how to develop and carry out individual treatment plans based on the specific requirements of each individual client. Treatments include skin care, manicure and pedicure, depilation, nails, make-up services, eyebrow and eyelash treatments. Other modules relate to health and safety practices in the salon and business aspects including business plans, effective communication skills and proper conduct with clients."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji joffri lill-istudenti l-possibbilt\u00e0 li jfittxu impjieg fis-salons b\u0127ala Spe\u010bjalisti tas-Sbu\u0127ija. Min-na\u0127a l-o\u0127ra, l-istudenti li jtemmu dan il-kors b\u2019su\u010b\u010bess jistg\u0127u jikkunsidraw li jkomplu l-istudji tag\u0127hom billi jid\u0127lu ghall-Advanced Diploma in Beauty and Complementary Therapies (Livell 4).",
          "L-istudenti jing\u0127ataw gwida dwar kif g\u0127andhom iwettqu trattamenti individwali mfassla g\u0127al kull klijent individwali. Dawn it-trattamenti jistg\u0127u jinkludu trattamenti g\u0127all-kura tal-\u0121ilda, tal-idejn u tas-saqajn, depilazzjoni, il-kura tad-dwiefer, servizzi ta\u2019 make-up u trattamenti tax-xag\u0127ar tal-g\u0127ajnejn u tal-\u0127u\u0121bejn. Unitajiet o\u0127ra jirrigwardjaw pratti\u010bi tas-sa\u0127\u0127a u s-sigurt\u00e0 fis-salon u aspetti tan-negozju inklu\u017ci pjanijiet tan-negozju, \u0127iliet ta\u2019 komunikazzjoni effettivi u m\u0121iba tajba mal-klijenti."
      ],
      "mqf": 3,
      "duration": 1,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English Language, Biology, Chemistry, Home Economics, Art"
      ],
      "req_other": [
          ""
      ],
      "careers": "Beauty specialist"
  },
  {
      "index": "03-07",
      "institute": "ics",
      "code": "CS3-A2-19",
      "title": "Diploma in Hairdressing \u2013 Women",
      "title_notes": "",
      "desc_en": [
          "Hairdressing is a creative industry which requires skilled technical stylists to cope with the customers\u2019 demands. In today\u2019s fast-moving world self-image is your brand. This programme of studies provides the learners with the skills and confidence to step on to the road to success; indeed, the opportunities are endless.",
          "Learners cover a variety of interesting study-units such as client consultation, hair styling for different occasions, hair colouring, perming and straightening. This includes experience in the Community Services salons as well as placements in industry as part of the Apprenticeship scheme. Learners will also further develop their knowledge in key skills."
      ],
      "desc_mt": [
          "Il-hairdressing huwa industrija kreattiva li tirrikjedi stilisti tekni\u010bi kwalifikati biex ila\u0127\u0127qu mad-domanda tal-klijenti. Fid-dinja mg\u0127a\u0121\u0121la tal-lum, l-imma\u0121ni tal-persuna tiddefiniha. Dan il-programm ta\u2019 studji jipprovdi lill-istudenti bil-\u0127iliet u l-kunfidenza biex jibdew it-triq g\u0127as-su\u010b\u010bess; fil-fatt l-opportunitajiet huma bla limitu.",
          "L-istudenti jkopru varjet\u00e0 ta\u2019 unitajiet ta\u2019 studju b\u0127all-konsultazzjoni tal-klijenti, l-issettjar tax-xag\u0127ar g\u0127al okka\u017cjonijiet differenti, i\u017c-\u017cebg\u0127a, l-ippermjar u l-illixxjar tax-xag\u0127ar. Dan jinkludi esperjenza fis-salons tal-Istitut tas-Servizzi Komunitarji, kif ukoll esperjenza ta\u2019 xog\u0127ol fl-industrija b\u0127ala parti mill-iskema tal-Apprendistat. L-istudenti jkomplu wkoll ji\u017cviluppaw l-g\u0127arfien tag\u0127hom f\u2019\u0127iliet ewlenin."
      ],
      "mqf": 3,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English Language, Biology, Chemistry, Physics, Home Economics, General Science, Art"
      ],
      "req_other": [
          ""
      ],
      "careers": "Junior hair stylist for women, Sales representative for hair products"
  },
  {
      "index": "03-08",
      "institute": "ics",
      "code": "CS3-03-19",
      "title": "Diploma in Health and Social Care",
      "title_notes": "",
      "desc_en": [
          "Prospective candidates who enrol in this course should have an interest in working with elderly persons and persons with different abilities. Lectures include a number of varied topics such as nutrition, equality, diversity, dignity and rights of individuals. Moreover, this programme of studies provides a route for education within a number of specialised areas such as the Social Care sector, Early Years Education, and Health Sciences. The programme offers an opportunity for learners to carry out work-based learning in two different host organisations which form part of the sector. Here they will be expected to carry out a range of assigned tasks under supervision.",
          "In the case of learners who do not wish to further their studies, this one-year programme provides a suitable exit point to seek employment as a care worker."
      ],
      "desc_mt": [
          "Il-kandidati prospettivi li jirre\u0121istraw g\u0127al dan il-kors full-time g\u0127andu jkollhom interess li ja\u0127dmu ma\u2019 persuni anzjani u individwi b\u2019kapa\u010bitajiet differenti. Il-lezzjonijiet jinkludu g\u0127add ta\u2019 su\u0121\u0121etti varjati b\u0127an-nutrizzjoni, l-ugwaljanza, id-diversit\u00e0, id-dinjit\u00e0 u d-drittijiet tal-individwi. Barra minn hekk, dan il-programm ta\u2019 studji jwitti t-triq g\u0127al edukazzjoni f\u2019g\u0127add ta\u2019 oqsma spe\u010bjalizzati b\u0127as-settur tal-Kura So\u010bjali, l-Edukazzjoni tat-Tfal fis-Snin Bikrin, u x-Xjenzi tas-Sa\u0127\u0127a. Il-programm joffri opportunit\u00e0 biex l-istudenti jir\u010bievu tag\u0127lim ibba\u017cat fil-post tax-xog\u0127ol, f\u2019organizzazzjonijiet ospitanti differenti li jiffurmaw parti mis-settur. Hawnhekk ikunu mistennija jwettqu ta\u0127t supervi\u017cjoni, ix-xog\u0127ol li huma ji\u0121u assenjati.",
          "Fil-ka\u017c ta\u2019 studenti li ma jixtiqux ikomplu l-istudji tag\u0127hom, dan il-programm ta\u2019 sena jipprovdi punt ta\u2019 \u0127ru\u0121 xieraq biex wie\u0127ed isib impjieg b\u0127ala \u0127addiem ta\u2019 appo\u0121\u0121 jew assistent fil-qasam tal-kura tas-sa\u0127\u0127a."
      ],
      "mqf": 3,
      "duration": 1,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English Language, Biology, Physics, Chemistry, Maltese, Social Studies, Nutrition, Food Consumer Studies (Home Economics)"
      ],
      "req_other": [
          "Prior to embarking on any Placement, learners need to:",
          "&middot; satisfy the requirements of the Protection of Minors Act (POMA);",
          "&middot; satisfy specific immunisation requirements; and",
          "&middot; present a clean police conduct."
      ],
      "careers": "Care worker, Care assistant, Support care worker"
  },
  {
      "index": "03-09",
      "institute": "ics",
      "code": "CS3-04-19",
      "title": "Diploma in Sport",
      "title_notes": "",
      "desc_en": [
          "This programme of studies covers the basics of Anatomy and Physiology in Sport, Fitness Testing, Fitness Instruction, Fundamental Methodology of Physical Activity and Sport, as well as the theory and practice of the mainstream sports. The syllabus incorporates a work-based learning component thus facilitating the transition into employment for those learners who do not wish to further their studies. By the end of the course, the learner will be able to assist a Fitness Instructor in the preparation and delivery of basic fitness training programmes.",
          "The learner will be encouraged to take part in various sports-related events that are organised on campus from time to time."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji jkopri l-elementi ba\u017ci\u010bi tal-Anatomija u l-Fi\u017cjolo\u0121ija fl-Isport, l-Ittestjar tal-Kundizzjoni Fi\u017cika Tajba, l-Istruzzjoni g\u0127al Kundizzjoni Fi\u017cika Tajba, il-Metodolo\u0121ija Fundamentali tal-Attivit\u00e0 Fi\u017cika u l-Isport, kif ukoll it-teorija u l-prattika tal-isport l-iktar komuni. Is-sillabu jinkludi komponent ta\u2019 tag\u0127lim fil-post tax-xog\u0127ol li jiffa\u010bilita t-tran\u017cizzjoni f\u2019impjieg g\u0127al dawk l-istudenti li ma jixtiqux ikomplu jistudjaw. Sal-a\u0127\u0127ar tal-kors, l-istudent ikun kapa\u010bi jassisti lill-G\u0127alliem tal-Fitness i\u0127ejji u jg\u0127allem programmi ba\u017ci\u010bi ta\u2019 ta\u0127ri\u0121 g\u0127al kundizzjoni fi\u017cika tajba.",
          "L-istudent ji\u0121i m\u0127e\u0121\u0121e\u0121 jie\u0127u sehem f\u2019diversi avvenimenti relatati mal-isport li huma organizzati fil-kampus minn \u017cmien g\u0127al \u017cmien."
      ],
      "mqf": 3,
      "duration": 1,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English Language, Biology, Physical Education"
      ],
      "req_other": [
          "Medical clearance is required.",
          "Applicants are expected to successfully fulfill the requirements of a Fitness Test."
      ],
      "careers": "Assistant fitness instructor, Sports fundamentals assistant coach, Gym instructor"
  },
  {
      "index": "03-10",
      "institute": "ics",
      "code": "CS3-05-18",
      "title": "Extended Diploma in Foundation Studies for Security, Enforcement and Protection",
      "title_notes": "",
      "desc_en": [
          "This programme is gaining a lot of popularity with learners who intend to seek future employment within the Academy for Disciplined Forces. Lecturers will discuss current and contemporary issues relating to security, enforcement and protection both in Malta and beyond our shores. Learners will also tackle topics related to equality, diversity, dignity and rights of individuals. Educational visits will be organised to different departments which form part of the Academy: the Civil Protection Department, the Police Force, the Armed Forces of Malta and the Law Courts.",
          "This Extended Diploma course is delivered over two years. However, learners can opt to exit after the successful completion of their first year of studies. In this case, they will be eligible to attain a Level 3 Diploma in Foundation Studies for Security, Enforcement and Protection."
      ],
      "desc_mt": [
          "Dan il-programm qed jikseb \u0127afna popolarit\u00e0 mal-istudenti li g\u0127andhom l-intenzjoni li fil-futur isibu impjieg fl-Akkademja g\u0127al Forzi Dixxiplinati. L-istudenti jiddiskutu kwistjonijiet kurrenti u kontemporanji relatati mas-sikurezza, l-infurzar u l-protezzjoni, kemm f\u2019Malta kif ukoll lil hinn minn xtutna. L-istudenti jittrattaw ukoll su\u0121\u0121etti relatati mal-ugwaljanza, id-diversit\u00e0, id-dinjit\u00e0 u d-drittijiet ta\u2019 l-individwi. Ji\u0121u organizzati \u017cjarat edukattivi f\u2019dipartimenti differenti li jiffurmaw parti mill-Akkademja: id-Dipartiment tal-Protezzjoni \u010aivili, il-Pulizija, il-Forzi Armati ta\u2019 Malta u l-Qrati.",
          "Dan il-kors ta\u2019 Diploma Esti\u017ca jdum sentejn. Madankollu, l-istudenti jistg\u0127u jag\u0127\u017clu li jo\u0127or\u0121u minn dan il-kors wara li jlestu b\u2019su\u010b\u010bess l-ewwel sena tal-istudji tag\u0127hom. F\u2019dan il-ka\u017c, ikunu eli\u0121ibbli biex jiksbu Diploma in Foundation Studies for Security, Enforcement and Protection tal-Livell 3."
      ],
      "mqf": 3,
      "duration": 2,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Careers in Disciplined Forces (further training may apply depending on the chosen career path)"
  },
  {
      "index": "03-11",
      "institute": "ics",
      "code": "CS4-01-19",
      "title": "Advanced Diploma in Beauty and Complementary Therapies",
      "title_notes": "",
      "desc_en": [
          "This programme is made up of study-units intended to equip learners with the knowledge to provide treatments for the purpose of relaxation and stress relief as well as to improve the condition of the skin. Learners will have the opportunity to perform practical tasks during hands-on sessions within the MCAST salons. There will also be work placement periods within established Salons and Spas.",
          "Study-units during the second year of studies include alternative therapies such as reflexology, stone therapy and aromatherapy.",
          "At the end of the first academic year, successful learners will have the option to exit their studies, and be awarded the MCAST Award in Beauty Therapy. This award will enable them to work in the industry as beauty therapists."
      ],
      "desc_mt": [
          "Dan il-programm huwa mag\u0127mul minn unitajiet ta\u2019 studju ma\u0127suba biex jag\u0127tu lill-istudenti l-g\u0127arfien biex jipprovdu trattamenti g\u0127all-finijiet ta\u2019 rilassament u ser\u0127an mill-istress, kif ukoll biex itejbu l-kundizzjoni tal-\u0121ilda. L-istudenti jkollhom l-opportunit\u00e0 li jwettqu xog\u0127lijiet pratti\u010bi matul sessjonijiet pratti\u010bi fis-salons tal-MCAST. Ikun hemm ukoll perjodi ta\u2019 esperjenza ta\u2019 xog\u0127ol f\u2019Salons u Spas stabbiliti.",
          "L-unitajiet ta\u2019 studju matul it-tieni sena tal-istudji jinkludu terapiji alternattivi b\u0127al reflexology, stone therapy u aromatherapy.",
          "L-istudenti li jtemmu l-ewwel sena akkademika b\u2019su\u010b\u010bess ikollhom l-g\u0127a\u017cla li jieqfu mill-istudji tag\u0127hom u jing\u0127ataw l-MCAST Award in Beauty Therapy. Permezz ta\u2019 din l-g\u0127otja, huma jkunu jistg\u0127u ja\u0127dmu fl-industrija b\u0127ala terapisti tas-sbu\u0127ijia."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "ITEC Diploma for Beauty Specialists",
          "MCAST Diploma for Beauty Specialists"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Beauty therapist"
  },
  {
      "index": "03-12",
      "institute": "ics",
      "code": "CS4-04-19",
      "title": "Advanced Diploma in Children\u2019s Care, Learning and Development",
      "title_notes": "",
      "desc_en": [
          "This programme provides major emphasis on the practical components which form an integral part of the programme. Learners are taught how to observe babies and toddlers in an early years\u2019 environment, to be able to help each child reach his or her maximum potential. Innovative methods are used to plan activities for children in a childcare setting. Other topics include the safeguarding and promotion of children\u2019s rights and the creation of a safe and engaging environment where positive development can take place.",
          "At the end of the first academic year, successful learners will have the option to exit their studies, and be awarded the MCAST Award in Children\u2019s Care, Learning and Development. This award will enable them to work as child care practitioners."
      ],
      "desc_mt": [
          "Dan il-programm jag\u0127ti importanza kbira lill-komponenti pratti\u010bi li jiffurmaw parti integrali tal-programm. L-istudenti ji\u0121u mg\u0127allma kif josservaw lit-trabi u t-tfal i\u017c-\u017cg\u0127ar f\u2019ambjent ta\u2019 snin bikrija, biex ikunu jistg\u0127u jg\u0127inu lit-tfal jil\u0127qu l-potenzjal massimu tag\u0127hom. Jintu\u017caw metodi innovattivi biex ji\u0121u ppjanati attivitajiet g\u0127al tfal f\u2019ambjent tal-kura tat-tfal. Lezzjonijiet o\u0127ra jinkludu su\u0121\u0121etti dwar it-t\u0127aris u l-promozzjoni tad-drittijiet tat-tfal u l-\u0127olqien ta\u2019 ambjent sikur u motivanti fejn jista\u2019 jse\u0127\u0127 \u017cvilupp po\u017cittiv.",
          "L-istudenti li jtemmu l-ewwel sena akkademika b\u2019su\u010b\u010bess ikollhom l-g\u0127a\u017cla li ma jkomplux l-istudji tag\u0127hom, u jing\u0127ataw l-MCAST Award in Children\u2019s Care, Learning and Development. Permezz ta\u2019 din l-g\u0127otja, huma jkunu jistg\u0127u ja\u0127dmu b\u0127ala prattikanti fil-qasam tal-kura tat-tfal."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Health and Social Care",
          "MCAST Diploma in Sport",
          "MCAST Diploma in Performing Arts",
          "MCAST Diploma in Art and Design",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English Language, Maltese, Mathematics"
      ],
      "req_other": [
          "Prior to embarking on any Placement, learners need to:",
          "&middot; satisfy the requirements of the Protection of Minors Act (POMA);",
          "&middot; present a clean police conduct",
          "&middot; complete a Basic First Aid course",
          "&middot; complete a Paediatric First Aid course."
      ],
      "careers": "Child care practitioner"
  },
  {
      "index": "03-13",
      "institute": "ics",
      "code": "CS4-02-19",
      "title": "Advanced Diploma in Health and Social Care",
      "title_notes": "",
      "desc_en": [
          "This is a two-year full-time programme during which the learner becomes better acquainted with the specialised services offered by different agencies and organisations in the care sector. This programme of studies is ideal for those prospective candidates who derive a lot of personal satisfaction from helping others. Lectures deal with sociological and psychological perspectives, legislation, communication skills and human biology.",
          "Lecturers will present scenarios which are dynamic and thought-provoking, and learners are prepared to work in challenging environments dealing with vulnerable individuals. A work-based learning component is included in the framework of this programme. Learners who successfully graduate from this programme of studies are very much in demand and all manage to find immediate employment in the sector."
      ],
      "desc_mt": [
          "Dan huwa programm full-time ta\u2019 sentejn li matulu l-istudent isir aktar familjari mas-servizzi spe\u010bjalizzati offruti minn a\u0121enziji u organizzazzjonijiet differenti fis-settur tal-kura. Dan il-programm ta\u2019 studji huwa ideali g\u0127al dawk il-kandidati prospettivi li jiksbu sodisfazzjon personali meta jg\u0127inu lill-o\u0127rajn. Il-lezzjonijiet jittrattaw perspettivi so\u010bjolo\u0121i\u010bi u psikolo\u0121i\u010bi, il-le\u0121i\u017clazzjoni, il-\u0127iliet tal-komunikazzjoni u l-bijolo\u0121ija tal-bniedem.",
          "L-g\u0127alliema jippre\u017centaw xenarji li huma dinami\u010bi u li j\u0121ieg\u0127lu lill-istudenti ja\u0127sbu, u l-istudenti jit\u0127ejjew biex ja\u0127dmu f\u2019ambjenti ta\u2019 sfida ma\u2019 individwi vulnerabbli. Komponent ta\u2019 tag\u0127lim ibba\u017cat fuq ix-xog\u0127ol huwa inklu\u017c fil-qafas ta\u2019 dan il-programm. L-istudenti li jiggradwaw b\u2019su\u010b\u010bess minn dan il-programm ta\u2019 studji huma me\u0127tie\u0121a ferm u kollha jirnexxilhom isibu impjieg fis-settur immedjatament."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Health and Social Care",
          "MCAST Diploma in Applied Science",
          "MCAST Diploma in Sport",
          "MCAST Diploma in Foundation Studies for Security, Enforcement and Protection",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "Health and Social Care, English Language, Maltese, Ethics, Social Studies, Home Economics, Biology"
      ],
      "req_other": [
          "Prior to embarking on any Placement, learners need to present a clean police conduct."
      ],
      "careers": "Social support worker"
  },
  {
      "index": "03-14",
      "institute": "ics",
      "code": "CS4-03-19",
      "title": "Advanced Diploma in Sport (Development, Coaching and Fitness)",
      "title_notes": "",
      "desc_en": [
          "This is a full-time programme with a strong emphasis on work-based learning. The course looks into coaching, fitness, and sports development, as well as modules relating to sports injury and sports as a business venture. Placement experience provided throughout the course further strengthens these abilities.",
          "During the two years of study, the learner will be exposed to an array of practical and theoretical modules related to the sector. As an entry criterion to the course, the learners would need to undertake and pass a basic Fitness Test that physically tests the learners\u2019 personal level of fitness in terms of flexibility, cardiovascular endurance, power, speed and agility."
      ],
      "desc_mt": [
          "Dan huwa programm full-time b\u2019enfasi qawwija fuq it-tag\u0127lim waqt esperjenzi fil-post tax-xog\u0127ol. Il-kors jittratta l-ikkow\u010bjar, il-fitness, l-i\u017cvilupp, u jinkludi unitajiet ta\u2019 studju relatati ma\u2019 korrimenti waqt l-isport u l-isport b\u0127ala negozju. L-esperjenza ta\u2019 xog\u0127ol waqt il-kors tkompli ssa\u0127\u0127a\u0127 il-kapa\u010bit\u00e0 tal-istudent f\u2019dawn l-oqsma.",
          "Matul is-sentejn ta\u2019 studju, l-istudent jiltaqa\u2019 ma\u2019 firxa ta\u2019 unitajiet pratti\u010bi u teoreti\u010bi relatati mas-settur. B\u0127ala kriterju g\u0127ad-d\u0127ul fil-kors, l-istudenti jkunu me\u0127tie\u0121a joqog\u0127du g\u0127al u jg\u0127addu minn Test ba\u017ciku ta\u2019 Kundizzjoni Fi\u017cika Tajba li g\u0127andu l-g\u0127an li jittestja l-livell personali tal-fitness tal-istudenti f\u2019dak li g\u0127andu x\u2019jaqsam ma flessibbilt\u00e0, re\u017cistenza kardjovaskolari, sa\u0127\u0127a, velo\u010bit\u00e0 u a\u0121ilit\u00e0."
      ],
      "mqf": 2,
      "duration": 4,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Sport",
          "MCAST Diploma in Applied Science",
          "MCAST Diploma in Health and Social Care",
          "MCAST Diploma in Foundation Studies for Security, Enforcement and Protection",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "Physical Education, English Language, Biology"
      ],
      "req_other": [
          "Medical clearance required.",
          "Applicants are expected to successfully fulfill the requirements of a fitness test in terms of flexibility, cardiovascular endurance, power, speed and agility."
      ],
      "careers": "Fitness instructor, Fitness coach, Gym instructor\/coach, Sport fundamentals coach, Sport development officer, Sport activity organiser"
  },
  {
      "index": "03-15",
      "institute": "ics",
      "code": "CS5-01-19",
      "title": "Higher Diploma in Advanced Studies in the Early Years",
      "title_notes": "",
      "desc_en": [
          "This programme is one of the most sought-after courses within this Institute. It is highly popular since it provides ample opportunities to find employment at the end of the two-year programme.",
          "The study-units are designed in a manner that provides a strong link between theoretical concepts and hands-on practice during internships. Lectures focus on guiding the undergraduates on how to make learning for young children stimulating and fun, in a safe and healthy environment.",
          "Upon completion of this programme, the undergraduates may proceed to the final year of the Bachelor of Arts (Hons) in Early Childhood Education and Care (ECEC) within the Faculty of Education, University of Malta, subject to fulfilling a number of requirements relating to proficiency in the Maltese and English languages."
      ],
      "desc_mt": [
          "Dan il-programm huwa wie\u0127ed mill-aktar korsijiet popolari f\u2019dan l-Istitut. Huwa popolari \u0127afna min\u0127abba li jipprovdi numru ta\u2019 opportunitajiet biex wie\u0127ed isib impjieg fi tmiem il-programm ta\u2019 sentejn.",
          "L-unitajiet ta\u2019 studju huma mfassla b\u2019tali mod li jipprovdu rabta qawwija bejn kun\u010betti teoreti\u010bi u l-prattika matul internships. Il-lezzjonijiet jiggwidaw lill-istudenti dwar kif it-tag\u0127lim jista\u2019 jkun stimulanti u ta\u2019 interess g\u0127at-tfal i\u017c-\u017cg\u0127ar, f\u2019ambjent sikur u tajjeb g\u0127as-sa\u0127\u0127a.",
          "Meta jlestu dan il-programm, l-istudenti jistg\u0127u jkomplu bl-istudji tag\u0127hom fl-a\u0127\u0127ar sena tal-Bachelor of Arts (Hons) in Early Childhood Education and Care (ECEC) fil-Fakult\u00e0 tal-Edukazzjoni, l-Universit\u00e0 ta\u2019 Malta, basta li jissodisfaw g\u0127add ta\u2019 rekwi\u017citi relatati mal-profi\u010bjenza fil-lingwa Maltija u f\u2019dik Ingli\u017ca."
      ],
      "mqf": 5,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Advanced Diploma in Children\u2019s Care, Learning and Development",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-level or I-level: Two subjects from Mathematics, English, Maltese",
          "Applicants need to be in possession of a pass at SEC\/O-Level in the subject that is not presented at A-level or I-level."
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Prior to embarking on any Placement, learners need to:",
          "&middot; satisfy the requirements of the Protection of Minors Act (POMA);",
          "&middot; present a clean police conduct",
          "&middot; complete a Basic First Aid course",
          "&middot; complete a Paediatric First Aid course."
      ],
      "careers": "Early years educator"
  },
  {
      "index": "03-16",
      "institute": "ics",
      "code": "CS6-01-19",
      "title": "Bachelor of Arts (Honours) in Health and Social Care (Management)",
      "title_notes": "",
      "desc_en": [
          "The Health and Social Care sector provides a number of career opportunities for successful learners to find engaging and rewarding employment at the end of this degree programme of studies. Throughout the duration of the course, undergraduates participate in work placement experiences in related settings under the supervision of experienced professionals.",
          "This programme of studies includes a varied pool of modules aimed at enhancing the undergraduates\u2019 managerial attributes, amongst which Governance and Quality Management and European Law and Social Policy. Other study-units focus on the importance of the undergraduates to keep abreast of current issues that different categories of service-users may encounter such as Globalisation and Poverty and Family and Individual Functioning."
      ],
      "desc_mt": [
          "Is-settur tas-Sa\u0127\u0127a u l-Kura So\u010bjali jipprovdi g\u0127add ta\u2019 opportunitajiet ta\u2019 karriera biex l-istudenti li jtemmu dan il-kors b\u2019su\u010b\u010bess isibu impjieg motivanti u ta\u2019 sodisfazzjon fi tmiem dan il-programm ta\u2019 studji. Matul il-kors kollu, l-istudenti tal-ba\u010bellerat jipparte\u010bipaw f\u2019esperjenzi ta\u2019 internship f\u2019ambjenti relatati, ta\u0127t is-supervi\u017cjoni ta\u2019 professjonisti ta\u2019 esperjenza.",
          "Dan il-programm ta\u2019 studji jinkludi \u0121abra varjata ta\u2019 unitajiet immirati lejn it-tis\u0127i\u0127 tal-karatteristi\u010bi mani\u0121erjali tal-istudenti tal-ba\u010bellerat, fosthom Il-Governanza u l-\u0120estjoni tal-Kwalit\u00e0 u Il-Li\u0121i Ewropea u l-Politika So\u010bjali. Unitajiet ta\u2019 studju o\u0127ra jiffokaw fuq l-importanza li l-istudenti j\u017commu ru\u0127hom a\u0121\u0121ornati fir-rigward ta\u2019 kwistjonijiet kurrenti li jistg\u0127u jiffa\u010b\u010bjaw kategoriji differenti ta\u2019 dawk li ju\u017caw is-servizzi b\u0127alma huma Il-Globalizzazzjoni u l-Faqar u Il-Familja u l-Funzjonament Individwali."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Advanced Diploma in Health and Social Care",
          "MCAST Advanced Diploma in Applied Science",
          "MCAST Advanced Diploma for Pharmacy Technicians",
          "MCAST Advanced Diploma in Health Sciences",
          "2 A-Level passes and 2 I-Level passes and SEC\/O-Lev-el Pass in English Language"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "A- or I-Level: Chemistry, Biology, Physics, Sociology, Psychology, Home Economics and Human Ecology, Accounts, Economics"
      ],
      "req_other": [
          ""
      ],
      "careers": "Administrative and\/or managerial positions within the Health and Social Care sector, Social welfare professional"
  },
  {
      "index": "03-17",
      "institute": "ics",
      "code": "CS6-03-18",
      "title": "Bachelor of Arts (Honours) in Inclusive Education",
      "title_notes": "",
      "desc_en": [
          "This programme of studies focuses on how educational institutions in general, and the classroom settings, specifically, can become more inclusive to cater for different individual needs.",
          "The undergraduates tackle a variety of study-units aimed at identifying what barriers exist which may be preventing students from accessing quality education. Furthermore, the study-units also explore innovative techniques of how these barriers can be overcome so that all students feel valued during compulsory schooling years, and possibly beyond. This course includes internship opportunities aimed at developing a mindset of promoting inclusive communities that celebrate diversity and cater for the diverse needs of different groups of students."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji jiffoka fuq kif l-istituzzjonijiet edukattivi, b\u2019mod \u0121enerali, u l-ambjenti tal-klassi b\u2019mod spe\u010bifiku, jistg\u0127u jsiru aktar inklu\u017civi biex jil\u0127qu \u0127ti\u0121ijiet individwali differenti.",
          "L-istudenti tal-ba\u010bellerat jittrattaw varjet\u00e0 ta\u2019 unitajiet ta\u2019 studju, bil-g\u0127an li ji\u0121u identifikati liema ostakoli jistg\u0127u jkunu qeg\u0127din ma j\u0127allux lill-istudenti jkollhom a\u010b\u010bess g\u0127al edukazzjoni ta\u2019 kwalit\u00e0. Barra minn hekk, l-unitajiet ta\u2019 studju jesploraw ukoll teknika innovattiva dwar kif jistg\u0127u jing\u0127elbu dawn l-ostakoli sabiex l-istudenti kollha j\u0127ossuhom stmati matul is-snin ta\u2019 edukazzjoni obbligatorja, u possibilment lil hinn minnhom. Dan il-kors jinkludi opportunitajiet ta\u2019 internship immirati lejn l-i\u017cvilupp ta\u2019 mentalit\u00e0 li tippromwovi komunitajiet inklu\u017civi li ji\u010b\u010belebraw id-diversit\u00e0."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Advanced Diploma in Children\u2019s Care, Learning and Development",
          "MCAST Advanced Diploma in Health and Social Care",
          "2 A-Level passes and 2 I-Level passes, to include at least one A-Level and one I-Level from Mathematics, English, Maltese, Philosophy, Sociology, Psychology"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Learning support educator (LSE)"
  },
  {
      "index": "03-18",
      "institute": "ics",
      "code": "CS6-02-20",
      "title": "Bachelor of Science (Honours) in Sport, Exercise and Health",
      "title_notes": "",
      "desc_en": [
          "This programme of studies covers modules that prepare the undergraduates to work alongside medical and healthcare professionals in promoting physical activity and exercise; and are mapped to the rigorous standards upheld by various international accrediting bodies in the field. The ultimate aim will be to improve the general health of the individual and of society as a whole. This course provides learners with hands-on experience throughout the three years, to engage in exercise, health and fitness programmes, conferences and events on and off campus working with different sectors of the community.",
          "The undergraduates will develop the knowledge and skills required to assist clients and patients in their various health challenges, non-communicable diseases, health conditions, injuries or disabilities. Furthermore the degree programme also aims to facilitate the pursuit of a number of distinctive sport or exercise-related Master\u2019s (Level 7) programmes."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji jkopri unitajiet ta\u2019 studju li j\u0127ejju lill-istudenti tal-ba\u010bellerat biex ja\u0127dmu ma\u2019 professjonisti medi\u010bi u fil-kura tas-sa\u0127\u0127a fil-promozzjoni tal-attivit\u00e0 fi\u017cika u l-e\u017cer\u010bizzju; u jissodisfaw l-istandards rigoru\u017ci osservati minn diversi korpi internazzjonali ta\u2019 akkreditazzjoni fil-qasam. L-g\u0127an a\u0127\u0127ari jkun li titjieb is-sa\u0127\u0127a \u0121enerali tal-individwu u tas-so\u010bjet\u00e0 kollha. Permezz ta\u2019 esperjenza prattika matul it-tliet snin tal-kors, l-istudenti jie\u0127du sehem fi sport, programmi ta\u2019 sa\u0127\u0127a u fitness, konferenzi u avvenimenti kemm \u0121ewwa kif ukoll barra l-kampus, u ja\u0127dmu ma\u2019 setturi differenti tal-komunit\u00e0.",
          "L-istudenti ji\u017cviluppaw l-g\u0127arfien u l-\u0127iliet me\u0127tie\u0121a biex jassistu lill-klijenti u lill-pazjenti fid-diversi sfidi tas-sa\u0127\u0127a tag\u0127hom, b\u0127al mard li ma jitte\u0127idx, kundizzjonijiet ta\u2019 sa\u0127\u0127a, korrimenti jew di\u017cabilit\u00e0. Barra minn hekk, il-programm g\u0127andu wkoll l-g\u0127an li jiffa\u010bilita l-a\u010b\u010bess g\u0127al numru ta\u2019 programmi differenti relatati mal-isport jew mal-e\u017cer\u010bizzju fil-livell ta\u2019 Master\u2019s (Livell 7)."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Advanced Diploma in Sports (Development, Coaching and Fitness)",
          "2 A-Level passes and 2 I-Level passes and SEC\/O-Level pass in English Language"
      ],
      "req_compulsory": [
          "I- or A-Level: Physics or Chemistry or Biolo-gy or Physical Education"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Personal trainer, Exercise for health professional, Specialist trainer, Sports activity manager, Functional sports trainer"
  }
    
  ]
  constructor() { }

  getAllICScourses(){
    return [...this.ICScourses];
  }

  getICScourse(ICScourseId: string){
    return {...this.ICScourses.find(ICScourse => {
      return ICScourse.index === ICScourseId;
    })};
  }  
}
