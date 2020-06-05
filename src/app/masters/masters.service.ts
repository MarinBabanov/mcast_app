import { Injectable } from '@angular/core';
import { MASTERScourse } from './masterscourses.model';

@Injectable({
  providedIn: 'root'
})
export class MastersService {

  private MASTERScourses: MASTERScourse[] = [
    {
      "index": "09-01",
      "institute": "md",
      "code": "UC7-E4-18",
      "title": "Post-Graduate Certificate in Research Methods",
      "title_notes": "",
      "desc_en": [
          "The MCAST Post-Graduate Certificate in Research Methods is designed to give candidates clear insights into research practices, methodologies and the basic research tools and techniques. A knowledge and understanding of how to approach both quantitative and qualitative research is targeted, as well as an understanding of ethical considerations and the expectations for scholarly research."
      ],
      "desc_mt": [
          "Il-Post-Graduate Certificate in Research Methods tal-MCAST huwa ddisinjat biex jipprovdi lill-kandidati g\u0127arfien \u010bar dwar il-pratti\u010bi u l-metodolo\u0121iji kif ukoll l-g\u0127odod u t-teknika ba\u017cika tar-ri\u010berka. L-g\u0127an ta\u2019 dan il-kors hu li wie\u0127ed jikseb g\u0127arfien u fehim dwar kif wie\u0127ed g\u0127andu jag\u0127mel ir-ri\u010berka, kemm kwantitattiva kif ukoll kwalitattiva, flimkien ma\u2019 fehim tal-kunsiderazzjonijiet eti\u010bi u x\u2019inhu mistenni mir-ri\u010berka akkademika."
      ],
      "mqf": 7,
      "duration": "2 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate in Research Methods (30 ECTS) with the possibility to progress to a Master in Research (90 ECTS)",
      "fees": "Fees apply to external candidates \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-02",
      "institute": "md",
      "code": "UC7-E3-20",
      "title": "Masters by Research",
      "title_notes": "",
      "desc_en": [
          "The Masters by Research (MRes) programme provides the student with sound practical knowledge and experience in preparation for a research career, as well as with preparation and training for doctoral research. Students will have demonstrated originality in the application of knowledge, and they will understand how the boundaries of knowledge are advanced through research. They will be able to deal with complex issues both systematically and creatively, and they will show originality in tackling and solving applied research related challenges."
      ],
      "desc_mt": [
          "Il-programm Masters by Research (MRes) jipprovdi lill-istudent g\u0127arfien prattiku sod u esperjenza bi t\u0127ejjija g\u0127al karriera fir-ri\u010berka, kif ukoll t\u0127ejjija u ta\u0127ri\u0121 g\u0127al ri\u010berka fil-livell tad-dottorat. L-istudenti jkunu wrew ori\u0121inalit\u00e0 fl-applikazzjoni tal-g\u0127arfien, u jifhmu kif il-fruntieri tal-g\u0127arfien jitwessg\u0127u permezz tar-ri\u010berka. Huma jkunu jistg\u0127u jittrattaw kwistjonijiet kumplessi, b\u2019mod sistematiku u kreattiv, u juru ori\u0121inalit\u00e0 fil-mod li jindirizzaw u jsolvu sfidi relatati mar-ri\u010berka applikata."
      ],
      "mqf": 7,
      "duration": "4 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "MQF Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Masters by Research (90 ECTS)",
      "fees": "Fees apply to external candidates \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-03",
      "institute": "md",
      "code": "UC7-E1-19",
      "title": "Master of Business Administration for the Small Business (MBA)",
      "title_notes": "",
      "desc_en": [
          "The MCAST MBA for the Small Business programme focuses on the small businesses\u2019 theoretical knowledge, application-oriented experiences as well as the identification of innovation possibilities and growth potentials.",
          "This MBA is structured to reflect the needs of modern business dynamics. The MCAST MBA is taught by industry experts and leading academics who have had successful careers in their respective business settings."
      ],
      "desc_mt": [
          "Il-programm MBA for the Small Business tal-MCAST jiffoka fuq l-g\u0127arfien teoretiku relatat ma\u2019 negozji \u017cg\u0127ar, esperjenzi fl-applikazzjoni ta\u2019 dan l-g\u0127arfien, kif ukoll l-identifikazzjoni ta\u2019 possibbiltajiet ta\u2019 innovazzjoni u potenzjali ta\u2019 tkabbir.",
          "Dan l-MBA huwa strutturat biex jirrifletti l-\u0127ti\u0121ijiet tad-dinamika tan-negozju modern. L-MBA tal-MCAST huwa mg\u0127allem minn esperti fl-industrija u persuni akkademi\u010bi ewlenin li rnexxew fil-karriera tag\u0127hom fl-ambjenti rispettivi tan-negozju tag\u0127hom."
      ],
      "mqf": 7,
      "duration": "6 Semesters Blended",
      "req_entry": [
          "Relevant Degree",
          "Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate in Business Administration (30 ECTS)\\nPost-Graduate Diploma in Business Administration (60 ECTS)\\nFull MBA (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-04",
      "institute": "md",
      "code": "UC7-E9-18",
      "title": "Master of Science in Lean Enterprise",
      "title_notes": "",
      "desc_en": [
          "The Master of Science in Lean Enterprise includes lean problem-solving methodologies, and demonstrates contemporary lean thinking principles, lean enterprise development and value stream mapping, including modern enterprise improvement techniques such as Six Sigma, the theory of constraints and business process re-engineering. It applies process analysis to business activities, methods improvement and work measurement to meet the competitive goals of a business environment. It evaluates the key characteristics of quality and the quality philosophy through established lean methods of quality improvement."
      ],
      "desc_mt": [
          "Il-Master of Science in Lean Enterprise jinkludi metodolo\u0121iji g\u0127as-soluzzjoni ta\u2019 problemi b\u2019u\u017cu mill-inqas ta\u2019 ri\u017corsi; jippre\u017centa prin\u010bipji ta\u2019 \u0127sieb kontemporanju fl-u\u017cu mill-inqas ta\u2019 ri\u017corsi, l-i\u017cvilupp tal-intrapri\u017ci b\u2019u\u017cu mill-inqas ta\u2019 ri\u017corsi u l-immappjar tal-fluss tal-valur, inklu\u017ci tekniki moderni g\u0127at-titjib tal-intrapri\u017ci b\u0127as-Six Sigma, it-teorija ta\u2019 restrizzjonijiet u l-in\u0121inerija mill-\u0121did tal-pro\u010bess tan-negozju; japplika l-anali\u017ci tal-pro\u010bess f\u2018attivitajiet tan-negozju, fit-titjib tal-metodi u fil-kejl tax-xog\u0127ol biex ji\u0121u sodisfatti l-g\u0127anijiet kompetittivi ta\u2019 ambjent tan-negozju; jevalwa l-karatteristi\u010bi ewlenin tal-kwalit\u00e0 u l-filosofija tal-kwalit\u00e0 permezz ta\u2019 metodi stabbiliti ta\u2019 titjib tal-kwalit\u00e0 b\u2019u\u017cu mill-inqas ta\u2019 ri\u017corsi."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-05",
      "institute": "md",
      "code": "UC7-E14-18",
      "title": "Master of Science in Information Technology and Systems",
      "title_notes": "",
      "desc_en": [
          "The Master of Science in Information Technology and Systems provides fundamental skills in a variety of advanced ICT areas such as cloud computing, big data and the Internet of Things (IoT), with a focus on developing intelligent solutions through a blend of hardware and software. The programme focuses on software as a service infrastructure, information management, enterprise systems and eLogistics.",
          "A focus is also placed on systems strategy and management, business process innovation and cyber security. Key to the programme are network security and data management technologies, as well as software defined networking, and the new field of distributed hashing and computing, typified by distributed version control systems and blockchain based crypto-currency applications."
      ],
      "desc_mt": [
          "Il-Master of Science in Information Technology and Systems jipprovdi \u0127iliet fundamentali f\u2019varjet\u00e0 ta\u2019 oqsma avvanzati tal-ICT, b\u0127all-cloud computing, il-big data u l-Internet tal-O\u0121\u0121etti (IoT), b\u2019enfasi fuq l-i\u017cvilupp ta\u2019 soluzzjonijiet intelli\u0121enti, kemm bl-u\u017cu ta\u2019 \u0127ardwer kif ukoll ta\u2019 softwer. Il-programm jiffoka fuq is-softwer b\u0127ala infrastruttura ta\u2019 servizz, il-\u0121estjoni tal-informazzjoni, is-sistemi tal-intrapri\u017ci u l-lo\u0121istika elettronika.",
          "Issir enfasi wkoll fuq l-istrate\u0121ija u l-\u0121estjoni tas-sistemi, l-innovazzjoni tal-pro\u010bess tan-negozju u \u010b-\u010bibersigurt\u00e0. L-elementi ewlenin tal-programm huma t-teknolo\u0121iji tas-sigurt\u00e0 tan-netwerk u l-\u0121estjoni tad-data, kif ukoll in-netwerking definit mis-softwer, u l-qasam il-\u0121did tal-hashing u l-kompjuting distribwit, karatterizzat minn sistemi distribwiti tal-kontroll tal-ver\u017cjoni u applikazzjonijiet tal-cryptocurrency ibba\u017cati fuq il-blockchain."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-06",
      "institute": "md",
      "code": "UC7-E7-18",
      "title": "Master of Science in Environmental Engineering",
      "title_notes": "",
      "desc_en": [
          "The Master of Science in Environmental Engineering programme takes an interdisciplinary approach into the investigation of processes that control the earth and its environment. The programme will deliver all necessary knowledge and skills to seize opportunities presented by new developments in areas such as global cycles, biogeochemistry, sustainable technologies, waste and water treatment, environmental pollution assessment and remediation, and natural hazards.",
          "A special focus on environmental auditing and impact assessment shall be made, particularly in water, energy, noise and traffic auditing."
      ],
      "desc_mt": [
          "Il-programm tal-Master of Science in Environmental Engineering jadotta appro\u010b\u010b interdixxiplinari fl-investigazzjoni ta\u2019 pro\u010bessi li jikkontrollaw id-dinja u l-ambjent tag\u0127ha. Il-programm jippre\u017centa l-g\u0127arfien u l-\u0127iliet kollha ne\u010bessarji biex jin\u0127atfu l-opportunitajiet ippre\u017centati mill-i\u017cviluppi \u0121odda f\u2019oqsma b\u0127a\u010b-\u010bikli globali, il-bijo\u0121eokimika, it-teknolo\u0121iji sostenibbli, it-trattament tal-ilma u l-iskart, il-valutazzjoni u r-rimedju tat-tni\u0121\u0121is ambjentali, u l-perikli naturali.",
          "Issir enfasi spe\u010bjali fuq l-awditjar ambjentali u l-valutazzjoni tal-impatt, b\u2019mod partikolari fl-awditjar tal-ilma, l-ener\u0121ija, l-istorbju u t-traffiku."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "MQF Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-07",
      "institute": "md",
      "code": "UC7-E13-18",
      "title": "Master of Science in High Performance Buildings",
      "title_notes": "",
      "desc_en": [
          "The Master of Science in High Performance Buildings (HPB) gives candidates the opportunity to develop optimized building concepts, integrating various components of holistic design methodology, building physics, building climatology and comfort, energy-efficiency, environmental sources, building services systems, building aerodynamics, thermal and fluid dynamic CFD simulations, lighting design, building operation, as well as green urban modelling.",
          "The programme provides for advanced skills in specialization and scientific research of building physics coupled with architectural design, preparing students for professional as well as research and development settings at national and international levels."
      ],
      "desc_mt": [
          "Il-Master of Science in High Performance Buildings (HPB) jipprovdi lill-kandidati l-opportunit\u00e0 li ji\u017cviluppaw kun\u010betti ta\u2019 bini ottimizzati, bl-integrazzjoni ta\u2019 diversi komponenti tal-metodolo\u0121ija tad-disinn \u0127olistiku, il-fi\u017cika tal-bini, il-klimatolo\u0121ija u l-kumdit\u00e0 tal-bini, l-effi\u010bjenza fl-ener\u0121ija, is-sorsi ambjentali, is-sistemi tas-servizzi tal-bini, l-ajrudinamika tal-bini, is-simulazzjonijiet termali u fluwidi dinami\u010bi tas-CFD, id-disinn tat-tidwil, l-operat tal-bini, kif ukoll l-immudellar ekolo\u0121iku urban.",
          "Il-programm jipprovdi \u0127iliet avvanzati fl-ispe\u010bjalizzazzjoni u r-ri\u010berka xjentifika tal-fi\u017cika tal-bini, flimkien mad-disinn tal-arkitettura, filwaqt li j\u0127ejji lill-istudenti g\u0127al ambjenti professjonali kif ukoll tar-ri\u010berka u l-i\u017cvilupp fil-livelli nazzjonali u internazzjonali."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant Degree",
          "MQF Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-08",
      "institute": "md",
      "code": "UC7-E8-18",
      "title": "Master of Science in Integrated Water Resource Management",
      "title_notes": "",
      "desc_en": [
          "The Master of Science in Integrated Water Resource Management programme shall impart in-depth knowledge and practical experience in applied science aspects of water systems in small island states, with a focus on water measurement, water sustainability, water consumption, water chemistry, microbiology and analytics.",
          "The course comprises a range of practical modules in water metering, sensing and measurement, applied microbiology, biofouling\/biocorrosion, chemometrics, environmental microbiology and water chemistry."
      ],
      "desc_mt": [
          "Il-programm tal-Master of Science in Integrated Water Resource Management jipprovdi g\u0127arfien fil-fond u esperjenza prattika fl-aspetti tax-xjenza applikata g\u0127al sistemi tal-ilma fi stati komposti minn g\u017cejjer \u017cg\u0127ar, b\u2019enfasi fuq il-kejl tal-ilma, is-sostenibbilt\u00e0 tal-ilma, il-konsum tal-ilma, il-kimika, il-mikrobijolo\u0121ija u l-analitika tal-ilma.",
          "Il-kors jinkludi firxa ta\u2019 unitajiet pratti\u010bi fil-kejl tal-konsum tal-ilma, id-detezzjoni tal-ilma, il-mikrobijolo\u0121ija applikata, il-bijoinkrostazzjoni\/ il-bijokorruzzjoni, il-kemometrija, il-mikrobijolo\u0121ija ambjentali u l-kimika tal-ilma."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "MQF Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-09",
      "institute": "md",
      "code": "UC7-E11-18",
      "title": "Master of Arts in Product Design",
      "title_notes": "",
      "desc_en": [
          "The Master of Arts in Product Design programme develops the artistic and humanistic skills belonging to the design culture together with the technical know-how that relates to production technology, materials, and manufacturing costs. It strives to meet the need of operating in a worldwide landscape of heightened competition where the designer can increase the value of a consumer product by creating innovation \u2013 in both aesthetics and usability \u2013 that takes advantage of available technologies and ever-changing consumer lifestyles.",
          "Candidates will build an improved critical capability to explore contemporary design languages, focus on experimentation with innovative inter-disciplinary technologies and materials, from preliminary concept to finish, and focus on understanding and developing sustainable production and consumption processes."
      ],
      "desc_mt": [
          "Il-programm tal-Master of Arts in Product Design ji\u017cviluppa l-\u0127iliet artisti\u010bi u umanisti\u010bi li jappartjenu g\u0127all-kultura tad-disinn, flimkien mal-g\u0127arfien espert tekniku li jirrigwarda t-teknolo\u0121ija tal-produzzjoni, il-materjali u l-ispejje\u017c tal-manifattura. Dan ifittex li jissodisfa l-\u0127tie\u0121a tal-operat f\u2019pajsa\u0121\u0121 dinji ta\u2019 kompetizzjoni qawwija, fejn id-disinjatur jista\u2019 j\u017cid il-valur ta\u2019 prodott g\u0127all-konsumatur billi jo\u0127loq innovazzjoni \u2013 kemm fl-estetika kif ukoll fl-u\u017cu \u2013 li tie\u0127u vanta\u0121\u0121 mit-teknolo\u0121iji disponibbli u l-istili ta\u2019 \u0127ajja tal-konsumatur li dejjem jinbidlu.",
          "Il-kandidati ji\u017cviluppaw kapa\u010bit\u00e0 kritika a\u0127jar biex jesploraw lingwi tad-disinn kontemporanji, jiffokaw fuq esperimentazzjoni b\u2019teknolo\u0121iji interdixxiplinari u materjali innovattivi, mill-kun\u010bett preliminari sat-tlestija, u jiffokaw fuq il-fehim u l-i\u017cvilupp ta\u2019 pro\u010bessi ta\u2019 produzzjoni u konsum sostenibbli."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "MQF Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-10",
      "institute": "md",
      "code": "UC7-E12-18",
      "title": "Master of Science in Mechatronics",
      "title_notes": "",
      "desc_en": [
          "The Master of Science in Mechatronics programme provides students with a broad range of knowledge and skills in the field of automation and control of production processes and equipment, as well as in the field of mechatronic devices and systems control. It focuses on the study of network technologies (e.g. Ethernet, Industrial Protocol, Profinet, Modbus, Profibus, Devicenet, Control Net), and the development of SCADA system (Supervisory Control and Data Acquisition) construction.",
          "The practical use of real-time systems is also an important part of the programme. Students shall apply the theoretical principles of industrial robotics and mechatronics, mechatronic and robotic actuators, and modern technologies of microcontroller applications."
      ],
      "desc_mt": [
          "Il-programm tal-Master of Science in Mechatronics jipprovdi lill-istudenti firxa wiesg\u0127a ta\u2019 g\u0127arfien u \u0127iliet fil-qasam tal-awtomatizzazzjoni u l-kontroll ta\u2019 pro\u010bessi tal-produzzjoni u t-tag\u0127mir, kif ukoll fil-qasam ta\u2019 apparat mekatroniku u l-kontroll tas-sistemi. Dan il-programm jiffoka fuq l-istudju tat-teknolo\u0121iji tan-netwerk (e\u017c. Ethernet, Industrial Protocol, Profinet, Modbus, Profibus, Devicenet, Control Net), u l-i\u017cvilupp tal-kostruzzjoni tas-sistema SCADA (Il-Kontroll Supervi\u017corju u l-Akkwist tad-Data).",
          "L-u\u017cu prattiku ta\u2019 sistemi ta\u2019 \u0127in reali huwa wkoll parti importanti tal-programm. L-istudenti jkunu me\u0127tie\u0121a japplikaw il-prin\u010bipji teoreti\u010bi tar-robotika u l-mekatronika industrijali, tal-attwaturi tal-mekatronika u tar-robotika, u t-teknolo\u0121iji moderni ta\u2019 applikazzjonijiet ta\u2019 mikrokontrolluri."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "MQF Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  },
  {
      "index": "09-11",
      "institute": "md",
      "code": "UC7-E10-18",
      "title": "Master of Science in Exercise and Sports Science",
      "title_notes": "",
      "desc_en": [
          "The Master of Science in Exercise and Sport Science presents a multidisciplinary focus on helping students understand the relationship between health and human performance. As an academic programme, this Master of Science will introduce translational research and provide essential foundations from the bases of physiology, biomechanics, motor behaviour, and psychology. Using the social ecological approach to addressing the needs for health and human performance for the workforce in Malta, the programme recognizes societal needs, introduces evidence-based strategies for intervention, and evaluates the impact of these services on health outcomes and productivity."
      ],
      "desc_mt": [
          "Il-Master of Science in Exercise and Sport Science jiffoka fuq dixxiplini differenti biex jg\u0127in lill-istudenti jifhmu r-relazzjoni bejn is-sa\u0127\u0127a u l-prestazzjoni umana. B\u0127ala programm akkademiku, dan il-Master of Science jintrodu\u010bi lill-istudenti g\u0127ar-ri\u010berka traslazzjonali u jipprovdi ba\u017ci essenzjali mil-lat tal-fi\u017cjolo\u0121ija, il-bijomekkanika, il-movimenti tal-bniedem u l-psikolo\u0121ija. Bl-adozzjoni tal-appro\u010b\u010b ekolo\u0121iku so\u010bjali biex ji\u0121u indirizzati l-\u0127ti\u0121ijiet g\u0127as-sa\u0127\u0127a tal-\u0127addiema f\u2019Malta u l-prestazzjoni tag\u0127hom, il-programm jirrikonoxxi l-b\u017connijiet tas-so\u010bjet\u00e0, jintrodu\u010bi strate\u0121iji ta\u2019 intervent ibba\u017cati fuq l-evidenza, u jevalwa l-impatt ta\u2019 dawn is-servizzi fuq is-sa\u0127\u0127a u l-produttivit\u00e0."
      ],
      "mqf": 7,
      "duration": "5 Semesters Blended",
      "req_entry": [
          "Relevant degree",
          "MQF Level 5 qualification and adequate professional experience are also considered."
      ],
      "intake_info": "October 2020",
      "exit_strategy": "Post-Graduate Certificate (30 ECTS)\\nPost-Graduate Diploma (60 ECTS)\\nFull Masters (90 ECTS)",
      "fees": "Fees apply \u2013 Further information through MG2i (MCAST Gateway to Industry)",
      "careers": ""
  }
  ]
  constructor() { }

  getAllMASTERScourses(){
    return [...this.MASTERScourses];
  }

  getMASTERScourse(MASTERScourseId: string){
    return {...this.MASTERScourses.find(MASTERScourse => {
      return MASTERScourse.index === MASTERScourseId;
    })};
  }
}
