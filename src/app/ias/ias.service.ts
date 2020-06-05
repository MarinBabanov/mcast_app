import { Injectable } from '@angular/core';
import { IAScourse } from './iascourses.model';

@Injectable({
  providedIn: 'root'
})
export class IasService {

  private IAScourses: IAScourse[] = [
    /*
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
  ];*/

  {
    "index": "01-01",
    "institute": "ias",
    "code": "AS1-01-19",
    "title": "Introductory Certificate in Applied Science",
    "title_notes": "",
    "desc_en": [
        "This programme of studies aims to provide the learner with the basic knowledge of science and technology and how these apply to everyday life. The study-units deal with the different disciplines of science, hence giving the learner an overview of all the main scientific concepts necessary as a basis for further vocational studies within the science sector."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji g\u0127andu l-g\u0127an li jipprovdi lill-istudent l-g\u0127arfien ba\u017ciku tax-xjenza u t-teknolo\u0121ija u kif dawn japplikaw g\u0127all-\u0127ajja ta\u2019 kuljum. L-unitajiet ta\u2019 studju jindirizzaw id-dixxiplini differenti tax-xjenza u g\u0127aldaqstant jag\u0127tu lill-istudent \u0127arsa \u0121enerali lejn il-kun\u010betti xjentifi\u010bi ewlenin kollha me\u0127tie\u0121a b\u0127ala ba\u017ci g\u0127al studji vokazzjonali ulterjuri fis-settur tax-xjenza."
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
    "index": "01-02",
    "institute": "ias",
    "code": "AS2-01-19",
    "title": "Foundation Certificate in Applied Science",
    "title_notes": "",
    "desc_en": [
        "This programme of studies is aimed at giving learners the opportunity to further their studies in several diverse science-related areas including environmental, health and industrial sciences. Learners will cover various topics such as Chemistry, Physics, Biology, English, Maltese, Mathematics and IT which will be taught in an applied manner that is relevant to the various science sectors in which employment may be sought with a higher qualification. This programme is particularly suitable for learners who have a scientific or technical aptitude, even if they have not decided fully on their ultimate career choice."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji g\u0127andu l-g\u0127an li jag\u0127ti lill-istudenti l-opportunit\u00e0 biex ikomplu l-istudji tag\u0127hom f\u2019diversi oqsma differenti relatati max-xjenza inklu\u017ci x-xjenzi ambjentali, tas-sa\u0127\u0127a u industrijali. L-istudenti jkopru diversi su\u0121\u0121etti b\u0127all-Kimika, il-Fi\u017cika, il-Bijolo\u0121ija, l-Ingli\u017c, il-Malti, il-Matematika u l-IT li se ji\u0121u mg\u0127allma b\u2019mod applikat li jkun rilevanti g\u0127ad-diversi setturi tax-xjenza li fihom jistg\u0127u jsibu impjieg bi kwalifika og\u0127la. Dan il-programm huwa partikolarment xieraq g\u0127all-istudenti li g\u0127andhom xe\u0127ta g\u0127al su\u0121\u0121etti xjentifi\u010bi jew tekni\u010bi, anke jekk ma jkunux g\u0127adhom idde\u010bidew liema karriera se jid\u0127lu g\u0127aliha."
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
    "index": "01-03",
    "institute": "ias",
    "code": "AS3-01-19",
    "title": "Diploma in Applied Science",
    "title_notes": "",
    "desc_en": [
        "This programme of studies provides a strong grounding in fundamental science and technology principles, as well as an initial exposure to vocational science subjects related to health, environment, food and engineering industries. The learner will be able to understand the fundamental principles and laws of science, and how these are applied within the industrial sector.",
        "The learner will also be able to understand the science of different materials, and gain an awareness of the principles behind certain technologies."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji jipprovdi ba\u017ci b\u2019sa\u0127\u0127itha g\u0127all-prin\u010bipji fundamentali tax-xjenza u t-teknolo\u0121ija, kif ukoll introduzzjoni g\u0127al su\u0121\u0121etti tax-xjenza vokazzjonali relatati mal-industriji tas-sa\u0127\u0127a, l-ambjent, l-ikel u l-in\u0121inerija. L-istudent ikun jista\u2019 jifhem il-prin\u010bipji fundamentali u l-li\u0121ijiet tax-xjenza, u kif dawn huma applikati fis-settur industrijali. L-istudent ikun jista\u2019 jifhem ukoll ix-xjenza ta\u2019 materjali differenti, u jikseb g\u0127arfien dwar il-prin\u010bipji wara \u010berti teknolo\u0121iji."
    ],
    "mqf": 3,
    "duration": 1,
    "study": "FT",
    "mode": "",
    "req_entry": [
        "MCAST Foundation Certificate",
        "2 SEC\/O-Level\/SSC&P (Level 3) passes from English Language, Mathematics, Physics, Chemistry, Biology, Design and Technology, Health and Social Care"
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
    "careers": ""
},
{
    "index": "01-04",
    "institute": "ias",
    "code": "AS4-01-19",
    "title": "Advanced Diploma for Pharmacy Technicians",
    "title_notes": "",
    "desc_en": [
        "This programme of studies is designed to provide learners with the skills, knowledge and competences necessary for a career as a pharmacy technician. Learners will be exposed to scientific and pharmaceutical principles and will be given a sound knowledge of health-related material, resulting in a holistic approach to effectively and competently embark on a career as a pharmacy technician.",
        "This programme of studies is designed to provide learners with all the technical skills, knowledge of procedures, legislation and responsibilities required for such a career and includes work-related training and practice."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji huwa mfassal biex jipprovdi lill-istudenti l-\u0127iliet, l-g\u0127arfien u l-kompetenzi me\u0127tie\u0121a g\u0127al karriera b\u0127ala tekniku farma\u010bewtiku. L-istudenti se jiltaqg\u0127u mal-prin\u010bipji xjentifi\u010bi u farma\u010bewti\u010bi u jing\u0127ataw g\u0127arfien sod ta\u2019 materjal relatat mas-sa\u0127\u0127a, li jirri\u017culta f\u2019appro\u010b\u010b \u0127olistiku biex wie\u0127ed jibda karriera b\u2019mod effettiv u kompetenti b\u0127ala tekniku farma\u010bewtiku.",
        "Dan il-programm ta\u2019 studji huwa mfassal biex jipprovdi lill-istudenti l-\u0127iliet tekni\u010bi, l-g\u0127arfien tal-pro\u010beduri, il-le\u0121i\u017clazzjoni u r-responsabbiltajiet kollha me\u0127tie\u0121a g\u0127al karriera b\u0127al din u jinkludi ta\u0127ri\u0121 u prattika relatati max-xog\u0127ol."
    ],
    "mqf": 4,
    "duration": 1,
    "study": "FT",
    "mode": "",
    "req_entry": [
        "MCAST Diploma in Applied Science",
        "MCAST Diploma in Health and Social Care (with additional module in Chemistry)",
        "4 SEC\/O-Level\/SSC&P (Level 3) passes"
    ],
    "req_compulsory": [
        "English Language, Mathematics, Chemistry"
    ],
    "req_preferred": [
        "Biology, Health and Social Care"
    ],
    "req_other": [
        ""
    ],
    "careers": "Pharmacy technician"
},
{
    "index": "01-05",
    "institute": "ias",
    "code": "AS4-A2-19",
    "title": "Advanced Diploma in Applied Science",
    "title_notes": "",
    "desc_en": [
        "This programme of studies is aimed at learners who wish to embark on a scientific career in a range of industries such as petrochemical, life sciences, health, pharmaceutics, and environment. The programme of studies contains a wide range of science and technology study-units that reflect aspects of employment within relevant industries.",
        "The learners will appreciate how the fundamental principles of science relate to the technological operations of the workplace. They will develop the necessary skills to work in a laboratory environment within the manufacturing industry, and to apply basic principles within the workplace."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji huwa mmirat lejn studenti li jixtiequ jibdew karriera xjentifika f\u2019firxa ta\u2019 industriji b\u0127al dawk relatati mal-petrokimika, ix-xjenzi tal-\u0127ajja, is-sa\u0127\u0127a, il-farma\u010bewtika u l-ambjent. Il-programm ta\u2019 studji jinkludi firxa wiesg\u0127a ta\u2019 unitajiet ta\u2019 studju fix-xjenza u t-teknolo\u0121ija li jirriflettu aspetti tal-impjiegi f\u2019industriji rilevanti.",
        "L-istudenti jirrikonoxxu kif il-prin\u010bipji fundamentali tax-xjenza jirrelataw mal-operazzjonijiet tekni\u010bi tal-post tax-xog\u0127ol. Huma ji\u017cviluppaw il-\u0127iliet ne\u010bessarji biex ja\u0127dmu f\u2019ambjent ta\u2019 laboratorju fl-industrija tal-manifattura, u biex japplikaw il-prin\u010bipji ba\u017ci\u010bi fuq il-post tax-xog\u0127ol."
    ],
    "mqf": 4,
    "duration": 2,
    "study": "FT",
    "mode": "Apprenticeship",
    "req_entry": [
        "MCAST Diploma in Applied Science",
        "4 SEC\/O-Level\/SSC&P (Level 3) from English Language, Mathematics, Physics, Chemistry, Biology, Design and Technology, Health and Social Care"
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
    "careers": "Laboratory analyst\\nLaboratory technologist\\nScientific officer"
},
{
    "index": "01-06",
    "institute": "ias",
    "code": "AS4-03-20",
    "title": "Advanced Diploma in Environmental Sustainability",
    "title_notes": "",
    "desc_en": [
        "Awareness of environmental sustainability and related environmentally-based sectors are growing rapidly in Europe, with the Maltese government recently introducing various laws and standards on reducing global warming, climate change, low carbon emissions and the need for conservation in general. This programme of studies includes topics related to environmental monitoring, even within manufacturing industries, that are fundamental to the development of environmental awareness, and provides the necessary practical skills and techniques. Employment is typically within environmental sustainability sector-based organisations, as well as within medium to large organisations that face many environmental challenges, such as waste management, alternative energy sources, traffic management and pollution, on a daily basis."
    ],
    "desc_mt": [
        "Il-kuxjenza dwar is-sostenibbilt\u00e0 ambjentali u s-setturi relatati li huma bba\u017cati fuq l-ambjent qed tikber b\u2019mod rapidu fl-Ewropa, u dan l-a\u0127\u0127ar il-gvern Malti introdu\u010ba diversi li\u0121ijiet u standards dwar it-tnaqqis tat-tis\u0127in globali, it-tibdil fil-klima, il-livell baxx ta\u2019 emissjonijiet tal-karbonju u l-\u0127tie\u0121a g\u0127all-konservazzjoni b\u2019mod \u0121enerali. Dan il-programm ta\u2019 studji jinkludi su\u0121\u0121etti relatati mal-monitora\u0121\u0121 ambjentali, anke fi \u0127dan industriji tal-manifattura, li huma fundamentali g\u0127all-i\u017cvilupp ta\u2019 kuxjenza ambjentali, u jipprovdi l-\u0127iliet u t-teknika prattika ne\u010bessarji. L-impjieg huwa tipikament f\u2019organizzazzjonijiet ibba\u017cati fuq is-settur tas-sostenibbilt\u00e0 ambjentali, kif ukoll fi \u0127dan organizzazzjonijiet medji sa kbar li jiffa\u010b\u010bjaw \u0127afna sfidi ambjentali fuq ba\u017ci ta\u2019 kuljum, b\u0127all-immani\u0121\u0121jar tal-iskart, is-sorsi alternattivi\tta\u2019 ener\u0121ija, il-\u0121estjoni tat-traffiku u t-tni\u0121\u0121is."
    ],
    "mqf": 4,
    "duration": 2,
    "study": "FT",
    "mode": "",
    "req_entry": [
        "MCAST Diploma in Applied Science",
        "MCAST Diploma in Mechanical Engineering",
        "MCAST Diploma in Engineering (Electronics)",
        "4 SEC\/O-Level\/SSC&P (Level 3) passes"
    ],
    "req_compulsory": [
        "At least three (3) from English Language, Mathematics, Physics, Chemistry, Biology, Design and Technology, Computer Studies, Environmental Studies"
    ],
    "req_preferred": [
        ""
    ],
    "req_other": [
        ""
    ],
    "careers": "Technical project manager\\nEnvironmental technologist\\nEnvironmental analyst"
},
{
    "index": "01-07",
    "institute": "ias",
    "code": "AS4-04-19",
    "title": "Advanced Diploma in Health Sciences",
    "title_notes": "",
    "desc_en": [
        "This programme of studies has been developed to prepare individuals for health-related careers. The study-units deal with the anatomy and physiology of the human body, the physical and psychological changes due to aging, and will help learners to build competences that will help when dealing with people with health issues and challenging behaviour.",
        "Through work placements, learners will get the opportunity to develop the skills and competences required to work within the health sector."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji \u0121ie \u017cviluppat biex i\u0127ejji lill-istudenti g\u0127al karrieri relatati mas-sa\u0127\u0127a. L-unitajiet ta\u2019 studju jindirizzaw l-anatomija u l-fi\u017cjolo\u0121ija tal-\u0121isem tal-bniedem, it-tibdil fi\u017ciku u psikolo\u0121iku min\u0127abba x-xju\u0127ija, u jg\u0127in lill-istudenti ji\u017cviluppaw kompetenzi li jg\u0127inuhom jitg\u0127allmu kif i\u0121ibu ru\u0127hom ma\u2019 persuni bi problemi ta\u2019 sa\u0127\u0127a u ta\u2019 m\u0121iba diffi\u010bli.",
        "Permezz ta\u2019 ta\u0127ri\u0121 fuq il-post tax-xog\u0127ol, l-istudenti jkollhom l-opportunit\u00e0 li ji\u017cviluppaw il-\u0127iliet u l-kompetenzi me\u0127tie\u0121a biex ja\u0127dmu fis-settur tas-sa\u0127\u0127a."
    ],
    "mqf": 4,
    "duration": 2,
    "study": "FT",
    "mode": "",
    "req_entry": [
        "MCAST Diploma in Applied Science",
        "MCAST Diploma in Health and Social Care",
        "4 SEC\/O-Level\/SSC&P (Level 3) passes"
    ],
    "req_compulsory": [
        "English Language, Mathematics, Biology"
    ],
    "req_preferred": [
        "Maltese, Chemistry, Health and Social Care"
    ],
    "req_other": [
        ""
    ],
    "careers": "Allied health assistant\\nParamedic aide\\nHealth administrator"
},
{
    "index": "01-08",
    "institute": "ias",
    "code": "TC4-A1-18",
    "title": "Advanced Diploma in Food Technology",
    "title_notes": "",
    "desc_en": [
        "The food and beverage industry is a dynamic sector which requires a number of highly skilled technical people to cope with constantly changing customers\u2019 demands and new innovative production technologies. Food technologists monitor day-to-day manufacturing activities; ensure that safety and quality standards are met; improve existing products and design innovative foods and drinks. This is a multidisciplinary programme offered across four Institutes and includes topics on food analysis, product manufacturing, food safety, cost accounting and product design. The programme provides learners with the opportunity to gain knowledge of the industry and insights into the relevant tools and skills through work-based elements. This programme prepares learners for employment within SMEs as well as medium to large organizations which produce a range of food and drink products."
    ],
    "desc_mt": [
        "L-industrija tal-ikel u x-xorb hija settur dinamiku li jirrikjedi g\u0127add ta\u2019 persuni tekni\u010bi bi kwalifiki g\u0127oljin biex ila\u0127\u0127qu mad-domandi tal-konsumaturi li dejjem jinbidlu u mat-teknolo\u0121iji tal-produzzjoni \u0121odda u innovattivi. It-teknolo\u0121isti tal-ikel jissorveljaw attivitajiet ta\u2019 manifattura minn jum g\u0127all-ie\u0127or; ji\u017cguraw li ji\u0121u sodisfatti l-istandards ta\u2019 sikurezza u ta\u2019 kwalit\u00e0; itejbu prodotti e\u017cistenti u jiddisinjaw ikel u xarbiet \u0121odda u innovattivi.",
        "Dan huwa programm multidixxiplinari offrut f\u2019erba\u2019 Istituti u jinkludi su\u0121\u0121etti dwar l-anali\u017ci tal-ikel, il-manifattura tal-prodott, is-sikurezza tal-ikel, il-kontabilit\u00e0 tal-ispejje\u017c u d-disinn tal-prodott. Il-programm jipprovdi lill-istudenti l-opportunit\u00e0 li jiksbu g\u0127arfien dwar l-industrija u l-g\u0127odod u l-\u0127iliet rilevanti permezz ta\u2019 elementi bba\u017cati fuq ix-xog\u0127ol. Dan il-programm i\u0127ejji lill-istudenti g\u0127al impjieg fl-SMEs, kif ukoll f\u2019organizzazzjonijiet medji u kbar li jipprodu\u010bu firxa ta\u2019 prodotti ta\u2019 ikel u xorb."
    ],
    "mqf": 4,
    "duration": 2,
    "study": "FT",
    "mode": "Apprenticeship",
    "req_entry": [
        "MCAST Diploma in Applied Science",
        "MCAST Diploma in Mechanical Engineering",
        "MCAST Diploma in Engineering (Electronics) 4",
        "SEC\/O-Level\/SSC&P (Level 3) passes"
    ],
    "req_compulsory": [
        ""
    ],
    "req_preferred": [
        "English Language, Mathematics, Home Economics, Physics, Chemistry, Biology, Design and Technology, Hospitality"
    ],
    "req_other": [
        ""
    ],
    "careers": "Food analyst\\nAssistant food technologist\\nFood product development technologist\\nFood production supervisor\\nFood quality assurance technician"
},
{
    "index": "01-09",
    "institute": "ias",
    "code": "AS6-01-19",
    "title": "Bachelor of Science (Honours) in Chemical Technology",
    "title_notes": "",
    "desc_en": [
        "This undergraduate course offers an opportunity to learners to gain a foundation in the core chemistry concepts and the manufacture of chemical products, such as pharmaceuticals, polymers, foods, beverages and petrochemicals. The knowledge, skills and competences attained give individuals an opportunity to succeed in employment in a wide range of manufacturing and processing industries, consulting firms, government, research and educational institutions. The course exposes learners to the development and design of chemical processes at different scales and creates a bridge between science and manufacturing, by applying the principles of chemistry and engineering to solve problems involving the production or use of chemicals. The programme also provides opportunities for learners to focus on the development of higher level skills in a scientific and technological context."
    ],
    "desc_mt": [
        "Dan il-kors li jwassal g\u0127al ba\u010bellerat joffri opportunit\u00e0 lill-istudenti biex jiksbu ba\u017ci soda fil-kun\u010betti ewlenin tal-kimika u l-manifattura ta\u2019 prodotti kimi\u010bi, b\u0127al prodotti farma\u010bewti\u010bi, polimeri, ikel, xorb u prodotti petrokimi\u010bi. L-g\u0127arfien, il-\u0127iliet u l-kompetenzi miksuba jag\u0127tu lill-individwi l-opportunit\u00e0 biex jirnexxu fl-impjieg f\u2019firxa wiesg\u0127a ta\u2019 industriji tal-manifattura u tal-ippro\u010bessar, ta\u2019 ditti ta\u2019 konsulenza, mal-gvern, u ma\u2019 istituzzjonijiet ta\u2019 ri\u010berka u edukattivi. Il-kors jesponi lill-istudenti g\u0127all-i\u017cvilupp u d-disinn ta\u2019 pro\u010bessi kimi\u010bi fi skali differenti u jo\u0127loq pont bejn ix-xjenza u l-manifattura, bl-applikazzjoni tal-prin\u010bipji tal-kimika u l-in\u0121inerija biex ji\u0121u solvuti problemi li jinvolvu l-produzzjoni jew l-u\u017cu ta\u2019 sustanzi kimi\u010bi. Il-programm jipprovdi wkoll opportunitajiet g\u0127all-istudenti biex jiffokaw fuq l-i\u017cvilupp ta\u2019 \u0127iliet ta\u2019 livell og\u0127la f\u2019kuntest xjentifiku u teknolo\u0121iku."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma in Applied Science",
        "2 A-Level Passes and 2 I-Level Passes"
    ],
    "req_compulsory": [
        "A-Level Chemistry"
    ],
    "req_preferred": [
        "I- or A-Level: Biology or Physics or Mathematics (Pure or Applied)"
    ],
    "req_other": [
        ""
    ],
    "careers": "Senior laboratory analyst\\nLaboratory administrator\\nValidation specialist\\nChemical plant administrator"
},
{
    "index": "01-10",
    "institute": "ias",
    "code": "AS6-02-19",
    "title": "Bachelor of Science (Honours) in Environmental Engineering",
    "title_notes": "",
    "desc_en": [
        "The protection of natural resources, CO2 emissions, climate change and its effects, and demographic changes, are increasingly important topics in the local and international context. The programme merges classical engineering with natural sciences. Environmental engineering deals with engineering solutions for environmentally relevant challenges of our future. This course provides learners with the ability to use problem-solving approaches for dealing with ecological and technical challenges, in order to creatively arrive at a situation of resource sustainability. The course is a challenging, technically-oriented programme that offers learners a broad range of fields of application. Environmental engineers can be active in the planning, construction and operation of environmental technological facilities, in research and teaching, environmental organisations, administration, and consultancy businesses of their own."
    ],
    "desc_mt": [
        "Il-protezzjoni tar-ri\u017corsi naturali, l-emissjonijiet tas-CO2, it-tibdil fil-klima u l-effetti tieg\u0127u, u t-tibdil demografiku, huma su\u0121\u0121etti li qed isiru dejjem aktar importanti fil-kuntest lokali u internazzjonali. Il-programm jg\u0127aqqad l-in\u0121inerija klassika max-xjenzi naturali. L-in\u0121inerija ambjentali tittratta soluzzjonijiet tal-in\u0121inerija g\u0127al sfidi ambjentali li se niffa\u010b\u010bjaw fil-futur. Dan il-kors iwassal biex l-istudenti jkunu kapa\u010bi jsibu soluzzjonijiet li jindirizzaw sfidi ekologi\u010bi u tekni\u010bi bil-g\u0127an li tintla\u0127aq sitwazzjoni ta\u2019 sostenibbilt\u00e0 tar-ri\u017corsi.",
        "Il-kors huwa programm impenjattiv, orjentat lejn it-teknolo\u0121ija u joffri lill-istudenti firxa wiesg\u0127a ta\u2019 oqsma ta\u2019 applikazzjoni. L-in\u0121iniera ambjentali jistg\u0127u jkunu attivi fl-ippjanar, fil-kostruzzjoni u l-operat ta\u2019 fa\u010bilitajiet teknolo\u0121i\u010bi ambjentali, fir-ri\u010berka u t-tag\u0127lim, f\u2019organizzazzjonijiet ambjentali, fl-amministrazzjoni u f\u2019negozji ta\u2019 konsulenza tag\u0127hom stess."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma in Environmental Sustainability",
        "MCAST Advanced Diploma in Applied Science",
        "2 A-Level Passes and 2 I-Level Passes"
    ],
    "req_compulsory": [
        "I- or A-Level Physics or Mathematics (Pure or Applied), Biology, Chemistry, Geography, Enviromental Studies"
    ],
    "req_preferred": [
        ""
    ],
    "req_other": [
        ""
    ],
    "careers": "Water project manager\\nAlternative energy manager\\nEnvironmental sales engineer\\nEnvironmental regulator"
},
{
    "index": "01-11",
    "institute": "ias",
    "code": "AS6-03-19",
    "title": "Bachelor of Science (Honours) in Health Sciences (Physiological Measurements)",
    "title_notes": "",
    "desc_en": [
        "This degree programme is intended for learners who wish to pursue studies which will provide them with the appropriate competences for the measurement and imaging of the human body\u2019s physiological activity. Scientists qualified in this field team up with various other health professionals and provide the diagnostic information which is vital to the medical profession in the treatment of several medical conditions. This three-year programme will provide the learner with the knowledge, clinical training and skills necessary to gain the professional qualifications required to work as a healthcare science practitioner in the area of clinical physiology."
    ],
    "desc_mt": [
        "Dan il-programm li jwassal g\u0127al ba\u010bellerat huwa ma\u0127sub g\u0127all-istudenti li jixtiequ jkomplu bl-istudji tag\u0127hom f\u2019oqsma li jipprovdulhom il-kompetenzi xierqa biex jiksbu tag\u0127rif dwar l-attivit\u00e0 fi\u017cjolo\u0121ika tal-\u0121isem tal-bniedem. Ix-xjentisti kwalifikati f\u2019dan il-qasam jing\u0127aqdu ma\u2019 diversi professjonisti o\u0127ra fil-qasam tas-sa\u0127\u0127a u jipprovdu l-informazzjoni dijanjostika li hija vitali g\u0127all-professjoni medika fir-rigward tat-trattament ta\u2019 diversi kondizzjonijiet medi\u010bi.",
        "Dan il-programm ta\u2019 tliet snin jipprovdi lill-istudent it-tag\u0127rif, it-ta\u0127ri\u0121 kliniku u l-\u0127iliet ne\u010bessarji biex jikseb il-kwalifiki professjonali me\u0127tie\u0121a biex ja\u0127dem b\u0127ala prattikant xjentifiku kkwalifikat fil-qasam tal-fi\u017cjolo\u0121ija klinika."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma for Pharmacy Technicians",
        "MCAST Advanced Diploma in Health Sciences",
        "2 A-Level passes and 2 I-Level passes"
    ],
    "req_compulsory": [
        "A-Level Biology"
    ],
    "req_preferred": [
        "Chemistry, Physics"
    ],
    "req_other": [
        ""
    ],
    "careers": "Health practitioner (physiological measurements)"
},
{
    "index": "01-12",
    "institute": "ias",
    "code": "AS6-04-20",
    "title": "Northumbria University Bachelor of Science (Honours) in Nursing Studies",
    "title_notes": "",
    "desc_en": [
        "This Northumbria University programme offered in collaboration with MCAST provides learners with the necessary competences and qualifications required to register as a nurse (level 1) in Malta and across all EU member states. Learners will pursue a minimum of 2,300 hours of theoretical work and 2,300 hours of practical work (most of which is carried out on placement) as stipulated by EU directive 2005\/36\/EC, leading to a clinically skilled and compassionate nurse with professional values and who is fully capable of taking on accountable responsibility. Learners must successfully pass all theoretical and practical components of the course to be eligible for registration."
    ],
    "desc_mt": [
        "Dan il-programm tal-Universit\u00e0 ta\u2019 Northumbria offrut b\u2019kollaborazzjoni mal-MCAST jipprovdi lill-istudenti l-kompetenzi u l-kwalifiki ne\u010bessarji li huma me\u0127tie\u0121a biex jirre\u0121istraw b\u0127ala infermiera (tal-ewwel livell) f\u2019Malta u fl-Istati Membri kollha tal-UE. L-istudenti jkollhom minimu ta\u2019 2,300 sieg\u0127a ta\u2019 \u0127idma teoretika u 2,300 sieg\u0127a ta\u2019 \u0127idma prattika (li \u0127afna minnha ssir fuq il-post tax-xog\u0127ol) kif stipulat fid-Direttiva tal-UE 2005\/36\/KE, bil-g\u0127an li l-infermiera jkunu klinikament im\u0127arr\u0121a, juru kompassjoni, i\u0127addnu valuri professjonali u kapa\u010bi jie\u0127du r-responsabbilt\u00e0 fit-twettiq ta\u2019 dmirijiethom. L-istudenti jridu jg\u0127addu mill-partijiet teoreti\u010bi u pratti\u010bi kollha tal-kors biex ikunu eli\u0121ibbli g\u0127ar-re\u0121istrazzjoni."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma in Health Sciences",
        "MCAST Advanced Diploma for Pharmacy Technicians",
        "2 A-Level passes and 2 I-Level passes"
    ],
    "req_compulsory": [
        ""
    ],
    "req_preferred": [
        "A-Levels: Biology, English, Psychology, Sociology, Chemistry",
        "I-Levels: Chemistry, Mathematics, Sociology"
    ],
    "req_other": [
        "Applicants will be subject to an occupational health screening and a values-based competitive interview to establish the suitability of candidates for nursing and that will ultimately act towards the final selection of candidates. Learners must also provide evidence of a clear criminal conduct."
    ],
    "careers": "State registered nurse"
},
{
    "index": "01-13",
    "institute": "ias",
    "code": "AS6-05-20",
    "title": "Bachelor of Science (Honours) in Environmental Health",
    "title_notes": "",
    "desc_en": [
        "Prospective learners following this programme will be dealing with the various, often inter-related, facets of environmental health that include: public health; environmental health and safety; food and water safety; health aspects relating to domestic, leisure and workplace environments, and the impact of these various factors on the individual and on society at large. Learners will gain the knowledge, skills and competences on how to assess, analyse, devise and implement efficient solutions to environmental health issues, with a view that successful candidates may be employed in advisory, enforcement or educational positions. They will also learn about current local policies and legal frameworks that oversee the governance of these environmental health factors."
    ],
    "desc_mt": [
        "L-istudenti prospettivi li jsegwu dan il-programm jindirizzaw id-diversi aspetti, \u0127afna drabi relatati ma\u2019 xulxin, tas-sa\u0127\u0127a ambjentali li jinkludu: is-sa\u0127\u0127a pubblika; is-sa\u0127\u0127a u s-sikurezza ambjentali; is-sikurezza tal-ikel u tal-ilma; l-aspetti tas-sa\u0127\u0127a relatati ma\u2019 ambjenti domesti\u010bi, ta\u2019 divertiment u tal-post tax-xog\u0127ol, u l-impatt ta\u2019 dawn id-diversi fatturi fuq l-individwu u fuq is-so\u010bjet\u00e0 in\u0121enerali. L-istudenti jiksbu l-g\u0127arfien, il-\u0127iliet u l-kompetenzi dwar kif jivvalutaw, janalizzaw, ifasslu u jimplimentaw soluzzjonijiet effi\u010bjenti fir-rigward ta\u2019 kwistjonijiet ta\u2019 sa\u0127\u0127a ambjentali, bl-g\u0127an li l-kandidati li jtemmu l-kors b\u2019su\u010b\u010bess ikunu jistg\u0127u jsibu impjieg f\u2019po\u017cizzjonijiet ta\u2019 konsulenza, ta\u2019 infurzar jew fil-qasam tal-edukazzjoni. Huma se jitg\u0127allmu wkoll dwar politiki lokali u oqfsa legali kurrenti li jissorveljaw il-governanza ta\u2019 dawn il-fatturi ta\u2019 sa\u0127\u0127a ambjentali."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma in Health Sciences",
        "MCAST Advanced Diploma in Environmental Sustainability",
        "MCAST Advanced Diploma in Food Technology",
        "MCAST Advanced Diploma in Applied Science",
        "2 A-Level passes and 2 I-Level passes"
    ],
    "req_compulsory": [
        "A-Level Biology"
    ],
    "req_preferred": [
        "A-Levels: English, Chemistry",
        "I-Levels: Chemistry, Mathematics"
    ],
    "req_other": [
        ""
    ],
    "careers": "Environmental health officer"
},
{
    "index": "01-14",
    "institute": "ias",
    "code": "AG1-01-19",
    "title": "Introductory Certificate in Animal Husbandry and Horticultural Skills",
    "title_notes": "",
    "desc_en": [
        "This basic programme of studies equips learners with a range of skills, enabling them to begin to understand what various land-based animal and crop activities involve.",
        "The learner will have the opportunity to handle a variety of farm animals as well as work on crop fields and fruit trees. This course of studies includes topics about soil management, establishing crops, animal management, livestock nutrition and farm maintenance. Learners will have the opportunity to feed various animals such as rabbits and poultry, incubate eggs and hatch chicks whilst gaining the required hands-on experience in the horticulture and animal husbandry sector."
    ],
    "desc_mt": [
        "Dan il-programm ba\u017ciku ta\u2019 studji jipprovdi lill-istudenti firxa ta\u2019 \u0127iliet, li permezz tag\u0127hom huma jibdew jifhmu x\u2019jinvolvu diversi attivitajiet tal-annimali u l-g\u0127elejjel.",
        "L-istudent ikollu l-opportunit\u00e0 li jie\u0127u \u0127sieb varjet\u00e0 ta\u2019 annimali tal-irziezet, kif ukoll li ja\u0127dem fl-g\u0127elieqi tal-g\u0127elejjel u fuq is-si\u0121ar tal-frott. Dan il-kors ta\u2019 studji jinkludi su\u0121\u0121etti dwar il-\u0121estjoni tal-\u0127amrija, l-istabbiliment ta\u2019 g\u0127elejjel, il-\u0121estjoni tal-annimali, in-nutrizzjoni tal-bhejjem u l-manutenzjoni tal-irziezet. L-istudenti jkollhom l-opportunit\u00e0 li jag\u0127lfu diversi annimali b\u0127al fniek u tjur, ju\u017caw l-inkubatur tal-bajd u jfaqqsu l-flieles, filwaqt li jiksbu l-esperjenza prattika me\u0127tie\u0121a tal-ortikultura u tat-trobbija tal-annimali."
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
    "index": "01-15",
    "institute": "ias",
    "code": "AG1-02-18",
    "title": "Award in Agribusiness",
    "title_notes": "",
    "desc_en": [
        "This programme of studies is intended for learners who would like to become familiar with the provision of general care to pet animals. Learners need to have a genuine interest for employability in posts related to animal care and agriculture. Learners will have the opportunity to delve into general animal care, including nutritional needs of various species of animals, differences in types of feeds and housing needs, how to recognise basic behavioural signs and how to handle different animals safely and humanely in line with animal welfare regulations. Learners will also be introduced to the basic principles of horticultural techniques and will therefore learn practical gardening skills such as the propagation of plants, basic plant care and irrigation set-up. Learners would also need to become familiar with the safe use and maintenance of hand tools and machinery."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji huwa ma\u0127sub g\u0127all-istudenti li jixtiequ jsiru familjari mal-kura \u0121enerali tal-annimali domesti\u010bi. L-istudenti je\u0127tie\u0121 li jkollhom interess \u0121enwin li jsibu impjieg f\u2019po\u017cizzjonijiet relatati mal-kura tal-annimali u l-agrikoltura. L-istudenti jkollhom l-opportunit\u00e0 jid\u0127lu fil-fond fir-rigward tal-kura \u0121enerali tal-annimali, inklu\u017ci l-\u0127ti\u0121ijiet nutrizzjonali ta\u2019 diversi spe\u010bi ta\u2019 annimali, id-differenzi f\u2019tipi ta\u2019 g\u0127alf u l-\u0127ti\u0121ijiet ta\u2019 abitazzjoni, kif jag\u0127rfu sinjali ba\u017ci\u010bi ta\u2019 m\u0121iba u kif jittrattaw annimali differenti b\u2019mod sikur u uman, f\u2019konformit\u00e0 mar-regolamenti dwar il-benesseri tal-annimali. L-istudenti ji\u0121u introdotti wkoll g\u0127all-prin\u010bipji ba\u017ci\u010bi tat-teknika marbuta mal-ortikultura u g\u0127alhekk jiksbu \u0127iliet pratti\u010bi ta\u2019 \u0121ardina\u0121\u0121, b\u0127all-propagazzjoni tal-pjanti, il-kura ba\u017cika tal-pjanti u l-armar g\u0127at-tisqija. L-istudenti je\u0127tie\u0121 ukoll li jsiru familjari mal-u\u017cu sikur u l-manutenzjoni ta\u2019 g\u0127odod tal-idejn u makkinarju."
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
        "Provide the necessary documents including the Secondary School Certificate & Profile (SSC&P)",
        "Present a recent psychological report (issued no more than 3 years before the date of application) and school reports including the last Individual Education Plan (IEP)",
        "Adaptation to both class-based and community-based learning to be ascertained through a 3 day workshop at MCAST, attendance for which is compulsory",
        "Commitment to prospective employment",
        "Applicants are asked to sit for an interview."
    ],
    "careers": ""
},
{
    "index": "01-16",
    "institute": "ias",
    "code": "AG2-01-19",
    "title": "Foundation Certificate in Horticulture and Animal Care",
    "title_notes": "",
    "desc_en": [
        "This programme of studies is designed to equip learners with a range of basic skills and competences enabling them to become competent in various land-based activities related to the agricultural sector.",
        "This programme of studies includes a significant amount of vocational practice that will provide a clear idea of the nature of the area that the learner may wish to follow in the future. Learners will have the opportunity to gain hands-on experience with farm animals, exotic animals and plants. Special focus will be given to soil, crop and animal management, livestock nutrition and farm maintenance."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji huwa mfassal biex jipprovdi lill-istudenti firxa ta\u2019 \u0127iliet u kompetenzi ba\u017ci\u010bi sabiex isiru kompetenti f\u2019diversi attivitajiet li jinvolvu l-art u li huma relatati mas-settur agrikolu.",
        "Dan il-programm ta\u2019 studji jinkludi ammont sinifikanti ta\u2019 prattika vokazzjonali li tag\u0127ti idea \u010bara tan-natura tal-qasam li l-istudent jista\u2019 jkun jixtieq jinvolvi ru\u0127u fih fil-futur. L-istudenti jkollhom l-opportunit\u00e0 li jiksbu esperjenza prattika ma\u2019 annimali tal-irziezet, annimali e\u017coti\u010bi u pjanti. Ting\u0127ata attenzjoni spe\u010bjali lill-\u0121estjoni tal-\u0127amrija, tal-g\u0127elejjel u tal-annimali, in-nutrizzjoni tal-bhejjem u l-manutenzjoni tal-irziezet."
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
        "Initial Assesment Tests (as may be applicable)"
    ],
    "careers": ""
},
{
    "index": "01-17",
    "institute": "ias",
    "code": "AG3-01-19",
    "title": "Diploma in Animal Care",
    "title_notes": "",
    "desc_en": [
        "This programme of studies offers an introduction to working with and handling farm animals and pets, and the necessary related hands-on experience. It provides the practical skills and background knowledge required to form a solid foundation in animal care. The learner will have the opportunity to acquire knowledge on various habitat designs that can be used for farm and pet animals as well as accommodation, study feeding procedures and how to identify and solve animal health problems. A learner who opts for this programme of studies will be expected to attend scheduled husbandry duties which form part of this course. This practical experience, coupled with motivation and responsibility, will back up the theoretical knowledge gained during lectures."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji joffri introduzzjoni g\u0127all-\u0127idma mal-annimali tal-irziezet u l-annimali domesti\u010bi u t-trattament tag\u0127hom, flimkien mal-esperjenza prattika relatata me\u0127tie\u0121a. Dan jipprovdi l-\u0127iliet pratti\u010bi u l-g\u0127arfien ba\u017ciku biex ti\u0121i ffurmata ba\u017ci soda fir-rigward tal-kura tal-annimali. L-istudent ikollu l-opportunit\u00e0 li jakkwista g\u0127arfien dwar diversi disinji ta\u2019 abitazzjoni li jistg\u0127u jintu\u017caw g\u0127all-annimali tal-irziezet u l-annimali domesti\u010bi, kif ukoll g\u0127all-akkomodazzjoni, li jistudja dwar il-pro\u010beduri tal-g\u0127alf u kif jidentifika u jsolvi problemi tas-sa\u0127\u0127a tal-annimali. Student li jag\u0127\u017cel li jsegwi dan il-programm ta\u2019 studji se jkun mistenni jaqdi d-dmirijiet skedati tat-trobbija tal-annimali li jifformaw parti minn dan il-kors. Din l-esperjenza prattika, flimkien mal-motivazzjoni u r-responsabbilt\u00e0, se jsa\u0127\u0127u l-g\u0127arfien teoretiku li jkun kiseb matul il-lezzjonijiet."
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
        ""
    ],
    "req_other": [
        ""
    ],
    "careers": "Animal groomer\\nPet shop assistant\\nAnimal care assistant"
},
{
    "index": "01-18",
    "institute": "ias",
    "code": "AG3-02-19",
    "title": "Diploma in Fish Husbandry",
    "title_notes": "",
    "desc_en": [
        "This programme of studies introduces the learner to the basics of fish husbandry and provides the knowledge and skills required by the learner for eventual employment in related industries such as the fish farming and aquatics industries.",
        "Being the only course in Malta that is solely dedicated to fish husbandry, this programme offers an excellent opportunity for employment in this industry, which has now become an important economic sector in the Maltese Islands.",
        "The learner will develop the knowledge and practical skills needed, provided that one attends all the practical sessions which are vital to enhance the theoretical knowledge gained during lectures."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji jintrodu\u010bi lill-istudent g\u0127all-aspetti ba\u017ci\u010bi tat-trobbija tal-\u0127ut u jipprovdi l-g\u0127arfien u l-\u0127iliet me\u0127tie\u0121a biex eventwalment l-istudent isib impjieg f\u2019industriji relatati, b\u0127al dawk tat-trobbija tal-\u0127ut u tal-akkwatika.",
        "Billi huwa l-uniku kors f\u2019Malta ddedikat biss g\u0127at-trobbija tal-\u0127ut, dan il-programm joffri opportunit\u00e0 e\u010b\u010bellenti g\u0127al impjieg f\u2019din l-industrija, li issa saret settur ekonomiku importanti fil-G\u017cejjer Maltin.",
        "L-istudent ji\u017cviluppa l-g\u0127arfien u l-\u0127iliet pratti\u010bi me\u0127tie\u0121a, ladarba jattendi s-sessjonijiet pratti\u010bi kollha li huma vitali biex jissa\u0127\u0127a\u0127 l-g\u0127arfien teoretiku miksub matul il-lezzjonijiet."
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
        ""
    ],
    "req_other": [
        ""
    ],
    "careers": "Fish farm assistant\\nAquarium shop assistant"
},
{
    "index": "01-19",
    "institute": "ias",
    "code": "AG3-03-18",
    "title": "Diploma in Horticulture",
    "title_notes": "",
    "desc_en": [
        "This programme of studies consists of four different modules: viticulture, floral design, gardening and nursery production, crop production and processing. Practical sessions and work experience form an integral part of the programme of studies, providing the learners with the required skills and competences to improve employment opportunities. The course also provides a good foundation for future career prospects in the respective fields as well as for progression to a more advanced qualification.",
        "This programme also gives the learner the possibility to choose one\u2019s own combination of different modules leading to certification of an award for each individual stand-alone module that the learner has successfully completed."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji jikkonsisti f\u2019erba\u2019 unitajiet differenti: il-vitikultura, id-disinn tal-fjuri, il-\u0121ardina\u0121\u0121 u t-tkabbir tal-pjanti, il-produzzjoni u l-ippro\u010bessar tal-g\u0127elejjel. Sessjonijiet pratti\u010bi u esperjenza ta\u2019 xog\u0127ol jifformaw parti integrali mill-programm ta\u2019 studji u jipprovdu lill-istudenti l-\u0127iliet u l-kompetenzi me\u0127tie\u0121a biex itejbu l-opportunitajiet tag\u0127hom li jsibu impjieg. Il-kors jipprovdi wkoll ba\u017ci tajba g\u0127al prospetti ta\u2019 karriera fl-oqsma rispettivi fil-futur, jew biex l-istudent ikompli jistudja f\u2019livell aktar avvanzat.",
        "Dan il-programm jag\u0127ti lill-istudent il-possibbilt\u00e0 li jag\u0127\u017cel huwa stess il-kombinazzjoni ta\u2019 unitajiet differenti, li jwasslu biex l-istudent jikseb \u010bertifikat ta\u2019 g\u0127otja g\u0127al kull unit\u00e0 li jtemm b\u2019su\u010b\u010bess."
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
        ""
    ],
    "req_other": [
        ""
    ],
    "careers": "Plant nursery assistant\\nHorticulture farm\/greenhouse aide\\nFlorist assistant\\nViticulture attendant"
},
{
    "index": "01-20",
    "institute": "ias",
    "code": "AG4-01-19",
    "title": "Advanced Diploma in Animal Management and Veterinary Nursing",
    "title_notes": "",
    "desc_en": [
        "This course of studies provides learners with a broad knowledge of the animal management and animal care industry, including veterinary nursing and assistance as well as studies in veterinary diagnostic techniques and livestock management.",
        "The programme of studies offers a wide perspective on the latest practices in the animal management\/animal care sector as well as its interconnectivity with entrepreneurship and the related business sector.",
        "Learners will be encouraged to relate theory to practice at all stages through assignments, projects, practical work and work placements. Scheduled practical livestock husbandry duties form an integral part of the curriculum."
    ],
    "desc_mt": [
        "Dan il-kors ta\u2019 studji jipprovdi lill-istudenti g\u0127arfien wiesa\u2019 fir-rigward tal-industrija tal-\u0121estjoni u l-kura tal-annimali, inklu\u017ci l-infermerija u l-assistenza veterinarja, kif ukoll studji dwar it-teknika dijanjostika veterinarja u l-\u0121estjoni tal-bhejjem.",
        "Il-programm ta\u2019 studji joffri perspettiva wiesg\u0127a dwar il-pratti\u010bi l-aktar ri\u010benti fis-settur tal-\u0121estjoni u l-kura tal-annimali, kif ukoll ir-rabta tieg\u0127u mal-intraprenditorija u s-settur kummer\u010bjali relatat.",
        "L-istudenti ji\u0121u m\u0127e\u0121\u0121a jorbtu t-teorija mal-prattika fl-istadji kollha tal-kors permezz ta\u2019 assignments, pro\u0121etti, \u0127idma prattika u esperjenzi ta\u2019 xog\u0127ol. Id-dmirijiet skedati tat-trobbija prattika tal-bhejjem jifformaw parti integrali mill-kurrikulu."
    ],
    "mqf": 4,
    "duration": 2,
    "study": "FT",
    "mode": "Work Placement",
    "req_entry": [
        "MCAST Diploma in Fish Husbandry",
        "MCAST Diploma in Animal Care",
        "MCAST Diploma in Horticulture",
        "MCAST Diploma in Applied Science",
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
    "careers": "Veterinary assistant\\nVeterinary nursing assistant\\nFarm operator\\nAnimal sanctuary warden"
},
{
    "index": "01-21",
    "institute": "ias",
    "code": "AG4-02-19",
    "title": "Advanced Diploma in Fish Management",
    "title_notes": "",
    "desc_en": [
        "This programme of studies offers learners a wide perspective of different aspects of fish management and will provide them with a broad knowledge and aptitude related to the fish husbandry sector and industry. Learners will acquire knowledge, skills and competences in both the farmed and ornamental fish husbandry industries. This programme of studies also exposes learners to key concepts related to wild stock fisheries management.",
        "The programme will give an opportunity to learners to gain experience while learning new skills. They are constantly encouraged to relate theory to practice at all stages through assignments, projects, practical work and work placements. Scheduled fish husbandry duties form an integral part of the curriculum."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji joffri lill-istudenti perspettiva wiesg\u0127a ta\u2019 aspetti differenti tal-\u0121estjoni tal-\u0127ut u jipprovdilhom g\u0127arfien u aptitudni wesg\u0127in relatati mas-settur u l-industrija tat-trobbija tal-\u0127ut. L-istudenti jakkwistaw l-g\u0127arfien, il-\u0127iliet u l-kompetenzi me\u0127tie\u0121a fl-industriji tat-trobbija tal-\u0127ut, kemm dik tal-fish farms kif ukoll dik ornamentali. Dan il-programm ta\u2019 studji jesponi wkoll lill-istudenti g\u0127al kun\u010betti ewlenin relatati mal-\u0121estjoni tas-sajd tal-\u0127ut selva\u0121\u0121.",
        "Il-programm jag\u0127ti opportunit\u00e0 lill-istudenti biex jiksbu esperjenza filwaqt li jitg\u0127allmu \u0127iliet \u0121odda. Huma ji\u0121u kontinwament im\u0127e\u0121\u0121a li jorbtu t-teorija mal-prattika fl-istadji kollha tal-kors, permezz ta\u2019 assignments, pro\u0121etti, \u0127idma prattika u esperjenzi ta\u2019 xog\u0127ol. Id-dmirijiet skedati tat-trobbija prattika tal-annimali jifformaw parti integrali mill-kurrikulu."
    ],
    "mqf": 4,
    "duration": 2,
    "study": "FT",
    "mode": "Work Placement",
    "req_entry": [
        "MCAST Diploma in Fish Husbandry",
        "MCAST Diploma in Animal Care",
        "MCAST Diploma in Horticulture",
        "MCAST Diploma in Applied Science",
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
    "careers": "Fish farm inspector\\nAquaculture\/aquatic technician\\nHatchery manager\\nAquarium maintenance technician"
},
{
    "index": "01-22",
    "institute": "ias",
    "code": "AG4-03-20",
    "title": "Advanced Diploma in Horticulture",
    "title_notes": "",
    "desc_en": [
        "This programme of studies provides learners with an understanding of the horticultural industry including crop management of a wide range of crops, an introduction to garden design, floristry, pest and nutrient management, and studies in rural development and agricultural policies.",
        "The programme of studies offers a wide perspective on the latest technologies used in the agricultural sector as well as its interconnectivity with entrepreneurship and business and the hospitality sector in relation to garden design and agri-and ecotourism.",
        "Learners will be encouraged to relate theory to practice at all stages of learning through assignments, projects and practical work. Scheduled practical crop husbandry duties form an integral part of the curriculum."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji jipprovdi lill-istudenti fehim dwar l-industrija tal-ortikultura, inklu\u017c il-\u0121estjoni ta\u2019 firxa wiesg\u0127a ta\u2019 g\u0127elejjel, id-disinn tal-\u0121onna (introduzzjoni), il-produzzjoni u l-bejg\u0127 tal-fjuri, il-\u0121estjoni tal-pesti u tan-nutrizzjoni, u studji dwar il-politika dwar l-i\u017cvilupp rurali u l-agrikoltura.",
        "Il-programm ta\u2019 studji joffri perspettiva wiesg\u0127a dwar it-teknolo\u0121iji l-aktar ri\u010benti u\u017cati fis-settur agrikolu, kif ukoll ir-rabta tieg\u0127u mal-intraprenditorija u s-setturi kummer\u010bjali tal-ospitalit\u00e0 fir-rigward tad-disinn tal-\u0121onna, l-agrituri\u017cmu u l-ekoturi\u017cmu.",
        "L-istudenti ji\u0121u m\u0127e\u0121\u0121a jorbtu t-teorija mal-prattika fl-istadji kollha tal-kors permezz ta\u2019 assignments, pro\u0121etti, u \u0127idma prattika. Id-dmirijiet skedati fil-kura prattika tal-g\u0127elejjel jifformaw parti integrali mill-kurrikulu."
    ],
    "mqf": 4,
    "duration": 2,
    "study": "FT",
    "mode": "Work Placement",
    "req_entry": [
        "MCAST Diploma in Fish Husbandry",
        "MCAST Diploma in Animal Care",
        "MCAST Diploma in Horticulture",
        "MCAST Diploma in Applied Science",
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
    "careers": "Horticulture inspector\\nGarden design assistant\\nVegetable\/fruit grower\\nRural development operator"
},
{
    "index": "01-23",
    "institute": "ias",
    "code": "AG6-01-19",
    "title": "Bachelor of Science (Honours) in Animal Management and Veterinary Nursing",
    "title_notes": "",
    "desc_en": [
        "This Bachelor\u2019s degree aims at providing learners with the opportunity to specialise in a main area of study with the aim of seeking employment at management level or similar. This may relate to animal welfare, production, education, veterinary services, research and development, and regulatory services both locally and internationally.",
        "The programme of studies offers the required knowledge, skills and competences related to animal health and nutrition, welfare, ecology, philosophy, ethics and law. Learners will also undertake a research project whereby they will be expected to select a topic for investigation following an established methodology."
    ],
    "desc_mt": [
        "Dan il-kors, li jwassal g\u0127al ba\u010bellerat, g\u0127andu l-g\u0127an li jipprovdi lill-istudenti l-opportunit\u00e0 li jispe\u010bjalizzaw f\u2019qasam ta\u2019 studji prin\u010bipali, bl-g\u0127an li jsibu impjieg f\u2019livell mani\u0121erjali jew simili. Dan jista\u2019 jkun jirrigwarda l-benesseri tal-annimali, il-produzzjoni, l-edukazzjoni, is-servizzi veterinarji, ir-ri\u010berka u l-i\u017cvilupp, u s-servizzi regolatorji, kemm lokalment kif ukoll internazzjonalment.",
        "Il-programm ta\u2019 studji joffri l-g\u0127arfien, il-\u0127iliet u l-kompetenzi me\u0127tie\u0121a relatati mas-sa\u0127\u0127a u n-nutrizzjoni tal-annimali, il-benesseri, l-ekolo\u0121ija, il-filosofija, l-etika u l-li\u0121i. L-istudenti jwettqu wkoll pro\u0121ett ta\u2019 ri\u010berka li g\u0127alih ikunu mistennija jag\u0127\u017clu su\u0121\u0121ett biex jinvestigawh billi jsegwu metodolo\u0121ija stabbilita."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma in Animal Management and Veterinary Nursing",
        "MCAST Advanced Diploma in Fish Management",
        "MCAST Advanced Diploma in Horticulture",
        "2 A-Level passes and 2 I-Level passes"
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
    "careers": "Animal clinic manager\\nAnimal welfare officer\\nFarm manager\\nNutritional adviser"
},
{
    "index": "01-24",
    "institute": "ias",
    "code": "AG6-02-19",
    "title": "Bachelor of Science (Honours) in Horticulture",
    "title_notes": "",
    "desc_en": [
        "This programme gives learners skills in the latest horticultural practices with the use of modern technology.",
        "Learners will have the opportunity to study and practise different aspects related to their main area of study, with the aim of seeking employment at management level in private enterprise, in research and development and\/or in regulatory services both locally and internationally.",
        "This programme offers the required knowledge and competences related to Sustainable Land Use, Integrated Pest Management, Plant Nutrition and Fertilisation, Agricultural Technology, Rural Development and Garden Design\/Landscaping.",
        "During this course students need to undertake a research project whereby a topic is chosen and subsequently investigated, researched, a methodology formulated and data collected, analysed and discussed."
    ],
    "desc_mt": [
        "Dan il-programm jag\u0127ti lill-istudenti \u0127iliet fil-pratti\u010bi ortikulturali l-aktar ri\u010benti bl-u\u017cu ta\u2019 teknolo\u0121ija moderna.",
        "L-istudenti jkollhom l-opportunit\u00e0 li jistudjaw u jipprattikaw aspetti differenti relatati mal-qasam prin\u010bipali tal-istudju tag\u0127hom, bl-g\u0127an li jsibu impjieg fil-livell mani\u0121erjali fl-intrapri\u017ca privata, fir-ri\u010berka u l-i\u017cvilupp u\/jew fis-servizzi regolatorji, kemm lokalment kif ukoll barra mill-pajji\u017c.",
        "Dan il-programm joffri l-g\u0127arfien u l-kompetenzi me\u0127tie\u0121a relatati mal-U\u017cu Sostenibbli tal-Art, il-\u0120estjoni Integrata tal-Pesti, in-Nutrizzjoni u l-Fertilizzazzjoni tal-Pjanti, it-Teknolo\u0121ija Agrikola, l-I\u017cvilupp Rurali u d-Disinn tal-\u0120onna\/il-Pajsa\u0121\u0121.",
        "Matul dan il-kors l-istudenti jkunu me\u0127tie\u0121a li ja\u0127dmu fuq pro\u0121ett ta\u2019 ri\u010berka, fejn jag\u0127\u017clu su\u0121\u0121ett sabiex jinvestigawh, jag\u0127mlu ri\u010berka fuqu, jifformulaw metodolo\u0121ija, ji\u0121bru d-data, janalizzawha u jiddiskutuha."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma in Fish Management",
        "MCAST Advanced Diploma in Animal Management and Veterinary Nursing",
        "MCAST Advanced Diploma in Horticulture",
        "2 A-Level passes and 2 I-Level passes"
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
    "careers": "Farm advisory services provider\\nProfessional landscaper\\nGarden designer\\nEU\/national regulatory control manager"
},
{
    "index": "01-25",
    "institute": "ias",
    "code": "AG6-03-19",
    "title": "Bachelor of Science (Honours) in Fish Management",
    "title_notes": "",
    "desc_en": [
        "This programme of studies provides learners with a very thorough understanding of aquaculture and fisheries sciences and includes a wide range of aspects that will give them a better understanding of these sectors which are so important to the economy of the Maltese Islands.",
        "The study-units revolve around the aquaculture and fisheries sciences and relate to the production and management of aquaculture facilities, giving a better understanding of the highly complex field of fisheries. This programme of studies is intended for those who want to delve deeper into the fish management sciences and who want to start a career in this sector."
    ],
    "desc_mt": [
        "Dan il-programm ta\u2019 studji jipprovdi lill-istudenti g\u0127arfien dettaljat tax-xjenzi tal-akkwakultura u s-sajd u jinkludi firxa wiesg\u0127a ta\u2019 aspetti li jg\u0127inuhom jifhmu a\u0127jar dawn is-setturi li huma tant importanti g\u0127all-ekonomija tal-G\u017cejjer Maltin.",
        "L-unitajiet ta\u2019 studju jduru madwar ix-xjenzi tal-akkwakultura u s-sajd u jirrigwardaw il-produzzjoni u l-\u0121estjoni ta\u2019 fa\u010bilitajiet tal-akkwakultura, biex l-istudenti jkunu jistg\u0127u jifhmu a\u0127jar il-qasam ferm kumpless tas-sajd. Dan il-programm ta\u2019 studji huwa ma\u0127sub g\u0127al dawk li jixtiequ jid\u0127lu aktar fil-fond fix-xjenzi tal-\u0121estjoni tas-sajd u li g\u0127aldaqstant jixtiequ jibdew karriera f\u2019dan is-settur."
    ],
    "mqf": 6,
    "duration": 3,
    "study": "FT",
    "mode": "Internship",
    "req_entry": [
        "MCAST Advanced Diploma in Animal Management and Veterinary Nursing",
        "MCAST Advanced Diploma in Fish Management",
        "MCAST Advanced Diploma in Horticulture",
        "2 A-Level passes and 2 I-Level passes"
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
    "careers": "Jobs related to the Aquaculture and Fisheries sectors"
}
]


  constructor() { }

  getAllIAScourses(){
    return [...this.IAScourses];
  }

  getIAScourse(IAScourseId: string){
    return {...this.IAScourses.find(IAScourse => {
      return IAScourse.index === IAScourseId;
    })};
  }
}
