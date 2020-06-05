import { Injectable } from '@angular/core';
import { IBMCcourse } from './ibmccourses.model';

@Injectable({
  providedIn: 'root'
})
export class IbmcService {

  private IBMCcourses: IBMCcourse[] = [
    {
      "index": "02-01",
      "institute": "ibmc",
      "code": "BC1-02-19",
      "title": "Award in Basic Office Skills",
      "title_notes": "",
      "desc_en": [
          "This programme provides the learners with a hands-on experience to gain the basic skills required to work in an office environment. Learners need to have a genuine interest to work in posts related to basic customer care and office work. The course tackles both the use of basic office equipment as well as the soft skills required to be able to behave in an appropriate manner in an office environment."
      ],
      "desc_mt": [
          "Dan il-programm jipprovdi lill-istudenti esperjenza prattika biex jiksbu l-\u0127iliet ba\u017ci\u010bi me\u0127tie\u0121a biex ja\u0127dmu f\u2019ambjent ta\u2019 uffi\u010b\u010bju. L-istudenti je\u0127tie\u0121 li jkollhom interess \u0121enwin li ja\u0127dmu f\u2019postijiet relatati ma\u2019 assistenza ba\u017cika tal-klijenti u xog\u0127ol tal-uffi\u010b\u010bju. Il-kors jittratta kemm l-u\u017cu ta\u2019 tag\u0127mir ba\u017ciku tal-uffi\u010b\u010bju, kif ukoll il-\u0127iliet personali me\u0127tie\u0121a biex wie\u0127ed ikun jista\u2019 j\u0121ib ru\u0127u kif xieraq f\u2019ambjent ta\u2019 uffi\u010b\u010bju."
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
          "Initial Assessment Tests and\/or Interview (as may be applicable)"
      ],
      "careers": "Assistant in office environment"
  },
  {
      "index": "02-02",
      "institute": "ibmc",
      "code": "BC1-03-18",
      "title": "Award in Hospitality",
      "title_notes": "",
      "desc_en": [
          "Through this award programme, learners will start to become familiar with the hospitality industry, as well as have the opportunity to identify such industries, locally and abroad. Different roles and duties found within the hospitality industry will be explored, as will be the understanding of the hierarchy and responsibility one would have to deal with in such roles.",
          "Learners will also discuss and understand the importance of hygiene at work, including personal hygiene, as well as the importance of keeping safe and working in a safe and healthy environment. This would also include being ethical and using adequate etiquette."
      ],
      "desc_mt": [
          "Permezz ta\u2019 dan il-programm ta\u2019 g\u0127otja, l-istudenti jibdew isiru familjari mal-industrija tal-ospitalit\u00e0, kif ukoll ikollhom l-opportunit\u00e0 li jidentifikaw dawn l-industriji, kemm lokalment kif ukoll barra mill-pajji\u017c. Huma jesploraw ir-rwoli u d-dmirijiet differenti marbuta mal-industrija tal-ospitalit\u00e0, kif ukoll jitg\u0127allmu dwar il-\u0121erarkija u r-responsabbilt\u00e0 li wie\u0127ed ikollu jiffa\u010b\u010bja f\u2019dawn ir-rwoli.",
          "L-istudenti jiddiskutu u jifhmu wkoll l-importanza tal-i\u0121jene fuq il-post tax-xog\u0127ol, inklu\u017ca l-i\u0121jene personali, kif ukoll l-importanza li wie\u0127ed i\u017comm ru\u0127u \u2018l bog\u0127od mill-periklu u li ja\u0127dem f\u2019ambjent sikur u tajjeb g\u0127as-sa\u0127\u0127a. Dan ikun jinkludi wkoll l-etika u l-u\u017cu ta\u2019 manjieri tajbin."
      ],
      "mqf": 1,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished Compulsory Education, documented by the SSC&P (Secondary School Certificate and Profile)"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants are required to: Present a recent psychological report (issued no more than 3 years before date of application) and school reports including most recent Individual Education Plan (IEP)",
          "Adapt to both class-based and community-based learning (to be ascertained through a 3-day workshop at MCAST, attendance for which is compulsory)",
          "Commitment to prospective employment"
      ],
      "careers": "Assistant in kitchen\\nAssistant in restaurant\\nAssistant in housekeeping"
  },
  {
      "index": "02-03",
      "institute": "ibmc",
      "code": "BC1-04-18",
      "title": "Award in Retail",
      "title_notes": "",
      "desc_en": [
          "This programme is intended for learners who would like to become familiar with the local retailing sector, in particular small retail shops. Learners who apply for this course need to be genuinely interested and willing to work in a post related to the retail sector. Learners will become familiar with the basic business concepts, including the principles of stock management. They will also be made aware of different types of customers and situations that people who work in a retail environment would typically face. To achieve this, learners will be exposed to the importance of, and the skills required for good communication, as well as teamwork."
      ],
      "desc_mt": [
          "Dan il-programm huwa ma\u0127sub g\u0127all-istudenti li jixtiequ jsiru familjari mas-setturi lokali ta\u2019 bejg\u0127 g\u0127all-konsumatur, b\u2019mod partikolari \u0127wienet \u017cg\u0127ar. L-istudenti li japplikaw g\u0127al dan il-kors je\u0127tie\u0121 li jkollhom interess \u0121enwin u li jkunu lesti li ja\u0127dmu f\u2019post relatat mas-settur tal-bejg\u0127 g\u0127all-konsumatur. L-istudenti jsiru familjari mal-kun\u010betti ba\u017ci\u010bi tan-negozju, inklu\u017ci l-prin\u010bipji tal-immani\u0121\u0121jar tal-istokk. Huma jsiru konxji wkoll dwar it-tipi differenti ta\u2019 konsumaturi u sitwazzjonijiet li normalment jiffa\u010b\u010bjaw il-persuni li ja\u0127dmu f\u2019ambjent ta\u2019 bejg\u0127 g\u0127all-konsumatur. G\u0127al dan il-g\u0127an, l-istudenti jsiru konxji mill-importanza ta\u2019 komunikazzjoni tajba u l-\u0127iliet me\u0127tie\u0121a biex din isse\u0127\u0127, kif ukoll mill-importanza ta\u2019 \u0127idma f\u2019tim."
      ],
      "mqf": 1,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          "Finished Compulsory Education, documented by the SSC&P (Secondary School Certificate and Profile)",
          "Applicants are required to:",
          "Present a recent psychological report (issued no more than 3 years before the date of application) and school reports including most recent Individual Education Plan (IEP)",
          "Adapt to both class-based and community-based learning (to be ascertained through a 3-day workshop at MCAST, attendance for which is compulsory)",
          "Commitment to prospective employment"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Sit for an Interview -as may be applicable"
      ],
      "careers": "Shop assistant\\nStore assistant"
  },
  {
      "index": "02-04",
      "institute": "ibmc",
      "code": "BC1-01-19",
      "title": "Introductory Certificate in Business",
      "title_notes": "",
      "desc_en": [
          "The programme is aimed at learners who would like to explore the world of studying business related subjects. During the programme, learners will be exposed to the basics of business concepts including organisational structures and different business areas. The course will also provide learners with skills related to subjects such as English, Maths and Maltese as well as other key skills units which will help them in their progression towards further studies."
      ],
      "desc_mt": [
          "Il-programm huwa mmirat g\u0127all-istudenti li jixtiequ jesploraw id-dinja tal-istudju ta\u2019 su\u0121\u0121etti relatati man-negozju. Matul il-programm, l-istudenti se jiltaqg\u0127u mal-kun\u010betti ba\u017ci\u010bi tan-negozju, inklu\u017ci strutturi organizzattivi u oqsma differenti tan-negozju. Il-kors se jipprovdi wkoll lill-istudenti l-\u0127iliet relatati ma\u2019 su\u0121\u0121etti b\u0127all-Ingli\u017c, il-Matematika u l-Malti, kif ukoll unitajiet ta\u2019 \u0127iliet ewlenin o\u0127ra li jg\u0127inuhom jimxu \u2018l quddiem biex ikunu jistg\u0127u jkomplu jistudjaw."
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
          "Initial Assessment Tests and\/or Interview (as may be applicable)"
      ],
      "careers": "Office assistant\\nShop assistant"
  },
  {
      "index": "02-05",
      "institute": "ibmc",
      "code": "BC2-01-19",
      "title": "Foundation Certificate in Business",
      "title_notes": "",
      "desc_en": [
          "This programme provides learners with an introduction to business related topics such as Basic Bookkeeping, Human Resources, Marketing, Sales and General Business Concepts. These different topics are introduced at a basic level through a variety of teaching methods as well as assessment techniques with the aim of catering for different learning styles."
      ],
      "desc_mt": [
          "Dan il-programm jipprovdi lill-istudenti introduzzjoni g\u0127al su\u0121\u0121etti relatati man-negozju, b\u0127all-Bookkeeping, ir-Ri\u017corsi Umani, il-Marketing, il-Bejg\u0127 u Kun\u010betti \u0120enerali tan-Negozju. Dawn is-su\u0121\u0121etti differenti huma introdotti f\u2019livell ba\u017ciku permezz ta\u2019 varjet\u00e0 ta\u2019 metodi ta\u2019 tag\u0127lim, kif ukoll modi ta\u2019 valutazzjoni differenti, bil-g\u0127an li jittie\u0127du inkunsiderazzjoni l-istili differenti ta\u2019 kif wie\u0127ed jitg\u0127allem."
      ],
      "mqf": 2,
      "duration": 1,
      "study": "FT",
      "mode": "Job Shadowing",
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
      "careers": "Clerical assistant"
  },
  {
      "index": "02-06",
      "institute": "ibmc",
      "code": "BC3-01-19",
      "title": "Diploma in Business",
      "title_notes": "",
      "desc_en": [
          "This programme is aimed at preparing learners to further their studies in different areas of business. It is a preparatory course for those wishing to further their studies at MCAST on to MQF Level 4. The course aims to allow learners to improve in the areas of written and spoken English and Maltese as well as in their Mathematical and IT skills. The course however also goes into more detail, while starting from the very basics of different business areas and functions such as Accounts, Human Resources, Marketing, Purchasing, and others. This generic background allows the students to bring their academic level up to scratch, while acquiring enough knowledge about the different business areas to be able to progress onto further studies."
      ],
      "desc_mt": [
          "Dan il-programm huwa mmirat lejn it-t\u0127ejjija ta\u2019 studenti biex ikomplu l-istudji tag\u0127hom f\u2019oqsma differenti tan-negozju. Huwa kors preparatorju biex wie\u0127ed ikompli l-istudji tieg\u0127u fl-MCAST sal-Livell 4 tal-MQF. Il-kors g\u0127andu l-g\u0127an li jg\u0127in lill-istudenti jtejbu l-\u0127iliet tag\u0127hom fl-oqsma tal-kitba u t-ta\u0127dit bl-Ingli\u017c u bil-Malti, kif ukoll il-\u0127iliet tag\u0127hom fil-Matematika u l-IT. Madankollu, il-kors jid\u0127ol ukoll f\u2019\u0127afna aktar dettall, filwaqt li jibda mill-kun\u010betti verament ba\u017ci\u010bi ta\u2019 oqsma u funzjonijiet differenti tan-negozju b\u0127all-Accounts, ir-Ri\u017corsi Umani, il-Marketing, ix-Xiri u o\u0127rajn. Dan l-isfond \u0121eneriku jippermetti lill-istudenti jtejbu l-livell akkademiku tag\u0127hom sa standard a\u010b\u010bettabbli, filwaqt li jiksbu bi\u017c\u017cejjed g\u0127arfien dwar l-oqsma differenti tan-negozju sabiex ikunu jistg\u0127u jkomplu jistudjaw f\u2019livell aktar avvanzat."
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
          "Business Studies"
      ],
      "req_other": [
          ""
      ],
      "careers": "Clerical assistant\\nShop cashier"
  },
  {
      "index": "02-07",
      "institute": "ibmc",
      "code": "BC4-A1-19",
      "title": "Advanced Diploma in Business Administration",
      "title_notes": "",
      "desc_en": [
          "This programme will allow learners to study the different areas of business administration. It is aimed either at students who aspire to one day open up their own business or follow in their family business, or else to work in the administration of a company at a junior level. This generic course offers a good basis into the main areas of business administration including office administration, accounts, marketing, recruitment, and health and safety among others. The course, which is assessed through a variety of scenario related assessments, also sees learners go out on Apprenticeship where a holistic hands-on and practical approach is adopted."
      ],
      "desc_mt": [
          "Dan il-programm jippermetti lill-istudenti jistudjaw l-oqsma differenti tal-amministrazzjoni tan-negozju. Il-kors huwa mmirat lejn studenti li jaspiraw li xi darba jift\u0127u n-negozju tag\u0127hom jew li jkomplu jmexxu n-negozju tal-familja tag\u0127hom, jew inkella jixtiequ li ja\u0127dmu fl-amministrazzjoni ta\u2019 kumpanija mhux f\u2019livell g\u0127oli. Dan il-kors \u0121eneriku joffri ba\u017ci tajba fl-oqsma ewlenin tal-amministrazzjoni tan-negozju, inklu\u017ci l-amministrazzjoni tal-uffi\u010b\u010bju, l-accounts, il-marketing, ir-rekluta\u0121\u0121, u s-sa\u0127\u0127a u s-sigurt\u00e0, fost l-o\u0127rajn. Il-kors, li huwa vvalutat permezz ta\u2019 varjet\u00e0 ta\u2019 metodi ta\u2019 valutazzjoni relatati max-xenarju, jipprovdi wkoll Apprendistat g\u0127all-istudenti biex hekk jiksbu esperjenza prattika."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Business",
          "MCAST Diploma in Postal Services",
          "MCAST Diploma in Foundation Studies for Security, Enforcement and Protection",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English Language, Mathematics"
      ],
      "req_other": [
          ""
      ],
      "careers": "Clerk\\nAdministrative assistant\\nHuman resource assistant\\nFront office coordinator\\nPurchasing officer\\nField research officer\\nSupply chain \/ Logistics officer"
  },
  {
      "index": "02-08",
      "institute": "ibmc",
      "code": "BC4-A2-20",
      "title": "Advanced Diploma in Finance and Insurance",
      "title_notes": "",
      "desc_en": [
          "This course is aimed at people who would like to venture in one of the many careers related to financial services. The first year of studies introduces learners to generic areas of financial services including the world of insurance. In the second year of studies, learners will then choose an area of specialisation. Specialisation can be either in financial services or else in insurance.",
          "This approach ensures that any learner following this course is exposed to different areas of the financial services world, thus giving them better flexibility in career prospects. Learners choosing the main area of expertise will be very strong in the specific area chosen, while having a good understanding of the other area."
      ],
      "desc_mt": [
          "Dan il-kors huwa mmirat g\u0127al studenti prospettivi li qeg\u0127din jaspiraw g\u0127al karriera fid-dinja tas-Servizzi Finanzjarji. L-ewwel sena tal-kors hija ma\u0127suba biex tintrodu\u010bi lill-istudenti g\u0127as-setturi differenti tal-industrija tas-servizzi finanzjarji, inklu\u017c l-assigurazzjoni. Fit-tieni sena tal-kors, l-istudenti jag\u0127\u017clu li jispe\u010bjalizzaw jew fil-qasam tas-servizzi finanzjarji u bankarji jew inkella fl-istudji tal-assigurazzjoni.",
          "B\u2019dan il-mod, fl-ewwel sena l-istudenti jie\u0127du ba\u017ci soda tal-aspetti u l-oqsma kollha tas-servizzi finanzjarji u g\u0127aldaqstant ikollhom aktar flessibbilt\u00e0 mil-lat ta\u2019 impjiegi. Permezz tal-g\u0127a\u017cla ta\u2019 spe\u010bjalizzazzjoni fit-tieni sena, l-istudenti jie\u0127du g\u0127arfien aktar fil-fond fis-settur tal-g\u0127a\u017cla tag\u0127hom filwaqt li jkollhom g\u0127arfien adegwat fis-setturi l-o\u0127ra."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Business",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "English Language, Mathematics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "In an Insurance setting:\\n Account handler\\nClaims handler\\nInsurance claims surveyor\\nInsurance clerk In a Financial Services setting:\\n Bank cashier\\nClerical and other officer roles within banks and other financial services institutions"
  },
  {
      "index": "02-09",
      "institute": "ibmc",
      "code": "BC4-A3-19",
      "title": "Advanced Diploma in Accounting",
      "title_notes": "",
      "desc_en": [
          "This programme aims to give learners a very good grounding in the studying of Accounts. Study areas range from aspects of financial management accounting to the use of accounting software and more generic areas of key skills. The course includes hands-on experience through Apprenticeship where students will learn by doing and gain experience first-hand on the application of the theory. Students who finish the course will not be qualified accountants, but will have a very good understanding and possess the required skills to work in an accounts department. Learners following this programme will also be prepared to sit for AAT (Association of Accounting Technicians) UK International Examinations."
      ],
      "desc_mt": [
          "Dan il-programm g\u0127andu l-g\u0127an li jipprovdi lill-istudenti ba\u017ci tajba \u0127afna fl-istudju tal-Accounts. L-oqsma tal-istudju jinkludu l-aspetti differenti ta\u2019 accounting finanzjarju u ta\u2019 mmani\u0121\u0121jar, l-u\u017cu ta\u2019 softwer tal-accounting, kif ukoll oqsma aktar \u0121eneri\u010bi ta\u2019 \u0127iliet ewlenin. Il-kors g\u0127andu livell g\u0127oli \u0127afna ta\u2019 esperjenza prattika permezz ta\u2019 Apprendistat, fejn l-istudenti mhux biss jitg\u0127allmu permezz tal-prattika, i\u017cda anke jesperjenzaw l-applikazzjoni diretta tat-teorija li jkunu qed jitg\u0127allmu fil-klassi. G\u0127alkemm l-istudenti li jlestu l-kors ma jkunux accountants kwalifikati b\u2019mod s\u0127i\u0127, \u017cgur se jkollhom fehim tajjeb \u0127afna, flimkien mal-\u0127iliet me\u0127tie\u0121a biex ja\u0127dmu f\u2019dipartiment tal-accounts. L-istudenti li jsegwu dan il-programm se jit\u0127ejjew ukoll biex jag\u0127mlu l-E\u017camijiet Internazzjonali tal-AAT (Association of Accounting Technicians) UK."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Business",
          "MCAST Diploma in Postal Services",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes Compulsory: English Language, Mathematics"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Fees: There are AAT fees payable to AAT (UK) for Membership and Examinations leading to Qualification Certificates awarded by AAT (UK).",
          "Mi\u017cati: Hemm mi\u017cati tal-AAT li g\u0127andhom jit\u0127allsu lill-AAT (UK) g\u0127al S\u0127ubija u E\u017camijiet li jwasslu g\u0127al \u010aertifikati ta\u2019 Kwalifika mog\u0127tija minn AAT (UK)."
      ],
      "careers": "Accounts clerk\\nAccounts administrator\\nAudit assistant\\nCredit management officer"
  },
  {
      "index": "02-10",
      "institute": "ibmc",
      "code": "BC4-A5-18",
      "title": "Advanced Diploma in Marketing",
      "title_notes": "",
      "desc_en": [
          "This programme is aimed at giving learners the knowledge and knowhow of the main areas related to the different areas of marketing. They will go into the areas of Marketing, Sales, Advertising, Public Relations and Customer Care in some detail. The insight in these different areas provides the student with the ability to work in different areas of marketing. The learner will also have the opportunity to apply the theory learned in class in practice through the Apprenticeship placement."
      ],
      "desc_mt": [
          "Dan il-programm g\u0127andu l-g\u0127an li jipprovdi lill-istudenti l-g\u0127arfien u l-kompetenza fir-rigward tal-oqsma ewlenin relatati mal-oqsma differenti tal-marketing. L-istudenti se jid\u0127lu f\u2019\u010bertu dettall fl-oqsma tal-Marketing, il-Bejg\u0127, ir-Reklamar, ir-Relazzjonijiet Pubbli\u010bi u l-Assistenza tal-Klijenti. Il-\u0127iliet f\u2019dawn l-oqsma differenti jwasslu lill-istudent sabiex ikun kapa\u010bi ja\u0127dem f\u2019\u2019oqsma differenti tal-marketing. Permezz tal-Apprendistat, l-istudent se jkollu wkoll l-opportunit\u00e0 li japplika fil-prattika t-teorija li jkun tg\u0127allem fil-klassi."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Business",
          "MCAST Diploma in Postal Services",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "English Language"
      ],
      "req_preferred": [
          "Maltese"
      ],
      "req_other": [
          ""
      ],
      "careers": "Brand\/sales executive\\nCustomer care coordinator\\nMarketing assistant\\nMedia officer\\nPublic relations officer\\nSales representative\\nSelling and sales coordinator"
  },
  {
      "index": "02-11",
      "institute": "ibmc",
      "code": "BC4-A6-19",
      "title": "Advanced Diploma in Administrative and Secretarial Studies",
      "title_notes": "",
      "desc_en": [
          "This programme is designed to enable learners to understand the key areas of administration, administrative services, office equipment and supplies, routine procedures, standards and the work environment. It is also designed to provide learners with the possibility of opting to delve deeper into one of two specific areas, namely Medical Secretaries and Legal Secretaries, as well as the application of Italian and French within a business related usage. The programme of studies has a very high level of hands-on experience through Apprenticeship, where learners will not only be learning by doing, but will also experience first-hand the application of the theory they would be learning in class."
      ],
      "desc_mt": [
          "Dan il-programm huwa mfassal biex jg\u0127in lill-istudenti jifhmu l-oqsma ewlenin tal-amministrazzjoni, is-servizzi amministrattivi, it-tag\u0127mir u l-provvisti tal-amministrazzjoni, il-pro\u010beduri ta\u2019 rutina, l-istandards u l-ambjent tax-xog\u0127ol. Huwa mfassal ukoll biex jipprovdi lill-istudenti l-possibbilt\u00e0 li jag\u0127\u017clu li jid\u0127lu aktar fil-fond f\u2019wie\u0127ed minn \u017cewg oqsma spe\u010bifi\u010bi, ji\u0121ifieri Segretarji Medi\u010bi u Segretarji Legali, kif ukoll l-applikazzjoni tat-Taljan u l-Fran\u010bi\u017c f\u2019kuntest relatat man-negozju. Il-programm ta\u2019 studji g\u0127andu livell g\u0127oli ta\u2019 esperjenza prattika permezz tal-Apprendistat, fejn l-istudenti mhux biss jitg\u0127allmu permezz tal-prattika, i\u017cda anke jesperjenzaw l-applikazzjoni diretta tat-teorija li jkunu qed jitg\u0127allmu fil-klassi."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Business",
          "MCAST Diploma in Postal Services",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Maltese and English Language"
      ],
      "req_preferred": [
          "Mathematics"
      ],
      "req_other": [
          "Students opting for the Medical Stream need to be in possession of a: MCAST Diploma in Health and Social Care with at least 4 units at Grade B or better",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes Compulsory: Maltese, English Language and One subject from Chemistry, Physics, Biology Preferred: Mathematics"
      ],
      "careers": "Secretary\\nOffice administrator\\nClerk\\nPersonal assistant"
  },
  {
      "index": "02-12",
      "institute": "ibmc",
      "code": "BC4-A1-20",
      "title": "Advanced Diploma in Retail",
      "title_notes": "",
      "desc_en": [
          "Learners will be exposed to the different aspects and career opportunities related to retail including front line, logistics, purchasing, retail operations and visual merchandising as an example. The retail industry in Malta is one of the largest industries and offers career opportunities with both local as well as international chains.",
          "Learners will be covering all aspects of the retail environment including Stock Presentation, Customer Care, Buying, Visual Merchandising and Consumer Behaviour. Throughout this course, which is on Apprenticeship, learners will be studying on a dual system whereby they will have days at school, and days out working in industry."
      ],
      "desc_mt": [
          "L-istudenti \u0127a jkunu esposti g\u0127al aspetti differenti u opportunitajiet ta\u2019 karrieri relatati mal-industrija tal-bejg\u0127 g\u0127all-konsumatur. B\u0127ala e\u017cempju, dawn jinkludu l-ewwel kuntatt, il-lo\u0121istika, ix-xiri, l-operat u l-kummer\u010bjalizzazzjoni vizwali. Is-settur tal-bejg\u0127 f\u2019Malta huwa wie\u0127ed mill-ikbar industriji u joffri opportunitajiet ta\u2019 xog\u0127ol ma\u2019 azjendi lokali jew internazzjonali.",
          "L-istudenti \u0127a jkunu qed jistudjaw l-aspetti kollha li jinkludu l-Pre\u017centazzjoni tal-Istokk, l-Assistenza ta\u2019 Klijenti, ix-Xiri, il-Kummer\u010bjalizzazzjoni Vi\u017civa u l-Im\u0121iba tal-Konsumaturi. Matul dan il-kors, li qed jigi offrut fuq bazi ta\u2019 Apprendistat, l-istudenti \u0127a jistud-jaw b\u2019sistema \u2018dual\u2019 fejn iqattg\u0127u \u0121ranet l-iskola u o\u0127rajn fuq il-post tax-xog\u0127ol."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Level 3 Diploma",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "Mathematics, English Language"
      ],
      "req_other": [
          ""
      ],
      "careers": "Shop supervisor\\nVisual merchandiser"
  },
  {
      "index": "02-13",
      "institute": "ibmc",
      "code": "BC5-01-19",
      "title": "Higher Diploma for Accounting Technicians",
      "title_notes": "",
      "desc_en": [
          "This course builds upon the MCAST Advanced Diploma in Accounting and offers learners the possibility to become members of the Association of Accounting Technicians (UK). During this programme, the learners will continue to broaden and deepen their studies in the different areas of accounting including Financial and Management Accounting as well as Management and Business Law.",
          "Learners who successfully complete the AAT (UK) Advanced Diploma in Accounting as well as the AAT (UK) Professional Diploma in Accounting, are entitled to exemptions from the ACCA qualification (F1, F2, F3). Following the successful completion of related study-units, learners will also be eligible to register for further exemptions, namely F4 and F5."
      ],
      "desc_mt": [
          "Dan il-kors jibni fuq l-MCAST Advanced Diploma in Accounting u joffri lill-istudenti l-possibbilt\u00e0 li jsiru membri tal-Association of Accounting Technicians (UK). Matul dan il-programm, l-istudenti jkomplu jwessg\u0127u u jsa\u0127\u0127u l-istudji tag\u0127hom fl-oqsma differenti tal-accounting, inklu\u017c l-Accounting Finanzjarju u ta\u2019 Mmani\u0121\u0121jar, kif ukoll il-Li\u0121i dwar il-Mani\u0121ment u n-Negozju.",
          "L-istudenti li jlestu b\u2019su\u010b\u010bess l-AAT (UK) Advanced Diploma in Accounting, kif ukoll l-AAT (UK) Professional Diploma in Accounting, ikunu intitolati g\u0127al e\u017cenzjonijiet mill-kwalifika tal-ACCA (F1, F2, F3). Studenti li jkunu lestew b\u2019su\u010b\u010bess unitajiet ta\u2019 studju relatati, ikunu eli\u0121ibbli wkoll li jirre\u0121istraw g\u0127al aktar e\u017cenzjonijiet, ji\u0121ifieri F4 u F5."
      ],
      "mqf": 5,
      "duration": 2,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Accounting"
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
      "careers": "Accounts administrator\\nAccounts executive\\nAccounting technician\\nAudit assistant\\nCredit management officer\\nSenior accounts clerk"
  },
  {
      "index": "02-14",
      "institute": "ibmc",
      "code": "BC6-01-19",
      "title": "Bachelor of Arts (Honours) in Business Enterprise",
      "title_notes": "",
      "desc_en": [
          "This degree provides specialist content which is constantly applied to real life business and management scenarios. Learners will be prepared to become proficient in a number of areas as the course allows the students to develop appropriate analytical, critical and research skills in a range of business related areas ranging from Human Resources to Operations Management, and from Purchasing to Project Management and Marketing Management. These are only some of the areas that students will cover during their studies. This 360 degree approach gives the learners maximum flexibility on the workplace as graduates would be able to deal with a wide range of responsibilities."
      ],
      "desc_mt": [
          "Dan il-ba\u010bellerat jipprovdi lill-istudenti kontenut spe\u010bjalizzat li huwa applikat b\u2019mod kostanti f\u2019xenarji tan-negozju u tal-mani\u0121ment fil-\u0127ajja reali. L-istudenti jit\u0127ejjew biex isiru profi\u010bjenti f\u2019g\u0127add ta\u2019 oqsma, billi l-kors jippermetti lill-istudenti ji\u017cviluppaw \u0127iliet analiti\u010bi, kriti\u010bi u ta\u2019 ri\u010berka f\u2019firxa ta\u2019 oqsma relatati man-negozju, li jvarjaw mir-Ri\u017corsi Umani sal-Immani\u0121\u0121jar tal-Operazzjonijiet, u mix-Xiri sal-Immani\u0121\u0121jar ta\u2019 Pro\u0121etti u l-Immani\u0121\u0121jar tal-Marketing. Dawn huma biss xi w\u0127ud mill-oqsma li l-istudenti se jkopru waqt l-istudji tag\u0127hom. Dan l-appro\u010b\u010b komprensiv jag\u0127ti lill-istudenti flessibbilt\u00e0 massima fuq il-post tax-xog\u0127ol, billi l-gradwati jkunu jistg\u0127u jid\u0127lu g\u0127al firxa wiesg\u0127a ta\u2019 responsabbiltajiet."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Marketing",
          "MCAST Advanced Diploma in Administrative and Secretarial Studies",
          "MCAST Advanced Diploma in Aviation Operations",
          "MCAST Advanced Diploma in Financial Services",
          "MCAST Advanced Diploma in Insurance",
          "MCAST Advanced Diploma in Business Administration",
          "MCAST Advanced Diploma in Transportation and Logistics Management",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Accounts or Marketing or Economics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Business development manager\\nHuman resources manager\\nOperations manager\\nProject manager\\nResearch manager\\nAnalyst"
  },
  {
      "index": "02-15",
      "institute": "ibmc",
      "code": "BC6-03-18",
      "title": "Bachelor of Arts (Honours) in Procurement and Finance",
      "title_notes": "",
      "desc_en": [
          "This three-year Bachelor degree intends to provide learners with a strong basis of procurement processes and supporting aspects. By applying theory to both public procurement procedures as well as those adopted within the private sector, this degree will expose learners to the various aspects of Procurement Management. This is coupled with a detailed understanding of the finance function, which in itself provides the students with the capability to carry out work more effectively. Management studies are also incorporated in the programme of studies, in a way as to provide the students with a launch pad into the heart of effective operations coordination in this dynamic area."
      ],
      "desc_mt": [
          "Dan il-kors ta\u2019 ba\u010bellerat ta\u2019 tliet snin huwa ma\u0127sub biex jipprovdi lill-istudenti ba\u017ci b\u2019sa\u0127\u0127itha dwar il-pro\u010bessi ta\u2019 akkwist u aspetti relatati. Filwaqt li ti\u0121i applikata t-teorija kemm g\u0127all-pro\u010beduri ta\u2019 akkwist pubbliku, kif ukoll g\u0127al dawk adottati fis-settur privat, din id-degree tesponi lill-istudenti g\u0127ad-diversi aspetti tal-Immani\u0121\u0121jar tal-Akkwist. Dan isir flimkien ma\u2019 fehim dettaljat tal-funzjoni tal-finanzi, li fiha nnifisha twassal lill-istudenti sabiex ikunu kapa\u010bi jwettqu x-xog\u0127ol b\u2019mod aktar effettiv. L-istudji tal-mani\u0121ment huma inkorporati wkoll fil-programm ta\u2019 studji, b\u2019tali mod li jipprovdu lill-istudenti b\u2019mezz biex jid\u0127lu direttament fil-qalba tal-koordinazzjoni effettiva tal-operat f\u2019dan il-qasam dinamiku."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Business Administration",
          "MCAST Advanced Diploma in Accounting",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Accounts or Marketing or Economics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Note: Applicants with similar qualifications may still show their interest in applying for this course. Such applications will be presented to the Admissions Board for its consideration."
      ],
      "careers": "Procurement manager\\nSupply chain manager\\nLogistics manager\\nPurchasing and inventory coordinator"
  },
  {
      "index": "02-16",
      "institute": "ibmc",
      "code": "BC6-01-20",
      "title": "Bachelor of Science (Honours) in Financial Services Management",
      "title_notes": "",
      "desc_en": [
          "Targeting one of Malta\u2019s strongest economic sectors, this degree in Financial Services offers learners the opportunity to get a detailed insight into the various aspects of Financial Services, an industry which offers a range of career opportunities ranging from Risk Management to Fund Administration and Wealth Management. Apart from the more technical aspects related to financial services, learners will also gain the required analytical, critical and research skills that are required to work in such a high profile and demanding industry. Learners graduating from this degree find themselves in a very strong position in terms of employment as they are well geared to work in different sectors within this industry."
      ],
      "desc_mt": [
          "Filwaqt li g\u0127andha fil-mira tag\u0127ha wie\u0127ed mis-setturi ekonomi\u010bi l-aktar b\u2019sa\u0127\u0127ithom f\u2019Malta, din id-degree fis-Servizzi Finanzjarji toffri lill-istudenti l-opportunit\u00e0 li jiksbu g\u0127arfien dettaljat tad-diversi aspetti tas-Servizzi Finanzjarji, industrija li toffri firxa ta\u2019 opportunitajiet ta\u2019 karriera li jvarjaw mill-\u0120estjoni tar-Riskju sal-Amministrazzjoni tal-Fondi u l-Immani\u0121\u0121jar tal-\u0120id. Minbarra l-aspetti aktar tekni\u010bi relatati mas-servizzi finanzjarji, l-istudenti jiksbu wkoll il-\u0127iliet analiti\u010bi, kriti\u010bi u ta\u2019 ri\u010berka me\u0127tie\u0121a biex ja\u0127dmu f\u2019industrija ta\u2019 profil g\u0127oli u e\u017ci\u0121enti b\u0127al din. L-istudenti li jiggradwaw minn dan il-kors isibu ru\u0127hom f\u2019po\u017cizzjoni b\u2019sa\u0127\u0127itha \u0127afna fir-rigward ta\u2019 impjieg, billi jkunu kisbu l-\u0127iliet biex ja\u0127dmu f\u2019setturi differenti f\u2019din l-industrija."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Financial Services",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Levels: Accounts and Economics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Banking adviser\\nCompliance executive\\nFinancial adviser\\nAnalyst\\nRisk management fund administrator"
  },
  {
      "index": "02-17",
      "institute": "ibmc",
      "code": "BC7-01-18",
      "title": "ACCA Qualification",
      "title_notes": "",
      "desc_en": [
          "An ACCA Qualification is a path that leads to becoming an internationally recognised Chartered Certified Accountant, and can take your career in any direction. It is a rewarding and intense course with a number of Professional Courses which allows the students to have a rigorous qualification that is accepted across the globe. The ACCA course is the perfect choice for a career in accountancy and the perfect milestone on anyone\u2019s route to become a qualified finance professional. The programme provides different exit routes at Level 6 and at Level 7."
      ],
      "desc_mt": [
          "Kwalifika tal-ACCA twasslek biex issir Chartered Certified Accountant rikonoxxut fuq livell internazzjonali. Biha tista\u2019 ti\u017cviluppa l-karriera tieg\u0127ek fi kwalunkwe direzzjoni. Huwa kors intensiv li jag\u0127ti \u0127afna sodisfazzjon, b\u2019g\u0127add ta\u2019 Korsijiet Professjonali li jwasslu biex l-istudenti jakkwistaw kwalifika rigoru\u017ca li hija a\u010b\u010bettata madwar id-dinja. Il-kors tal-ACCA huwa l-g\u0127a\u017cla perfetta g\u0127al min jixtieq karriera fl-Accountancy u stadju importanti perfett fit-triq ta\u2019 kull min jixtieq isir professjonist finanzjarju kwalifikat. Il-programm jipprovdi rotot ta\u2019 \u0127ru\u0121 differenti fil-Livell 6 u fil-Livell 7."
      ],
      "mqf": "6\/7",
      "duration": 4,
      "study": "FT",
      "mode": "Work Experience",
      "req_entry": [
          "MCAST Advanced Diploma in Accounting",
          "MCAST Advanced Diploma in Administrative and Secretarial Studies",
          "MCAST Advanced Diploma in Business Administration"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "2 A-Level and 2 I-Level passes",
          "Compulsory A-Level or SEC\/O-Level: Mathematics and English Language",
          "Preferred A-Level or SEC\/O-Level: Economics, Accounts",
          "Learners incur fees payable to ACCA, for any membership and examinations, and MIA (Malta Institute of Accountants) membership",
          "L-istudenti j\u0127allsu l-mi\u017cati lill-ACCA g\u0127al kwalunkwe s\u0127ubija u e\u017camijiet, kif ukoll s\u0127ubija fl-MIA (Malta Institute of Accountants)"
      ],
      "careers": "Accountant\\nFinancial controller\\nFinancial analyst\\nBusiness analyst\\nCorporate finance specialist\\nProject finance accountant"
  }
  ]


  constructor() { }

  getAllIBMCcourses(){
    return [...this.IBMCcourses];
  }

  getIBMCcourse(IBMCcourseId: string){
    return {...this.IBMCcourses.find(IBMCcourse => {
      return IBMCcourse.index === IBMCcourseId;
    })};
  }
}
