import { Injectable } from '@angular/core';
import { IETcourse } from './ietcourses.model';

@Injectable({
  providedIn: 'root'
})
export class IetService {

  private IETcourses: IETcourse[] = [
    {
      "index": "05-01",
      "institute": "iet",
      "code": "CE1-01-19",
      "title": "Introductory Certificate in Construction Engineering",
      "title_notes": "",
      "desc_en": [
          "The programme provides an opportunity for prospective learners in possession of the Secondary School Certificate and Profile (SSC&P) to experience and train in the basic skills related to the Construction industry. It presents learners with an opportunity to have extensive vocational hands-on practice in various sectors. The course includes practical hands-on experience in woodwork, plumbing, sheet-metal, bench-fitting, electrical and trowel practical exercises.",
          "The course includes a significant key skills component that will help learners improve their communication, literacy and numeracy skills. IT and Individual and Social Responsibility sessions are also part of the key skills component."
      ],
      "desc_mt": [
          "Dan il-programm jipprovdi lill-istudenti prospettivi li jkollhom i\u010b-\u010aertifikat u l-Profil tal-Iskola Sekondarja (SSC&P) l-opportunit\u00e0 ta\u2019 esperjenza u ta\u0127ri\u0121 fil-\u0127iliet ba\u017ci\u010bi relatati mal-industrija tal-Kostruzzjoni. Il-programm jippre\u017centa lill-istudenti opportunit\u00e0 ta\u2019 prattika diretta vokazzjonali estensiva f\u2019diversi setturi. Il-kors jinkludi esperjenza prattika fix-xog\u0127ol tal-injam, il-plumbing, ix-xog\u0127ol fil-metall, il-bench-fitting u e\u017cer\u010bizzji pratti\u010bi fl-elettriku u t-tik\u0127il.",
          "Il-kors jinkludi komponent sinifikanti ta\u2019 \u0127iliet ewlenin biex jg\u0127in lill-istudenti jtejbu l-\u0127iliet tag\u0127hom fil-komunikazzjoni, il-litteri\u017cmu u n-numeri\u017cmu. L-IT u r-Responsabbilt\u00e0 Individwali u So\u010bjali huma wkoll parti mill-komponent tal-\u0127iliet ewlenin."
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
      "index": "05-02",
      "institute": "iet",
      "code": "ET1-01-20",
      "title": "Introductory Certificate in Engineering",
      "title_notes": "",
      "desc_en": [
          "This programme provides an opportunity to prospective learners to explore basic principles and applications related to Engineering. The course will assist learners in developing technical skills. The vocational units are designed to provide learners with tool handling techniques, which would include soldering, material cutting and shaping, and assembly of electrical, electronic and mechanical components.",
          "Learners will have the opportunity to build simple projects which would be functional and useful. They are also given the opportunity to enhance their key skills: English, Maltese, Mathematics, Science and Individual and Social Responsibility through vocational content. These key skills subjects are mostly embedded into each vocational area, thus promoting the practical aspect of these subjects."
      ],
      "desc_mt": [
          "Dan il-programm jipprovdi lill-istudenti prospettivi l-opportunit\u00e0 li jesploraw prin\u010bipji u applikazzjonijiet ba\u017ci\u010bi relatati mal-In\u0121inerija. Il-kors jg\u0127in lill-istudenti biex ji\u017cviluppaw \u0127iliet tekni\u010bi. L-unitajiet vokazzjonali huma mfassla biex jipprovdu lill-istudenti t-teknika ta\u2019 kif wie\u0127ed g\u0127andu j\u017comm l-g\u0127odda biex jistanja, jaqta\u2019 u jifforma materjali, u jg\u0127aqqad komponenti elettri\u010bi, elettroni\u010bi u mekkani\u010bi.",
          "L-istudenti jkollhom l-opportunit\u00e0 li jibnu pro\u0121etti sempli\u010bi li jkunu funzjonali u utli. Huma jing\u0127ataw ukoll l-opportunit\u00e0 li jsa\u0127\u0127u l-\u0127iliet ewlenin tag\u0127hom fl-Ingli\u017c, il-Malti, il-Matematika, ix-Xjenza u r-Responsabbilt\u00e0 Individwali u So\u010bjali, permezz tal-kontenut vokazzjonali. Dawn is-su\u0121\u0121etti tal-\u0127iliet ewlenin huma \u0121eneralment inkorporati f\u2019kull qasam vokazzjonali, u g\u0127aldaqstant jippromwovu dan l-aspett prattiku ta\u2019 dawn is-su\u0121\u0121etti."
      ],
      "mqf": 1,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished compulsory education"
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
      "index": "05-03",
      "institute": "iet",
      "code": "ET2-02-19",
      "title": "Foundation Certificate in Engineering",
      "title_notes": "",
      "desc_en": [
          "This course is designed to provide an opportunity to prospective learners to follow a structured programme of study in Engineering. The programme includes a significant amount of hands-on practice, project-based learning and industry-related activities that will help learners form a clear idea of the nature of the engineering trade or vocation they intend to follow.",
          "This one-year Level 2 programme provides a broad introduction to basic theoretical concepts and practical skills in Mechanical, Electrical and Electronics Engineering and is suitable for those learners intending to start and further their studies in Engineering. Key skills subjects also form an integral part of this programme, giving learners the opportunity to nurture their competences in key areas: English, Maltese, Mathematics, Science, Information Technology and Individual and Social Responsibility."
      ],
      "desc_mt": [
          "Dan il-kors huwa mfassal biex jipprovdi lill-istudenti prospettivi l-opportunit\u00e0 li jsegwu programm strutturat ta\u2019 studju fl-In\u0121inerija. Il-programm jinkludi ammont sewwa ta\u2019 prattika diretta, tag\u0127lim ibba\u017cat fuq pro\u0121etti u attivitajiet relatati mal-industrija, li jg\u0127inu lill-istudenti jiffurmaw idea \u010bara tan-natura tas-seng\u0127a jew tal-vokazzjoni fil-qasam tal-in\u0121inerija li huma jixtiequ jaqbdu.",
          "Dan il-programm ta\u2019 sena f\u2019Livell 2 jipprovdi introduzzjoni wiesg\u0127a g\u0127all-kun\u010betti teoreti\u010bi ba\u017ci\u010bi u l-\u0127iliet pratti\u010bi fl-In\u0121inerija Mekkanika, Elettrika u Elettronika, u huwa tajjeb g\u0127al dawk l-istudenti li g\u0127andhom l-intenzjoni li jibdew u jkomplu jistudjaw l-In\u0121inerija. Is-su\u0121\u0121etti ta\u2019 \u0127iliet ewlenin jiffurmaw ukoll parti integrali minn dan il-programm, u jag\u0127tu lill-istudenti l-opportunit\u00e0 li jtejbu l-kompetenzi tag\u0127hom fl-oqsma ewlenin: l-Ingli\u017c, il-Malti, il-Matematika, ix-Xjenza, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
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
      "index": "05-04",
      "institute": "iet",
      "code": "CE2-01-19",
      "title": "Foundation Certificate in Construction Engineering",
      "title_notes": "",
      "desc_en": [
          "This programme provides the learner with an opportunity to get acquainted with the different vocational trades related to construction engineering. The vocational practice component is based on a \u2018taster\u2019 approach whereby the learner will learn about the tools, materials, processes and applications relative to:",
          "&middot; Welding and Fabrication",
          "&middot; Plumbing and Electrical Installation",
          "&middot; Refrigeration and Air-conditioning",
          "&middot; Woodwork",
          "&middot; Trowel trades, including Restoration, Stone Masonry and Tile Laying.",
          "Technical Drawing will complement the five vocational areas listed above. Learners will also have the opportunity to enhance their key skills, such as English, Maltese, Mathematics, Science, Information Technology and Individual and Social Responsibility, all of which will be embedded in the vocational content."
      ],
      "desc_mt": [
          "Dan il-programm jipprovdi lill-istudent l-opportunit\u00e0 li jsir familjari mas-snajja\u2019 vokazzjonali differenti relatati mal-in\u0121inerija tal-kostruzzjoni. Fil-komponent tal-prattika vokazzjonali l-istudent ikollu l-opportunit\u00e0 li jitg\u0127allem dwar l-g\u0127odod, il-materjali, il-pro\u010bessi u l-applikazzjonijiet relatati ma\u2019:",
          "&middot; L-Iwweldjar u l-Fabbrikazzjoni",
          "&middot; Il-Plumbing u l-Installazzjoni tal-Elettriku",
          "&middot; Ir-Refri\u0121erazzjoni u l-Kondizzjonament tal- Arja",
          "&middot; Ix-Xog\u0127ol tal-Injam",
          "&middot; Is-Seng\u0127a tat-Tik\u0127il, inklu\u017c ix-Xog\u0127ol ta\u2019 Restawr, ix-Xog\u0127ol tal-\u0120ebel u t-Tqeg\u0127id tal-Madum.",
          "Flimkien mal-\u0127ames oqsma vokazzjonali mni\u017c\u017cla hawn fuq, l-istudent jitg\u0127allem ukoll id-Disinn Tekniku. L-istudenti jkollhom anke l-opportunit\u00e0 li jsa\u0127\u0127u l-\u0127iliet ewlenin tag\u0127hom, b\u0127all-Ingli\u017c, il-Malti, il-Matematika, ix-Xjenza, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali, li huma kollha inkorporati fil-kontenut vokazzjonali."
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
      "index": "05-05",
      "institute": "iet",
      "code": "ME3-01-20",
      "title": "Diploma in Aircraft Maintenance",
      "title_notes": "",
      "desc_en": [
          "This programme of studies is designed to prepare learners with the necessary underpinning knowledge required for a career in aircraft maintenance. It covers the main aspects of aircraft structures and systems, materials and maintenance practices, as well as the fundamentals of electrical and digital techniques. The course includes practical elements and exposure within aircraft maintenance organisations.",
          "This course also provides learners with the opportunity to further develop their knowledge of key skills subjects such as Mathematics, Science, English, Maltese, Information Technology and Individual and Social Responsibility.",
          "Successful candidates can further their studies towards EASA Part-66 certification."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji huwa mfassal biex jipprovdi lill-istudenti l-g\u0127arfien ba\u017ciku me\u0127tie\u0121 g\u0127al karriera fil-manutenzjoni tal-ajruplani. Dan ikopri l-aspetti ewlenin tal-istrutturi u s-sistemi, il-materjali u l-pratti\u010bi ta\u2019 manutenzjoni ta\u2019 in\u0121enji tal-ajru, kif ukoll l-elementi fundamentali tat-teknika elettrika u di\u0121itali. Il-kors jinkludi elementi pratti\u010bi u esperjenza f\u2019kumpaniji li jag\u0127mlu manutenzjoni tal-ajruplani.",
          "Dan il-kors jipprovdi wkoll lill-istudenti l-opportunit\u00e0 biex ikomplu jsa\u0127\u0127u l-g\u0127arfien tag\u0127hom f\u2019su\u0121\u0121etti fundamentali, b\u0127all-Matematika, ix-Xjenza, l-Ingli\u017c, il-Malti, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali.",
          "Il-kandidati li jtemmu l-kors b\u2019su\u010b\u010bess jistg\u0127u jkomplu jistudjaw biex jiksbu \u010b-\u010bertifikat Part-66 tal-EASA."
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
          "Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "A medical certificate testing colour blindness is recommended for this course."
      ],
      "careers": "Aircraft junior mechanic"
  },
  {
      "index": "05-06",
      "institute": "iet",
      "code": "ME3-A4-19",
      "title": "Diploma in Aircraft Structures and Repairs",
      "title_notes": "",
      "desc_en": [
          "This MCAST Diploma is intended to train the learner for competences in Aircraft Structures and Repairs which are essential for structure repair mechanics. This training course will include Basic Aircraft Sheet Metal, Structures Repair Procedures and Human Factors, amongst other modules.",
          "The course is on a full-time basis and will take 12 months to be completed. It is divided into three main areas: namely the theoretical element, the practical experience and on-the-job exposure.",
          "This is an opportunity for individuals to commence or develop their career in the aviation industry."
      ],
      "desc_mt": [
          "Din id-Diploma tal-MCAST hija ma\u0127suba biex t\u0127arre\u0121 lill-istudenti fil-kompetenzi relatati mal-Istrutturi u t-Tiswijiet tal-Ajurplani, li huma essenzjali g\u0127all-mekkaniks li ja\u0127dmu f\u2019dan ix-xog\u0127ol. Dan il-kors ta\u2019 ta\u0127ri\u0121 jinkludi Basic Aircraft Sheet Metal (Xog\u0127ol Ba\u017ciku fuq Pjan\u010bi tal-Metall tal-Ajruplani), Structures Repair Procedures (Pro\u010beduri ta\u2019 Tiswija tal-Istrutturi) u Human Factors (Fatturi Umani), fost units o\u0127rajn.",
          "Il-kors huwa full-time u huwa mifrux fuq 12-il xahar. Huwa maqsum fi tliet oqsma ewlenin: l-element teoretiku, l-esperjenza prattika u t-ta\u0127ri\u0121 fuq il-post tax-xog\u0127ol.",
          "Din hija opportunit\u00e0 g\u0127al individwi li jixtiequ jibdew jew ji\u017cviluppaw il-karriera tag\u0127hom fl-industrija tal-avjazzjoni."
      ],
      "mqf": 3,
      "duration": "12 Months",
      "study": "",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes",
          "From: Mathematics, Physics, Graphical Communication\/Technical Drawing\/Design and Technology, Engineering Technology, English Language, Chemistry"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants already in possession of passes in Part-66 Aircraft Mechanic Category A modules will also be considered."
      ],
      "careers": "Aircraft structure repair mechanic, Aircraft maintenance mechanic, Aircraft cabin mechanic"
  },
  {
      "index": "05-07",
      "institute": "iet",
      "code": "ME-A1-19",
      "title": "EASA Part-66 Aircraft Maintenance Category A Licence Course",
      "title_notes": "",
      "desc_en": [
          "This programme is designed specifically to equip learners with the necessary theoretical understanding of aircraft maintenance and related systems, and is backed by practical experience in dedicated workshops at mechanic level.",
          "The course may lead to EASA Part-66 Category A licence which, subject to authorisation by the Part-145 Organization, will permit the holder to issue Certificates of Release to Service following minor scheduled works that may include line maintenance, defect rectification and component changes."
      ],
      "desc_mt": [
          "Dan il-programm huwa mfassal b\u2019mod spe\u010bifiku biex jipprovdi lill-istudenti l-g\u0127arfien teoretiku ne\u010bessarju dwar sistemi ta\u2019 manutenzjoni ta\u2019 in\u0121enji tal-ajru u sistemi relatati o\u0127ra. Dan huwa msa\u0127\u0127a\u0127 b\u2019esperjenza prattika fil-livell ta\u2019 mekkanik f\u2019workshops apposta.",
          "Il-kors jista\u2019 jwassal biex l-istudent jikseb il-li\u010benzja EASA Part-66 Category A u, bis-sa\u0127\u0127a tag\u0127ha, jekk ikollu l-awtorizzazzjoni mill-Part-145 Organisation, huwa jkun jista\u2019 jo\u0127ro\u0121 Certificates of Release to Service wara xog\u0127lijiet skedati \u017cg\u0127ar li jistg\u0127u jinkludu l-manutenzjoni tal-linja, ir-rettifikazzjoni ta\u2019 difetti u l-bdil ta\u2019 komponenti."
      ],
      "mqf": "",
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Electrical Installations",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Light Vehicle Servicing",
          "MCAST Diploma in Heating, Ventilation and Air-Conditioning",
          "MCAST Diploma in Aircraft Structures and Repairs",
          "MCAST Diploma in Aircraft Maintenance",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Physics (grade B or better)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants will be asked to attend an Interview and\/or sit for an Aptitude Test in Technical Understanding and Technical English. A pass in the Aptitude Test together with a positive outcome following a Colour Blindness test, are a pre-requisite for entry into the course."
      ],
      "careers": "Line maintenance mechanic, Workshop mechanic"
  },
  {
      "index": "05-08",
      "institute": "iet",
      "code": "CE3-A6-19",
      "title": "Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
      "title_notes": "",
      "desc_en": [
          "This course of studies combines theoretical knowledge with practical training both off-the-job and on work placement. The practical training is carried out in campus-based industrial workshops. Learners are expected to participate individually and in teams to install pipe systems, fittings and control systems with the use of actuators and solar panels installations. The course includes the practical handling of hand tools, power tools and typical trade tools, such as thread cutting machines.",
          "This course also provides learners with the opportunity to further develop their knowledge of key skills subjects such as Mathematics, Science, English, Maltese, Information Technology and Individual and Social Responsibility."
      ],
      "desc_mt": [
          "Dan il-kors ta\u2019 studji jikkombina l-g\u0127arfien teoretiku mat-ta\u0127ri\u0121 prattiku, kemm barra kif ukoll fil-post tax-xog\u0127ol. It-ta\u0127ri\u0121 prattiku jitwettaq f\u2019workshops industrijali bba\u017cati fil-kampus. L-istudenti huma mistennija li jipparte\u010bipaw b\u2019mod individwali u f\u2019timijiet biex jinstallaw sistemi ta\u2019 pajpijiet, fittings u sistemi ta\u2019 kontroll bl-u\u017cu ta\u2019 attwaturi, kif ukoll pannelli solari. Il-kors jinkludi l-immani\u0121\u0121jar prattiku ta\u2019 g\u0127odod tal-idejn, g\u0127odod tal-elettriku u g\u0127odod tipi\u010bi tas-snajja\u2019 partikolari, b\u0127al magni li jaqtg\u0127u l-kamin.",
          "Dan il-kors jipprovdi wkoll lill-istudenti l-opportunit\u00e0 li jkomplu jsa\u0127\u0127u l-g\u0127arfien tag\u0127hom fir-rigward tas-su\u0121\u0121etti tal-\u0127iliet ewlenin, b\u0127all-Matematika, ix-Xjenza, l-Ingli\u017c, il-Malti, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
      ],
      "mqf": 3,
      "duration": 1,
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
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Skilled worker, Plumber, Assistant electrician"
  },
  {
      "index": "05-09",
      "institute": "iet",
      "code": "CE3-02-19",
      "title": "Diploma in Construction Engineering",
      "title_notes": "",
      "desc_en": [
          "The course consists of College-based training on various skills related to the building and construction industry. It enables the learners to work in the sector or to continue their studies in related vocational areas, including Construction, Civil Engineering or Building Services.",
          "During this course of studies learners will be introduced to different types of technical drawings used in the construction industry. They learn how to apply construction drawing standards and conventions to produce sketches and professional working drawings.",
          "This course also provides learners with the opportunity to further develop their knowledge of key skills subjects such as Mathematics, Science, English, Maltese, Information Technology and Individual and Social Responsibility."
      ],
      "desc_mt": [
          "Dan il-kors jikkonsisti f\u2019ta\u0127ri\u0121 li jsir fil-Kulle\u0121\u0121 fid-diversi \u0127iliet relatati mal-industrija tal-bini u l-kostruzzjoni. Dan jg\u0127in lill-istudenti jsibu xog\u0127ol fis-settur jew ikomplu l-istudji tag\u0127hom f\u2019oqsma vokazzjonali relatati, inklu\u017ci l-Kostruzzjoni, l-In\u0121inerija \u010aivili jew is-Servizzi tal-Bini.",
          "Matul dan il-kors ta\u2019 studji, l-istudenti ji\u0121u introdotti g\u0127al tipi differenti ta\u2019 disinji tekni\u010bi u\u017cati fl-industrija tal-kostruzzjoni. Huma jitg\u0127allmu kif japplikaw standards ta\u2019 disinji tal-kostruzzjoni u konvenzjonijiet biex jipprodu\u010bu disinji u tpin\u0121ijiet tax-xog\u0127ol professjonali.",
          "Dan il-kors jipprovdi wkoll lill-istudenti l-opportunit\u00e0 li jkomplu jsa\u0127\u0127u l-g\u0127arfien tag\u0127hom fir-rigward tas-su\u0121\u0121etti tal-\u0127iliet ewlenin, b\u0127all-Matematika, ix-Xjenza, l-Ingli\u017c, il-Malti, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
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
          ""
      ],
      "req_preferred": [
          "Mathematics"
      ],
      "req_other": [
          "Assistant draughtsperson, Assistant land surveyor"
      ],
      "careers": ""
  },
  {
      "index": "05-10",
      "institute": "iet",
      "code": "CE3-A3-19",
      "title": "Diploma in Heating, Ventilation and Air-Conditioning",
      "title_notes": "",
      "desc_en": [
          "This course provides learners with the essential knowledge related to heating, ventilation and air-conditioning (HVAC). It will enable learners to work as assistant technicians engaged in servicing and carrying out maintenance on refrigeration compressors, condensers, evaporators and other accessories.",
          "Practical training is carried out in workshops equipped to industry standards. Learners are expected to participate individually and in teams to operate refrigeration and air conditioning equipment. This course also provides learners with the opportunity to further develop their knowledge of key skills subjects such as Mathematics, Science, English, Maltese, Information Technology and Individual and Social Responsibility."
      ],
      "desc_mt": [
          "Dan il-kors jipprovdi lill-istudenti g\u0127arfien essenzjali relatat mat-tis\u0127in, il-ventilazzjoni u l-kondizzjonament tal-arja (HVAC). Dan jippermetti lill-istudenti ja\u0127dmu b\u0127ala assistenti teknixins fl-isservisjar u t-twettiq ta\u2019 manutenzjoni fuq kompressuri tar-refri\u0121erazzjoni, kondensaturi, evaporaturi u a\u010b\u010bessorji o\u0127ra.",
          "It-ta\u0127ri\u0121 prattiku jsir f\u2019workshops attrezzati skont l-istandards tal-industrija. L-istudenti huma mistennija li jipparte\u010bipaw b\u2019mod individwali u f\u2019timijiet biex i\u0127addmu tag\u0127mir tar-refri\u0121erazzjoni u tal-kondizzjonament tal-arja. Dan il-kors jipprovdi wkoll lill-istudenti l-opportunit\u00e0 li jkomplu jsa\u0127\u0127u l-g\u0127arfien tag\u0127hom fir-rigward tas-su\u0121\u0121etti tal-\u0127iliet ewlenin, b\u0127all-Matematika, ix-Xjenza, l-Ingli\u017c, il-Malti, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
      ],
      "mqf": 3,
      "duration": 1,
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
          ""
      ],
      "req_other": [
          "A medical certificate for Colour Blindness is a necessary requirement to follow the course."
      ],
      "careers": "HVAC installer, HVAC assistant, Technician"
  },
  {
      "index": "05-11",
      "institute": "iet",
      "code": "CE3-A4-19",
      "title": "Diploma in Joinery and Furniture Making",
      "title_notes": "",
      "desc_en": [
          "This course of studies includes theoretical knowledge and practical training both in College-based industrial workshops and also on work placements. Technical and practical lessons cover measuring, cutting, preparing and assembling timber and timber board products to make interior fittings such as kitchen cabinets, doors and window frames. The learners will be expected to participate individually and in teams to produce simple products from solid wood and composite materials. Learners will be trained in the practical handling of hand and power tools and simple woodworking machines.",
          "This course also provides learners with the opportunity to further develop their knowledge of key skills subjects such as Mathematics, Science, English, Maltese, Information Technology and Individual and Social Responsibility."
      ],
      "desc_mt": [
          "Dan il-kors ta\u2019 studji jinkludi g\u0127arfien teoretiku u ta\u0127ri\u0121 prattiku kemm f\u2019workshops industrijali bba\u017cati fil-Kulle\u0121\u0121, kif ukoll waqt esperjenzi ta\u2019 xog\u0127ol. Il-lezzjonijiet tekni\u010bi u pratti\u010bi jinkludu l-kejl, il-qtug\u0127, it-t\u0127ejjija u l-armar ta\u2019 prodotti tal-injam u bordijiet tal-injam biex isiru fittings tad-djar, b\u0127al k\u010bejjen, bibien u twieqi. L-istudenti jkunu mistennija jipparte\u010bipaw b\u2019mod individwali u f\u2019timijiet biex jipprodu\u010bu prodotti sempli\u010bi minn materjali ta\u2019 njam mastizz u materjali komposti. L-istudenti ji\u0121u m\u0127arr\u0121a fl-u\u017cu prattiku ta\u2019 g\u0127odod tal-idejn u tal-elettriku u magni sempli\u010bi tax-xog\u0127ol tal-injam.",
          "Dan il-kors jipprovdi wkoll lill-istudenti l-opportunit\u00e0 li jkomplu jsa\u0127\u0127u l-g\u0127arfien tag\u0127hom fir-rigward tas-su\u0121\u0121etti tal-\u0127iliet ewlenin, b\u0127all-Matematika, ix-Xjenza, l-Ingli\u017c, il-Malti, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
      ],
      "mqf": 3,
      "duration": 1,
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
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Assistant joiner, Assistant carpenter, First line operator"
  },
  {
      "index": "05-12",
      "institute": "iet",
      "code": "CE3-A5-19",
      "title": "Diploma in Masonry Heritage Skills (Sewwej)",
      "title_notes": "",
      "desc_en": [
          "This vocational course enables learners to take up a career in stone restoration. It provides both practical and theoretical skills that lead learners to participate in a limited scope in stone restoration interventions. Successful learners can progress to the higher level course in restoration.",
          "Throughout the programme learners will have the opportunity to obtain the necessary maintenance, protection and preservation skills, understand preparation and recording techniques and apply cleaning and testing procedures. The programme is complemented with other essential units such as Safety at Work, Technical Reporting, Information Technology and Mathematics."
      ],
      "desc_mt": [
          "Dan il-kors vokazzjonali jg\u0127in lill-istudenti jid\u0127lu g\u0127al karriera fir-restawr tal-\u0121ebla. Il-kors jipprovdi kemm \u0127iliet pratti\u010bi kif ukoll teoreti\u010bi li jwasslu lill-istudenti biex jipparte\u010bipaw b\u2019mod limitat f\u2019interventi tar-restawr tal-\u0121ebla. L-istudenti li jtemmu dan il-kors b\u2019su\u010b\u010bess jistg\u0127u jkomplu l-istudji tag\u0127hom fil-kors ta\u2019 livell og\u0127la fir-restawr.",
          "Matul il-programm, l-istudenti jkollhom l-opportunit\u00e0 li jiksbu l-\u0127iliet ne\u010bessarji ta\u2019 manutenzjoni, protezzjoni u preservazzjoni, jifhmu t-teknika tat-t\u0127ejjija u r-re\u0121istrazzjoni u japplikaw pro\u010beduri ta\u2019 tindif u ta\u2019 ttestjar. Il-programm huwa kkumplimentat b\u2019unitajiet essenzjali o\u0127ra, b\u0127as-Sigurt\u00e0 fuq il-Post tax-Xog\u0127ol, ir-Rappurtar Tekniku, it-Teknolo\u0121ija tal-Informazzjoni u l-Matematika."
      ],
      "mqf": 3,
      "duration": 1,
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
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Masonry heritage skilled worker (Sewwej)"
  },
  {
      "index": "05-13",
      "institute": "iet",
      "code": "CE3-A8-19",
      "title": "Diploma in Welding and Fabrication",
      "title_notes": "",
      "desc_en": [
          "This Apprenticeship course combines theoretical knowledge with practical training, both in College-based industrial workshops and in industry-based apprenticeships. Learners will be expected to participate individually and in teams to fabricate welded products.",
          "Learners will have the opportunity to use hand and power tools as well as welding sets, giving particular attention to health and safety considerations."
      ],
      "desc_mt": [
          "This course also provides learners with the opportunity to further develop their knowledge of key skills subjects such as Mathematics, Science, English, Maltese, Information Technology and Individual and Social Responsibility. Dan il-kors ta\u2019 Apprendistat jikkombina l-g\u0127arfien teoretiku mat-ta\u0127ri\u0121 prattiku, kemm f\u2019workshops industrijali bba\u017cati fil-Kulle\u0121\u0121, kif ukoll waqt l-apprendistat fl-industrija. L-istudenti jkunu mistennija jipparte\u010bipaw b\u2019mod individwali u f\u2019timijiet biex jiffabbrikaw prodotti wweldjati.",
          "L-istudenti jkollhom l-opportunit\u00e0 li ju\u017caw g\u0127odod tal-idejn u tal-elettriku, kif ukoll settijiet tal-iwweldjar, b\u2019attenzjoni partikolari g\u0127al kunsiderazzjonijiet tas-sa\u0127\u0127a u s-sigurt\u00e0. Dan il-kors jipprovdi wkoll lill-istudenti l-opportunit\u00e0 li jkomplu jsa\u0127\u0127u l-g\u0127arfien tag\u0127hom fir-rigward tas-su\u0121\u0121etti tal-\u0127iliet ewlenin, b\u0127all-Matematika, ix-Xjenza, l-Ingli\u017c, il-Malti, it-Teknolo\u0121ija tal-Informazzjoni u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
      ],
      "mqf": 3,
      "duration": 1,
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
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Welding and fabrication tradesperson"
  },
  {
      "index": "05-14",
      "institute": "iet",
      "code": "EE3-A1-19",
      "title": "Diploma in Electrical Installations",
      "title_notes": "",
      "desc_en": [
          "This programme is the first stage for a learner who is interested in a career in electrical systems, such as that of an Electrician within the construction industry. It contributes towards an understanding of the relevant theory and allows learners to develop the practical skills required in this field.",
          "The programme consists of twelve modules, out of which six are vocational related and the rest are key skills related. Vocational modules focus on the basics of wiring electrical installation circuits using different cables and containment, electrical installation regulations, and health and safety requirements governing electrical installation processes. The rest of the modules provide an opportunity for learners to have adequate skills in Maltese, English, Mathematics, Information Technology, and Science and Technology."
      ],
      "desc_mt": [
          "Dan il-programm huwa l-ewwel stadju g\u0127al studenti li huma interessati f\u2019karriera f\u2019sistemi elettri\u010bi, b\u0127al dik ta\u2019 Elektrixin fl-industrija tal-kostruzzjoni. Il-kors jikkontribwixxi biex l-istudenti jifhmu t-teorija rilevanti u ji\u017cviluppaw il-\u0127iliet pratti\u010bi me\u0127tie\u0121a f\u2019dan il-qasam.",
          "Il-programm jikkonsisti fi tnax-il unit\u00e0 ta\u2019 studju, li minnhom sitta huma vokazzjonali u l-o\u0127rajn huma relatati mal-\u0127iliet ewlenin. L-unitajiet vokazzjonali jiffokaw fuq l-elementi ba\u017ci\u010bi biex wie\u0127ed jg\u0127addi wajers biex jinstalla \u010birkwiti tal-elettriku permezz ta\u2019 kejbils differenti u containment; fuq ir-regolamenti dwar l-installazzjoni tal-elettriku; u fuq ir-rekwi\u017citi tas-sa\u0127\u0127a u s-sigurt\u00e0 li jirregolaw il-pro\u010bessi tal-installazzjoni tal-elettriku. Il-bqija tal-unitajiet jipprovdu lill-istudenti l-opportunit\u00e0 li jkollhom \u0127iliet adegwati fil-Malti, l-Ingli\u017c, il-Matematika, it-Teknolo\u0121ija tal-Informazzjoni, u x-Xjenza u t-Teknolo\u0121ija."
      ],
      "mqf": 3,
      "duration": 1,
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
          "Mathematics or Physics or Engineering Technology"
      ],
      "req_other": [
          "A medical certificate testing Colour Blindness is a necessary requirement for the course."
      ],
      "careers": "Assistant electrician, Machine operator"
  },
  {
      "index": "05-15",
      "institute": "iet",
      "code": "EE3-A2-19",
      "title": "Diploma in Engineering (Electronics)",
      "title_notes": "",
      "desc_en": [
          "This programme is intended for learners who are interested in starting a career in the field of electronics. It enables learners to further their studies at higher levels and subsequently find employment in the field of electronics. The programme consists of twelve modules, out of which six are vocational while the other six address the vocational hands-on training.",
          "The vocational modules focus on the functions of electronic components, the electronic circuit design, the operation of electronic systems, the installation and configuration of PC hardware and software, interpreting engineering information, and working safely and effectively in the workplace. The key skills modules provide an opportunity for learners to gain adequate skills in Maltese, English, Mathematics, Information Technology, and Science and Technology.",
          "Furthermore, learners will receive guidance in their personal development."
      ],
      "desc_mt": [
          "Dan il-programm huwa ma\u0127sub g\u0127al studenti li huma interessati li jibdew karriera fil-qasam tal-elettronika. Il-kors jippermetti lill-istudenti jkomplu jistudjaw f\u2019livelli og\u0127la, biex eventwalment isibu impjieg fil-qasam tal-elettronika. Il-programm jikkonsisti fi tnax-il unit\u00e0 ta\u2019 studju, li minnhom sitta huma vokazzjonali filwaqt li s-sitta l-o\u0127ra jindirizzaw it-ta\u0127ri\u0121 prattiku vokazzjonali.",
          "L-unitajiet vokazzjonali jiffokaw fuq il-funzjonijiet ta\u2019 komponenti elettroni\u010bi, id-disinn ta\u010b-\u010birkwit elettroniku, l-operat ta\u2019 sistemi elettroni\u010bi, l-installazzjoni u l-konfigurazzjoni ta\u2019 \u0127ardwer u softwer tal-PC, l-interpretazzjoni tal-informazzjoni tal-in\u0121inerija, u l-\u0127idma b\u2019mod sikur u effettiv fuq il-post tax-xog\u0127ol. L-unitajiet tal-\u0127iliet ewlenin jipprovdu lill-istudenti l-opportunit\u00e0 li jiksbu \u0127iliet adegwati fil-Malti, l-Ingli\u017c, il-Matematika, it-Teknolo\u0121ija tal-Informazzjoni, u x-Xjenza u t-Teknolo\u0121ija.",
          "Barra minn hekk, l-istudenti jir\u010bievu gwida fl-i\u017cvilupp personali  tag\u0127hom."
      ],
      "mqf": 3,
      "duration": 1,
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
          "Mathematics or Physics or Engineering Technology"
      ],
      "req_other": [
          "A medical certificate testing Colour Blindness is recommended for this course."
      ],
      "careers": "Assistant technician on electronic equipment, Machine operator"
  },
  {
      "index": "05-16",
      "institute": "iet",
      "code": "ME3-A1-19",
      "title": "Diploma in Automotive Repair (Body and Paint)",
      "title_notes": "",
      "desc_en": [
          "The programme is intended for learners with or without knowledge and experience of the automotive industry. Learners will learn how to work on vehicle accident repair tasks on body work under minimal supervision. The course will also provide the learners with the skills required to carry out paint repairs to the manufacturers\u2019 specifications. They will thus gain a combination of theoretical knowledge and practical skills in automotive accident repair (panel beating) together with body paint principles. Learners will be expected to carry out effective housekeeping practices to work effectively within the automotive industry. They will also learn how to work safely when carrying out removal and replacement of exterior vehicle panels and paint jobs. Learners will also be expected to improve their knowledge of key skills subjects such as Mathematics, English, Maltese, Information Technology and Individual and Social Responsibility."
      ],
      "desc_mt": [
          "Il-programm huwa inti\u017c g\u0127al studenti li jkollhom, u wkoll g\u0127al dawk li ma jkollhomx, g\u0127arfien ta\u2019 u esperjenza fl-industrija tal-karozzi. L-istudenti jitg\u0127allmu jag\u0127mlu, bi ftit supervi\u017cjoni, xog\u0127lijiet ta\u2019 tiswija fuq il-body ta\u2019 karozzi li jkunu involuti f\u2019in\u010bident tat-traffiku. Il-kors jipprovdi wkoll lill-istudenti l-\u0127iliet me\u0127tie\u0121a biex iwettqu tiswijiet fir-rigward ta\u017c-\u017cebg\u0127a, f\u2019konformit\u00e0 mal-ispe\u010bifikazzjonijiet tal-fabbrika. Hekk, huma jiksbu ta\u0127lita ta\u2019 g\u0127arfien teoretiku u \u0127iliet pratti\u010bi fir-rigward tat-tiswija tal-karozzi li jkunu involuti f\u2019in\u010bident tat-traffiku (ji\u0121ifieri jtellg\u0127u d-daqqiet [panel beating]) flimkien mal-prin\u010bipji ba\u017ci\u010bi ta\u017c-\u017cebg\u0127a. Huwa mistenni li l-istudenti jwettqu pratti\u010bi effettivi ta\u2019 tindif intern biex ikunu jistghu ja\u0127dmu tajjeb fl-industrija tal-karozzi. Huma jitg\u0127allmu kif ja\u0127dmu b\u2019mod sikur meta jne\u0127\u0127u u jbiddlu l-pjan\u010bi esterni tal-karozza u waqt ix-xog\u0127lijiet ta\u2019 \u017cebg\u0127a. L-istudenti jkunu mistennija wkoll li jtejbu l-g\u0127arfien tag\u0127hom fis-su\u0121\u0121etti ta\u2019 \u0127iliet ewlenin b\u0127all-Matematika, l-Ingli\u017c, il-Malti, it-Teknolo\u0121ija tal-Informazzjoni, u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
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
          "Mathematics"
      ],
      "req_other": [
          "A medical certificate testing Colour Blindness is a necessary requirement for the course."
      ],
      "careers": "Panel beater, Body repair mechanic on vehicles, white goods etc."
  },
  {
      "index": "05-17",
      "institute": "iet",
      "code": "ME3-A2-18",
      "title": "Diploma in Light Vehicle Servicing",
      "title_notes": "",
      "desc_en": [
          "This programme is intended for learners who would like to start developing a strong grounding in the field of motor vehicle engineering and maintenance. Through the various aspects of training that this course provides, learners should be able to gain a good understanding of the basic systems found in light vehicles and how to handle tools safely.",
          "Learners will also develop the essential skills of the trade, including the carrying out of basic routine checks, the replacement of parts as required in the periodic servicing of vehicles, and the maintenance of appropriate service records. In this programme, learners will also follow studies in key skills subjects, such as English, Maltese, Mathematics, Information Technology, and Individual and Social Responsibility."
      ],
      "desc_mt": [
          "Dan il-programm huwa ma\u0127sub g\u0127al studenti li jixtiequ jibdew ji\u017cviluppaw ba\u017ci soda fil-qasam tal-in\u0121inerija u l-manutenzjoni ta\u2019 vetturi bil-mutur. Permezz tad-diversi aspetti tat-ta\u0127ri\u0121 ipprovduti matul dan il-kors, l-istudenti g\u0127andhom ikunu kapa\u010bi jiksbu fehim tajjeb tas-sistemi ba\u017ci\u010bi li wie\u0127ed isib f\u2019vetturi \u017cg\u0127ar, kif ukoll kif ju\u017caw l-g\u0127odda relatata b\u2019mod sikur.",
          "L-istudenti ji\u017cviluppaw ukoll il-\u0127iliet essenzjali tas-seng\u0127a biex jag\u0127mlu kontrolli ba\u017ci\u010bi ta\u2019 rutina, jibdlu parts kif me\u0127tie\u0121 fis-servisjar perjodiku tal-vetturi, u j\u017commu rekords xierqa tas-service. F\u2019dan il-programm, l-istudenti jsegwu wkoll studji fir-rigward tas-su\u0121\u0121etti tal-\u0127iliet ewlenin, b\u0127all-Ingli\u017c, il-Malti, il-Matematika, it-Teknolo\u0121ija tal-Informazzjoni, u r-Responsabbilt\u00e0 Individwali u So\u010bjali."
      ],
      "mqf": 3,
      "duration": 1,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level passes\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Mathematics or Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Light vehicle service mechanic, Assistant light vehicle mechanic, Assistant fitter"
  },
  {
      "index": "05-18",
      "institute": "iet",
      "code": "ME3-A3-19",
      "title": "Diploma in Mechanical Engineering",
      "title_notes": "",
      "desc_en": [
          "If learners intend to embark on an engineering career specialising particularly in the mechanical sector, then this course is recommended. This MCAST programme is designed to provide basic theory and practice that can be further enhanced through work experience.",
          "Learning takes place by attending lectures in the classroom, workshops and laboratories, and by completing projects and assignments that are often based on realistic workplace situations. The course covers the basic knowledge and practical skills, providing a good foundation for future career opportunities in engineering. Learners are exposed to a deeper knowledge in related subjects such as Mathematics, Physics, Engineering Drawing and Information Technology."
      ],
      "desc_mt": [
          "Dan il-kors huwa rrakkomandat g\u0127al dawk l-istudenti li jkollhom l-intenzjoni li jibdew karriera fl-in\u0121inerija li tispe\u010bjalizza b\u2019mod partikolari fis-settur mekkaniku. Dan il-programm tal-MCAST huwa mfassal biex jipprovdi t-teorija u l-prattika f\u2019livell ba\u017ciku. Dawn jistg\u0127u ji\u0121u msa\u0127\u0127a permezz ta\u2019 esperjenza ta\u2019 xog\u0127ol.",
          "It-tag\u0127lim ise\u0127\u0127 permezz ta\u2019 lezzjonijiet fil-klassi, fil-workshops u fil-laboratorji, u bit-twettiq ta\u2019 pro\u0121etti u assignments li \u0127afna drabi jkunu bba\u017cati fuq sitwazzjonijiet realisti\u010bi fuq il-post tax-xog\u0127ol. Il-kors ikopri l-g\u0127arfien u l-\u0127iliet pratti\u010bi ba\u017ci\u010bi, filwaqt li jipprovdi ba\u017ci tajba g\u0127al opportunitajiet ta\u2019 karriera fl-in\u0121inerija fil-futur. L-istudenti huma esposti g\u0127al g\u0127arfien aktar profond f\u2019su\u0121\u0121etti relatati, b\u0127all-Matematika, il-Fi\u017cika, l-Engineering Drawing u t-Teknolo\u0121ija tal-Informazzjoni."
      ],
      "mqf": 3,
      "duration": 1,
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
          "Mathematics or Physics or Chemistry or Engineering Technology"
      ],
      "req_other": [
          ""
      ],
      "careers": "Machine operator, Technical operator, Assistant technician"
  },
  {
      "index": "05-19",
      "institute": "iet",
      "code": "MI3-01-20",
      "title": "Diploma in Deck Operations",
      "title_notes": "",
      "desc_en": [
          "This study programme is intended for learners who in future intend to apply for the course leading to an Officer in Charge of a Navigational Watch. This course is also an opportunity for those learners who would like to find a job and actively work in a maritime environment such as a deck crew on board ships and gain valuable sea time, or in an inshore marina job. The Diploma in Deck Operations course will deliver a solid foundation in general ship knowledge, seamanship and navigation, and provides an understanding of the basic legislative environment within which ships operate. This course also provides an opportunity for learners to complete the STCW basic safety training components. Learners will also be able to sit for the GMDSS ROC and Commercial Vessel Boatmaster Grade 1 examinations, provided that other requirements stipulated by Transport Malta are met."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studju huwa ma\u0127sub g\u0127al studenti li g\u0127andhom l-intenzjoni li fil-futur japplikaw g\u0127all-kors biex jil\u0127qu Uffi\u010bjal fil-Kariga ta\u2019 G\u0127assa tan-Navigazzjoni, i\u017cda li g\u0127ad m\u2019g\u0127andhomx ir-rekwi\u017citi tad-d\u0127ul. Il-kors jag\u0127ti l-opportunit\u00e0 wkoll lil dawk l-istudenti li jixtiequ jsibu impjieg u ja\u0127dmu f\u2019ambjent tal-ba\u0127ar b\u0127ala ekwipa\u0121\u0121 abbord bastimenti, u jiksbu \u0127in ta\u2019 servizz siewi fuq il-ba\u0127ar, jew impjieg f\u2019marina qrib il-kosta. Id-Diploma in Deck Operations tipprovdi ba\u017ci soda fl-g\u0127arfien \u0121enerali dwar il-bastimenti, it-tba\u0127\u0127ir u n-navigazzjoni kif ukoll fehim ba\u017ciku tal-ambjent le\u0121i\u017clattiv li fih joperaw il-bastimenti. Dan il-kors jag\u0127ti opportunit\u00e0 lill-istudenti jlestu l-komponenti ta\u2019 ta\u0127ri\u0121 ba\u017ciku ta\u2019 sigurt\u00e0 tal-STCW, u jag\u0127mlu l-e\u017camijiet g\u0127a\u010b-\u010bertifikat tal-GMDSS ROC u ta\u2019 Commercial Vessel Boatmaster tal-ewwel grad, basta jkunu jissodisfaw ir-rekwi\u017citi l-o\u0127ra ta\u2019 Transport Malta."
      ],
      "mqf": 3,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Foundation Certificate",
          "2 SEC\/O-Level\/SSC&P (Level 3) passes Preferred: Mathematics, English Language"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "As from 2023 the Mathematics SEC\/O-Level\/SSC&P (Level 3) pass will become compulsory",
          "Medical test, Physical Aptitude Test and Interview."
      ],
      "careers": "Deck crew, Shipping clerk, Water clerk with a shipping agency, Mooring man"
  },
  {
      "index": "05-20",
      "institute": "iet",
      "code": "ME4-A6-19",
      "title": "Advanced Diploma in Aviation Operations",
      "title_notes": "",
      "desc_en": [
          "This study programme is designed to equip learners with the necessary understanding and an all-round introduction to the aviation industry for those who wish to further their career in one of its occupational areas. This course may lead to roles in airports such as passenger liaison, ramp work, cargo operations and ground handling, aircraft operations and customer service. The course is structured to give learners an overview of aviation operations in preparation for the specialized areas that interest career aspirations within the sector. The course covers the appropriate fundamentals for progression onto further aviation specialization in the sector. The theoretical elements are supplemented with practical elements. Successful learners can progress to the Bachelor of Arts (Honours) in Business Enterprise. This course includes work-related training and practice. Applicants have to be able to work within the industries concerned."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studju huwa mfassal biex jipprovdi l-g\u0127arfien me\u0127tie\u0121 u introduzzjoni \u0121enerali g\u0127all-industrija tal-avjazzjoni lil dawk l-istudenti li jixtiequ karriera f\u2019wie\u0127ed mill-oqsma ta\u2019 din l-industrija. Il-programm jista\u2019 jwassal g\u0127al xog\u0127ol fl-ajruport, b\u0127al kuntatt mal-passi\u0121\u0121ieri, xog\u0127ol fuq ir-rampa, \u0127att ta\u2019 merkanzija, xog\u0127ol fuq in\u0121enji tal-ajru u servizz lill-klijenti. L-istruttura tal-kors tag\u0127ti lill-istudenti \u0127arsa \u0121enerali lejn is-settur tal-avjazzjoni u tippreparahom g\u0127all-oqsma spe\u010bjalizzati li huma ta\u2019 interess g\u0127al min jixtieq jag\u0127mel karriera fl-avjazzjoni. Il-kors ikopri l-elementi fundamentali xierqa biex wie\u0127ed ikun jista\u2019 jkompli jispe\u010bjalizza fis-settur. L-elementi teoreti\u010bi huma msa\u0127\u0127a b\u2019elementi pratti\u010bi. L-istudenti li jirnexxu f\u2019dan il-kors jistg\u0127u jkomplu l-istudji tag\u0127hom fil-Bachelor of Arts (Honours) in Business Enterprise. Il-programm jinkludi ta\u0127ri\u0121 u prattika f\u2019xog\u0127ol relatat mas-settur. L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "4 SEC\/O-Level\/SSC&P (Level 3) passes",
          "Any MCAST Level 3 Diploma"
      ],
      "req_compulsory": [
          "English Language"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants will be asked to attend an Interview and\/ or sit for an Aptitude Test in Technical Understanding and Technical English. A pass in the Aptitude Test is a pre-requisite for entry to the course."
      ],
      "careers": "Passenger check-in, Passenger services, Flight operations, Aircraft dispatch, Ground handling"
  },
  {
      "index": "05-21",
      "institute": "iet",
      "code": "ME4-A1-20",
      "title": "Advanced Diploma in Aircraft Maintenance (Aeroplanes -Turbine Engines)",
      "title_notes": "also leading to EASA Part-66 CAT B1.1 examinations",
      "desc_en": [
          "This programme is designed to equip learners with the necessary theoretical knowledge of aircraft maintenance and related mechanical systems at technician level, which is also backed by practical experience in our workshops.",
          "Learners attending this course will be prepared to sit for the relative examinations organised by awarding bodies, and which may lead to being awarded the EASA Part-66 Category B1.1 licence. Subject to authorisation by the Part-145 Organization, the licence will permit the holder to issue Certificates of Release to Service following scheduled works that may include line maintenance, defect rectifications, aircraft structure, power plants and mechanical and electrical systems. Throughout the course, Civil Aviation Directorate Examination Fees will be paid by the learner."
      ],
      "desc_mt": [
          "Dan il-programm huwa mfassal biex jipprovdi lill-istudenti l-g\u0127arfien teoretiku ne\u010bessarju dwar is-sistemi ta\u2019 manutenzjoni tal-ajruplani u sistemi mekkani\u010bi o\u0127ra relatati fil-livell ta\u2019 teknixin. Dan huwa msa\u0127\u0127a\u0127 ukoll b\u2019esperjenza prattika fil-workshops tag\u0127na.",
          "L-istudenti li jattendu dan il-kors jit\u0127ejjew g\u0127all-e\u017camijiet relattivi, organizzati minn istituzzjonijiet li joffru dawn il-kwalifiki, u li jistg\u0127u jwasslu g\u0127all-g\u0127oti tal-li\u010benzja EASA Part-66 Category B1.1. Permezz ta\u2019 din il-li\u010benzja, wie\u0127ed ikun jista\u2019, jekk ikollu l-awtorizzazzjoni mill-Part-145 Organisation, jo\u0127ro\u0121 Certificates of Release to Service wara xog\u0127lijiet skedati, li jistg\u0127u jinkludu l-manutenzjoni tal-linja, ir-rettifikazzjoni tad-difetti, l-istruttura tal-in\u0121enji tal-ajru, l-impjanti tal-ener\u0121ija u s-sistemi mekkani\u010bi u elettri\u010bi. Matul il-kors, il-mi\u017cati tal-e\u017camijiet tad-Direttorat tal-Avjazzoni \u010aivili jit\u0127allsu mill-istudent."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "EASA Part-66 Aircraft Maintenance Category A Licence Course",
          "MCAST Diploma in Heating, Ventilation and Air Conditioning",
          "MCAST Diploma in Electrical Installations",
          "MCAST Diploma in Aircraft Maintenance",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Automotive Maintenance and Repair",
          "MCAST Diploma in Mechanical Engineering",
          "(Applicants must have obtained grades that when averaged will yield an overall Grade B)",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Mathematics, Physics (Grade 4 or better), English Language"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants will be asked to attend an Interview and\/or sit for an Aptitude Test in Technical Understanding and Technical English. A pass in the Aptitude Test together with a positive outcome following a Colour Blindness test, are a pre-requisite for entry to the course."
      ],
      "careers": "Line maintenance technician, Base maintenance technician, Workshop technician"
  },
  {
      "index": "05-22",
      "institute": "iet",
      "code": "ME4-A2-20",
      "title": "Advanced Diploma in Aircraft Maintenance (Avionics)",
      "title_notes": "also leading to EASA Part-66 CAT B2 examinations",
      "desc_en": [
          "This programme is designed to equip learners with the necessary theoretical knowledge of aircraft maintenance and related electrical and avionics systems at technician level. This is also backed by practical experience in dedicated workshops.",
          "Learners attending this course will be prepared to sit for the relative examinations organised by awarding bodies, which may lead to being awarded the EASA Part-66 Category B2 licence. Subject to authorisation by the Part-145 Organization, the licence will permit the holder to issue Certificates of Release to Service following maintenance on electrical and avionics systems.",
          "This training programme, includes work-related training and practice. Applicants have to be able to work within the industries concerned. During the course the learner will also have the possibility of achieving an Advanced Diploma which would mean that the learner would be able to access higher level learning at degree level."
      ],
      "desc_mt": [
          "Dan il-programm huwa mfassal biex jipprovdi lill-istudenti l-g\u0127arfien teoretiku ne\u010bessarju dwar is-sistemi ta\u2019 manutenzjoni ta\u2019 in\u0121enji tal-ajru u sistemi elettroni\u010bi u avjoni\u010bi relatati o\u0127ra fil-livell ta\u2019 teknixin. Dan l-g\u0127arfien huwa msa\u0127\u0127a\u0127 b\u2019esperjenza prattika f\u2019workshops apposta.",
          "L-istudenti li jattendu dan il-kors jit\u0127ejjew g\u0127all-e\u017camijiet relatati, organizzati minn istituzzjonijiet li joffru dawn il-kwalifiki, u li jistg\u0127u jwasslu g\u0127all-g\u0127oti tal-li\u010benzja EASA Part-66 Category B2. Permezz ta\u2019 din il-li\u010benzja, wie\u0127ed ikun jista\u2019, jekk ikollu l-awtorizzazzjoni mill-Part-145 Organisation, jo\u0127ro\u0121 Certificates of Release to Service wara xog\u0127ol ta\u2019 manutenzjoni fuq sistemi elettri\u010bi u avjoni\u010bi.",
          "Dan il-programm jinkludi ta\u0127ri\u0121 u prattika relatati max-xog\u0127ol. L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati. Waqt il-kors, l-istudent ikollu l-possibbilt\u00e0 li jikseb Advanced Diploma, li jfisser li jkun jista\u2019 jkompli jistudja fil-livell ta\u2019 ba\u010bellerat."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "EASA Part-66 Aircraft Maintenance Category A Licence Course",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Aircraft Maintenance (Applicants must have obtained grades that when averaged will yield an overall Grade B)",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Mathematics, Physics (Grade 4 or better), English Language"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants will be asked to attend an Interview and\/or sit for an Aptitude Test in Technical Understanding and Technical English. A pass in the Aptitude Test together with a positive outcome following a Colour Blindness test, are a pre-requisite for entry to the course."
      ],
      "careers": "Base maintenance technician, Avionics workshop technician, Pipe welding specialist (pipe welder and fabricator)"
  },
  {
      "index": "05-23",
      "institute": "iet",
      "code": "CE4-A7-19",
      "title": "Advanced Diploma in Building Services Engineering",
      "title_notes": "",
      "desc_en": [
          "This course offers learners training in a wide range of building services systems in both the Mechanical and the Electrical fields. The theme of energy conservation and environmental impact are two themes that cut across most study-units in this programme of study. This enables learners to carry out duties at a technical level.",
          "Qualified technicians are continuously required in building services design and installation companies, to work on new installations or to refit, carry out maintenance or servicing on existing installations in order to upgrade them to the requirements of new regulations.",
          "This course includes training both in College-based industrial workshops as well as in an industry-based apprenticeship, providing learners with a holistic training in the sector."
      ],
      "desc_mt": [
          "Dan il-kors joffri ta\u0127ri\u0121 f\u2019firxa wiesg\u0127a ta\u2019 sistemi ta\u2019 servizzi tal-bini, fl-oqsma kemm Mekkani\u010bi kif ukoll Elettri\u010bi. Il-konservazzjoni tal-ener\u0121ija u l-impatt ambjentali huma \u017cew\u0121 temi li jid\u0127lu f\u2019\u0127afna unitajiet ta\u2019 studju ta\u2019 dan il-programm ta\u2019 studju. Dan jippermetti lill-istudenti jwettqu dmirijiet fil-livell tekniku.",
          "Teknixins kwalifikati huma kontinwament me\u0127tie\u0121a f\u2019kumpaniji tad-disinn u l-installazzjoni tas-servizzi tal-bini, biex ja\u0127dmu fuq installazzjonijiet \u0121odda jew biex jirrinovaw dawk qodma, iwettqu xog\u0127ol ta\u2019 manutenzjoni jew ta\u2019 servisjar fuq installazzjonijiet e\u017cistenti, sabiex dawn ikunu jissodisfaw ir-rekwi\u017citi ta\u2019 regolamenti \u0121odda.",
          "Dan il-kors jinkludi ta\u0127ri\u0121 kemm f\u2019workshops industrijali bba\u017cati fil-Kulle\u0121\u0121, kif ukoll f\u2019apprendistat fl-industrija, b\u2019tali mod li l-istudenti jir\u010bievu ta\u0127ri\u0121 \u0127olistiku fis-settur."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Heating, Ventilation and Air-Conditioning",
          "MCAST Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
          "MCAST Diploma in Electrical Installations",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Construction Engineering",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Draughtsperson, Tendering and estimating technician, Quality assurance technician"
  },
  {
      "index": "05-24",
      "institute": "iet",
      "code": "CE4-A6-19",
      "title": "Advanced Diploma in Construction Engineering",
      "title_notes": "",
      "desc_en": [
          "This course comprises both College-based training and work-based learning. It gives an in-depth knowledge and experience of the general requirements and specialist areas related to the field of building and construction. At the end of the first year, learners can choose one of four streams that include: Construction Design, Quantity Surveying, Land Surveying, and Civil and Road Engineering.",
          "Learners will be able to carry out duties at a professional and technical level in areas such as building, construction, civil and roads engineering. They will be able to carry out tasks related to Design, Quantity Surveying, Land Surveying, Geospatial Engineering, Geographical Information, Roads and Project Management. This course includes work-related training and practice."
      ],
      "desc_mt": [
          "Dan il-kors jinkludi kemm ta\u0127ri\u0121 li jsir fil-Kulle\u0121\u0121 kif ukoll tag\u0127lim fil-post tax-xog\u0127ol. Dan jipprovdi lill-istudenti g\u0127arfien profond u esperjenza tar-rekwi\u017citi \u0121enerali u l-oqsma spe\u010bjalizzati relatati mal-qasam tal-bini u l-kostruzzjoni. Fi tmiem l-ewwel sena, l-istudenti jistg\u0127u jag\u0127\u017clu wie\u0127ed minn erba\u2019 setturi li jinkludu: id-Disinn tal-Kostruzzjoni, l-Ist\u0127arri\u0121 tal-Kwantit\u00e0, l-Ist\u0127arri\u0121 tal-Art, u l-In\u0121inerija \u010aivili u tat-Toroq.",
          "L-istudenti jkunu jistg\u0127u jwettqu, f\u2019livell professjonali u tekniku, xog\u0127ol li huwa kontinwament me\u0127tie\u0121 f\u2019oqsma tal-in\u0121inerija tal-bini, tal-kostruzzjoni, u l-in\u0121inerija \u010bivili u dik tat-toroq. Huma jkunu jistg\u0127u jwettqu dmirijiet relatati mad-Disinn, l-Ist\u0127arri\u0121 tal-Kwantit\u00e0, l-Ist\u0127arri\u0121 tal-Art, l-In\u0121inerija \u0120eospazjali, l-Informazzjoni \u0120eografika, il-\u0120estjoni tat-Toroq u ta\u2019 Pro\u0121etti. Dan il-kors jinkludi ta\u0127ri\u0121 u prattika relatati mas-settur."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Heating, Ventilation and Air-Conditioning",
          "MCAST Diploma in Construction Engineering",
          "MCAST Diploma in Joinery and Furniture Making",
          "MCAST Diploma in Trowel Trades (Plastering and Tile Laying or Painting and Decorating)",
          "MCAST Diploma in Masonry Heritage Skills (Sewwej)",
          "MCAST Diploma in Welding and Fabrication",
          "MCAST Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Draughtsperson, Tendering and estimating technician (assistant quantity surveyor), Land surveyor, Assistant project manager, Services design manager, Construction site supervisor, Quality assurance supervisor, Estate and facilities supervisor"
  },
  {
      "index": "05-25",
      "institute": "iet",
      "code": "CE4-A1-19",
      "title": "Advanced Diploma in Heating, Ventilation and Air-Conditioning",
      "title_notes": "",
      "desc_en": [
          "This programme of study gives participants the knowledge and skills that are required by the Heating, Ventilation and Air Conditioning (HVAC) industry. Learners will be expected to carry out system modifications and customization. The course is based on College-based training as well as work-based learning. Learners will gain an in-depth knowledge and experience which may lead them to supervisory roles in the HVAC sector.",
          "During the course learners are given the opportunity to develop personal skills and attributes essential for a successful performance in related careers. Applicants need to be able to work within the industries concerned."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studju jipprovdi lill-parte\u010bipanti l-g\u0127arfien u l-\u0127iliet li titlob l-industrija tat-Tis\u0127in, il-Ventilazzjoni u l-Kondizzjonament tal-Arja (HVAC). L-istudenti jkunu mistennija li jwettqu modifiki u adattamenti tas-sistemi. Il-kors huwa bba\u017cat fuq ta\u0127ri\u0121 li jsir fil-Kulle\u0121\u0121 kif ukoll tag\u0127lim fil-post tax-xog\u0127ol. L-istudenti jiksbu g\u0127arfien profond u esperjenza li jistg\u0127u jwassluhom g\u0127al rwoli ta\u2019 supervi\u017cjoni fis-settur tal-HVAC.",
          "Matul il-kors l-istudenti jing\u0127ataw l-opportunit\u00e0 li ji\u017cviluppaw \u0127iliet u attributi personali essenzjali biex jag\u0127mlu su\u010b\u010bess f\u2019karrieri relatati. L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
          "MCAST Diploma in Construction Engineering",
          "MCAST Diploma in Heating, Ventilation and Air Conditioning",
          "MCAST Diploma in Welding and Fabrication",
          "MCAST Diploma in Electrical Installations",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Mechanical Engineering",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Heating, ventilation and air-conditioning technician, Refrigeration technician, FGAS Licensed Technician (subject to respective authority approval)"
  },
  {
      "index": "05-26",
      "institute": "iet",
      "code": "CE4-A2-19",
      "title": "Advanced Diploma in Joinery, Furniture Design and Manufacturing",
      "title_notes": "",
      "desc_en": [
          "This diploma course is aimed at students intending to embark in a career in the woodworking industry. It combines theoretical knowledge and practical training. The practical training is conducted both in College-based industrial workshops and in an industry-based apprenticeship or work placement.",
          "Learners will learn how to analyse and provide solutions to typical joinery and furniture products using solid wood and composite materials. Learners will be expected to participate individually and in teams to produce solid wood and composite material manufactured products. Applicants need to be able to work within the industries concerned.",
          "Applicants applying through the Secondary Education Certificate route may be requested to complete an additional Level 4 preparatory year if they do not have prior exposure and experience in the sector."
      ],
      "desc_mt": [
          "Dan il-kors ta\u2019 diploma huwa mmirat lejn studenti li jixtiequ jag\u0127mlu karriera fl-industrija tax-xog\u0127ol tal-injam. Il-kors jikkombina l-g\u0127arfien teoretiku mat-ta\u0127ri\u0121 prattiku. It-ta\u0127ri\u0121 prattiku jsir kemm f\u2019workshops industrijali bba\u017cati fil-Kulle\u0121\u0121, kif ukoll fl-industrija waqt apprendistat jew esperjenza ta\u2019 xog\u0127ol.",
          "L-istudenti jitg\u0127allmu kif janalizzaw u jipprovdu soluzzjonijiet g\u0127al prodotti tipi\u010bi tal-g\u0127amara bl-u\u017cu ta\u2019 njam mastizz u materjali komposti. L-istudenti jkunu mistennija jipparte\u010bipaw b\u2019mod individwali u f\u2019timijiet biex jipprodu\u010bu prodotti manifatturati bl-injam mastizz jew materjali komposti. L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati.",
          "L-applikanti li japplikaw permezz ta\u010b-\u010aertifikat tal-Edukazzjoni Sekondarja jistg\u0127u ji\u0121u mitluba jag\u0127mlu sena preparatorja addizzjonali f\u2019Livell 4, jekk ma jkollhomx esperjenza jew qatt ma jkunu \u0121ew esposti g\u0127al xog\u0127ol f\u2019dan is-settur."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Joinery and Furniture Making",
          "MCAST Diploma in Construction Engineering",
          "MCAST Diploma in Automotive Repair (Body and Paint)",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English, Mathematics, Technical Drawing, Engineering Technology, Graphical Communication"
      ],
      "req_other": [
          ""
      ],
      "careers": "Carpenter, Furniture design supervisor\/manager, Tendering and estimating manager (joinery and furniture making)"
  },
  {
      "index": "05-27",
      "institute": "iet",
      "code": "CE4-A3-19",
      "title": "Advanced Diploma in Masonry Heritage Skills (Mastru)",
      "title_notes": "",
      "desc_en": [
          "This course of studies gives learners the necessary knowledge and skills in the area of stone restoration and conservation. It offers learners the competences they will need in order to be able to analyse and generate solutions concerning typical restoration interventions.",
          "The practical training is carried out in College-based workshops and laboratories as well as on heritage sites. Throughout the programme learners will have the unique opportunity to work on historical heritage sites and structures to master maintenance, protection and preservation skills, and apply cleaning and testing techniques. Applicants have to be able to work within the industries concerned."
      ],
      "desc_mt": [
          "Dan huwa kors ta\u2019 studji li jipprovdi lill-istudenti l-g\u0127arfien u l-\u0127iliet ne\u010bessarji fil-qasam tar-restawr u l-konservazzjoni tal-\u0121ebla. Il-kors joffri lill-istudenti l-kompetenzi li je\u0127tie\u0121u sabiex ikunu jistg\u0127u janalizzaw u ji\u0121\u0121eneraw soluzzjonijiet dwar interventi tipi\u010bi ta\u2019 restawr.",
          "It-ta\u0127ri\u0121 prattiku jsir f\u2019workshops ibba\u017cati fil-Kulle\u0121\u0121 u f\u2019laboratorji, kif ukoll f\u2019siti ta\u2019 patrimonju. Matul il-programm, l-istudenti jkollhom l-opportunit\u00e0 unika li ja\u0127dmu fuq siti u strutturi ta\u2019 patrimonju storiku, biex jiksbu \u0127iliet ta\u2019 manutenzjoni, protezzjoni u preservazzjoni, u japplikaw tekniki ta\u2019 tindif u ttestjar. L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Trowel Trades (Plastering and Tile Laying or Painting and Decorating)",
          "MCAST Diploma in Construction and Stone Masonry",
          "MCAST Diploma in Construction Engineering",
          "MCAST Diploma in Heating, Ventilation and Air-Conditioning",
          "MCAST Diploma in Masonry Heritage Skills (Sewwej)",
          "MCAST Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English, Physics, Chemistry, Engineering Technology"
      ],
      "req_other": [
          ""
      ],
      "careers": "Mastru in the field of stone masonry heritage skills, Stone masonry heritage sites supervisor"
  },
  {
      "index": "05-28",
      "institute": "iet",
      "code": "CE4-A4-19",
      "title": "Advanced Diploma in Plumbing and Liquid Petroleum Gas Systems",
      "title_notes": "",
      "desc_en": [
          "This course combines theoretical knowledge and practical training both in College-based industrial workshops and in an industry-based apprenticeship or work placement. Learners will learn how to analyse and generate solutions to perform typical plumbing installations, alterations, repairs and planned maintenance.",
          "Learners are expected to participate individually and in teams to install pipe systems and fittings and accessories of domestic, commercial and industrial installations.",
          "The course also covers liquid petroleum gas (LPG) systems installed to REWS\/MSA standards. Applicants need to be able to work within the industries concerned."
      ],
      "desc_mt": [
          "Dan il-kors jikkombina l-g\u0127arfien teoretiku u t-ta\u0127ri\u0121 prattiku kemm f\u2019workshops industrijali bba\u017cati fil-Kulle\u0121\u0121 kif ukoll waqt apprendistat jew esperjenza ta\u2019 xog\u0127ol fl-industrija. L-istudenti jitg\u0127allmu janalizzaw u ji\u0121\u0121eneraw soluzzjonijiet biex jag\u0127mlu xog\u0127ol tipiku ta\u2019 installazzjonijiet ta\u2019 plumbing, tibdil, tiswijiet u manutenzjoni ppjanata minn qabel.",
          "L-istudenti jkunu mistennija jipparte\u010bipaw b\u2019mod individwali u f\u2019timijiet biex jinstallaw sistemi ta\u2019 pajpijiet u fittings u a\u010b\u010bessorji ta\u2019 installazzjonijiet domesti\u010bi, kummer\u010bjali u industrijali.",
          "Il-kors ikopri wkoll sistemi tal-gass likwifikat mi\u017c-\u017cejt (LPG) installati skont l-istandards tar-REWS\/ MSA. L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Construction Engineering",
          "MCAST Diploma in Heating, Ventilation and Air-Conditioning",
          "MCAST Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
          "MCAST Diploma in Welding and Fabrication",
          "MCAST Diploma in Electrical Installations",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Mechanical Engineering",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English, Engineering Technology, Mathematics, Graphical Communication, Design and Technology"
      ],
      "req_other": [
          ""
      ],
      "careers": "Domestic, commercial and industrial plumber, Installation, maintenance and repair technician"
  },
  {
      "index": "05-29",
      "institute": "iet",
      "code": "CE4-A5-19",
      "title": "Advanced Diploma in Welding and Fabrication",
      "title_notes": "",
      "desc_en": [
          "This course combines theoretical knowledge and practical training carried out in College-based industrial workshops. Learners will be expected to participate individually and in teams to fabricate welded products. They will learn how to analyse and generate solutions related to typical fabrication using thin plates and pipes.",
          "Learners will also be given the opportunity to follow an Apprenticeship to improve their hands-on experience. In order to be able to appreciate the importance of good production management, supervised visits to complex production set-ups are organised during the course. Applicants need to be able to work within the industries concerned.",
          "Applicants coming in through the Secondary Education Certificate route may be requested to complete an additional Level 4 preparatory year if they do not have prior exposure and experience in the sector."
      ],
      "desc_mt": [
          "Dan il-kors jikkombina l-g\u0127arfien teoretiku u t-ta\u0127ri\u0121 prattiku li jsir f\u2019workshops industrijali bba\u017cati fil-Kulle\u0121\u0121. L-istudenti jkunu mistennija jipparte\u010bipaw b\u2019mod individwali u f\u2019timijiet biex jiffabbrikaw prodotti wweldjati. Huma jitg\u0127allmu kif janalizzaw u ji\u0121\u0121eneraw soluzzjonijiet relatati mal-fabbrikazzjoni tipika permezz ta\u2019 pjan\u010bi u pajpijiet irqaq.",
          "L-istudenti jing\u0127ataw ukoll l-opportunit\u00e0 li jsegwu Apprendistat biex itejbu l-esperjenza prattika tag\u0127hom. Sabiex ikunu jistg\u0127u japprezzaw l-importanza ta\u2019 \u0121estjoni tajba tal-produzzjoni, matul il-kors ji\u0121u organizzati \u017cjarat sorveljati f\u2019postijiet tax-xog\u0127ol fejn il-produzzjoni hija kumplessa. L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati.",
          "L-applikanti li jid\u0127lu permezz ta\u010b-\u010aertifikat tal-Edukazzjoni Sekondarja jistg\u0127u ji\u0121u mitluba jag\u0127mlu sena preparatorja addizzjonali f\u2019Livell 4, jekk ma jkollhomx esperjenza jew qatt ma jkunu \u0121ew esposti g\u0127al xog\u0127ol f\u2019dan is-settur."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Welding and Fabrication",
          "MCAST Diploma in Construction Engineering",
          "MCAST Diploma in Automotive Repair (Body and Paint)",
          "MCAST Diploma in Light Vehicle Servicing",
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Aircraft Structures and Repairs",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Electrical Installations",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English, Mathematics, Engineering Technology, Technical Drawing, Graphical Communication, Design and Technology"
      ],
      "req_other": [
          ""
      ],
      "careers": "Welding and fabrication technician (welder and fabricator), Welding and fabrication supervisor, Welding and fabrication designer, Pipe welding specialist (pipe welder and fabricator)"
  },
  {
      "index": "05-30",
      "institute": "iet",
      "code": "EE4-A2-18",
      "title": "Advanced Diploma in Electrical Systems",
      "title_notes": "",
      "desc_en": [
          "This course is intended for learners who wish to embark on a career as technicians in electrical power systems in both the domestic and the industrial sectors. The course includes the requirements set by the Regulator for Energy and Water Services (REWS) for the Electrical Wireman\u2019s Authorisation A and Authorisation B. This ensures a solid technical competence and understanding of the regulations and health and safety requirements governing the electrical installation industry.",
          "This course contains modules related to Photovoltaic Systems, Building Services Engineering and Electronic Control Systems that give candidates a solid grounding in the engineering involved in the building services industry. Candidates will also receive exposure to Mechanical Workshop Practice."
      ],
      "desc_mt": [
          "Dan il-kors huwa ma\u0127sub g\u0127all-istudenti li jixtiequ jibdew karriera b\u0127ala teknixins f\u2019sistemi tal-ener\u0121ija elettrika, g\u0127as-settur domestiku kif ukoll g\u0127al dak industrijali. Il-kors jinkludi r-rekwi\u017citi, kif stabbiliti mir-Regolatur tas-Servizzi tal-Ener\u0121ija u l-Ilma (REWS), g\u0127all-Awtorizzazzjoni A u l-Awtorizzazzjoni B ta\u2019 Persuni li Jg\u0127addu l-Wajers tal-Elettriku. Dan jipprovdi lill-kandidati kompetenza teknika soda u fehim tar-regolamenti u tar-rekwi\u017citi tas-sa\u0127\u0127a u s-sigurt\u00e0 li jirregolaw l-industrija tal-installazzjoni tal-elettriku.",
          "Dan il-kors jinkludi unitajiet relatati ma\u2019 Sistemi Fotovoltaj\u010bi, Sistemi tal-In\u0121inerija tas-Servizzi tal-Bini u tal-Kontroll Elettroniku, li jipprovdu lill-istudenti ba\u017ci soda g\u0127all-in\u0121inerija involuta fl-industrija tas-servizzi tal-bini. Il-kandidati jwettqu wkoll prattika f\u2019Workshop Mekkaniku."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Electrical Installations",
          "MCAST Diploma in ICT",
          "MCAST Diploma in Heating, Ventilation and Air-Conditioning",
          "MCAST Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
          "MCAST Diploma in Welding and Fabrication",
          "MCAST Diploma in Automotive Repair (Body and Paint)",
          "MCAST Diploma in Light Vehicle Servicing",
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Aircraft Maintenance",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "A medical certificate testing Colour Blindness is recommended for this course."
      ],
      "careers": "Electrician, Electrical technician (plant)"
  },
  {
      "index": "05-31",
      "institute": "iet",
      "code": "EE4-A1-18",
      "title": "Advanced Diploma in Industrial Electronics",
      "title_notes": "with specialisation options in: Computer Technology, Biomedical Technology, Telecommunications Technology, Control Technology, Electrical Power Technology, Domestic Installations or Electronic Circuit Manufacturing",
      "desc_en": [
          "This course gives a good grounding in electronics including different aspects through class-based delivery and hands-on practical workshops and projects. Learners are introduced to the creation of electronic systems in diverse fields, such as industrial electronics, transportation, computer engineering, communications and biomedical engineering.",
          "In the first and second year of the course one will cover the core aspects of electronics engineering while in the final year learners will be required to select elective modules from: Computer Technology, Biomedical Technology, Telecommunications Technology, Control Technology, Electrical Power Technology, Domestic Installations and Electronic Circuit Manufacturing. Availability of particular electives will be subject to a minimum number of applications."
      ],
      "desc_mt": [
          "Dan il-kors jipprovdi ba\u017ci tajba fl-elettronika fejn l-istudent ji\u0121i espost g\u0127all-aspetti differenti permezz ta\u2019 lezzjonijiet fil-klassi, kif ukoll prattika fil-workshops u fuq pro\u0121etti li jinvolvu xog\u0127ol prattiku. L-istudenti huma introdotti g\u0127all-\u0127olqien ta\u2019 sistemi elettroni\u010bi f\u2019diversi oqsma, b\u0127all-elettronika industrijali, it-trasportazzjoni, l-in\u0121inerija tal-kompjuters, il-komunikazzjoni u l-in\u0121inerija bijomedika.",
          "Matul l-ewwel u t-tieni sena tal-kors, l-istudenti se jiltag\u0127u mal-aspetti ewlenin tal-in\u0121inerija tal-elettronika, filwaqt li fl-a\u0127\u0127ar sena se jkunu me\u0127tie\u0121a jag\u0127\u017clu mill-unitajiet li \u0121ejjin: it-Teknolo\u0121ija tal-Kompjuter, it-Teknolo\u0121ija Bijomedika, it-Teknolo\u0121ija tat-Telekomunikazzjoni, it-Teknolo\u0121ija tal-Kontroll, it-Teknolo\u0121ija tal-Ener\u0121ija Elettrika, l-Installazzjonijiet Domesti\u010bi u l-Manifattura ta\u010b-\u010airkwit Elettroniku. Id-disponibbilt\u00e0 ta\u2019 \u010berti su\u0121\u0121etti tiddependi fuq numru minimu ta\u2019 studenti."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Electrical Installations",
          "MCAST Diploma in ICT",
          "MCAST Diploma in Heating, Ventilation and Air-Conditioning",
          "MCAST Diploma in Building Services Installations (Plumbing or Plumbing and Electrical)",
          "MCAST Diploma in Welding and Fabrication",
          "MCAST Diploma in Automotive Repair (Body and Paint)",
          "MCAST Diploma in Light Vehicle Servicing",
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Aircraft Maintenance",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "A medical certificate testing Colour Blindness is recommended for this course."
      ],
      "careers": "Electronics technician"
  },
  {
      "index": "05-32",
      "institute": "iet",
      "code": "ME4-A3-19",
      "title": "Advanced Diploma for Polymer Process Technicians",
      "title_notes": "",
      "desc_en": [
          "This Advanced Diploma programme is designed to prepare technicians for a career in the field of the transformation of rubbers and plastics, with their different types and compositions, into finished specialised products. It provides a good level of knowledge in the fields of polymer sciences and manufacturing technologies. The scientific background of the technologies and processes involved, including material properties, process control and the effect of variables such as temperature, pressure, and cycle time, are also studied.",
          "Training is achieved through a combination of theory and practical sessions of this latest technology in the lecture rooms and workshops, as well as at local industry leaders of this ever-growing sector of manufacturing.",
          "Applicants have to be able to work within the industries concerned."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 Advanced Diploma huwa mfassal biex i\u0127ejji lit-teknixins g\u0127al karriera fil-qasam tat-trasformazzjoni tal-lasktu u l-plastik, bit-tipi u l-kompo\u017cizzjonijiet differenti tag\u0127hom, fi prodotti spe\u010bjalizzati lesti. Il-kors jipprovdi livell tajjeb ta\u2019 g\u0127arfien fl-oqsma tax-xjenzi tal-polimeri u t-teknolo\u0121iji tal-manifattura. Matulu ji\u0121u studjati wkoll l-isfond xjentifiku tat-teknolo\u0121iji u l-pro\u010bessi involuti, inklu\u017ci l-proprjetajiet tal-materjali, il-kontroll tal-pro\u010bess u l-effett ta\u2019 elementi varjabbli, b\u0127at-temperatura, il-pressjoni, u l-\u0127in ta\u010b-\u010biklu.",
          "It-ta\u0127ri\u0121 jinkiseb permezz ta\u2019 ta\u0127lita ta\u2019 sessjonijiet tat-teorija u tal-prattika ta\u2019 din it-teknolo\u0121ija l-aktar ri\u010benti fil-klassijiet u l-workshops, kif ukoll g\u0127and il-mexxejja tal-industrija lokali f\u2019dan is-settur ta\u2019 manifattura li kulma jmur qed jikber.",
          "L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Aircraft Maintenance",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Polymer process technician, Moulding technician, Machine setter"
  },
  {
      "index": "05-33",
      "institute": "iet",
      "code": "ME4-A1-19",
      "title": "Advanced Diploma in Light Vehicle Maintenance",
      "title_notes": "",
      "desc_en": [
          "This qualification is for candidates wanting to develop some of the essential skills and understanding in motor vehicle systems. Learners will be able to identify hazards and risks in the automotive environment and work safely with equipment, materials and products.",
          "Learners should also gain a good knowledge of tools and measuring devices as well as of routine light vehicle maintenance. Learners will be expected to develop an understanding of the construction and operation of common steering, suspension engines and many important systems (including mechanical and electrical) as well as procedures involved in the inspection, serviceability, adjustments, removal and replacement of components and the evaluation of their performance. Applicants coming in through the O-Level route may be requested to complete an additional Level 4 preparatory year if they do not already have exposure and experience within the area in question."
      ],
      "desc_mt": [
          "Din il-kwalifika hija g\u0127al kandidati li jixtiequ ji\u017cviluppaw xi w\u0127ud mill-\u0127iliet essenzjali u jitg\u0127allmu dwar is-sistemi ta\u2019 vetturi bil-mutur. L-istudenti jkunu jistg\u0127u jidentifikaw perikli u riskji fl-ambjent ta\u2019 karozzi u ja\u0127dmu b\u2019mod sikur bit-tag\u0127mir, il-materjali u l-prodotti.",
          "L-istudenti g\u0127andhom jiksbu wkoll g\u0127arfien tajjeb tal-g\u0127odod u apparat ta\u2019 kejl, kif ukoll dwar il-manutenzjoni ta\u2019 rutina ta\u2019 vetturi \u017cg\u0127ar. L-istudenti jkunu mistennija jifhmu kif inhuma mibnija u kif ja\u0127dmu l-isteering, is-sistema tas-suspension u \u0127afna sistemi o\u0127ra importanti (inklu\u017ci dawk mekkani\u010bi u elettri\u010bi). Huma jitg\u0127allmu wkoll il-pro\u010beduri involuti fl-ispezzjoni, is-servisjar, l-a\u0121\u0121ustamenti, it-tne\u0127\u0127ija u t-tibdil ta\u2019 komponenti u l-evalwazzjoni tal-prestazzjoni tag\u0127hom. L-applikanti li jid\u0127lu g\u0127al dan il-kors bl-O-Levels jistg\u0127u ji\u0121u mitluba jag\u0127mlu sena preparatorja addizzjonali f\u2019Livell 4, jekk ma jkollhomx di\u0121\u00e0 esperjenza ta\u2019 xog\u0127ol f\u2019dan is-settur."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Automotive Light Vehicle Servicing",
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Aircraft Maintenance",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and one subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be required to sit for an Aptitude Test and\/or attend an Interview before being accepted to join the course."
      ],
      "careers": "Motor vehicle technician, Service technician, VRT technician"
  },
  {
      "index": "05-34",
      "institute": "iet",
      "code": "ME4-A2-19",
      "title": "Advanced Diploma in Manufacturing",
      "title_notes": "",
      "desc_en": [
          "This programme provides the necessary knowledge, understanding and skills to those learners who wish to start an interesting career as a technician in today\u2019s highly technological area of manufacturing engineering. This qualification provides access to more specialist units and therefore broadens and deepens the experience in preparation for actual work situations. The learner will learn how to perform basic engineering operations in a safe and efficient manner, whilst safeguarding the environment. The learner will understand basic scientific and mathematical theories and how to apply these to manufacturing engineering processes such as draughting, design, problem solving, and machining. This course includes work-related training and practice.",
          "Applicants have to be able to work within the industries concerned."
      ],
      "desc_mt": [
          "Dan il-programm jipprovdi l-g\u0127arfien, il-fehim u l-\u0127iliet ne\u010bessarji g\u0127al studenti li jkunu jixtiequ jibdew karriera interessanti b\u0127ala teknixin fil-qasam tal-in\u0121inerija tal-manifattura li llum huwa ta\u2019 livell teknolo\u0121iku g\u0127oli. Din il-kwalifika tipprovdi a\u010b\u010bess g\u0127al unitajiet aktar spe\u010bjalizzati u g\u0127alhekk twessa\u2019 u tapprofondixxi l-esperjenza bi t\u0127ejjija g\u0127al sitwazzjonijiet attwali tax-xog\u0127ol. L-istudent jitg\u0127allem kif iwettaq operazzjonijiet ba\u017ci\u010bi tal-in\u0121inerija b\u2019mod sikur u effi\u010bjenti, filwaqt li jissalvagwardja l-ambjent. L-istudent jifhem it-teoriji xjentifi\u010bi u matemati\u010bi ba\u017ci\u010bi u kif dawn ji\u0121u applikati g\u0127al pro\u010bessi tal-in\u0121inerija tal-manifattura, b\u0127ad-disinn tekniku, is-soluzzjoni tal-problemi u x-xog\u0127ol fuq il-magni. Dan il-kors jinkludi ta\u0127ri\u0121 u prattika relatati max-xog\u0127ol.",
          "L-applikanti g\u0127andhom ikunu kapa\u010bi ja\u0127dmu fl-industriji kkon\u010bernati."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma In Engineering (Electronics)",
          "MCAST Diploma in Aircraft Maintenance",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Machine setter, Mechanical technician, Production planning officer, Draughtsperson in basic (2D)"
  },
  {
      "index": "05-35",
      "institute": "iet",
      "code": "ME4-A4-19",
      "title": "Advanced Diploma in Marine Engineering",
      "title_notes": "",
      "desc_en": [
          "This programme is the first step for those who wish to embark on a career in the maritime sector, with opportunities being available both locally and internationally. The course introduces the basics of engineering related to marine vessels and is ideal for those who wish to be introduced into this sector and obtain a formal vocational qualification. After successful completion of the course, the learner will have formed sound theoretical and practical competences. This course includes work-related training and practice."
      ],
      "desc_mt": [
          "Dan il-programm huwa l-ewwel pass g\u0127al dawk li jixtiequ jibdew karriera fis-settur marittimu, b\u2019opportunitajiet disponibbli kemm lokalment kif ukoll fuq livell internazzjonali. Il-kors jintrodu\u010bi l-elementi ba\u017ci\u010bi tal-in\u0121inerija relatata ma\u2019 bastimenti tal-ba\u0127ar u huwa ideali g\u0127al dawk li jixtiequ jid\u0127lu f\u2019dan is-settur u jiksbu kwalifika vokazzjonali formali. L-istudenti li jtemmu l-kors b\u2019su\u010b\u010bess, ikunu kisbu kompetenzi teoreti\u010bi u pratti\u010bi sodi. Dan il-kors jinkludi ta\u0127ri\u0121 u prattika relatati max-xog\u0127ol."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Aircraft Maintenance",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Marine technician, Ship repair technician, Ship repair fitter"
  },
  {
      "index": "05-36",
      "institute": "iet",
      "code": "ME4-A5-19",
      "title": "Advanced Diploma in Operations and Maintenance",
      "title_notes": "",
      "desc_en": [
          "This programme provides the necessary knowledge, understanding and skills for the future to those learners who wish to start a fulfilling career as technician in the area of operations and maintenance engineering. Learners will have the opportunity to learn basic scientific and mathematical methods to apply in subjects such as thermodynamics and heat engines.",
          "Learners will be exposed to the different materials used in common engineering situations and their properties. This qualification not only provides access to more specialist units but it also broadens and deepens the learners\u2019 experience in preparation for the real world at work. This course includes work-related training and practice."
      ],
      "desc_mt": [
          "Dan il-programm jipprovdi l-g\u0127arfien, il-fehim u l-\u0127iliet ne\u010bessarji g\u0127all-futur g\u0127al dawk l-istudenti li jixtiequ jibdew karriera ta\u2019 sodisfazzjon b\u0127ala teknixin fil-qasam tal-in\u0121inerija tal-operazzjonijiet u tal-manutenzjoni. L-istudenti jkollhom l-opportunit\u00e0 li jitg\u0127allmu metodi xjentifi\u010bi u matemati\u010bi ba\u017ci\u010bi, biex japplikawhom f\u2019su\u0121\u0121etti b\u0127at-termodinamika u l-magni tas-s\u0127ana.",
          "L-istudenti jkunu esposti g\u0127al materjali differenti u\u017cati f\u2019sitwazzjonijiet komuni tal-in\u0121inerija u l-proprjetajiet tag\u0127hom. Din il-kwalifika mhux biss tipprovdi a\u010b\u010bess g\u0127al unitajiet aktar spe\u010bjalizzati, i\u017cda wkoll twessa\u2019 u tapprofondixxi l-esperjenza tal-istudenti, bi t\u0127ejjija g\u0127ad-dinja reali tax-xog\u0127ol. Dan il-kors jinkludi ta\u0127ri\u0121 u prattika relatati max-xog\u0127ol."
      ],
      "mqf": 4,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Mechanical Engineering",
          "MCAST Diploma in Engineering (Electronics)",
          "MCAST Diploma in Aircraft Maintenance",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "One subject from Mathematics or Physics and One subject from Engineering Technology, Design and Technology, Chemistry, Mathematics, Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Maintenance fitter\/technician, Plant technician"
  },
  {
      "index": "05-37",
      "institute": "iet",
      "code": "MI-01-19",
      "title": "OIC Navigational Watch",
      "title_notes": "",
      "desc_en": [
          "This programme is designed to prepare candidates to qualify for a Certificate of Competence as an Officer In Charge of a Navigational Watch on ocean-going merchant vessels. Training consists of a number of maritime related subjects such as Navigation, Meteorology, Signals, Ship Knowledge and Stability, Cargo Operations, International Regulations, and a high level of physical fitness training and leadership training in which all candidates are expected to participate. Officer Cadets are expected to wear a merchant marine uniform whilst undergoing training both ashore and on board ships.",
          "Officer Cadets attending the course will be assisted in finding a sponsor for the practical training period at sea during the third phase of training on the course. The programme eventually includes a compulsory 12 months sea placement after the first two years of the course."
      ],
      "desc_mt": [
          "Dan il-programm jipprepara lill-kandidati biex jikkwalifikaw g\u0127al \u010aertifikat ta\u2019 Kompetenza b\u0127ala Uffi\u010bjal fil-Kariga ta\u2019 G\u0127assa tan-Navigazzjoni fuq bastimenti merkantili li jag\u0127mlu kummer\u010b barra mill-pajji\u017c. It-ta\u0127ri\u0121 jikkonsisti f\u2019numru ta\u2019 su\u0121\u0121etti relatati mal-ba\u0127ar, b\u0127an-Navigazzjoni, il-Meteorolo\u0121ija, is-Sinjali, l-G\u0127arfien u l-Istabbilt\u00e0 tal-Vapuri, l-Operazzjonijiet tal-Merkanzija, ir-Regolamenti Internazzjonali, flimkien ma\u2019 livell g\u0127oli ta\u2019 ta\u0127ri\u0121 g\u0127al kundizzjoni fi\u017cika tajba u ta\u0127ri\u0121 fit-tmexxija, li fihom il-kandidati kollha huma mistennija li jipparte\u010bipaw.",
          "L-Uffi\u010bjali Kadetti li jkunu qed jag\u0127mlu l-kors jing\u0127ataw g\u0127ajnuna biex isibu sponsor ghal perjodu ta\u2019 ta\u0127rig prattiku fuq il-ba\u0127ar waqt it-tielet fa\u017ci ta\u2019 ta\u0127rig fil-kors. Il-programm jinkludi 12-il xahar obbligatorji fuq il-ba\u0127ar wara l-ewwel sentejn tal-kors."
      ],
      "mqf": "",
      "duration": "3 years (2 years full-time followed by 12 months experience at sea)",
      "study": "",
      "mode": "12 months sea placement (compulsory)",
      "req_entry": [
          "Diploma in Deck Operations",
          "4 Sec\/O-Level passes\/SSC&P (level 3) passes"
      ],
      "req_compulsory": [
          "Physics, Mathematics and English Language"
      ],
      "req_preferred": [
          "Geography and a foreign language"
      ],
      "req_other": [
          "Medical Test, Physical Aptitude Test and Interview Guidance Note: Students must have reached the age of 18 years during their second academic year."
      ],
      "careers": "Port inspector, Terminal inspector, GMDSS operator, Cargo operator in yard\/ship terminal, Officer cadet"
  },
  {
      "index": "05-38",
      "institute": "iet",
      "code": "ET4-01-20",
      "title": "Advanced Diploma in Robotics, Drone Technology, Automation and Artificial Intelligence",
      "title_notes": "",
      "desc_en": [
          "This course presents learners with introductory knowledge about artificial intelligence and machine-learning techniques, followed by automation systems, robots, and drone functionality. Learners will have the opportunity to use various AI hardware and software tools to control a range of input and output devices, apply various forms of signal conditioning, use embedded systems and apply communication standards. Through practical experiments, this course is structured in a way that supports learners in understanding the operational characteristics and concepts of drones, automation and robotic systems. Additionally, students are guided to develop the skills required to design, install, troubleshoot, maintain and programme such systems."
      ],
      "desc_mt": [
          "Dan il-kors jipprovdi lill-istudenti g\u0127arfien introduttorju dwar it-teknika tal-intelli\u0121enza artifi\u010bjali u magni intelli\u0121enti, kif ukoll dwar sistemi ta\u2019 awtomatizzazzjoni, robots u l-u\u017cu ta\u2019 drones. L-istudenti jkollhom l-opportunit\u00e0 li ju\u017caw apparat u software ta\u2019 Intelli\u0121enza Artifi\u010bjali biex jikkontrollaw g\u0127a\u017cla ta\u2019 input u output devices, japplikaw diversi tipi ta\u2019 signal conditioning, ju\u017caw embedded systems u japplikaw standards ta\u2019 komunikazzjoni. Dan il-kors huwa mqassam b\u2019tali mod li, permezz ta\u2019 esperimenti pratti\u010bi, jg\u0127in lill-istudenti jifhmu l-karatteristi\u010bi operazzjonali u l-kun\u010betti tad-drones, l-awtomatizzazzjoni u s-sistemi roboti\u010bi. Barra minn hekk, l-istudenti ji\u0121u meg\u0127juna ji\u017cviluppaw dawk il-\u0127iliet me\u0127tie\u0121a biex jiddisinjaw, jistallaw, jidentifikaw il-problemi, jag\u0127mlu l-maintenance u jipprogrammaw sistemi b\u0127al dawn."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Level 3 Diploma in the fields of Engineering, Science or ICT",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Mathematics or Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Automation technician, Artificial intelligence technician, Autonomous vehicle tsechnician"
  },
  {
      "index": "05-39",
      "institute": "iet",
      "code": "ET4-02-20",
      "title": "Advanced Diploma in Transportation and Logistics Management",
      "title_notes": "",
      "desc_en": [
          "One of the core requirements of Industry is the procurement, storage and dispatching of goods. In today\u2019s business world it has become imperative to effectively handle transportation and logistics. This course is intended for candidates who wish to embark on a career in this important sector.",
          "The course aims to develop professionals who are knowledgeable, technically competent and able to adapt in the transportation and logistics discipline as they embrace new technological advancements and challenges.",
          "It also prepares learners in social, entrepreneurial and leadership qualities towards tackling logistical challenges innovatively, creatively and ethically."
      ],
      "desc_mt": [
          "Wa\u0127da mill-\u0127ti\u0121ijiet ewlenin tal-industrija hija x-xiri, il-\u0127a\u017cna u s-safar tal-merkanzija. Fid-dinja tan-negozju tal-lum, l-g\u0127arfien dwar kif tie\u0127u \u0127sieb b\u2019mod effettiv it-trasport u l-lo\u0121istika huwa essenzjali. Dan il-kors huwa inti\u017c g\u0127al dawk li jixtiequ jag\u0127mlu karriera f\u2019dan il-qasam hekk importanti.",
          "Il-kors g\u0127andu l-g\u0127an li ji\u017cviluppa nies professjonali li g\u0127andhom l-g\u0127arfien me\u0127tie\u0121, il-kompetenza teknika u l-\u0127ila li jadattaw irwie\u0127hom fid-dixxiplina tat-trasport u l-lo\u0121istika filwaqt li j\u0127addnu \u017cviluppi u sfidi teknolo\u0121i\u010bi.",
          "Il-kors jipprovdi wkoll lill-istudenti \u0127iliet so\u010bjali, intraprenditorjali u ta\u2019 tmexxija, bil-g\u0127an li jkunu kapa\u010bi jiffa\u010b\u010bjaw sfidi ta\u2019 natura lo\u0121istika b\u2019mod innovattiv, kreattiv u etiku."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST Level 3 Diploma",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
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
      "careers": "Logistics management officer, Warehouse management supervisor, Shipping supervisor"
  },
  {
      "index": "05-40",
      "institute": "iet",
      "code": "MI-02-19",
      "title": "Chief Mate",
      "title_notes": "",
      "desc_en": [
          "This course is a continuation in the career of a Deck Officer in the merchant shipping navy leading to the issue of a Certificate of Competence as a Chief Mate. The training provided is at management level and learners attending this course are expected to dedicate a lot of time to their studies and to wear a merchant marine uniform whilst undergoing training ashore.",
          "The Centre for Maritime studies boasts a good reputation for discipline and all Officers are expected to abide by a Code of Conduct whilst attending the Chief Mate Course and to actively participate in organised events. Practical STCW ancillary courses, namely medical care and radar navigation including simulation exercises, are also provided as compulsory short courses for the Chief Mate Certificate of Competency."
      ],
      "desc_mt": [
          "Dan il-kors huwa kontinwazzjoni fil-karriera ta\u2019 Deck Officer fil-flotta navali merkantili u jwassal g\u0127all-\u0127ru\u0121 ta\u2019 \u010aertifikat ta\u2019 Kompetenza b\u0127ala Chief Mate. It-ta\u0127ri\u0121 ipprovdut huwa fil-livell mani\u0121erjali u l-istudenti li jattendu dan il-kors huma mistennija jiddedikaw \u0127afna \u0127in g\u0127all-istudji tag\u0127hom u li jilbsu uniformi tal-marina merkantili waqt li jkunu qed jit\u0127arr\u0121u fuq l-art.",
          "I\u010b-\u010aentru g\u0127all-Istudji Marittimi g\u0127andu reputazzjoni tajba g\u0127ad-dixxiplina u l-Uffi\u010bjali kollha huma mistennija li jikkonformaw mal-Kodi\u010bi ta\u2019 Kondotta waqt li jkunu qed jattendu l-Kors ta\u2019 Chief Mate u li jipparte\u010bipaw b\u2019mod attiv fl-avvenimenti li ji\u0121u organizzati. Il-korsijiet an\u010billari pratti\u010bi tal-STCW, ji\u0121ifieri l-kura medika u n-navigazzjoni bir-radar, inklu\u017ci e\u017cer\u010bizzji ta\u2019 simulazzjoni, huma pprovduti wkoll b\u0127ala korsijiet qosra obbligatorji biex jinkiseb i\u010b-\u010aertifikat ta\u2019 Kompetenza ta\u2019 Chief Mate."
      ],
      "mqf": "",
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Letter of eligibility from Transport Malta. Valid OIC Navigational Watch Certificate of Competency plus 12 months at sea in that capacity."
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "Medical Test"
      ],
      "req_other": [
          "Chief officer on sea-going merchant ships as second in command after the Captain, Ship senior officer of the bridge, Ship senior officer controlling cargo operations on a ship, Master on offshore vessels,"
      ],
      "careers": "Ship security officer marine, VTS operator\/supervisor, Ship surveyor, Cargo surveyor, Ship security officer"
  },
  {
      "index": "05-41",
      "institute": "iet",
      "code": "CE5-01-19",
      "title": "Higher Diploma in Masonry Heritage Skills (Kapumastru)",
      "title_notes": "",
      "desc_en": [
          "The demand for the conservation and restoration of stone monuments and of historic buildings and artefacts is increasing. Likewise, those who manage projects involving various building materials are in great demand. This course is intended for those who would like to acquire knowledge and skills related to the conservation and restoration of buildings and monuments where the main construction material is the local limestone. They will be able to apply restoration and conservation techniques following best practices, both in College-based workshops and laboratories as well as on heritage sites. This course also provides quantity surveying skills as applied to restoration projects, as well as an introduction to project management, enabling learners to manage technicians working on restoration projects."
      ],
      "desc_mt": [
          "Id-domanda g\u0127all-konservazzjoni u r-restawr ta\u2019 monumenti tal-\u0121ebla u ta\u2019 bini storiku u artifatti qed ti\u017cdied. Daqstant ie\u0127or, hawn domanda kbira g\u0127al persuni li jmexxu pro\u0121etti li jinvolvu diversi materjali tal-bini. Dan il-kors huwa ma\u0127sub g\u0127al dawk li jixtiequ jiksbu g\u0127arfien u \u0127iliet relatati mal-konservazzjoni u r-restawr ta\u2019 bini u monumenti fejn il-materjal prin\u010bipali tal-kostruzzjoni jkun il-\u0121ebla tal-franka lokali. L-istudenti jkunu jistg\u0127u japplikaw tekniki ta\u2019 restawr u konservazzjoni ta\u2019 bini u monumenti billi jsegwu l-a\u0127jar pratti\u010bi, kemm f\u2019workshops u laboratorji bba\u017cati fil-Kulle\u0121\u0121, kif ukoll f\u2019siti tal-patrimonju. Dan il-kors jipprovdi wkoll \u0127iliet ta\u2019 st\u0127arri\u0121 ta\u2019 kwantit\u00e0 kif applikati g\u0127al pro\u0121etti ta\u2019 restawr, kif ukoll introduzzjoni g\u0127all-\u0121estjoni ta\u2019 pro\u0121etti. Dan jippermetti lill-istudenti li jmexxu teknixins li jkunu qed ja\u0127dmu fuq pro\u0121etti ta\u2019 restawr."
      ],
      "mqf": 5,
      "duration": 2,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Masonry Heritage Skills (Mastru)",
          "MCAST Advanced Diploma in Cultural Heritage Skills",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Previous experience in the Construction industry will be considered an asset."
      ],
      "careers": "Kapumastru in the field of stone masonry heritage skills, Stone masonry heritage sites manager"
  },
  {
      "index": "05-42",
      "institute": "iet",
      "code": "ET5-01-19",
      "title": "Undergraduate Diploma in Foundations of Engineering",
      "title_notes": "",
      "desc_en": [
          "The aim of this course is to provide learners with the competence required to be able to join the Bachelor of Engineering programme through the enhancement of knowledge, skills and competences in mathematics and physics. The programme also includes study-units in electrical engineering, mechanical engineering, materials science and programming through sound theoretical and extensive hands-on approaches.",
          "This programme can also act as an exit point at MQF Level 5 for Advanced Diploma graduates, thus enabling successful candidates to achieve middle management engineering positions."
      ],
      "desc_mt": [
          "L-g\u0127an ta\u2019 dan il-kors huwa li jg\u0127addi lill-istudenti l-\u0127iliet me\u0127tie\u0121a sabiex ikunu jistg\u0127u jid\u0127lu g\u0127all-programm tal-Ba\u010bellerat tal-In\u0121inerija billi jg\u0127inhom ji\u017cviluppaw iktar l-g\u0127arfien, il-\u0127iliet u l-kompetenzi tag\u0127hom fil-matematika u l-fi\u017cika. Dan il-programm jinkludi wkoll study-units fl-in\u0121inerija elettrika, l-in\u0121inerija mekkanika, ix-xjenza tal-materjali u l-programmazzjoni. It-tag\u0127lim ikun b\u2019sa\u0127\u0127tu fit-teorija u estensiv fil-prattika.",
          "Dan il-kors iservi wkoll b\u0127ala \u010bertikazzjoni fil-Livell 5 tal-Qafas Malti tal-Kwalifiki g\u0127al dawk l-istudenti li jkunu lestew Diploma Avvanzata u b\u2019hekk jag\u0127tihom l-opportunit\u00e0 li jsibu impjieg fil-middle management fl-oqsma tal-in\u0121inerija."
      ],
      "mqf": 5,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "MCAST MQF Level 4 qualification in the field of Electrical and Electronics Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": ""
  },
  {
      "index": "05-43",
      "institute": "iet",
      "code": "CE6-A2-20",
      "title": "Bachelor of Science (Honours) in Construction Engineering",
      "title_notes": "",
      "desc_en": [
          "This degree course gives the learners opportunities to explore management skills and technical knowledge associated with the diverse and challenging tasks that are in continuous change with the introduction of new materials to meet zero energy building requirements and various integrated design concepts including precast techniques.",
          "In addition, the programme trains the learner in the necessary design and evaluation techniques to be able to make professional judgements on technical, social and ethical issues during the planning and execution of construction projects. By the end of the programme, the learner will be able to work independently, with a significant amount of research and self-directed learning, both within and outside the Institute environment."
      ],
      "desc_mt": [
          "Dan il-kors li jwassal g\u0127al ba\u010bellerat jipprovdi lill-istudenti opportunitajiet biex jesploraw \u0127iliet ta\u2019 \u0121estjoni u g\u0127arfien tekniku, asso\u010bjati mal-kompiti diversi u impenjattivi li qed jinbidlu b\u2019mod kontinwu bl-introduzzjoni ta\u2019 materjali \u0121odda, biex jissodisfaw rekwi\u017citi ta\u2019 bini ming\u0127ajr konsum tal-ener\u0121ija u diversi kun\u010betti integrati tad-disinn, inklu\u017ci tekniki ta\u2019 prefabbrikazzjoni.",
          "Barra minn hekk, il-programm jipprovdi lill-istudenti t-ta\u0127ri\u0121 fit-tekniki ne\u010bessarji ta\u2019 disinn u ta\u2019 evalwazzjoni, biex jag\u0127mlu \u0121udizzji professjonali dwar kwistjonijiet teknolo\u0121i\u010bi, so\u010bjali u eti\u010bi matul l-ippjanar u t-twettiq ta\u2019 pro\u0121etti tal-kostruzzjoni. Fi tmiem il-programm, l-istudent ikun jista\u2019 ja\u0127dem b\u2019mod indipendenti, billi jwettaq ammont sinifikanti ta\u2019 ri\u010berka u studju g\u0127al rasu, kemm fl-ambjent tal-Istitut kif ukoll barra minnu."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Advanced Diploma in Building Services Engineering",
          "MCAST Advanced Diploma in Construction Engineering",
          "MCAST Advanced Diploma in Civil Engineering",
          "Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          "I-Levels: Engineering Drawing, Graphical Communication"
      ],
      "req_other": [
          "Knowledge of CAD will be considered an asset."
      ],
      "careers": "Construction engineering designer, Construction engineering design manager, Construction site manager, Quality assurance manager, Estate and facilities manager, Site technical officer"
  },
  {
      "index": "05-44",
      "institute": "iet",
      "code": "CE6-A3-20",
      "title": "Bachelor of Science (Honours) in Construction Engineering (Civil Engineering)",
      "title_notes": "",
      "desc_en": [
          "This degree course gives the learners opportunities to explore management skills and technical knowledge associated with the diverse and challenging tasks that are in continuous change with the introduction of new materials to meet zero energy building requirements and various integrated design concepts. In addition, the programme empowers one with the necessary design and evaluation techniques to be able to make professional judgements on technical, social and ethical issues during the planning and execution of construction projects.",
          "The Civil Engineering specialised units are for those who are interested in Site Spatial Engineering, Engineering Geology, and Soil Mechanics and Structural Analysis. By the end of the programme, one will be able to work independently, with a significant amount of research and self-directed learning, both within and outside the Institute environment."
      ],
      "desc_mt": [
          "Dan il-kors, li jwassal g\u0127al ba\u010bellerat, jipprovdi lill-istudenti opportunitajiet biex jesploraw \u0127iliet ta\u2019 \u0121estjoni u g\u0127arfien tekniku asso\u010bjati mal-kompiti diversi u impenjattivi li qed jinbidlu b\u2019mod kontinwu bl-introduzzjoni ta\u2019 materjali \u0121odda, biex jissodisfaw rekwi\u017citi ta\u2019 bini ming\u0127ajr konsum tal-ener\u0121ija u diversi kun\u010betti integrati tad-disinn. Barra minn hekk, il-programm jipprovdi lill-istudenti t-tekniki ne\u010bessarji ta\u2019 disinn u ta\u2019 evalwazzjoni biex jag\u0127mlu \u0121udizzji professjonali dwar kwistjonijiet teknolo\u0121i\u010bi, so\u010bjali u eti\u010bi matul l-ippjanar u t-twettiq ta\u2019 pro\u0121etti ta\u2019 kostruzzjoni.",
          "L-unitajiet spe\u010bjalizzati tal-In\u0121inerija \u010aivili huma g\u0127al dawk li huma interessati fl-In\u0121inerija Spazjali tas-Sit, il-\u0120eolo\u0121ija tal-In\u0121inerija, il-Mekkanika tal-\u0126amrija u l-Anali\u017ci Strutturali. Fi tmiem il-programm, l-istudent ikun jista\u2019 ja\u0127dem b\u2019mod indipendenti, billi jwettaq ammont sinifikanti ta\u2019 ri\u010berka u studju g\u0127al rasu, kemm fl-ambjent tal-Istitut kif ukoll barra minnu."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Advanced Diploma in Building Services Engineering",
          "MCAST Advanced Diploma in Construction Engineering",
          "MCAST Advanced Diploma in Civil Engineering",
          "Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          "I-Levels: Engineering Drawing, Graphical Communication"
      ],
      "req_other": [
          "Knowledge of CAD will be considered an asset."
      ],
      "careers": "Civil engineering designer, Civil engineering design manager, Construction site manager, Quality assurance manager, Estate and facilities manager, Site technical officer"
  },
  {
      "index": "05-45",
      "institute": "iet",
      "code": "CE6-04-18",
      "title": "Bachelor of Science (Honours) in Quantity Surveying",
      "title_notes": "",
      "desc_en": [
          "The structure of this programme provides an opportunity to explore a range of construction related disciplines. During the programme, the learners will develop a comprehensive understanding of the disciplines which underpin construction management and the surveying professions. This knowledge will include subjects such as: economics, law, industry practice and building technology. Throughout the programme there will be a strong focus on project work and interdisciplinary collaboration is highly encouraged.",
          "The programme leads to the development of specialist knowledge related to construction economics and contract law, with a particular focus on managing costs throughout the project life-cycle from early design through to building completion and beyond. As part of this programme the learners will also complete a dissertation on a research topic of their choice and a quantity surveying project."
      ],
      "desc_mt": [
          "L-istruttura ta\u2019 dan il-programm tipprovdi opportunit\u00e0 biex ti\u0121i esplorata firxa ta\u2019 dixxiplini relatati mal-kostruzzjoni. Matul il-programm, l-istudent ji\u017cviluppa fehim komprensiv tad-dixxiplini li fuqhom huma bba\u017cati l-\u0121estjoni tal-kostruzzjoni u l-professjonijiet tal-ist\u0127arri\u0121. Dan l-g\u0127arfien jinkludi su\u0121\u0121etti b\u0127all-ekonomija, il-li\u0121i, il-prattika tal-industrija u t-teknolo\u0121ija tal-bini. Matul il-kors issir enfasi qawwija fuq ix-xog\u0127ol fuq pro\u0121ett u l-istudenti ji\u0121u m\u0127e\u0121\u0121a ja\u0127dmu f\u2019kollaborazzjoni ma\u2019 dixxiplini o\u0127rajn.",
          "Il-programm iwassal g\u0127al \u017cvilupp ta\u2019 g\u0127arfien spe\u010bjalizzat relatat mal-ekonomija tal-kostruzzjoni u l-li\u0121i kuntrattwali, b\u2019enfasi partikolari fuq il-\u0121estjoni tal-ispejje\u017c tul i\u010b-\u010biklu kollu tal-pro\u0121ett, mill-istadju bikri tad-disinn sat-tlestija tal-bini u anke wara. B\u0127ala parti minn dan il-programm, l-istudenti jippre\u017centaw ukoll te\u017ci dwar su\u0121\u0121ett ta\u2019 ri\u010berka tal-g\u0127a\u017cla tag\u0127hom u pro\u0121ett ta\u2019 s\u0127arri\u0121 tal-kwantit\u00e0."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Building Services Engineering",
          "MCAST Advanced Diploma in Construction Engineering",
          "MCAST Advanced Diploma in Civil Engineering",
          "Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: At least one A-Level pass from Accounts, Engineering Drawing, Mathematics (Pure or Applied), Physics"
      ],
      "req_preferred": [
          "I-Levels: Engineering Drawing, Graphical Communication"
      ],
      "req_other": [
          "Knowledge of CAD will be considered an asset."
      ],
      "careers": "Quantity surveyor, Risk, value management and cost control manager, Contractual claims adviser, Construction commercial risks adviser"
  },
  {
      "index": "05-46",
      "institute": "iet",
      "code": "EE6-06-19",
      "title": "Bachelor of Engineering (Honours) in Electronics and Control Engineering",
      "title_notes": "",
      "desc_en": [
          "The aim of this degree is\u2029to develop professional\u2029engineers who are both\u2029academically prepared\u2029and practically trained to\u2029satisfy the requirements\u2029of local industry.\u2029Moreover, graduates\u2029from this course will be\u2029suitably prepared to\u2029embark on careers or\u2029further their studies.\u2029Control engineering is,\u2029from many perspectives,\u2029at the peak of the various\u2029engineering disciplines.\u2029",
          "Indeed, many\u2029engineering problems\u2029involve the processing of\u2029information of some form\u2029in order to control some\u2029system or variable within\u2029a more complex system.\u2029Giving learners a good\u2029preparation in control\u2029engineering increases\u2029their attractiveness to\u2029industry."
      ],
      "desc_mt": [
          "L-g\u0127an ta\u2019 din id-degree huwa li ji\u0121u \u017cviluppati in\u0121iniera professjonali li jit\u0127ejjew b\u2019mod akkademiku, kif ukoll jit\u0127arr\u0121u b\u2019mod prattiku, biex jissodisfaw ir-rekwi\u017citi tal-industrija lokali. Barra minn hekk, dawk li jiggradwaw minn dan il-kors jit\u0127ejjew b\u2019mod xieraq biex jibdew karriera jew ikomplu bl-istudji tag\u0127hom. L-in\u0121inerija tal-kontroll tinsab, minn \u0127afna perspettivi, fil-qu\u010b\u010bata tad-diversi dixxiplini tal-in\u0121inerija.",
          "Fil-fatt, \u0127afna problemi tal-in\u0121inerija jinvolvu xi tip ta\u2019 ppro\u010bessar ta\u2019 informazzjoni sabiex ti\u0121i kkontrollata xi sistema jew element varjabbli fi \u0127dan sistema aktar kumplessa. L-istudenti li jkollhom ta\u0127ri\u0121 tajjeb fl-in\u0121inerija tal-kontroll huma mfittxija sew mill-industrija."
      ],
      "mqf": 6,
      "duration": 4,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Industrial Electronics",
          "MCAST Advanced Diploma in Electrical Systems",
          "MCAST Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants need to obtain an average Grade C or better across their A-Levels in Mathematics and Physics (such as Grades C, C; Grades B, D; Grades A, E), or a related MCAST Advanced Diploma (with an overall mark of 60% or higher)."
      ],
      "careers": "Design engineer, Electronics engineer, Electrical engineer"
  },
  {
      "index": "05-47",
      "institute": "iet",
      "code": "EE6-07-19",
      "title": "Bachelor of Engineering (Honours) in Electronics Engineering",
      "title_notes": "",
      "desc_en": [
          "The aim of this degree programme is to develop learners into qualified engineers who are both academically prepared and practically trained to satisfy the requirements of the local electronics industry. Moreover, these graduates will be suitably prepared to embark on professional careers or further their studies abroad.",
          "Electronics is still a highly relevant and attractive technological field that has evolved at a rapid rate. This interdisciplinary field is practically used in every aspect of modern life as exemplified by the advances in computers and communications. The course will bring learners in contact with the modern technologies and gives an in-depth mix of knowledge and skills."
      ],
      "desc_mt": [
          "L-g\u0127an ta\u2019 dan il-programm, li jwassal g\u0127al ba\u010bellerat, huwa li ji\u017cviluppa lill-istudenti f\u2019in\u0121iniera kwalifikati, li jit\u0127ejjew b\u2019mod akkademiku, kif ukoll jit\u0127arr\u0121u b\u2019mod prattiku, biex jissodisfaw ir-rekwi\u017citi tal-industrija lokali tal-elettronika. Barra minn hekk, dawk li jiggradwaw minn dan il-kors jit\u0127ejjew b\u2019mod xieraq biex jibdew karrieri professjonali jew ikomplu bl-istudji tag\u0127hom barra minn Malta.",
          "L-elettronika g\u0127adha qasam teknolo\u0121iku rilevanti u attraenti \u0127afna li evolva b\u2019rata mg\u0127a\u0121\u0121la. Dan il-qasam interdixxiplinari jintu\u017ca prattikament f\u2019kull aspett tal-\u0127ajja moderna, kif juru l-avvanzi fil-kompjuters u l-komunikazzjoni. Il-kors ipo\u0121\u0121i lill-istudenti f\u2019kuntatt mat-teknolo\u0121iji moderni u jipprovdi ta\u0127lita profonda ta\u2019 g\u0127arfien u \u0127iliet."
      ],
      "mqf": 6,
      "duration": 4,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Industrial Electronics",
          "MCAST Advanced Diploma in Electrical Systems",
          "MCAST Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants need to obtain an average Grade C or better across their A-Levels in Mathematics and Physics (such as Grades C, C; Grades B, D; Grades A, E), or a related MCAST Advanced Diploma (with an overall mark of 60% or higher)."
      ],
      "careers": "Design engineer, Electronic engineer, Electrical engineer"
  },
  {
      "index": "05-48",
      "institute": "iet",
      "code": "EE6-A1-20",
      "title": "Bachelor of Science (Honours) in Biomedical Engineering",
      "title_notes": "",
      "desc_en": [
          "The objective of this degree programme is that of developing professionals who have strong practical competences backed by solid underpinning knowledge related to the biomedical engineering sector. The programme includes a number of core modules which are common with other Electrical and Electronics degrees such as Analogue and Digital Electronics, Automation and Control, and Mathematics. Furthermore, the course deals with specific modules within the Biomedical field including Biomedical Instrumentation, Biomedical Devices, Biomedical Materials and Design for Medical Instrumentation. Study-units such as Human Biology, and Gait Analysis and Human Movement give an insight on human anatomy and movement of joints for human mechanics."
      ],
      "desc_mt": [
          "L-g\u0127an ta\u2019 dan il-programm, li jwassal g\u0127al ba\u010bellerat, huwa li ji\u0121u \u017cviluppati professjonisti li g\u0127andhom kompetenzi pratti\u010bi qawwija, imsa\u0127\u0127a minn g\u0127arfien ba\u017ciku sod relatat mas-settur tal-in\u0121inerija bijomedika. Il-programm jinkludi numru ta\u2019 unitajiet ewlenin, li ji\u0121u mg\u0127allma fi programmi o\u0127ra ta\u2019 ba\u010bellerat fl-Elettriku u l-Elettronika, l-Elettronika Analoga u Di\u0121itali, l-Awtomatizzazzjoni u l-Kontroll, u l-Matematika. Barra minn hekk, il-kors jittratta unitajiet spe\u010bifi\u010bi fi \u0127dan il-qasam Bijomediku, inklu\u017ci l-Istrumentalizzazzjoni Bijomedika, l-Apparat Bijomediku, il-Materjali Bijomedi\u010bi u d-Disinn g\u0127all-Istrumentalizzaz-zjoni Medika. L-unitajiet ta\u2019 studju, b\u0127all-Bijolo\u0121ija Umana u l-Anali\u017ci tal-Mixi u l-Moviment tal-Bniedem, jag\u0127tu vi\u017cjoni dwar l-anatomija umana u l-moviment tal-\u0121ogi fil-mekkanika tal-bniedem."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Advanced Diploma in Industrial Electronics",
          "MCAST Advanced Diploma in Electrical Systems",
          "MCAST Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Biomedical engineering manager, Medical equipment operations engineer"
  },
  {
      "index": "05-49",
      "institute": "iet",
      "code": "ME6-02-19",
      "title": "Bachelor of Engineering (Honours) in Mechanical Engineering (Manufacturing)",
      "title_notes": "",
      "desc_en": [
          "This Mechanical Engineering degree programme provides the learners with a solid understanding of relevant engineering fundamentals and prepares them for a broad range of career options in the manufacturing field. This field is becoming increasingly more and more high tech.",
          "The programme is structured around studies which will develop in learners, a firm understanding of principles and disciplines which are needed in the modelling, measuring, analysis and design of mechanical components and systems.",
          "On completing the course, graduates will be expected to demonstrate that they have assimilated the professional skills necessary for formulating and executing engineering projects. The course also provides training in teamwork, and effective communication skills."
      ],
      "desc_mt": [
          "Dan il-programm li jwassal g\u0127al ba\u010bellerat fl-In\u0121inerija Mekkanika jipprovdi lill-istudent fehim sod tal-elementi fundamentali tal-in\u0121inerija rilevanti u j\u0127ejjih g\u0127al firxa wiesg\u0127a ta\u2019 g\u0127a\u017cliet ta\u2019 karriera fil-qasam tal-manifattura. Dan il-qasam qed isir ta\u2019 livell teknolo\u0121iku li kulma jmur dejjem jog\u0127la.",
          "Il-programm huwa mfassal madwar l-istudji li ji\u017cviluppaw fl-istudenti, il-fehim sod tal-prin\u010bipji u d-dixxiplini li huma me\u0127tie\u0121a fl-immudellar, il-kejl, l-anali\u017ci u d-disinn ta\u2019 komponenti u sistemi mekkani\u010bi.",
          "Dawk li jiggradwaw minn dan il-kors huma mistennija juru li jkunu assimilaw il-\u0127iliet professjonali ne\u010bessarji biex jifformulaw u jwettqu pro\u0121etti tal-in\u0121inerija. Il-kors jipprovdi wkoll ta\u0127ri\u0121 fil-\u0127idma f\u2019tim, u \u0127iliet ta\u2019 komunikazzjoni effettiva."
      ],
      "mqf": 6,
      "duration": 4,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Manufacturing",
          "MCAST Advanced Diploma for Polymer Process Technicians",
          "MCAST Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants need to obtain an average Grade C or better across their A-Levels in Mathematics and Physics (such as Grades C, C; Grades B, D; Grades A, E), or a related MCAST Advanced Diploma (with an overall mark of 60% or higher)."
      ],
      "careers": "Manufacturing process engineer, Engineering designer, Quality control engineer, Engineering manager, Production engineer\/manager\/superintendent, Engineering laboratory manager, Mechanical engineer"
  },
  {
      "index": "05-50",
      "institute": "iet",
      "code": "ME6-03-19",
      "title": "Bachelor of Engineering (Honours) in Mechanical Engineering (Plant)",
      "title_notes": "",
      "desc_en": [
          "This degree programme in Mechanical Engineering is relevant to a range of industries, since it covers the key mechanical engineering principles and subject areas for the plant engineer. The course is therefore wide-ranging and it will develop the candidates\u2019 ability to apply these principles to solve engineering problems in a variety of work environments and business concerns.",
          "The course contains study-units in various areas such as Fluid Mechanics, Plant Technology, Control Principles, Control Engineering, Electrical Technology, HVAC, Vibration Analysis and Heat Engines.",
          "Additional managerial modules and modules in environmental engineering further enhance this programme so that graduates may add real value to the organisation that employs them."
      ],
      "desc_mt": [
          "Dan il-programm li jwassal g\u0127al ba\u010bellerat fl-In\u0121inerija Mekkanika huwa rilevanti g\u0127al firxa ta\u2019 industriji, min\u0127abba li jkopri l-prin\u010bipji ewlenin tal-in\u0121inerija mekkanika u l-oqsma ta\u2019 interess g\u0127all-in\u0121inier tal-impjanti. G\u0127alhekk il-kors huwa wie\u0127ed komprensiv u ji\u017cviluppa l-kapa\u010bit\u00e0 tal-kandidati li japplikaw dawn il-prin\u010bipji biex isolvu problemi tal-in\u0121inerija f\u2019varjet\u00e0 ta\u2019 ambjenti tax-xog\u0127ol u intrapri\u017ci.",
          "Il-kors jinkludi unitajiet ta\u2019 studju f\u2019diversi oqsma, b\u0127all-Mekkanika tal-Fluwidi, it-Teknolo\u0121ija tal-Impjanti, il-Prin\u010bipji tal-Kontroll, l-In\u0121inerija tal-Kontroll, it-Teknolo\u0121ija Elettrika, l-HVAC, l-Anali\u017ci tal-Vibrazzjoni u l-Magni tas-S\u0127ana.",
          "L-unitajiet ta\u2019 studju mani\u0121erjali addizzjonali u l-unitajiet fl-in\u0121inerija ambjentali jkomplu jsa\u0127\u0127u dan il-programm, sabiex dawk li jiggradwaw minn dan il-kors ikunu jistg\u0127u verament i\u017cidu valur g\u0127all-organizzazzjoni li timpjegahom."
      ],
      "mqf": 6,
      "duration": 4,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Operations and Maintenance",
          "MCAST Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants need to obtain an average Grade C or better across their A-Levels in Mathematics and Physics (such as Grades C, C; Grades B, D; Grades A, E), or a related MCAST Advanced Diploma (with an overall mark of 60% or higher)."
      ],
      "careers": "Mechanical engineer, Engineering plant systems designer, Mechanical engineering analyst, Hotel chief engineer, Plant engineer"
  },
  {
      "index": "05-51",
      "institute": "iet",
      "code": "ME6-01-19",
      "title": "Bachelor of Science (Honours) in Marine Engineering",
      "title_notes": "",
      "desc_en": [
          "This degree programme deals with the design, construction, operation and maintenance of engines and machinery in ships and marine installations.",
          "The learner will gain an understanding of developed and emerging technologies whilst applying theoretical and practical methods in the analysis and solution of marine engineering related problems.",
          "At this level of study, one will be expected to develop the qualities needed for employment in situations requiring the exercise of personal responsibility, technical leadership and commercial management in complex and unpredictable circumstances as expected in the Maritime Industry."
      ],
      "desc_mt": [
          "Dan il-programm li jwassal g\u0127al ba\u010bellerat jittratta d-disinn, il-kostruzzjoni, l-operat u l-manutenzjoni tal-magni u l-makkinarju f\u2019bastimenti u installazzjonijiet tal-ba\u0127ar.",
          "L-istudent jikseb fehim tat-teknolo\u0121iji \u017cviluppati u emer\u0121enti, filwaqt li japplika metodi teoreti\u010bi u pratti\u010bi fl-anali\u017ci u s-soluzzjoni ta\u2019 problemi relatati mal-in\u0121inerija tal-ba\u0127ar.",
          "F\u2019dan il-livell ta\u2019 studju, wie\u0127ed ikun mistenni li ji\u017cviluppa l-kwalitajiet me\u0127tie\u0121a g\u0127al impjieg f\u2019sitwazzjonijiet li jirrikjedu l-e\u017cer\u010bizzju ta\u2019 responsabbilt\u00e0 personali, it-tmexxija teknika u l-\u0121estjoni kummer\u010bjali f\u2019\u010birkostanzi kumplessi u imprevedibbli kif wie\u0127ed jistenna fl-Industrija Marittima."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Marine Engineering",
          "MCAST Advanced Diploma in Operations and Maintenance",
          "MCAST Advanced Diploma in Manufacturing",
          "Undergraduate Diploma in Foundations of Engineering",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Physics, Mathematics (Pure or Applied)"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Marine structural designer, Marine systems designer, Marine technologist, Marine surveyor"
  }
  ]
  constructor() { }

  getAllIETcourses(){
    return [...this.IETcourses];
  }

  getIETcourse(IETcourseId: string){
    return {...this.IETcourses.find(IETcourse => {
      return IETcourse.index === IETcourseId;
    })};
  }  
}
