import { Injectable } from '@angular/core';
import { IICTcourse } from './iictcourses.model';

@Injectable({
  providedIn: 'root'
})
export class IictService {

  private IICTcourses: IICTcourse[] = [
    {
      "index": "06-01",
      "institute": "iict",
      "code": "IT1-01-19",
      "title": "Introductory Certificate in ICT",
      "title_notes": "",
      "desc_en": [
          "The ICT industry is a dynamic sector which requires a number of technical people to cope with the constantly evolving computing technologies. IT persons offer support in these technologies and help other IT specialists in their daily job.",
          "The Introductory Certificate in ICT offers knowledge in basic skills as well as knowledge in the fundamentals of computer systems and programming skills. The programme offers learners the necessary knowledge about the basic components that make up a computer system by being able to distinguish the different parts of a computer system, as well as learn about the software design phases and how to install hardware. Skills will be developed in how to design simple algorithms and simple computer program."
      ],
      "desc_mt": [
          "L-industrija tal-ICT hija settur dinamiku li jirrikjedi g\u0127add ta\u2019 persuni tekni\u010bi biex ila\u0127\u0127qu mat-teknolo\u0121iji tal-computing li qed jevolvu b\u2019mod kostanti. Il-persuni tal-IT joffru appo\u0121\u0121 f\u2019dawn it-teknolo\u0121iji u jg\u0127inu lil spe\u010bjalisti o\u0127ra tal-IT fix-xog\u0127ol tag\u0127hom ta\u2019 kuljum.",
          "L-Introductory Certificate in ICT joffri g\u0127arfien fir-rigward tal-\u0127iliet ba\u017ci\u010bi u tal-elementi fundamentali ta\u2019 sistemi tal-kompjuter u tal-\u0127iliet tal-ipprogrammar. Il-programm joffri lill-istudenti l-g\u0127arfien ne\u010bessarju dwar il-komponenti ba\u017ci\u010bi li jiffurmaw is-sistema tal-kompjuter, b\u2019tali mod li jkunu jistg\u0127u jiddistingwu bejn il-partijiet differenti ta\u2019 sistema tal-kompjuter, kif ukoll jitg\u0127allmu dwar il-fa\u017cijiet tad-disinn tas-softwer u kif jinstallaw il-\u0127ardwer. Ji\u0121u \u017cviluppati \u0127iliet fid-disinn ta\u2019 algoritmi sempli\u010bi u ta\u2019 programmi sempli\u010bi tal-kompjuter."
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
      "index": "06-02",
      "institute": "iict",
      "code": "IT2-01-19",
      "title": "Foundation Certificate in ICT",
      "title_notes": "",
      "desc_en": [
          "The ICT industry is a dynamic sector which requires a number of technical people to cope with the constantly evolving computing technologies. IT persons offer support in these technologies and help other IT specialists in their daily job.",
          "The Foundation Certificate in ICT offers knowledge in basic skills as well as knowledge in the fundamentals of computer systems, programming skills, computer graphics, and the creation of ICT projects. This programme of studies is not intended to prepare the learner for immediate employment. However, it is the first in a string of programmes that will eventually prepare the learner to embark on a career within the computing industry."
      ],
      "desc_mt": [
          "L-industrija tal-ICT hija settur dinamiku li jirrikjedi g\u0127add ta\u2019 persuni tekni\u010bi biex ila\u0127\u0127qu mat-teknolo\u0121iji tal-computing li qed jevolvu b\u2019mod kostanti. Il-persuni tal-IT joffru appo\u0121\u0121 f\u2019dawn it-teknolo\u0121iji u jg\u0127inu lil spe\u010bjalisti o\u0127ra tal-IT fix-xog\u0127ol tag\u0127hom ta\u2019 kuljum.",
          "Il-Foundation Certificate in ICT joffri g\u0127arfien fir-rigward tal-\u0127iliet ba\u017ci\u010bi u tal-elementi fundamentali ta\u2019 sistemi tal-kompjuter, il-\u0127iliet tal-ipprogrammar, il-grafika tal-kompjuter u l-\u0127olqien ta\u2019 pro\u0121etti tal-ICT. Dan il-programm ta\u2019 studji mhuwiex ma\u0127sub biex i\u0127ejji lill-istudent g\u0127al impjieg immedjat. Madankollu, huwa l-ewwel f\u2019sensiela ta\u2019 programmi li eventwalment i\u0127ejju lill-istudent sabiex isegwi karriera fl-industrija tal-computing."
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
      "index": "06-03",
      "institute": "iict",
      "code": "IT3-01-19",
      "title": "Diploma in ICT",
      "title_notes": "",
      "desc_en": [
          "The ICT industry is a dynamic sector which requires a number of technical people to cope with the constantly evolving computing technologies. IT persons offer technical support in these technologies and help other IT specialists in their daily job.",
          "The Diploma in ICT is the first step in a block of a three-year training programme, designed to provide the necessary skills to work in the computing industry. At this level of study, learners will be introduced to fundamental subjects in the networking, software development, web development and multimedia areas. At the end of the course, learners will be able to use modern computer and multimedia systems and networks in the workplace."
      ],
      "desc_mt": [
          "L-industrija tal-ICT hija settur dinamiku li jirrikjedi g\u0127add ta\u2019 persuni tekni\u010bi biex ila\u0127\u0127qu mat-teknolo\u0121iji tal-computing li qed jevolvu b\u2019mod kostanti. Il-persuni tal-IT joffru appo\u0121\u0121 f\u2019dawn it-teknolo\u0121iji u jg\u0127inu lil spe\u010bjalisti o\u0127ra tal-IT fix-xog\u0127ol tag\u0127hom ta\u2019 kuljum.",
          "Id-Diploma in ICT hija l-ewwel pass fi programm ta\u2019 ta\u0127ri\u0121 ta\u2019 tliet snin, imfassal biex jipprovdi l-\u0127iliet ne\u010bessarji biex wie\u0127ed ikun jista\u2019 ja\u0127dem fl-industrija tal-computing. F\u2019dan il-livell ta\u2019 studju, l-istudenti ji\u0121u introdotti g\u0127al su\u0121\u0121etti fundamentali fl-oqsma tan-netwerking, l-i\u017cvilupp tas-softwer, l-i\u017cvilupp ta\u2019 websajts u l-multimidja. Fi tmiem il-kors, l-istudenti jkunu jistg\u0127u ju\u017caw sistemi u netwerks moderni tal-kompjuter u tal-multimidja fil-post tax-xog\u0127ol."
      ],
      "mqf": 3,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics, Computer Studies, Physics, BTEC IT Practitioner\/IT VET"
      ],
      "req_preferred": [
          "English Language"
      ],
      "req_other": [
          ""
      ],
      "careers": ""
  },
  {
      "index": "06-04",
      "institute": "iict",
      "code": "IT3-02-18",
      "title": "Diploma in iGaming",
      "title_notes": "",
      "desc_en": [
          "The iGaming Industry is a relatively new and dynamic sector which requires a number of technical people to cope with the constantly evolving technologies in iGaming.",
          "MCAST offers this course as the first step to become familiar with the iGaming industry. The course is designed to provide the basic knowledge and skills required to consider working in such an exciting and innovative industry. At this level of studies, the learners will be introduced to subjects which provide fundamentals in iGaming, Web Development, Multimedia and basic Data Analysis."
      ],
      "desc_mt": [
          "L-industrija tal-iGaming hija settur relattivament \u0121did u dinamiku li jirrikjedi g\u0127add ta\u2019 persuni tekni\u010bi biex ila\u0127\u0127qu mat-teknolo\u0121iji fl-iGaming li qed jevolvu b\u2019mod kostanti.",
          "L-MCAST qed joffri dan il-kors b\u0127ala l-ewwel pass biex l-istudent isir familjari mal-industrija tal-iGaming. Il-kors huwa mfassal biex jipprovdi l-g\u0127arfien u l-\u0127iliet ba\u017ci\u010bi me\u0127tie\u0121a biex wie\u0127ed jikkunsidra li ja\u0127dem f\u2019industrija tant e\u010b\u010bitanti u innovattiva. F\u2019dan il-livell ta\u2019 studju, l-istudenti ji\u0121u introdotti g\u0127al su\u0121\u0121etti li jipprovdu elementi fundamentali fl-iGaming, l-I\u017cvilupp tal-Web, il-Multimidja u l-Anali\u017ci tad-Data f\u2019livell ba\u017ciku."
      ],
      "mqf": 3,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics, Computer Studies, Physics, BTEC IT Practitioner\/IT VET"
      ],
      "req_preferred": [
          "English Language"
      ],
      "req_other": [
          ""
      ],
      "careers": "User support in iGaming"
  },
  {
      "index": "06-05",
      "institute": "iict",
      "code": "IT4-A1-19",
      "title": "Advanced Diploma in IT (Computer Systems and Networks)",
      "title_notes": "",
      "desc_en": [
          "The IT industry is a dynamic sector which requires a number of highly skilled technical personnel to cope with constantly changing customers\u2019 demands and new innovative technologies. This course is the first step towards entering the field of computer networks. It provides learners with core computer networking skills. At this level, they will be exposed to the design, implementation and administration of small to medium sized networks.",
          "The first year of this course will be common to all learners following the Advanced Diploma. During the second year of studies, learners will be focusing on networking subjects such as LAN switching, routing, server management and virtualisation. This course includes work-related training and practice."
      ],
      "desc_mt": [
          "L-industrija tal-IT hija settur dinamiku li jirrikjedi g\u0127add ta\u2019 impjegati tekni\u010bi bi kwalifiki g\u0127oljin biex ila\u0127\u0127qu mal-\u0127ti\u0121ijiet tal-klijenti li dejjem jinbidlu u mat-teknolo\u0121iji innovattivi \u0121odda. Dan il-kors huwa l-ewwel pass biex wie\u0127ed jid\u0127ol fil-qasam tan-netwerks tal-kompjuter. Huwa jipprovdi lill-istudenti l-\u0127iliet ewlenin tan-netwerking tal-kompjuter. F\u2019dan il-livell, l-istudenti jiltaqg\u0127u mad-disinn, l-implimentazzjoni u l-amministrazzjoni ta\u2019 netwerks \u017cg\u0127ar u medji.",
          "L-ewwel sena ta\u2019 dan il-kors tkun l-istess g\u0127all-istudenti kollha li jkunu qed isegwu l-Advanced Diploma. Fit-tieni sena, l-istudenti jiffokaw fuq su\u0121\u0121etti tan-netwerking b\u0127al-LAN switching, ir-routing, il-\u0121estjoni tas-server u l-virtwalizzazzjoni. Dan il-kors jinkludi ta\u0127ri\u0121 u prattika relatati max-xog\u0127ol."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in IT",
          "MCAST Diploma in iGaming",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Mathematics and One subject from Computer Studies, Physics, Information Technology"
      ],
      "req_preferred": [
          "English Language"
      ],
      "req_other": [
          ""
      ],
      "careers": "Junior\/assistant systems administrator, Junior\/assistant network administrator, Junior\/assistant database administrator, IT end user support"
  },
  {
      "index": "06-06",
      "institute": "iict",
      "code": "IT4-03-19",
      "title": "Advanced Diploma in IT (Multimedia Software Development)",
      "title_notes": "",
      "desc_en": [
          "The world wide web is one area that is growing fast in terms of the skills needs of companies. Multimedia is the incorporation of text, sound, graphics, animation, still images and video in conjunction with computer technology. This course will provide the learners with the core software development skills along with the necessary knowledge for multimedia artefact development, manipulation and integration.",
          "The first year of this course will be common for all learners following Advanced Diploma studies. During the second year, learners will focus on Multimedia and Software Development oriented subjects such as game development and mobile application development. This is a technical course for learners with an artistic inclination."
      ],
      "desc_mt": [
          "Il-world wide web huwa settur li qed jikber b\u2019mod rapidu fir-rigward tal-\u0127iliet me\u0127tie\u0121a mill-kumpaniji. Il-multimidja tinkorpora t-test, is-sound, il-grafika, l-animazzjoni, l-imma\u0121nijiet fissi u l-vidjo flimkien mat-teknolo\u0121ija tal-kompjuter. Il-kors jipprovdi lill-istudenti l-\u0127iliet ewlenin fl-i\u017cvilupp tas-softwer, flimkien mal-g\u0127arfien ne\u010bessarju g\u0127all-i\u017cvilupp, il-manipulazzjoni u l-integrazzjoni tal-artifatti tal-multimidja.",
          "L-ewwel sena ta\u2019 dan il-kors tkun l-istess g\u0127all-istudenti kollha li jkunu qed jistudjaw biex i\u0121ibu l-Advanced Diploma. Fit-tieni sena, l-istudenti jiffokaw fuq su\u0121\u0121etti orjentati lejn il-Multimidja u l-I\u017cvilupp tas-Softwer, b\u0127all-I\u017cvilupp tal-log\u0127ob u l-i\u017cvilupp ta\u2019 applikazzjonijiet tal-mobile. Dan huwa kors tekniku g\u0127al studenti b\u2019inklinazzjoni artistika."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Diploma in IT",
          "MCAST Diploma in iGaming",
          "4 SEC\/O-Level passes\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Mathematics and One subject from Computer Studies, Physics, Information Technology"
      ],
      "req_preferred": [
          "English Language, Art, Graphical Communication"
      ],
      "req_other": [
          ""
      ],
      "careers": "Junior front-end developer, Junior game developer, Junior mobile application developer"
  },
  {
      "index": "06-07",
      "institute": "iict",
      "code": "IT4-04-19",
      "title": "Advanced Diploma in IT (Software Development)",
      "title_notes": "",
      "desc_en": [
          "The Advanced Diploma in Software Development is a practical, hands-on qualification ensuring that learners utilise the most up-to-date practices and current programming languages. This course is the first step towards becoming a software developer. It will provide the learners with the core software development skills along with the necessary knowledge for the design and development of software applications.",
          "The first year of this course will be common for all learners following the Advanced Diploma. During the second year of studies, learners will focus on Software Development subjects such as: server side and client side scripting; database design and development; and mobile application development."
      ],
      "desc_mt": [
          "L-Advanced Diploma in Software Development hija kwalifika prattika li ti\u017cgura li l-istudenti ju\u017caw il-pratti\u010bi l-aktar a\u0121\u0121ornati u l-lingwi tal-ipprogrammar l-aktar kurrenti. Dan il-kors huwa l-ewwel pass biex wie\u0127ed isir \u017cviluppatur tas-softwer. Huwa jipprovdi lill-istudenti l-\u0127iliet ewlenin fl-i\u017cvilupp tas-softwer, flimkien mal-g\u0127arfien ne\u010bessarju g\u0127ad-disinn u l-i\u017cvilupp ta\u2019 applikazzjonijiet tas-softwer.",
          "L-ewwel sena ta\u2019 dan il-kors tkun l-istess g\u0127all-istudenti kollha li jkunu qed isegwu l-Advanced Diploma. Matul it-tieni sena, l-istudenti jiffokaw fuq su\u0121\u0121etti marbuta mal-I\u017cvilupp tas-Softwer b\u0127al: server side u client side scripting; id-disinn u l-i\u017cvilupp ta\u2019 databases; u l-i\u017cvilupp ta\u2019 applikazzjonijiet tal-mobile."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Diploma in IT",
          "MCAST Diploma in iGaming",
          "4 SEC\/O-Level passes\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Mathematics and One subject from Computer Studies, Physics, Information Technology"
      ],
      "req_preferred": [
          "English Language"
      ],
      "req_other": [
          ""
      ],
      "careers": "User support, Junior software tester, Junior software developer, Junior database developer, Junior web developer"
  },
  {
      "index": "06-08",
      "institute": "iict",
      "code": "IT6-A1-19",
      "title": "Bachelor of Science (Honours) in Computer Systems and Networks",
      "title_notes": "",
      "desc_en": [
          "Computer systems and networks are a growth area in today\u2019s business environment due to the fact that there is a strong demand for highly skilled technical persons who can devise original solutions for complex problems in the context of IT and network implementation using modern techniques.",
          "This hands-on degree programme is intended for learners who wish to pursue a career in the world of computer systems and networks. In this course, learners will be exposed to enterprise network technologies, data centre operations, service provider networks, information security, virtualisation and cloud computing technologies. Due importance will also be given to emerging technologies which learners will find being implemented when they start working within the industry. A hands-on practical approach is adopted throughout the course."
      ],
      "desc_mt": [
          "Is-sistemi u n-netwerks tal-kompjuter huma qasam li qed jikber fl-ambjent kummer\u010bjali tal-lum, min\u0127abba l-fatt li hemm domanda kbira g\u0127al persuni tekni\u010bi bi kwalifiki g\u0127oljin li jistg\u0127u jfasslu soluzzjonijiet ori\u0121inali g\u0127al problemi kumplessi fil-kuntest tal-IT u l-implimentazzjoni tan-netwerk bl-u\u017cu ta\u2019 teknika moderna.",
          "Dan il-programm li jwassal g\u0127al ba\u010bellerat huwa ma\u0127sub g\u0127al studenti li jixtiequ jsegwu karriera fid-dinja tas-sistemi u n-netwerks tal-kompjuter. F\u2019dan il-kors, l-istudenti jiltaqg\u0127u mat-teknolo\u0121iji tan-netwerk tal-intrapri\u017ci, l-operazzjonijiet ta\u010b-\u010bentru tad-data, in-netwerks tal-fornitur tas-servizzi, is-sikurezza tal-informazzjoni, il-virtwalizzazzjoni u t-teknolo\u0121iji tal-cloud computing. Ting\u0127ata wkoll l-importanza dovuta lit-teknolo\u0121iji \u0121odda li qed ji\u017cviluppaw u li l-istudenti se jsibu li jkunu qed ji\u0121u implimentati fl-industrija meta jibdew ja\u0127dmu. Dan il-kors huwa kompletament ta\u2019 natura prattika."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Advanced Diploma in IT",
          "Recommended streams: Computer Systems and Networks, End User Support",
          "MCAST Advanced Diploma in Electronics (Computer Engineering)",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Computing",
          "A- or I-Level: One subject from Pure Mathematics, Applied Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Systems administrator, NOC engineer, Technical support specialist, Network analyst"
  },
  {
      "index": "06-09",
      "institute": "iict",
      "code": "IT6-A2-19",
      "title": "Bachelor of Science (Honours) in Software Development",
      "title_notes": "",
      "desc_en": [
          "This degree programme is intended for those learners who are keen on software development with an inclination towards back-end systems and solving complex problems. In this course you will learn how to design software applications based on formal design patterns; design and implement the underlying data infrastructure; model and solve complex real problems whilst following formal methodologies.",
          "This course covers Secure Development, Enterprise Software Development, Server Side and Client Side Scripting, Discrete Mathematics and other similar modules. The course is intended for individuals who have a keen interest in problem solving, have an attention to detail and strive to programme efficiently."
      ],
      "desc_mt": [
          "Dan il-programm li jwassal g\u0127al ba\u010bellerat huwa ma\u0127sub g\u0127al dawk l-istudenti li jinteressawhom \u0127afna l-i\u017cvilupp tas-softwer, b\u2019mod spe\u010bjali s-sistemi back-end, u s-soluzzjoni ta\u2019 problemi kumplessi. F\u2019dan il-kors inti titg\u0127allem tiddisinja applikazzjonijiet tas-softwer ibba\u017cati fuq mudelli ta\u2019 disinn formali; tiddisinja u timplimenta l-infrastruttura tad-data fundamentali; to\u0127loq mudelli u ssolvi problemi reali li jkunu kumplessi, filwaqt li ssegwi metodolo\u0121iji formali.",
          "Dan il-kors jittratta l-I\u017cvilupp Sikur, l-I\u017cvilupp tas-Softwer g\u0127all-Intrapri\u017ci, Server Side u Client Side Scripting, Discrete Mathematics u unitajiet o\u0127ra simili. Il-kors huwa mmirat lejn individwi li g\u0127andhom interess fis-soluzzjoni tal-problemi, li jag\u0127tu attenzjoni g\u0127ad-dettall u li jistinkaw biex jo\u0127olqu programmi effi\u010bjenti."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Advanced Diploma in IT",
          "Recommended stream: Software Development",
          "MCAST Advanced Diploma in Electronics (Computer Engineering)",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Computing",
          "A- or I-Level: One subject from Pure Mathematics, Applied Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Web\/back-end developer, Software tester, Mobile applications developer"
  },
  {
      "index": "06-10",
      "institute": "iict",
      "code": "IT6-A3-19",
      "title": "Bachelor of Science (Honours) in Multimedia Software Development",
      "title_notes": "",
      "desc_en": [
          "This degree programme is intended for those learners who are keen on developing interactive and media rich software applications such as games and mobile applications. In this course one will learn how to develop software applications, create the required multimedia content and integrate this content with the created application.",
          "This course covers 2D and 3D Graphic Design, Computer Animation, Sound Design, Visual Effects, Object-Oriented Programming, Mobile Application Development and other similar modules. This course is intended for individuals who have an artistic inclination and are also good in programming."
      ],
      "desc_mt": [
          "Dan il-programm fil-livell tal-ba\u010bellerat huwa ma\u0127sub g\u0127al dawk l-istudenti li g\u0127andhom interess kbir fl-i\u017cvilupp ta\u2019 applikazzjonijiet tas-softwer interattivi u rikki fl-u\u017cu tal-midja, b\u0127al log\u0127ob u applikazzjonijiet tal-mobile. F\u2019dan il-kors, l-istudent jitg\u0127allem ji\u017cviluppa applikazzjonijiet tas-softwer, jo\u0127loq il-kontenut multimedjali me\u0127tie\u0121 u jintegra dan il-kontenut mal-applikazzjoni li tkun \u0121iet ikkreata.",
          "Dan il-kors ikopri d-Disinn Grafiku 2D u 3D, l-Animazzjoni tal-Kompjuter, id-Disinn tas-Sound, l-Effetti Vi\u017civi, l-Ipprogrammar Orjentat lejn l-O\u0121\u0121ett, l-I\u017cvilupp ta\u2019 Applikazzjonijiet tal-Mobile u unitajiet o\u0127ra simili. Il-kors huwa mmirat g\u0127al individwi li g\u0127andhom inklinazzjoni artistika u li huma wkoll tajbin fl-ipprogrammar."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Advanced Diploma in IT",
          "Recommended stream: Multimedia Software Development",
          "MCAST Advanced Diploma in Electronics (Computer Engineering)",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Computing",
          "A- or I-Level: One subject from Pure Mathematics, Applied Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Games developer, Web\/UX designer, Multimedia programmer, Mobile applications developer"
  },
  {
      "index": "06-11",
      "institute": "iict",
      "code": "IT6-01-20",
      "title": "Bachelor of Science (Honours) in Business Analytics",
      "title_notes": "",
      "desc_en": [
          "This degree programme is aimed at those individuals who wish to learn how to utilise data to address the most demanding challenges in today\u2019s business world. Through the use of an applied methodology, analytical skills and hands-on lab sessions, learners will learn how to use analytical tools to derive insight on hidden trends and patterns in order to leverage business success. One will learn how to develop, implement and test bespoke solutions for resolving problems in specific scenarios.",
          "Additional units will cover aspects such as: improving one\u2019s own critical thinking skills, building strategies for promoting businesses, understanding consumer behaviour and learning about laws governing a business process."
      ],
      "desc_mt": [
          "Dan il-programm, li jwassal g\u0127al ba\u010bellerat, huwa mmirat lejn dawk l-individwi li jixtiequ jitg\u0127allmu kif ju\u017caw id-data biex jindirizzaw l-isfidi l-aktar e\u017ci\u0121enti fid-dinja tan-negozju tal-lum. Permezz tal-u\u017cu ta\u2019 metodolo\u0121ija applikata, \u0127iliet analiti\u010bi u sessjonijiet pratti\u010bi fil-laboratorju, l-istudenti jitg\u0127allmu kif ju\u017caw g\u0127odod analiti\u010bi biex jiksbu g\u0127arfien dwar xejriet u mudelli mo\u0127bija, bl-iskop li ju\u017cawhom g\u0127as-su\u010b\u010bess tan-negozju. L-istudenti jitg\u0127allmu kif ji\u017cviluppaw, jimplimentaw u jittestjaw soluzzjonijiet imfassla apposta biex isolvu problemi f\u2019xenarji spe\u010bifi\u010bi.",
          "Unitajiet ta\u2019 studju addizzjonali jkopru aspetti b\u0127al: it-titjib tal-\u0127iliet tal-\u0127sieb kritiku tal-persuna, il-bini ta\u2019 strate\u0121iji g\u0127all-promozzjoni tan-negozju, il-fehim tal-im\u0121iba tal-konsumatur u l-li\u0121ijiet li jirregolaw il-pro\u010bess tan-negozju."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Advanced Diploma in IT",
          "MCAST Advanced Diploma in Business Administration",
          "MCAST Advanced Diploma in Marketing",
          "MCAST Advanced Diploma in Financial Services",
          "MCAST Advanced Diploma in Insurance",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Computing or Mathematics or a Business related subject"
      ],
      "req_preferred": [
          "A- or I-Level: Computing or Mathematics or a Business related subject"
      ],
      "req_other": [
          ""
      ],
      "careers": "Business analyst, Data scientist, Operations research analyst, Market research analyst, Project manager, Business consultant"
  }
    
  ]
  constructor() { }

  getAllIICTcourses(){
    return [...this.IICTcourses];
  }

  getIICTcourse(IICTcourseId: string){
    return {...this.IICTcourses.find(IICTcourse => {
      return IICTcourse.index === IICTcourseId;
    })};
  }  

}
