import { Injectable } from '@angular/core';
import { ICAcourse } from './icacourses.model';


@Injectable({
  providedIn: 'root'
})
export class IcaService {

  private ICAcourses: ICAcourse[] = [
    {
      "index": "04-01",
      "institute": "ica",
      "code": "AD1-01-19",
      "title": "Introductory Certificate in Art and Design",
      "title_notes": "",
      "desc_en": [
          "This programme of studies provides learners, who completed their compulsory education and are in possession of their Secondary School Certificate and Profile (SSC&P), with an opportunity to follow an introductory course in the field of art and design.",
          "The programme of studies focuses on basic art and design principles, with an emphasis on vocational practice. This enables learners to understand better the vocation they intend to follow and prepares them for further training in the field. Key skills subjects help learners improve their competences within basic areas such as language, numeracy, information technology, science and individual and social responsibility."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji jipprovdi lill-istudenti, li jkunu spi\u010b\u010baw l-edukazzjoni obbligatorja tag\u0127hom u li g\u0127andhom i\u010b-\u010aertifikat u l-Profil tal-Iskola Sekondarja (SSC&P), l-opportunit\u00e0 li jsegwu kors introduttorju fil-qasam tal-arti u d-disinn.",
          "Il-programm ta\u2019 studji jiffoka fuq il-prin\u010bipji ba\u017ci\u010bi tal-arti u d-disinn, b\u2019enfasi fuq il-prattika vokazzjonali. Dan jippermetti lill-istudenti jifhmu a\u0127jar il-vokazzjoni li bi\u0127siebhom isegwu u j\u0127ejjihom g\u0127al aktar ta\u0127ri\u0121 fil-qasam. Su\u0121\u0121etti ta\u2019 \u0127iliet ewlenin jg\u0127inu lill-istudenti jtejbu l-kompetenzi tag\u0127hom f\u2019oqsma ba\u017ci\u010bi b\u0127al-lingwa, in-numeri\u017cmu, it-teknolo\u0121ija tal-informazzjoni, ix-xjenza u r-responsabbilt\u00e0 individwali u so\u010bjali."
      ],
      "mqf": 1,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          ""
      ],
      "req_compulsory": [
          "Finished Compulsory Education"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Initial Assessment Tests (as may be applicable)"
  },
  {
      "index": "04-02",
      "institute": "ica",
      "code": "CA2-01-19",
      "title": "Foundation Certificate in the Creative Arts",
      "title_notes": "",
      "desc_en": [
          "This programme of studies provides an opportunity to learners, in possession of the Secondary School Certificate and Profile (SSC&P), to follow a structured programme that explores the basics of various Creative Art disciplines, namely Art, Design, Media and Performing Arts.",
          "The programme includes a significant amount of vocational practice, as well as essential key skills subjects, that will help learners form a clear idea of the nature of the vocation they intend to follow at higher levels while, at the same time, developing their competences within basic areas such as language, numeracy, information technology, science and individual and social responsibility."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 studji jipprovdi lill-istudenti, li jkollhom i\u010b-\u010aertifikat u l-Profil tal-Iskola Sekondarja (SSC&P), l-opportunit\u00e0 li jsegwu programm strutturat li jesplora l-aspetti ba\u017ci\u010bi tad-diversi dixxiplini tal-Arti Kreattiva, ji\u0121ifieri l-Arti, id-Disinn, il-Midja u l-Arti tal-Ispettaklu.",
          "Il-programm jinkludi ammont sinifikanti ta\u2019 prattika vokazzjonali, kif ukoll su\u0121\u0121etti ta\u2019 \u0127iliet ewlenin essenzjali, li jg\u0127inu lill-istudenti jifformaw idea \u010bara tal-vokazzjoni li bi\u0127siebhom isegwu f\u2019livelli og\u0127la filwaqt li, fl-istess \u0127in, ji\u017cviluppaw il-kompetenzi tag\u0127hom f\u2019oqsma ba\u017ci\u010bi b\u0127al-lingwa, in-numeri\u017cmu, it-teknolo\u0121ija tal-informazzjoni, ix-xjenza u r-responsabbilt\u00e0 individwali u so\u010bjali."
      ],
      "mqf": 2,
      "duration": 1,
      "study": "FT",
      "mode": "",
      "req_entry": [
          ""
      ],
      "req_compulsory": [
          "Finished Compulsory Education",
          "MCAST Introductory Certificate"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Initial Assessment Tests (as may be applicable)"
  },
  {
      "index": "04-03",
      "institute": "ica",
      "code": "AD3-01-19",
      "title": "Diploma in Art and Design",
      "title_notes": "",
      "desc_en": [
          "This programme gives learners the opportunity to explore two different areas, those of Art and Design. Learners are encouraged to experiment with different media, resistant and non-resistant materials used in the generic disciplines of Art, 3D Design (Product and Spatial) and Fashion.",
          "Learners learn skills using different workshops and related tools and technology, as well as learn the theoretical aspects of various specialist areas, with awareness to health and safety priorities. Another important aspect of the course is the development of the learners\u2019 communication skills."
      ],
      "desc_mt": [
          "Dan il-programm jag\u0127ti lill-istudenti l-opportunit\u00e0 li jesploraw \u017cew\u0121 oqsma differenti, dawk tal-Arti u d-Disinn. L-istudenti jkunu m\u0127e\u0121\u0121a jesperimentaw b\u2019midja differenti u b\u2019materjali re\u017cistenti u mhux re\u017cistenti u\u017cati fid-dixxiplini \u0121eneri\u010bi tal-Arti, id-Disinn Tridimensjonali (Prodott u Spazjali) u l-Moda.",
          "L-istudenti jitg\u0127allmu l-\u0127iliet billi ju\u017caw workshops differenti u g\u0127odod u teknolo\u0121ija relatati, kif ukoll jitg\u0127allmu l-aspetti teoreti\u010bi ta\u2019 diversi oqsma spe\u010bjalizzati, filwaqt li j\u017commu f\u2019mo\u0127\u0127hom il-prijoritajiet tas-sa\u0127\u0127a u s-sigurt\u00e0. Aspett importanti ie\u0127or tal-kors huwa l-i\u017cvilupp tal-\u0127iliet ta\u2019 komunikazzjoni tal-istudent."
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
          "Art or Art and Design or Textiles and Design"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          ""
      ],
      "careers": "Assistant in an art studio, Assistant in the crafts sectors of stone works, woodworking production, ceramics, jewellery, textiles or fashion"
  },
  {
      "index": "04-04",
      "institute": "ica",
      "code": "AD3-02-19",
      "title": "Diploma in Performing Arts",
      "title_notes": "",
      "desc_en": [
          "The performing arts sector is steadily growing and becoming more professionalized. Learners embark on this programme of studies if, in the future, they see themselves working in music, theatre, dance, management, production, design or technical aspects of the performing arts.",
          "This multidisciplinary course gives learners a sound introduction to the various disciplines and elements that make up the performing arts sector through hands-on projects based on theory. Moreover, this course provides learners with the ideal foundation upon which to base further studies in the process of becoming a performing arts professional."
      ],
      "desc_mt": [
          "Is-settur tal-arti tal-ispettaklu qed jikber b\u2019mod kostanti u qed isir aktar professjonali. L-istudenti jid\u0127lu g\u0127al dan il-programm ta\u2019 studji jekk, fil-futur, huma jixtiequ ja\u0127dmu fil-mu\u017cika, it-teatru, i\u017c-\u017cfin, il-mani\u0121ment, il-produzzjoni, id-disinn jew aspetti tekni\u010bi tal-arti tal-ispettaklu.",
          "Dan il-kors multidixxiplinari jag\u0127ti lill-istudenti introduzzjoni soda g\u0127ad-diversi dixxiplini u elementi li jiffurmaw is-settur tal-arti tal-ispettaklu permezz ta\u2019 pro\u0121etti pratti\u010bi bba\u017cati fuq it-teorija. Barra minn hekk, dan il-kors jipprovdi lill-istudenti pedament ideali li fuqu jistg\u0127u jibba\u017caw aktar studji li jwassluhom biex isiru professjonisti tal-arti tal-ispettaklu."
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
      "careers": "Stage hand, Usher, Relationship officer, Ticketing officer"
  },
  {
      "index": "04-05",
      "institute": "ica",
      "code": "AD3-03-19",
      "title": "Diploma in Media",
      "title_notes": "",
      "desc_en": [
          "The creative media sector is versatile and it encompasses many job opportunities for young learners who are ready to take on this adventure.",
          "This programme aims to give learners an introduction about the various disciplines and elements that make up the creative media sector and it also allows learners to experience working on media-related projects first hand. This course provides learners with the ideal foundations upon which they can further specialise as creative media professionals."
      ],
      "desc_mt": [
          "Is-settur tal-midja kreattiva huwa versatili u j\u0127addan \u0127afna opportunitajiet ta\u2019 impjiegi g\u0127al studenti \u017cg\u0127a\u017cag\u0127 li huma lesti jid\u0127lu g\u0127al din l-avventura.",
          "Dan il-programm g\u0127andu l-g\u0127an li jag\u0127ti lill-istudenti introduzzjoni dwar id-diversi dixxiplini u elementi li jiffurmaw is-settur tal-midja kreattiva u jippermetti wkoll li l-istudenti ja\u0127dmu fuq pro\u0121etti relatati mal-midja b\u2019mod dirett. Dan il-kors jipprovdi lill-istudenti l-ba\u017ci ideali li fuqha jistg\u0127u jkomplu jispe\u010bjalizzaw b\u0127ala professjonisti tal-midja kreattiva."
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
          "English Language, Music"
      ],
      "req_other": [
          "Production office assistant, Studio assistant, Photography assistant"
      ],
      "careers": ""
  },
  {
      "index": "04-06",
      "institute": "ica",
      "code": "CA3-01-20",
      "title": "Diploma in Printing",
      "title_notes": "",
      "desc_en": [
          "This course aims to deliver both general as well as area-specific education and training in the commercial and security printing industry. The sector is currently facing challenges related to changing habits, shifts to digital communication, and competition from non-EU countries. Nevertheless, the local industry has recently seen an increase in employability supporting publishing, advertising, and other commercial businesses.",
          "This qualification equips learners with knowledge of the major pre-press, printing and post-press processes as well as a range of skills and techniques, personal qualities and attitudes essential for successful performance in working life. Learners harness theoretical knowledge at the Institute, backed up by practical training within the printing industry."
      ],
      "desc_mt": [
          "Dan il-kors jipprovdi edukazzjoni u ta\u0127ri\u0121 fuq livell \u0121enerali kif ukoll spe\u010bifiku g\u0127as-settur, fir-rigward tal-industrija tal-istampar kummer\u010bjali u ta\u2019 sikurezza. B\u0127alissa s-settur qed jiffa\u010b\u010bja sfidi relatati ma\u2019 drawwiet li qed jinbidlu, tibdil g\u0127al komunikazzjoni di\u0121itali, u kompetizzjoni minn pajji\u017ci mhux tal-UE. Madankollu, l-industrija lokali dan l-a\u0127\u0127ar rat \u017cieda fl-opportunitajiet ta\u2019 xog\u0127ol f\u2019azjendi tal-pubblikazzjoni u tar-reklamar u f\u2019negozji kummer\u010bjali o\u0127ra.",
          "Din il-kwalifika tag\u0127ti lill-istudenti g\u0127arfien dwar il-pro\u010bessi ta\u2019 qabel, waqt u wara l-istampar, kif ukoll firxa ta\u2019 \u0127iliet u teknolo\u0121iji, kwalitajiet u attitudnijiet personali essenzjali biex huma jirnexxu fil-\u0127ajja tax-xog\u0127ol tag\u0127hom. L-istudenti jsa\u0127\u0127u l-g\u0127arfien teoretiku li jiksbu fl-Istitut permezz ta\u2019 ta\u0127ri\u0121 prattiku fl-industrija tal-istampar matul l-istudji tag\u0127hom."
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
          "Art, Art and Design, Textiles and Design"
      ],
      "req_other": [
          ""
      ],
      "careers": "Offset printer, Printing finisher, Machine minder, Pre-press operator"
  },
  {
      "index": "04-07",
      "institute": "ica",
      "code": "CA4-05-20",
      "title": "Advanced Diploma in Art and Design",
      "title_notes": "",
      "desc_en": [
          "This course presents learners with more challenging exercises in Art and Design disciplines. Learners will be expected to undertake guided and independent learning in order to develop further the necessary skills and creativity. Learners will be expected to develop a portfolio of work for progression or for potential employment.",
          "In the second year learners focus on a specialist path to enhance their technical skills and in preparation to progress to higher levels of study or to find work as a craftsperson. Special attention is given to visual and written communication in preparation to self-promotion in the industry or for Higher Education."
      ],
      "desc_mt": [
          "Dan il-kors jippre\u017centa lill-istudenti e\u017cer\u010bizzji aktar ta\u2019 sfida fid-dixxiplini tal-Arti u d-Disinn. L-istudenti jkunu mistennija jsegwu tag\u0127lim iggwidat u indipendenti sabiex ikomplu ji\u017cviluppaw il-\u0127iliet u l-kreattivit\u00e0 ne\u010bessarji. L-istudenti jkunu mistennija ji\u017cviluppaw portafoll ta\u2019 \u0127idma biex javvanzaw fl-istudji tag\u0127hom jew g\u0127al skop ta\u2019 impjieg.",
          "Fit-tieni sena l-istudenti jiffokaw fuq settur spe\u010bjalizzat biex isa\u0127\u0127u l-\u0127iliet tekni\u010bi tag\u0127hom u jil\u0127qu livelli og\u0127la ta\u2019 studju jew isibu xog\u0127ol b\u0127ala \u0127addiem tas-seng\u0127a (craftsperson). Ting\u0127ata attenzjoni spe\u010bjali g\u0127all-komunikazzjoni vi\u017civa u bil-kitba biex l-istudenti jit\u0127ejjew tajjeb g\u0127all-industrija jew g\u0127al Edukazzjoni Og\u0127la."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Art and Design",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Art or Art and Design or Textiles and Design or Design and Technology"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present a portfolio."
      ],
      "careers": "Craftsperson, Artisan"
  },
  {
      "index": "04-08",
      "institute": "ica",
      "code": "AD4-02-19",
      "title": "Advanced Diploma in Creative Media Production",
      "title_notes": "",
      "desc_en": [
          "The media industry is an ever-changing and dynamic sector which requires specific skills sets and competences to address the versatile demands that the industry requires to operate. These demands can be creative in nature but also technical.",
          "The Advanced Diploma in Creative Media Production opens up a range of pathways leading to careers within various media sectors. After the successful completion of this course, learners may choose to work in video production, television, sound, interactive media and sectors of the film industry.",
          "The programme provides learners with a broad introduction to the various aspects of audio-visual production. Moreover, it provides a solid foundation in underlying theories, while also covering practical areas in camera and audio techniques and video editing."
      ],
      "desc_mt": [
          "L-industrija tal-midja hija settur dinamiku u li dejjem jinbidel u li je\u0127tie\u0121 numru ta\u2019 \u0127iliet u kompetenzi spe\u010bifi\u010bi biex ji\u0121u indirizzati l-b\u017connijiet li din l-industrija versatili te\u0127tie\u0121 biex topera. Dawn id-domandi jistg\u0127u jkunu ta\u2019 natura kreattiva kif ukoll teknika.",
          "L-Advanced Diploma in Creative Media Production tifta\u0127 firxa ta\u2019 toroq li jwasslu g\u0127al karrieri f\u2019diversi setturi tal-midja. Wara li jlestu dan il-kors b\u2019su\u010b\u010bess, l-istudenti jistg\u0127u jag\u0127\u017clu li ja\u0127dmu fil-produzzjoni tal-vidjos, fit-televi\u017cjoni, fil-\u0127oss, fil-midja interattiva u f\u2019setturi tal-industrija tal-films.",
          "Il-programm jag\u0127ti lill-istudenti introduzzjoni wiesg\u0127a g\u0127ad-diversi aspetti tal-produzzjoni awdjovi\u017civa. Barra minn hekk, jipprovdilhom ba\u017ci soda fir-rigward tat-teoriji fundamentali, filwaqt li jkopri wkoll oqsma pratti\u010bi fit-teknika tal-kamera u tal-awdjo u fl-editjar tal-vidjos."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Art and Design",
          "MCAST Diploma in Media",
          "MCAST Diploma in Foundation Studies for Security, Enforcement and Protection",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Art or English Language or Music Studies"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present a portfolio."
      ],
      "careers": "Camera person, Video editor, Audio assistant, Production assistant, Production runner"
  },
  {
      "index": "04-09",
      "institute": "ica",
      "code": "TC4-A2-19",
      "title": "Advanced Diploma in Cultural Heritage Skills",
      "title_notes": "",
      "desc_en": [
          "This course addresses the needs of the Cultural Heritage sector in order to support the management, conservation and preservation of such heritage. Successful candidates will be able to ethically collaborate with relevant stakeholders, and would work under the supervision of one of these.",
          "Initially, the programme of studies provides the necessary applied theoretical material and ethical background for further training in technical aspects of cultural heritage and heritage skills. Options in the second and third year of the programme, which are open subject to demand and viability, include stone, metals, books, paper and textiles heritage skills, with training being carried out in workshops, laboratories and on site."
      ],
      "desc_mt": [
          "Dan il-kors jindirizza n-nuqqas ta\u2019 \u0127iliet fis-settur tal-Patrimonju Kulturali li huma me\u0127tie\u0121a biex jg\u0127inu fil-\u0121estjoni, il-konservazzjoni u l-preservazzjoni ta\u2019 dan il-patrimonju. Il-kandidati li jtemmu l-kors b\u2019su\u010b\u010bess ikunu jistg\u0127u, b\u2019mod etiku, jikkollaboraw ma\u2019 partijiet interessati u ja\u0127dmu ta\u0127t is-sorveljanza ta\u2019 xi \u0127add minnhom.",
          "Inizjalment, il-programm ta\u2019 studji jkopri t-teorija u l-isfond etiku li huma ne\u010bessarji g\u0127al aktar ta\u0127ri\u0121 fl-aspetti tekni\u010bi tal-patrimonju kulturali u l-\u0127iliet tal-patrimonju. L-g\u0127a\u017cliet fit-tieni u t-tielet sena tal-programm, li jift\u0127u skont id-domanda u l-vijabbilt\u00e0, jinkludu l-kisba ta\u2019 \u0127iliet g\u0127all-patrimonju relatati mal-\u0121ebla, il-metalli, il-kotba, il-karta u t-tessuti. Dan it-ta\u0127ri\u0121 isir f\u2019workshops, laboratorji u fuq is-sit."
      ],
      "mqf": 4,
      "duration": 3,
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
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview."
      ],
      "careers": "Heritage skills technician, Assistant to archivist\/curator\/ conservator-restorer in archives\/churches\/palaces\/ stately homes\/sites"
  },
  {
      "index": "04-10",
      "institute": "ica",
      "code": "CA4-A1-20",
      "title": "Advanced Diploma in Fashion and Retail",
      "title_notes": "",
      "desc_en": [
          "This course is designed to address the skills shortages in the fashion design and production sector. Learners undertaking the course learn important skills required for the fashion retail sector, together with basic entrepreneurial knowledge to support those learners who would like to set up their own atelier in the future. The first year of the programme offers learners the cultural, theoretical and creative aspects of the subject. Another important area is pattern drafting and sewing techniques in preparation for the second year.",
          "The second year of studies provides learners with the opportunity to develop further their knowledge and skills in the specialisation. They will participate in apprenticeship as well as present their own design concepts in a fashion collection as their final major project."
      ],
      "desc_mt": [
          "Dan il-kors huwa mfassal biex jindirizza n-nuqqasijiet fil-\u0127iliet fis-settur tad-disinn u l-produzzjoni tal-moda. L-istudenti li jid\u0127lu g\u0127all-kors jiksbu \u0127iliet importanti li huma me\u0127tie\u0121a fis-settur tal-bejg\u0127 lill-konsumatur f\u2019dan il-qasam, flimkien ma\u2019 g\u0127arfien intraprenditorjali ba\u017ciku li jg\u0127in lil dawk l-istudenti li jixtiequ li jkollhom l-istudjo tag\u0127hom fil-futur. L-ewwel sena tal-programm toffri lill-istudenti l-aspetti kulturali, teoreti\u010bi u kreattivi tas-su\u0121\u0121ett. Qasam importanti ie\u0127or huwa t-tfassil u t-teknika tal-\u0127jata bi t\u0127ejjija g\u0127at-tieni sena.",
          "It-tieni sena tal-istudji tipprovdi lill-istudenti l-opportunit\u00e0 li jkomplu ji\u017cviluppaw l-g\u0127arfien u l-\u0127iliet tag\u0127hom fl-ispe\u010bjalizzazzjoni. Huma jie\u0127du sehem f\u2019apprendistat u jippre\u017centaw il-kun\u010betti tad-disinn tag\u0127hom stess f\u2019kollezzjoni tal-moda b\u0127ala l-pro\u0121ett ewlieni finali tag\u0127hom."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Diploma in Art and Design",
          "MCAST Diploma in Media",
          "any other MCAST Level 3 Diploma",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "English Language"
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present a portfolio."
      ],
      "careers": "Junior designer in the fashion industry, Junior producer in an atelier, Assistant in a fashion marketing department, Assistant in fashion merchandising, Assistant in fashion retail and customer care"
  },
  {
      "index": "04-11",
      "institute": "ica",
      "code": "CA4-02-20",
      "title": "Advanced Diploma in Graphic Design and Interactive Media",
      "title_notes": "",
      "desc_en": [
          "This course of study prepares learners to communicate ideas and solve problems through creative and innovative solutions. The course is taught by experienced graphic artists and designers and is an opportunity to form an understanding of graphic design and interactive media fundamentals.",
          "Learners will become familiar with fundamental principles, skills and media related to contemporary graphic design and interactive media practice. With an emphasis on the creative process, learners will be guided to master technical skills in preparation for more independent study at undergraduate level. Exploratory exercises, real life work and competitions all form part of the process for ultimate effective learning experiences."
      ],
      "desc_mt": [
          "Dan huwa kors ta\u2019 studju li j\u0127ejji lill-istudenti biex jikkomunikaw ideat u jsolvu problemi permezz ta\u2019 soluzzjonijiet kreattivi u innovattivi. Il-kors ji\u0121i mg\u0127allem minn artisti u disinjaturi grafi\u010bi ta\u2019 esperjenza u huwa opportunit\u00e0 biex l-istudenti jiksbu g\u0127arfien dwar elementi fundamentali tad-disinn grafiku u l-midja interattiva.",
          "L-istudenti jsiru familjari mal-prin\u010bipji fundamentali, il-\u0127iliet u l-midja relatati mad-disinn grafiku kontemporanju u l-prattika tal-midja interattiva. B\u2019enfasi fuq il-pro\u010bess kreattiv, l-istudenti ji\u0121u ggwidati biex jiksbu \u0127iliet tekni\u010bi bi t\u0127ejjija g\u0127al studju aktar indipendenti fil-livell tal-ba\u010bellerat. E\u017cer\u010bizzji esploratorji, \u0127idma fil-\u0127ajja reali u kompetizzjonijiet jiffurmaw parti mill-kurrikulu g\u0127al esperjenzi ta\u2019 tag\u0127lim effettiv."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Art and Design",
          "MCAST Diploma in Media",
          "MCAST Diploma in Printing",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          "Art"
      ],
      "req_preferred": [
          "English Language"
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present a portfolio."
      ],
      "careers": "Junior graphic designer, Junior web designer"
  },
  {
      "index": "04-12",
      "institute": "ica",
      "code": "CA4-03-19",
      "title": "Advanced Diploma in Performing Arts",
      "title_notes": "",
      "desc_en": [
          "The performing arts industry is a steadily growing sector which is demanding people trained in the various areas. Through this programme of studies learners become familiar with fundamental principles and skills related to contemporary performing arts practice.",
          "The first year of this course focuses on elemental principles related to music, theatre, dance, management, production, design and technical aspects of the performing arts in preparation for more independent and focused study the following year when learners choose to develop further particular study-areas of performance (acting, dance and\/or music), design (costumes, props and\/or set), technical aspects (light and\/or sound) and management."
      ],
      "desc_mt": [
          "L-industrija tal-arti tal-ispettaklu hija settur li qed jikber b\u2019pass mg\u0127a\u0121\u0121el u li je\u0127tie\u0121 individwi m\u0127arr\u0121a fid-diversi oqsma. Permezz ta\u2019 dan il-programm ta\u2019 studji, l-istudenti jsiru familjari mal-prin\u010bipji u l-\u0127iliet fundamentali relatati mal-prattika kontemporanja tal-arti tal-ispettaklu.",
          "L-ewwel sena ta\u2019 dan il-kors tiffoka fuq prin\u010bipji ba\u017cici relatati mal-mu\u017cika, it-teatru, i\u017c-\u017cfin, il-mani\u0121ment, il-produzzjoni, id-disinn u l-aspetti tekni\u010bi tal-arti tal-ispettaklu, bi t\u0127ejjija g\u0127al studju aktar indipendenti u ffokat fis-sena ta\u2019 wara, meta l-istudenti jag\u0127\u017clu li ji\u017cviluppaw aktar f\u2019oqsma ta\u2019 studju partikolari (ir-re\u010btar, i\u017c-\u017cfin u\/jew il-mu\u017cika), id-disinn (il-kostumi, il-props u\/jew is-sett), aspetti tekni\u010bi (id-dawl u\/jew il-\u0127oss) u l-mani\u0121ment."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Performing Arts",
          "MCAST Diploma in Art and Design",
          "MCAST Diploma in Media",
          "any other MCAST Level 3 Diploma",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or an Audition."
      ],
      "careers": "Assistant performing arts\/events\/stage\/logistics manager, Assistant designer (props, costumes), Technical assistant (light\/sound design), Performer (acting, dance, music)"
  },
  {
      "index": "04-13",
      "institute": "ica",
      "code": "CA4-04-20",
      "title": "Advanced Diploma in Photography",
      "title_notes": "",
      "desc_en": [
          "The photographic industry requires young creatives who want to take the plunge into the world of professional image making. The industry requires competitive young professionals who can meet the on-going clients\u2019 demands for fresh and unique ideas for images in a variety of contexts.",
          "This course focuses on giving prospective photographers a very near real-life educational experience of what can be experienced in the photographic industries. Learners are exposed to the specialist areas of artistic photographic print making, location photography and studio photography. Towards the end of each academic year the learners develop their own thematic photographic concepts and produce two major photographic projects. The course also includes DSLR photography, studio photography, studio lighting, monochrome darkroom photographic printing, and advanced post-production techniques using Adobe Photoshop."
      ],
      "desc_mt": [
          "L-industrija tal-fotografija tirrikjedi persuni kreattivi \u017cg\u0127a\u017cag\u0127 li jridu jid\u0127lu fid-dinja tat-te\u0127id professjonali tal-imma\u0121ni. L-industrija tirrikjedi professjonisti \u017cg\u0127a\u017cag\u0127 kompetittivi li jistg\u0127u jissodisfaw id-domandi kontinwi tal-klijenti g\u0127al ideat friski u uni\u010bi g\u0127at-te\u0127id ta\u2019 imma\u0121nijet f\u2019varjet\u00e0 ta\u2019 kuntesti.",
          "Dan huwa kors vokazzjonali ta\u2019 sentejn li jag\u0127ti lil fotografi prospettivi esperjenza edukattiva realistika simili g\u0127al dik li jistg\u0127u jesperjenzaw fl-industriji tal-fotografija. L-istudenti jkunu esposti g\u0127all-oqsma spe\u010bjalizzati ta\u2019 artistic photographic print making, location photography u studio photography. Lejn l-a\u0127\u0127ar ta\u2019 kull sena akkademika, l-istudenti ji\u017cviluppaw il-kun\u010betti fotografi\u010bi temati\u010bi tag\u0127hom stess u jipprodu\u010bu \u017cew\u0121 pro\u0121etti fotografi\u010bi ewlenin. Il-kors jinkludi wkoll DSLR photography, studio photography, studio lighting, monochrome darkroom photographic printing, u tekniki avvanzati ta\u2019 wara l-produzzjoni bl-u\u017cu ta\u2019 Adobe Photoshop."
      ],
      "mqf": 4,
      "duration": 2,
      "study": "FT",
      "mode": "Work Placement",
      "req_entry": [
          "MCAST Diploma in Art and Design",
          "MCAST Diploma in Media",
          "4 SEC\/O-Level\/SSC&P (Level 3) passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "Art, English Language"
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present a portfolio."
      ],
      "careers": "Assistant photographer, Junior photo journalist, Junior studio photographer, Junior photo-editor, Photographer retail attendant, Junior photographer (corporate)"
  },
  {
      "index": "04-14",
      "institute": "ica",
      "code": "AD6-02-19",
      "title": "Bachelor of Arts (Honours) in Fine Art",
      "title_notes": "",
      "desc_en": [
          "This degree is a synthesis of the most important elements of professional fine art practice as it concerns the underpinning knowledge, fundamental skills and understanding.",
          "Learners have the opportunity to appreciate and develop a range of practical fine art disciplines, including drawing, sculpture, painting, photography, print making and digital imaging. They will be encouraged to investigate the multidimensional aspect of fine art theory and practice, as well as a broad variety of subject matters, such as spiritual, moral, ethical, as well as environmental and socio-cultural issues. This degree programme will stimulate learners in developing both their own personal advancement and the right assets to establish a studio practice."
      ],
      "desc_mt": [
          "Din id-degree hija sinte\u017ci tal-aktar elementi importanti tal-prattika tal-arti professjonali, billi tikkon\u010berna l-g\u0127arfien, il-\u0127iliet u l-fehim fundamentali.",
          "L-istudenti jkollhom l-opportunit\u00e0 li japprezzaw u ji\u017cviluppaw firxa ta\u2019 dixxiplini tal-arti prattika, li jinkludu t-tpin\u0121ija, l-iskultura, il-pittura, il-fotografija, l-istampar u l-i\u017cvilupp ta\u2019 imma\u0121ni di\u0121itali. Huma ji\u0121u m\u0127e\u0121\u0121a jinvestigaw l-aspett multidimensjonali tat-teorija u l-prattika tal-arti, kif ukoll varjet\u00e0 wiesg\u0127a ta\u2019 su\u0121\u0121etti, b\u0127al dawk spiritwali, morali u eti\u010bi, kif ukoll kwistjonijiet ambjentali u so\u010bjokulturali. Dan il-programm fil-livell ta\u2019 ba\u010bellerat jistimula lill-istudenti sabiex ji\u017cviluppaw kemm fir-rigward ta\u2019 progress fl-istudji tag\u0127hom kif ukoll fit-trawwim tal-attributi me\u0127tie\u0121a biex jift\u0127u l-istudjo tag\u0127hom."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Art and Design",
          "MCAST Advanced Diploma in Photography",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Art or Art and Design, or equivalent"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "2D artist, 3D artist, Digital artist, Multimedia artist, Prop artist, Craftsman, Gallery assistant, Assistant to a curator, Various roles within the cultural sector"
  },
  {
      "index": "04-15",
      "institute": "ica",
      "code": "AD6-03-19",
      "title": "Bachelor of Arts (Honours) in Game Art and Visual Design",
      "title_notes": "",
      "desc_en": [
          "This degree programme has been developed in response to the increased demand for trained artists and designers who are able to produce rich, interactive experiences, by developing conceptual visual graphics for digital games. Learners further their skills in drawing and illustration -the basis for the eventual development of game art.",
          "Learners acquire grounding in essential art and design principles, as well as computer-generated design, and concurrently receive a basic knowledge of related theory, analysis and practice. This includes game design, psychology of play, user interface (UI), narrative study, digital imaging, 3D-modelling and animation."
      ],
      "desc_mt": [
          "Dan il-programm fil-livell tal-ba\u010bellerat \u0121ie \u017cviluppat bi twe\u0121iba g\u0127ad-domanda dejjem ti\u017cdied g\u0127al artisti u disinjaturi m\u0127arr\u0121a li jistg\u0127u jipprodu\u010bu esperjenzi rikki u interattivi billi ji\u017cviluppaw grafi\u010bi vi\u017civi kun\u010bettwali g\u0127al log\u0127ob di\u0121itali. L-istudenti jkomplu jsa\u0127\u0127u l-\u0127iliet tag\u0127hom fit-tpin\u0121ija u l-illustrazzjoni biex eventwalment ji\u017cviluppaw l-arti tal-log\u0127ob.",
          "Tul il-kors l-istudenti jiksbu ba\u017ci tajba fil-prin\u010bipji essenzjali tal-arti u d-disinn, kif ukoll fid-disinn i\u0121\u0121enerat mill-kompjuter, u fl-istess \u0127in jir\u010bievu g\u0127arfien ba\u017ciku tat-teorija, l-anali\u017ci u l-prattika relatati. Dan jinkludi d-disinn tal-log\u0127ob, il-psikolo\u0121ija tal-log\u0127ob, il-user interface, l-istudju tan-narrattiva, l-imma\u0121ni di\u0121itali, l-immudellar tridimensjonali u l-animazzjoni."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Art and Design",
          "MCAST Advanced Diploma in Graphic Design and Interactive Media",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Art or Art and Design or equivalent"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "Digital visual artist, Storyboard artist, Texture artist, Concept artist, 3D artist, 3D rigger, 3D modeller"
  },
  {
      "index": "04-16",
      "institute": "ica",
      "code": "AD6-04-19",
      "title": "Bachelor of Arts (Honours) in Graphic Design",
      "title_notes": "",
      "desc_en": [
          "Communicating messages successfully via graphic design requires a high level of understanding of the visual art of representation."
      ],
      "desc_mt": [
          "This highly contextualised curriculum draws on contemporary design practice, together with theoretical and historical cultural material.",
          "The degree equips learners with the knowledge to explore and challenge creative boundaries, through real-life design scenarios. They will hone their skills in fundamental design principles such as layout, form, typography, iconography and colour. Learners will analyse a wide range of professional design problems, and find creative and innovative solutions using various media. Traditional and digital tools will be explored in disciplines such as editorial design, web design, signage, advertising and packaging. Il-komunikazzjoni ta\u2019 messa\u0121\u0121i b\u2019mod effettiv permezz tad-disinn grafiku tirrikjedi livell g\u0127oli ta\u2019 g\u0127arfien tal-arti vi\u017civa tar-rappre\u017centazzjoni. Dan il-kurrikulu ferm ikkuntestwalizzat huwa bba\u017cat fuq il-prattika tad-disinn kontemporanju, flimkien ma\u2019 materjal kulturali teoretiku u storiku.",
          "Id-degree tipprovdi lill-istudenti l-g\u0127arfien biex jesploraw u jisfidaw limiti kreattivi, permezz ta\u2019 xenarji ta\u2019 disinn realisti\u010bi. Huma jirfinaw il-\u0127iliet tag\u0127hom fir-rigward tal-prin\u010bipji fundamentali tad-disinn b\u0127al-layout, il-format, it-tipografija, l-ikonografija u l-kulur. L-istudenti janalizzaw firxa wiesg\u0127a ta\u2019 problemi ta\u2019 disinn professjonali u jsibu soluzzjonijiet kreattivi u innovattivi permezz ta\u2019 diversi midja. L-g\u0127odod tradizzjonali u di\u0121itali ji\u0121u esplorati f\u2019dixxiplini b\u0127ad-disinn editorjali, id-disinn tal-websajts, is-sinjalazzjoni, ir-reklamar u l-ippakkjar."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Graphic Design and Interactive Media",
          "MCAST Advanced Diploma in Art and Design",
          "MCAST Advanced Diploma in Photography",
          "MCAST Advanced Diploma in Creative Media Production",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Art or Art and Design or Graphical Communication, or equivalent"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "Graphic designer, Motion graphics designer, Web designer"
  },
  {
      "index": "04-17",
      "institute": "ica",
      "code": "AD6-05-19",
      "title": "Bachelor of Arts (Honours) in Interactive Media",
      "title_notes": "",
      "desc_en": [
          "This degree programme prepares learners to work in various sectors within an ever-evolving digital industry, by giving them exposure to 3D graphics and creative design and development.",
          "Learners will be given a strong grounding in visual art and design principles, as well as visual design software. They will acquire skills in the core fundamental practices of the industry, exploring user experience design, design and development for websites and mobile apps, game design and production and 3D graphics."
      ],
      "desc_mt": [
          "Dan il-programm ta\u2019 ba\u010bellerat jipprepara lill-istudenti biex ja\u0127dmu fis-setturi di\u0121itali li dejjem qeg\u0127din jevolvu billi jing\u0127ataw esperjenza fi grafika 3D u disinn u \u017cvilupp kreattiv.",
          "L-istudenti jing\u0127ataw sisien sodi fl-arti vi\u017civa u l-prin\u010bipji tad-disinn, kif ukoll fi programmi ta\u2019 disinn vi\u017civ. Sal-a\u0127\u0127ar tal-programm l-istudenti jkunu akkwistaw \u0127iliet fundamentali pratti\u010bi fl-industrija, billi jesploraw l-esperjenza tad-disinn mill-aspett ta\u2019 min juzaha, u anke d-disinn u l-i\u017cvilupp ta\u2019 sajts, apps, log\u0127ob di\u0121itali u produzzjoni u grafika 3D."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Graphic Design and Interactive Media",
          "MCAST Advanced Diploma in Art and Design",
          "MCAST Advanced Diploma in Photography",
          "MCAST Advanced Diploma in Creative Media Production",
          "MCAST Advanced Diploma in IT (Multimedia Software Development stream or the Software Development stream only)",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Art or Art and Design or Computing or equivalent"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "Web developer or designer, Application developer or designer, Game developer, 3D artist, Technical artist, UX designer, UI designer"
  },
  {
      "index": "04-18",
      "institute": "ica",
      "code": "AD6-07-19",
      "title": "Bachelor of Arts (Honours) in Product Design",
      "title_notes": "",
      "desc_en": [
          "This degree programme prepares learners to work in the creative design of furniture and industrial products. Learners learn how to respond to complex design briefs by investigating different cultural, social and economic contexts and the development of design products.",
          "They will take individual responsibility to research and effectively communicate their creative ideas using visual communication and CAD software to present technical and creative renders of effective product designs. Guided lectures will provide learners with knowledge on fundamental topics such as sustainability, environmental studies, functional design, traditional 3D production and innovative technologies, also supported with the necessary skills to transform their designs into physical prototypes within industry-based scenarios."
      ],
      "desc_mt": [
          "Dan il-programm fil-livell ta\u2019 ba\u010bellerat i\u0127ejji lill-istudenti biex ja\u0127dmu fid-disinn kreattiv ta\u2019 g\u0127amara u prodotti industrijali. L-istudenti jitg\u0127allmu kif iwie\u0121bu g\u0127al design briefs kumplessi billi jinvestigaw kuntesti kulturali, so\u010bjali u ekonomi\u010bi differenti u l-i\u017cvilupp ta\u2019 prodotti tad-disinn.",
          "Huma jie\u0127du responsabbilt\u00e0 individwali biex jirri\u010berkaw u jikkomunikaw b\u2019mod effettiv l-ideat kreattivi tag\u0127hom permezz tal-komunikazzjoni vi\u017civa u s-softwer CAD biex jippre\u017centaw disinji ta\u2019 prodotti li jkunu skont it-teknika u kreattivi. Waqt il-lezzjonijiet l-istudenti jkunu ggwidati jiksbu g\u0127arfien dwar su\u0121\u0121etti fundamentali b\u0127as-sostenibbilt\u00e0, l-istudji ambjentali, id-disinn funzjonali, u t-teknolo\u0121iji tal-produzzjoni, kemm dawk tridimensjonali tradizzjonali kif ukoll o\u0127rajn innovattivi. Bl-g\u0127ajnuna tal-\u0127iliet ne\u010bessarji, l-istudenti jitg\u0127allmu jibdlu d-disinji tag\u0127hom fi prototipi kif ji\u0121ri fl-industrija."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Art and Design",
          "MCAST Advanced Diploma in Fashion and Retail",
          "MCAST Advanced Diploma in Performing Arts",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Art or Graphical Communication or Engineering Drawing or Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "As from 2021\/22, internal progression will be limited to MCAST Advanced Diploma in Art and Design.",
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "Industrial product designer, Furniture designer, Prop designer for stage or set"
  },
  {
      "index": "04-19",
      "institute": "ica",
      "code": "AD6-08-19",
      "title": "Bachelor of Arts (Honours) in Spatial Design",
      "title_notes": "",
      "desc_en": [
          "This degree aims to provide learners with the essential communication skills to visually interpret industry-related spatial design projects of both internal and external spaces. Learners will develop critical analysis and independent thinking to project management competences to transform three-dimensional volumes into innovative spatial experiences. They will explore constructional materials and technology to develop their projects, with attention to sustainability and the environment, considering also light effects in the design brief.",
          "Learners will also learn how to generate technical drawings and artistic visuals using CAD software to communicate concepts and details in a realistic manner, as well as develop model-making skills."
      ],
      "desc_mt": [
          "Din id-degree g\u0127andha l-g\u0127an li tipprovdi lill-istudenti l-\u0127iliet essenzjali tal-komunikazzjoni biex jinterpretaw b\u2019mod vi\u017civ il-pro\u0121etti relatati mal-industrija li jirrigwardaw id-disinn ta\u2019 spazji interni u esterni. L-istudenti ji\u017cviluppaw il-\u0127iliet ta\u2019 anali\u017ci kritika u \u0127sieb indipendenti me\u0127tie\u0121a g\u0127all-immani\u0121\u0121jar ta\u2019 pro\u0121etti li jinvolvu t-trasformazzjoni ta\u2019 volumi tridimensjonali fi spazji innovattivi. Huma jesploraw materjali u teknolo\u0121ija ta\u2019 kostruzzjoni innovattivi biex ji\u017cviluppaw il-pro\u0121etti tag\u0127hom, waqt li jag\u0127tu attenzjoni lis-sostenibbilt\u00e0 u l-ambjent, u jikkunsidraw ukoll l-effetti tad-dawl skont id-design brief.",
          "Barra minn dan, l-istudenti jitg\u0127allmu jipprodu\u010bu tpin\u0121ija teknika u stampi artisti\u010bi bl-u\u017cu tas-softwer CAD biex jikkomunikaw kun\u010betti u dettalji b\u2019mod realistiku. Huma ji\u017cviluppaw ukoll \u0127iliet fil-bini ta\u2019 mudelli."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Art and Design",
          "MCAST Advanced Diploma in Fashion and Retail",
          "MCAST Advanced Diploma in Performing Arts",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Art or Graphical Communication or Engineering Drawing or Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "As from 2021\/22, internal progression will be limited to MCAST Advanced Diploma in Art and Design.",
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "Interior designer, Stand designer, Landscape designer, Storage or set designer"
  },
  {
      "index": "04-20",
      "institute": "ica",
      "code": "AD6-01-19",
      "title": "Bachelor of Arts (Honours) in Creative Media Production",
      "title_notes": "",
      "desc_en": [
          "The creative media industry is competitive and pleasantly adventurous. With the introduction of new media, the Industry is always on the lookout for young talent who can dream and create unique moving image productions from concept to screen.",
          "This degree programme is intended to give learners the opportunity to work hands-on in creative environments and produce audio-visual content for both artistic and commercial practices. Learners will acquire a broad range of skills and techniques focusing mainly on TV studio productions, and will specifically progress to audio-visual modules consisting of both research and practical film-making assignments. Moreover, learners will also explore different aspects of the discipline in relation to advertising productions, sound and multi-platform storytelling. In their final year, learners will be given the opportunity to research and develop their own individual practice."
      ],
      "desc_mt": [
          "L-industrija tal-midja kreattiva hija wa\u0127da kompetittiva u avventuru\u017ca. Bl-introduzzjoni ta\u2019 midja \u0121odda, l-industrija kontinwament tfittex talent \u017cag\u0127zug\u0127 li kapa\u010bi jo\u0127lom u jo\u0127loq kun\u010betti ta\u2019 produzzjonijiet uni\u010bi ta\u2019 imma\u0121ni li ti\u010b\u010baqlaq g\u0127all-iskrin.",
          "Dan il-programm fil-livell ta\u2019 ba\u010bellerat huwa ma\u0127sub biex jag\u0127ti lill-istudenti l-opportunit\u00e0 li ja\u0127dmu b\u2019mod prattiku f\u2019ambjenti kreattivi \u0127alli jipprodu\u010bu kontenut awdjovi\u017civ g\u0127al pratti\u010bi artisti\u010bi kif ukoll kummer\u010bjali. L-istudenti jiksbu firxa wiesg\u0127a ta\u2019 \u0127iliet u tekniki li jiffokaw b\u2019mod partikolari fuq produzzjonijiet fl-istudjos tat-televi\u017cjoni, biex imbag\u0127ad jg\u0127addu spe\u010bifikament g\u0127al unitajiet ta\u2019 studju li jittrattaw l-element awdjovi\u017civ u li jinvolvu kemm ri\u010berka kif ukoll produzzjoni ta\u2019 films. Barra minn hekk, l-istudenti jesploraw ukoll aspetti differenti tad-dixxiplina fir-rigward ta\u2019 produzzjonijiet ta\u2019 reklami, il-\u0127oss u n-narrazzjoni bl-u\u017cu ta\u2019 forom differenti. Fl-a\u0127\u0127ar sena l-istudenti jing\u0127ataw l-opportunit\u00e0 li jag\u0127mlu ri\u010berka u ji\u017cviluppaw il-prattika tag\u0127hom."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Creative Media Production*",
          "MCAST Advanced Diploma in Graphic Design and Interactive Media",
          "MCAST Advanced Diploma in Photography",
          "MCAST Advanced Diploma in Art and Design",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "A-Level: Art, English Language, Photography"
      ],
      "req_other": [
          "*Students progressing from the MCAST Advanced Diploma in Creative Media Production will be given preference in cases where the number of applicants exceeds the number of available places.",
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "TV editorial assistant, Film content producer, TV content producer, Film production runner, Film and TV technical operator"
  },
  {
      "index": "04-21",
      "institute": "ica",
      "code": "AD6-06-19",
      "title": "Bachelor of Arts (Honours) in Photography",
      "title_notes": "",
      "desc_en": [
          "The photography industry offers very exciting career pathways. The world of photography is an open invitation to all individuals who are keen to frame the world through a critical lens, to be prepared to commit for the ever changing demands of the industry.",
          "The degree programme introduces learners to a variety of learning experiences, ranging from professional commercial photography to experimental image making. Learners will familiarise themselves with the basic foundations of image-making, both in the moving image as well in still photography. They will explore still image recording and finishing for commercial and artistic endeavours using industry-standard equipment.",
          "In their final year, learners will be given the opportunity to research and develop their own individual visual language."
      ],
      "desc_mt": [
          "L-industrija tal-fotografija toffri toroq li jwasslu g\u0127al karrieri e\u010b\u010bitanti \u0127afna. Id-dinja tal-fotografija hija stedina miftu\u0127a g\u0127all-individwi kollha li huma interessati li jinkwadraw id-dinja permezz ta\u2019 lenti kritika, biex ikunu m\u0127ejjija biex jimpenjaw ru\u0127hom g\u0127ad-domandi dejjem jinbidlu tal-industrija.",
          "Dan il-programm fil-livell ta\u2019 ba\u010bellerat jintrodu\u010bi lill-istudenti g\u0127al varjet\u00e0 ta\u2019 esperjenzi ta\u2019 tag\u0127lim, li jvarjaw minn fotografija kummer\u010bjali professjonali g\u0127at-te\u0127id tal-imma\u0121ni sperimentali. L-istudenti jiffamiljarizzaw ru\u0127hom mal-elementi ba\u017ci\u010bi tat-te\u0127id tal-imma\u0121ni, kemm dik li ti\u010b\u010baqlaq kif ukoll fil-fotografija fissa. Huma jesploraw ir-re\u0121istrazzjoni u l-irfinar tal-imma\u0121ni fissa g\u0127al skopijiet kummer\u010bjali u artisti\u010bi bl-u\u017cu tat-tag\u0127mir standard f\u2019din l-industrija.",
          "Fl-a\u0127\u0127ar sena tag\u0127hom, l-istudenti jing\u0127ataw l-opportunit\u00e0 li jag\u0127mlu ri\u010berka u ji\u017cviluppaw il-lingwa vi\u017civa individwali tag\u0127hom stess."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Photography",
          "MCAST Advanced Diploma in Creative Media Production",
          "MCAST Advanced Diploma in Art and Design",
          "MCAST Advanced Diploma in Graphic Design and Interactive Media",
          "2 A-Level passes and 2 I-Level Passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          "A-Level: Photography, Art, English Language"
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "Commercial photographer, Fashion photographer, Wedding photographer, Photo journalist or editor, Fine art photographer, Professional photo editor"
  },
  {
      "index": "04-22",
      "institute": "ica",
      "code": "CA6-09-19",
      "title": "Bachelor of Arts (Honours) in Journalism",
      "title_notes": "",
      "desc_en": [
          "The journalism sphere offers exciting new career opportunities for individuals who are keen to learn and to offer a much needed service to society. Journalism is a vocation that can take learners to unimaginable places and lead you to meet extraordinary people.",
          "Learners will be expected to effectively analyse and report the events that shape our lives and the world around us."
      ],
      "desc_mt": [
          "They will be guided to design, develop and produce news content using the latest audio-visual technologies and recording devices. Moreover, learners will explore how to present their journalistic works to the public in a variety of formats such as print, radio, television and online. Throughout this programme, learners will work on real-life case scenarios, applying theoretical knowledge to practical journalism and related projects, working both in teams as well as autonomously. L-isfera tal-\u0121urnali\u017cmu toffri opportunitajiet ta\u2019 karrieri \u0121odda u e\u010b\u010bitanti g\u0127al individwi li huma interessati li jitg\u0127allmu u li joffru servizz ferm me\u0127tie\u0121 lis-so\u010bjet\u00e0. Il-\u0121urnali\u017cmu huwa vokazzjoni li tista\u2019 twassal lill-istudent f\u2019postijiet li qatt ma imma\u0121ina u tlaqqg\u0127u ma\u2019 persuni straordinarji.",
          "L-istudenti jkunu mistennija janalizzaw u jirrapportaw b\u2019mod effettiv l-avvenimenti li jiffurmaw \u0127ajjitna u d-dinja ta\u2019 madwarna. Huma ji\u0121u ggwidati sabiex jiddisinjaw, ji\u017cviluppaw u jipprodu\u010bu kontenut tal-a\u0127barijiet permezz tat-teknolo\u0121iji awdjovi\u017civi u l-apparat ta\u2019 re\u0121istrazzjoni l-aktar moderni. Barra minn hekk, l-istudenti jesploraw kif jippre\u017centaw ix-xog\u0127lijiet \u0121urnalisti\u010bi tag\u0127hom lill-pubbliku f\u2019varjet\u00e0 ta\u2019 formats b\u0127all-istampa, ir-radju, it-televi\u017cjoni u l-internet. Matul dan il-programm, l-istudenti jkunu me\u0127tie\u0121a ja\u0127dmu f\u2019tims kif ukoll individwalment fuq xenarji realisti\u010bi, filwaqt li japplikaw l-g\u0127arfien teoretiku g\u0127all-\u0121urnali\u017cmu prattiku u pro\u0121etti simili."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Internship and Live Cases",
      "req_entry": [
          "MCAST Advanced Diploma in Creative Media Production",
          "MCAST Advanced Diploma in Photography",
          "2 A-Level passes and 2 I-Level Passes"
      ],
      "req_compulsory": [
          "I-Level: Maltese or English Language"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "News journalist, Sports journalist, Fashion journalist, Business journalist"
  },
  {
      "index": "04-23",
      "institute": "ica",
      "code": "CA6-10-18",
      "title": "Bachelor of Arts (Honours) in Performing Arts",
      "title_notes": "",
      "desc_en": [
          "The professionalization of the performing arts has been a national priority for the sector for the last few years. This multi-and interdisciplinary undergraduate programme responds to this priority and gives learners the opportunity to work hands-on in creative environments through joint collaboration with industry stakeholders to manage and produce performing arts projects for both artistic and commercial practices.",
          "According to their chosen study-area\/s (management; performance \u2013 acting, dance, music; technical \u2013 light, sound; design \u2013 costumes, set\/props) learners acquire a broad range of skills and techniques focusing on performing arts productions, through critical analysis, research and practical assignments. In their final year, learners are given the opportunity to research and develop their own individual practice within the context of the cohort\u2019s final production."
      ],
      "desc_mt": [
          "Il-promozzjoni tal-professjonalit\u00e0 tal-arti tal-ispettaklu kienet prijorit\u00e0 nazzjonali g\u0127as-settur g\u0127al dawn l-a\u0127\u0127ar snin. Dan il-programm multidixxiplinari u interdixxiplinari fil-livell ta\u2019 ba\u010bellerat iwie\u0121eb g\u0127al din il-prijorit\u00e0 u jag\u0127ti lill-istudenti l-opportunit\u00e0 li ja\u0127dmu b\u2019mod prattiku f\u2019ambjenti kreattivi permezz ta\u2019 kollaborazzjoni kon\u0121unta mal-partijiet interessati tal-industrija biex imexxu u jipprodu\u010bu pro\u0121etti tal-arti tal-ispettaklu g\u0127al skopijiet artisti\u010bi kif ukoll kummer\u010bjali.",
          "Skont il-qasam tal-istudju li jag\u0127\u017clu (il-mani\u0121ment; il-performance \u2013 ir-re\u010btar, i\u017c-\u017cfin, il-mu\u017cika; it-teknika \u2013 il-\u0127oss; id-dwal; id-disinn \u2013 il-kostumi, is-sett\/il-props), l-istudenti jiksbu firxa wiesg\u0127a ta\u2019 \u0127iliet u ta\u2019 teknika li lkoll jiffokaw fuq produzzjonijiet tal-arti tal-ispettaklu. Dan isir permezz ta\u2019 anali\u017ci kritika, ri\u010berka u assignments pratti\u010bi. Fl-a\u0127\u0127ar sena tag\u0127hom, l-istudenti jing\u0127ataw l-opportunit\u00e0 li jag\u0127mlu ri\u010berka u ji\u017cviluppaw il-prattika individwali tag\u0127hom stess fil-kuntest tal-produzzjoni finali mtellg\u0127a mill-istudenti ta\u2019 dik is-sena."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Internship",
      "req_entry": [
          "MCAST Advanced Diploma in Performing Arts",
          "Any other MCAST Advanced Diploma",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          ""
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or an Audition."
      ],
      "careers": "Performing arts coordinator\/manager (events, marketing, educational programmes), Lights\/sound\/ costume\/set\/props designer, Performer\/producer\/ director (acting, dance, music)"
  },
  {
      "index": "04-24",
      "institute": "ica",
      "code": "CA6-A1-20",
      "title": "Bachelor of Arts (Honours) in Fashion",
      "title_notes": "",
      "desc_en": [
          "This degree programme aims to respond to the demand for fashion professionals within the fashion industry, including fashion\/costume design and production, retail and marketing.",
          "Learners are supported with contextual studies to understand how fashion designers inspire their creativity. The degree programme provides learners with the specialist skills to create patterns using traditional techniques as well as modern software (CAD\/CAM) within fashion production processes on small and mass production scales. Moreover, the programme offers specialist units addressing the retail and marketing content. The course is targeted towards individuals who wish to set up their own firm with the required entrepreneurial skills, as well as towards those who wish to progress in the vast fashion business."
      ],
      "desc_mt": [
          "Din id-degree g\u0127andha l-g\u0127an li tindirizza d-domanda g\u0127al professjonisti fl-industrija tal-moda, inklu\u017c fid-disinn u l-produzzjoni tal-ilbies.",
          "Il-programm jinkludi studji kuntestwali biex l-istudenti jifhmu kif id-disinjaturi ji\u0121u ispirati fil-kreattivit\u00e0 tag\u0127hom minn stili ta\u2019 moda li baqg\u0127u mag\u0127rufin matul i\u017c-\u017cminijiet. Il-kors jipprovdi lill-istudenti l-\u0127iliet spe\u010bjalizzati li huma ne\u010bessarji biex jikkreaw mudelli bl-u\u017cu tat-teknika tradizzjonali u permezz tas-softwer modern CAD\/ CAM li jintu\u017ca fil-pro\u010bess tal-produzzjoni ta\u2019 lbies kemm fuq skala \u017cg\u0127ira kif ukoll fuq skala \u0127afna ikbar. Barra minn hekk, il-kors joffri wkoll unitajiet spe\u010bjalizzati li l-kontenut tag\u0127hom jittratta l-bejg\u0127 u r-reklamar. Il-kors huwa ma\u0127sub g\u0127al individwi li jixtiequ jibdew in-negozju tag\u0127hom bil-\u0127iliet intraprenditorjali me\u0127tie\u0121a, kif ukoll g\u0127al dawk l-istudenti li jridu jimxu \u2018l quddiem fl-industrija tal-moda."
      ],
      "mqf": 6,
      "duration": 3,
      "study": "FT",
      "mode": "Apprenticeship",
      "req_entry": [
          "MCAST Advanced Diploma in Fashion and Retail",
          "MCAST Advanced Diploma in Art and Design with a textiles major project",
          "2 A-Level passes and 2 I-Level passes"
      ],
      "req_compulsory": [
          "A-Level: Art or Graphical Communication or Engineering Drawing or Physics"
      ],
      "req_preferred": [
          ""
      ],
      "req_other": [
          "Applicants may be asked to sit for an Interview and\/or present their portfolio."
      ],
      "careers": "Fashion production manager, Outlet layout designer, Fashion merchandiser, Fashion designer, Fashion events coordinator, Retail manager, Fashion marketing manager, Customer service manager, Brand manager, Fashion entrepreneur"
  }
  ]

  constructor() { }

  getAllICAcourses(){
    return [...this.ICAcourses];
  }

  getICAcourse(ICAcourseId: string){
    return {...this.ICAcourses.find(ICAcourse => {
      return ICAcourse.index === ICAcourseId;
    })};
  }
}
