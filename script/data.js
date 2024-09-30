const allWords = {
    p1: [
        {eng:"accountant",pl:"ksi\u0119gowy",check:0},{eng:"actor",pl:"aktor",check:0},{eng:"actress",pl:"aktorka",check:0},{eng:"app developer",pl:"autor aplikacji",check:0},{eng:"architekt",pl:"architekt",check:0},{eng:"beautician",pl:"kosmetyczka",check:0},{eng:"builder",pl:"budowniczy",check:0},{eng:"bus driver",pl:"kierowca autobusu",check:0},{eng:"carer",pl:"opiekunka",check:0},{eng:"careers adviser",pl:"doradca zawodowy",check:0},{eng:"carpenter",pl:"stolarz",check:0},{eng:"chef",pl:"szef kuchni",check:0},{eng:"chemist",pl:"farmaceuta (c)",check:0},{eng:"civil servant",pl:"urz\u0119dnik",check:0},{eng:"cleaner",pl:"sprz\u0105taczka",check:0},{eng:"computer programmer",pl:"programista",check:0},{eng:"cook",pl:"kucharz",check:0},{eng:"counsellor",pl:"doradca",check:0},{eng:"dentist",pl:"dentysta",check:0},{eng:"director",pl:"dyrektor",check:0},{eng:"film director",pl:"re\u017cyser filmowy",check:0},{eng:"doctor",pl:"lekarz",check:0},{eng:"economist",pl:"ekonomista",check:0},{eng:"electrician",pl:"elektryk",check:0},{eng:"engineer",pl:"in\u017cynier",check:0},{eng:"farmer",pl:"rolnik",check:0},{eng:"fashion designer",pl:"projektant mody",check:0},{eng:"firefighter",pl:"stra\u017cak",check:0},{eng:"flight attendant",pl:"stewardesa",check:0},{eng:"gardener",pl:"ogrodnik",check:0},{eng:"hairdresser",pl:"fryzjer",check:0},{eng:"historian",pl:"historyk",check:0},{eng:"housewife",pl:"kobieta zajmuj\u0105ca si\u0119 domem",check:0},{eng:"house husband",pl:"m\u0119\u017cczyzna zajmuj\u0105cy si\u0119 domem",check:0},{eng:"instructor",pl:"instruktor",check:0},{eng:"driving instructor",pl:"instruktor jazdy",check:0},{eng:"fitness instructor",pl:"instruktor fitness",check:0},{eng:"ski instructor",pl:"instruktor narciarstwa",check:0},{eng:"interior designer",pl:"projektant wn\u0119trz",check:0},{eng:"inventor",pl:"wynalazca",check:0},{eng:"it specialist",pl:"informatyk",check:0},{eng:"journalist",pl:"dziennikarz",check:0},{eng:"landscaper",pl:"architekt krajobrazu",check:0},{eng:"lawyer",pl:"prawnik",check:0},{eng:"librarian",pl:"bibliotekarz",check:0},{eng:"lorry driver",pl:"kierowca ci\u0119\u017car\u00f3wki",check:0},
        {eng:"menager",pl:"menad\u017cer \/ kierownik",check:0},{eng:"miner",pl:"g\u00f3rnik",check:0},{eng:"musician",pl:"muzyk",check:0},{eng:"nurse",pl:"piel\u0119gniarka",check:0},{eng:"office worker",pl:"pracownik biurowy",check:0},{eng:"painter",pl:"malarz",check:0},{eng:"house painter",pl:"malarz pokojowy",check:0},{eng:"pharmacist",pl:"farmaceuta (p)",check:0},{eng:"photographer",pl:"fotograf",check:0},{eng:"pianist",pl:"pianista",check:0},{eng:"pilot",pl:"pilot",check:0},{eng:"plumber",pl:"hydraulik",check:0},{eng:"police officer",pl:"policiant",check:0}
    ],
    p2: [
        {eng:"politician",pl:"polityk",check:0},{eng:"postal worker",pl:"listonosz",check:0},{eng:"psychologist",pl:"psycholog",check:0},{eng:"receptionist",pl:"recepcjonista",check:0},{eng:"sailor",pl:"marynarz",check:0},{eng:"sales representative",pl:"przedstawiciel handlowy",check:0},{eng:"scientist",pl:"naukowiec",check:0},{eng:"secretary",pl:"sekretarka",check:0},{eng:"security guard",pl:"pracownik ochrony",check:0},{eng:"shop assistant",pl:"sprzedawca",check:0},{eng:"shopkeeper",pl:"sklepikarz",check:0},{eng:"surgeon",pl:"chirurg",check:0},{eng:"taxi driver",pl:"taks\u00f3wkarz",check:0},{eng:"ticket inspector",pl:"kontroler bilet\u00f3w",check:0},{eng:"tour guide",pl:"przewodnik",check:0},{eng:"translator",pl:"t\u0142umacz",check:0},{eng:"travel agent",pl:"agent biura podr\u00f3\u017cy",check:0},{eng:"tv presenter",pl:"prezenter telewizyjny",check:0},{eng:"vet",pl:"weterynarz",check:0},{eng:"vlogger",pl:"osoba prowadz\u0105ca wideoblog",check:0},{eng:"waiter",pl:"kelner",check:0},{eng:"waitress",pl:"kelnerka",check:0},{eng:"website designer",pl:"projektant stron internetowych",check:0},{eng:"astronaut",pl:"astronauta",check:0},{eng:"barrister",pl:"adwokat",check:0},{eng:"chief executive officer",pl:"dyrektor generalny (CEO)",check:0},{eng:"composer",pl:"kompozytor",check:0},{eng:"conductor",pl:"dyrygent",check:0},{eng:"editor",pl:"redaktor",check:0},{eng:"entrepreneur",pl:"przedsi\u0119biorca",check:0},{eng:"graphic designer",pl:"grafik",check:0},{eng:"managing director",pl:"dyrektor zarz\u0105dzaj\u0105cy",check:0},{eng:"physical therapist",pl:"fizjoterapeuta",check:0},{eng:"senior executive",pl:"kierownik wy\u017cszego szczebla",check:0},{eng:"babysitter",pl:"opiekunka do dziecka",check:0},{eng:"cashier",pl:"kasjerka",check:0},{eng:"dog walker",pl:"osoba wyprowadzaj\u0105ca psy",check:0},{eng:"fruit picker",pl:"osoba zbieraj\u0105ca owoce",check:0},{eng:"kitchen help",pl:"pomoc kuchenna",check:0},{eng:"pizza delivery driver",pl:"dostawca pizzy",check:0},{eng:"product demonstrator",pl:"hostessa",check:0},{eng:"summer camp supervisor",pl:"kierownik obozu wakacyjnego",check:0},{eng:"summer job",pl:"praca wakacyjna",check:0}
    ],
    p3: [
        {eng:"advise",pl:"doradza\u0107",check:0},{eng:"assist sb",pl:"pomaga\u0107 \/ asystowa\u0107 komu\u015b",check:0},{eng:"be at work",pl:"by\u0107 w pracy",check:0},{eng:"be good at sth",pl:"by\u0107 w czym\u015b dobrym",check:0},{eng:"be in charge of sth",pl:"kierowa\u0107 czym\u015b",check:0},{eng:"be on duty",pl:"by\u0107 na dy\u017curze",check:0},{eng:"be open for business",pl:"by\u0107 czynnym (np. o sklepie)",check:0},{eng:"be part of a team",pl:"by\u0107 cz\u0119\u015bci\u0105 zespo\u0142u",check:0},{eng:"be punctual",pl:"by\u0107 punktualnym",check:0},{eng:"be qualified",pl:"by\u0107 wykwalifikowanym",check:0},{eng:"be responsible for sb",pl:"by\u0107 odpowiedzialnym za kogo\u015b",check:0},{eng:"be self-employed",pl:"prowadzi\u0107 dzia\u0142alno\u015b\u0107 gospodarcz\u0105",check:0},{eng:"care for sb",pl:"dba\u0107 o kogo\u015b",check:0},{eng:"coordinate",pl:"koordynowa\u0107",check:0},{eng:"create",pl:"tworzy\u0107",check:0},{eng:"deal with sth",pl:"zajmowa\u0107 si\u0119 czym\u015b",check:0},{eng:"direct",pl:"kierowa\u0107 \/ zarz\u0105dza\u0107",check:0},{eng:"do your job well",pl:"wykonywa\u0107 dobrze swoj\u0105 prace",check:0},{eng:"do physical work",pl:"pracowa\u0107 fizycznie",check:0},{eng:"do a training course",pl:"odby\u0107 szkolenie",check:0},{eng:"draft a letter",pl:"przygotowa\u0107 szkic listu",check:0},{eng:"employ",pl:"zatrudnia\u0107",check:0},{eng:"file documents",pl:"przechowywa\u0107 dokumenty",check:0},{eng:"fill in",pl:"wype\u0142nia\u0107",check:0},{eng:"flexible working hours",pl:"elastyczne godziny pracy",check:0},{eng:"get promoted",pl:"awansowa\u0107",check:0},{eng:"give sb a call",pl:"dzwoni\u0107 do kogo\u015b",check:0},{eng:"give sb a hand",pl:"pomaga\u0107 komu\u015b",check:0},{eng:"go on strike",pl:"rozpocz\u0105\u0107 strajk",check:0},{eng:"handle",pl:"zajmowa\u0107 si\u0119",check:0},{eng:"inspect",pl:"sprawdza\u0107 \/ kontrolowa\u0107",check:0},{eng:"instruct",pl:"instruowa\u0107",check:0},{eng:"keep watch",pl:"pilnowa\u0107",check:0},{eng:"lecture",pl:"wyg\u0142asza\u0107 wyk\u0142ady \/ poucza\u0107",check:0},{eng:"maintain",pl:"utrzymywa\u0107",check:0},
        {eng:"manage a team",pl:"zarz\u0105dza\u0107 zespo\u0142em",check:0},{eng:"operate",pl:"obs\u0142ugiwa\u0107",check:0},{eng:"organise",pl:"organizowa\u0107",check:0},{eng:"patrol",pl:"patrolowa\u0107",check:0},{eng:"represent",pl:"reprezentowa\u0107",check:0},{eng:"run your own business",pl:"prowadzi\u0107 w\u0142asn\u0105 firm\u0119",check:0},{eng:"service",pl:"serwisowa\u0107",check:0},{eng:"take care of sth",pl:"dba\u0107 o co\u015b",check:0},{eng:"take orders",pl:"odbiera\u0107 zam\u00f3wienia",check:0},{eng:"start your own business",pl:"za\u0142o\u017cy\u0107 w\u0142asn\u0105 firm\u0119",check:0},{eng:"take over duties from sb",pl:"przejmowa\u0107 od kogo\u015b obowi\u0105zki",check:0},{eng:"trade",pl:"handlowa\u0107",check:0},{eng:"train",pl:"szkoli\u0107",check:0},{eng:"voluntary work",pl:"praca charytatywna \/ wolontariat",check:0},{eng:"act decisively",pl:"podejmowa\u0107 zdecydowane dzia\u0142ania",check:0},{eng:"be productive",pl:"by\u0107 produktywny",check:0},{eng:"delegate",pl:"rozdziela\u0107 obowi\u0105zki",check:0},{eng:"do shift work",pl:"wykonywa\u0107 prac\u0119 zmianow\u0105",check:0},{eng:"gain hands-on experience",pl:"zdoby\u0107 praktyczne do\u015bwiadczenie",check:0},{eng:"get on with sth straight away",pl:"zaj\u0105\u0107 si\u0119 czym\u015b od razu",check:0},{eng:"master a strategy",pl:"opanowa\u0107 strategi\u0119",check:0},{eng:"miss deadlines",pl:"nie dotrzymywa\u0107 termin\u00f3w",check:0},{eng:"supervise",pl:"nadzorowa\u0107",check:0}
    ],
    p4: [
        {eng:"clinic",pl:"klinika",check:0},{eng:"multinational company",pl:"firma mi\u0119dzynarodowa",check:0},{eng:"construction site",pl:"plac budowy",check:0},{eng:"dental practice",pl:"gabinet stomatologiczny",check:0},{eng:"department",pl:"dzia\u0142",check:0},{eng:"factory",pl:"fabryka (f)",check:0},{eng:"headquaters",pl:"siedziba g\u0142\u00f3wna (HQ)",check:0},{eng:"labolatory",pl:"laboratorium",check:0},{eng:"military base",pl:"baza wojskowa",check:0},{eng:"mine",pl:"kopalnia",check:0},{eng:"plant",pl:"fabryka (p)",check:0},{eng:"surgery",pl:"gabinet lekarski",check:0},{eng:"workplace",pl:"miejsce pracy",check:0},{eng:"workshop",pl:"warsztat",check:0},{eng:"apprentice",pl:"praktykant",check:0},{eng:"boss",pl:"szef",check:0},{eng:"colleague",pl:"kolega z pracy (c)",check:0},{eng:"employee",pl:"pracownik (e)",check:0},{eng:"employer",pl:"pracodawca",check:0},{eng:"freelancer",pl:"osoba pracuj\u0105ca na w\u0142asny rachunek",check:0},{eng:"managment",pl:"zarz\u0105d",check:0},{eng:"member of staff",pl:"pracownik (m)",check:0},{eng:"team member",pl:"cz\u0142onek zespo\u0142u",check:0},{eng:"teamwork",pl:"praca zespo\u0142owa",check:0},{eng:"teleworker",pl:"pracownik zdalny",check:0},{eng:"factory worker",pl:"pracownik fabryki",check:0},{eng:"workmate",pl:"kolega z pracy (w)",check:0},{eng:"high-flier",pl:"cz\u0142owiek sukcesu",check:0},{eng:"hiring manager",pl:"kierownik ds. kadr",check:0},{eng:"human capital",pl:"kapita\u0142 ludzki",check:0},{eng:"line manager",pl:"bezpo\u015bredni prze\u0142o\u017cony",check:0},{eng:"shareholder",pl:"udzia\u0142owiec",check:0},{eng:"subcontractor",pl:"podwykonawca",check:0},{eng:"subordinate",pl:"podw\u0142adny",check:0},{eng:"superior",pl:"prze\u0142o\u017cony",check:0},{eng:"trainee",pl:"osoba uczestnicz\u0105ca w szkoleniu",check:0},{eng:"trainer",pl:"osoba prowadz\u0105ca szkolenie",check:0},{eng:"volunteer",pl:"wolontariusz",check:0},{eng:"workaholic",pl:"pracoholik",check:0}
    ],
    p5: [
        {eng:"applicant",pl:"osoba staraj\u0105ca si\u0119 o prace",check:0},{eng:"suitable candidate",pl:"odpowiedni kandydat",check:0},{eng:"career choice",pl:"wyb\u00f3r kariery zawodowej",check:0},{eng:"consider",pl:"bra\u0107 pod uwag\u0119",check:0},{eng:"curriculum vitae",pl:"CV \/ \u017cyciorys",check:0},{eng:"covering letter",pl:"list przewodni",check:0},{eng:"contract of employment",pl:"umowa o prac\u0119 (3s)",check:0},{eng:"five years' experience",pl:"pi\u0119cioletnie do\u015bwiadczenie",check:0},{eng:"previous experience",pl:"dotychczasowe do\u015bwiadczenie",check:0},{eng:"work experience",pl:"do\u015bwiadczenie zawodowe",check:0},{eng:"job interview",pl:"rozmowa kwalifikacyjna",check:0},{eng:"interviewer",pl:"osoba przeprowadzaj\u0105ca rozmow\u0119 kwalifikacyjn\u0105",check:0},{eng:"current job",pl:"obecna praca",check:0},{eng:"job centre",pl:"biuro po\u015brednictwa pracy",check:0},{eng:"job opportunity",pl:"okazja zawodowa",check:0},{eng:"lack of experience",pl:"brak do\u015bwiadczenia",check:0},{eng:"letter of reference",pl:"list referencyjny",check:0},{eng:"letter of recommendation",pl:"list polecaj\u0105cy",check:0},{eng:"occupation",pl:"zaw\u00f3d",check:0},{eng:"personal details",pl:"dane osobowe",check:0},{eng:"profession",pl:"zaw\u00f3d (wymagaj\u0105cy do\u015bwiadczenia)",check:0},{eng:"additional qualifications",pl:"dodatkowe kwalifikacje",check:0},{eng:"recruiter",pl:"osoba przeprowadzaj\u0105ca rekrutacje",check:0},{eng:"recruitment consultant",pl:"konsultant ds. rekrutacji",check:0},{eng:"role",pl:"stanowisko \/ zadanie",check:0},{eng:"short contract",pl:"umowa kr\u00f3tkoterminowa",check:0},{eng:"communication skills",pl:"umiej\u0119tno\u015bci komunikacyjne",check:0},{eng:"computer skills",pl:"umiej\u0119tno\u015bci obs\u0142ugi komputera (IT)",check:0},{eng:"customer service skills",pl:"umiej\u0119tno\u015bci w zakresie obs\u0142ugi klienta",check:0},{eng:"language skills",pl:"znajomo\u015b\u0107 j\u0119zyka (8L)",check:0},{eng:"linguistic skills",pl:"znajomo\u015b\u0107 j\u0119zyka (10L)",check:0},{eng:"organisational skills",pl:"umiej\u0119tno\u015bci organizacyjne",check:0},{eng:"people skills",pl:"zdolno\u015bci interpersonalne",check:0},{eng:"training",pl:"szkolenie",check:0},{eng:"work contract",pl:"umowa o prace (2s)",check:0}
    ],
    p6: [
        {eng:"career path",pl:"\u015bcie\u017cka kariery",check:0},{eng:"career prospects",pl:"perspektywy rozwoju zawodowego",check:0},{eng:"draw up a plan",pl:"przygotowa\u0107 plan",check:0},{eng:"highly skilled",pl:"o wysokich umiej\u0119tno\u015bciach \/ kwalifikacjach",check:0},{eng:"industrious",pl:"pracowity \/ pilny",check:0},{eng:"lead a team",pl:"sta\u0107 na czele zespo\u0142u",check:0},{eng:"leadership role",pl:"rola przyw\u00f3dcza",check:0},{eng:"match qualifications",pl:"pasowa\u0107 do kwalifikacji",check:0},{eng:"perform job duties",pl:"wykonywa\u0107 obowi\u0105zki s\u0142u\u017cbowe",check:0},{eng:"pursue a career",pl:"rozwija\u0107 karier\u0119",check:0},{eng:"resourceful",pl:"zaradny \/ obrotny \/ przedsi\u0119biorczy",check:0},{eng:"set achievable goals",pl:"wyznacza\u0107 cele mo\u017cliwe do osi\u0105gni\u0119cia",check:0},{eng:"work placement",pl:"praktyka zawodowa \/ sta\u017c",check:0},{eng:"career in sth",pl:"kariera zawodowa w jakiej\u015b dziedzinie",check:0},{eng:"enter the job market",pl:"wej\u015b\u0107 na rynek pracy (j)",check:0},{eng:"enter the labour market",pl:"wej\u015b\u0107 na rynek pracy (l)",check:0},{eng:"job application",pl:"wniosek \/ aplikacja \/ podanie o prace",check:0},{eng:"job offer",pl:"oferta pracy",check:0},{eng:"job advertisement",pl:"og\u0142oszenie o prace (13L)",check:0},{eng:"give a good impression",pl:"zrobi\u0107 dobre wra\u017cenie",check:0},{eng:"require a degree",pl:"wymaga\u0107 dyplomu",check:0},{eng:"require interpersonal skills",pl:"wymaga\u0107 umiej\u0119tno\u015bci interpersonalnych",check:0},{eng:"requirements",pl:"wymagania",check:0},{eng:"vacancy",pl:"wakat \/ wolne stanowisko",check:0},{eng:"bounce back from disappointment",pl:"otrz\u0105sn\u0105\u0107 si\u0119 z rozczarowania",check:0},{eng:"do a job remotely",pl:"pracowa\u0107 zdalnie (3s)",check:0},{eng:"flexibility",pl:"umiej\u0119tno\u015bci dostosowania si\u0119 do nowych sytuacji",check:0},{eng:"retrain",pl:"przekwalifikowa\u0107 si\u0119",check:0},{eng:"set up a company",pl:"za\u0142o\u017cy\u0107 firme",check:0},{eng:"stay on top of things",pl:"by\u0107 na bie\u017c\u0105co",check:0},{eng:"think on your feet",pl:"podejmowa\u0107 szybkie decyzje",check:0},{eng:"win the trust",pl:"zdoby\u0107 zaufanie",check:0},{eng:"work-life balance",pl:"r\u00f3wnowaga mi\u0119dzy \u017cyciem prywatnym a zawodowym",check:0},{eng:"work remotely",pl:"pracowa\u0107 zdalnie (2s)",check:0}
    ],
    p7: [
        {eng:"hard work",pl:"ci\u0119\u017cka praca",check:0},{eng:"holiday",pl:"urlop",check:0},{eng:"bank holiday",pl:"\u015bwi\u0119to pa\u0144stwowe",check:0},{eng:"job satisfaction",pl:"zadowolenie z pracy",check:0},{eng:"leave",pl:"urlop \/ zwolnienie",check:0},{eng:"maternity leave",pl:"urlop macierzy\u0144ski",check:0},{eng:"paternity leave",pl:"urlop ojcowski",check:0},{eng:"sick leave",pl:"zwolnienie lekarskie",check:0},{eng:"office politics",pl:"polityka biurowa",check:0},{eng:"out of work",pl:"bezrobotny (3s)",check:0},{eng:"overworked",pl:"przepracowany",check:0},{eng:"early retirement",pl:"wcze\u015bniejsza emerytura",check:0},{eng:"unemployed",pl:"bezrobotny (u)",check:0},{eng:"unemployment",pl:"bezrobocie",check:0},{eng:"unemployment benefit",pl:"zasi\u0142ek dla bezrobotnych",check:0},{eng:"working conditions",pl:"warunki pracy",check:0},{eng:"working hours",pl:"godziny pracy",check:0},{eng:"workload",pl:"ob\u0142o\u017cenie prac\u0105",check:0},{eng:"job loss",pl:"utrata pracy",check:0},{eng:"pensioner",pl:"emeryt",check:0},{eng:"bonus",pl:"premia",check:0},{eng:"earnings",pl:"zarobki",check:0},{eng:"income",pl:"doch\u00f3d",check:0},{eng:"minimum wage",pl:"p\u0142aca minimalna",check:0},{eng:"decent pay",pl:"przyzwoita p\u0142aca",check:0},{eng:"pay cut",pl:"ci\u0119cie p\u0142ac",check:0},{eng:"pay freeze",pl:"zamro\u017cenie p\u0142ac",check:0},{eng:"pay rise",pl:"podwy\u017cka wynagrodzenia",check:0},{eng:"pension",pl:"emerytura (pieni\u0105dze)",check:0},{eng:"profit",pl:"zysk",check:0},{eng:"salary",pl:"pensja (np. miesi\u0119czna)",check:0},{eng:"tax",pl:"podatek",check:0},{eng:"tip",pl:"napiwek",check:0},{eng:"wages",pl:"p\u0142aca tygodniowa \/ dzienna \/ godzinowa",check:0}
    ],
    p8: [
        {eng:"badly-paid",pl:"\u017ale p\u0142atny",check:0},{eng:"challenging",pl:"ambitny",check:0},{eng:"creative",pl:"tw\u00f3rczy",check:0},{eng:"dull",pl:"nudny",check:0},{eng:"freelance",pl:"na w\u0142asny rachunek",check:0},{eng:"full-time",pl:"na pe\u0142en etat",check:0},{eng:"manual",pl:"fizyczny",check:0},{eng:"part-time",pl:"w niepe\u0142nym wymiarze godzin",check:0},{eng:"permanent",pl:"sta\u0142y",check:0},{eng:"rewarding",pl:"satysfakcjonuj\u0105cy (r)",check:0},{eng:"satisfying",pl:"satysfakcjonuj\u0105cy (s)",check:0},{eng:"seasonal",pl:"sezonowy",check:0},{eng:"stressful",pl:"stresuj\u0105cy",check:0},{eng:"temporary",pl:"tymczasowy",check:0},{eng:"well-paid",pl:"dobrze p\u0142atny",check:0},{eng:"demanding",pl:"wymagaj\u0105cy",check:0},{eng:"executive",pl:"na kierowniczym stanowisku",check:0},{eng:"glamorous",pl:"o wysokim presti\u017cu",check:0},{eng:"high-powered",pl:"odpowiedzialny \/ wa\u017cny",check:0},{eng:"lucrative",pl:"dobrze p\u0142atny (l)",check:0},{eng:"monotonous",pl:"nudny \/ monotonny",check:0},{eng:"purposeful",pl:"sensowny",check:0},{eng:"technical",pl:"techniczny",check:0},{eng:"white-collar",pl:"umys\u0142owy \/ urz\u0119dniczy",check:0},{eng:"work as en engineer",pl:"pracowa\u0107 jako in\u017cynier",check:0},{eng:"work flexitime",pl:"mie\u0107 elastyczne godziny pracy",check:0},{eng:"work for a company",pl:"pracowa\u0107 w firmie",check:0},{eng:"work freelance",pl:"pracowa\u0107 na w\u0142asny rachunek",check:0},{eng:"work from home",pl:"pracowa\u0107 z domu",check:0},{eng:"work in a team",pl:"pracowa\u0107 w zespole",check:0},{eng:"work long hours",pl:"pracowa\u0107 wiele godzin dziennie",check:0},{eng:"work on sth",pl:"pracowa\u0107 nad czym\u015b",check:0},{eng:"work on your own",pl:"pracowa\u0107 samodzielnie",check:0},{eng:"work overtime",pl:"pracowa\u0107 w nadgodzinach",check:0},{eng:"work shifts",pl:"pracowa\u0107 na zmiany",check:0},{eng:"work under pressure",pl:"pracowa\u0107 pod presj\u0105",check:0},{eng:"work with sb",pl:"pracowa\u0107 z kim\u015b",check:0}
    ],
    p9: [
        {eng:"apply for a job",pl:"z\u0142o\u017cy\u0107 podanie o prace",check:0},{eng:"apply for a position",pl:"ubiega\u0107 si\u0119 o stanowisko",check:0},{eng:"attach a cv",pl:"za\u0142\u0105czy\u0107 \u017cyciorys (a)",check:0},{eng:"enclose a cv",pl:"za\u0142\u0105czy\u0107 \u017cyciorys (e)",check:0},{eng:"fill in a form",pl:"wype\u0142ni\u0107 formularz",check:0},{eng:"interview applicants",pl:"przeprowadzi\u0107 rozmow\u0119 kwalifikacyjn\u0105 z kandydatami",check:0},{eng:"involve doing sth",pl:"wymaga\u0107 czego\u015b \/ wi\u0105za\u0107 si\u0119 z czym\u015b",check:0},{eng:"the job involves dealing with people",pl:"praca wymaga kontakt\u00f3w z lud\u017ami",check:0},{eng:"look for a job",pl:"szuka\u0107 pracy",check:0},{eng:"recruit a new employee",pl:"rekrutowa\u0107 nowego pracownika",check:0},{eng:"register with a job centre",pl:"zarejestrowa\u0107 si\u0119 w urz\u0119dzie pracy",check:0},{eng:"sign a contract",pl:"podpisa\u0107 umow\u0119",check:0},{eng:"be off sick",pl:"by\u0107 na zwolnieniu lekarskim",check:0},{eng:"be on maternity",pl:"by\u0107 na urlopie macierzy\u0144skim",check:0},{eng:"close down a company",pl:"zamkn\u0105\u0107 firm\u0119 (zako\u0144czy\u0107 dzia\u0142alno\u015b\u0107)",check:0},{eng:"do sth for a living",pl:"zarabia\u0107 na \u017cycie (4s)",check:0},{eng:"earn a living",pl:"zarabia\u0107 na \u017cycie (2s) (e)",check:0},{eng:"earn minimum",pl:"zarabia\u0107 stawk\u0119 minimaln\u0105",check:0},{eng:"fire sb",pl:"zwolni\u0107 kogo\u015b z pracy (f)",check:0},{eng:"get paid",pl:"otrzyma\u0107 wyp\u0142at\u0119",check:0},{eng:"give up your job",pl:"rzuci\u0107 prac\u0119",check:0},{eng:"go bankrupt",pl:"zbankrutowa\u0107",check:0},{eng:"hand in your resignation",pl:"z\u0142o\u017cy\u0107 wypowiedzenie (4s)",check:0},{eng:"leave your job",pl:"odej\u015b\u0107 z pracy",check:0},{eng:"lose your job",pl:"straci\u0107 prac\u0119",check:0},{eng:"make a living",pl:"zarabia\u0107 na \u017cycie (2s) (m)",check:0},{eng:"pay a salay",pl:"p\u0142aci\u0107 pensj\u0119",check:0},{eng:"quit",pl:"z\u0142o\u017cy\u0107 wypowiedzenie (1s) (q)",check:0},{eng:"resign",pl:"z\u0142o\u017cy\u0107 wypowiedzenie (1s) (r)",check:0},{eng:"retire",pl:"odej\u015b\u0107 na emerytur\u0119",check:0},{eng:"sack sb",pl:"zwolni\u0107 kogo\u015b z pracy (s)",check:0},{eng:"take a week's leave",pl:"wzi\u0105\u0107 tydzie\u0144 urlopu",check:0},{eng:"take a day off",pl:"wzi\u0105\u0107 dzie\u0144 wolny",check:0}
    ],
    p10: [
        {eng:"unemployment",pl:"bezrobocie",check:0},{eng:"unfashionable",pl:"niemodny",check:0},{eng:"unreliable",pl:"niepewny",check:0},{eng:"inhabitant",pl:"mieszkaniec",check:0},{eng:"furnished",pl:"umeblowane",check:0},{eng:"assignment",pl:"zadanie",check:0},{eng:"memorise",pl:"zapami\u0119ta\u0107",check:0},{eng:"lawyer",pl:"prawnik",check:0},{eng:"bankruptcy",pl:"bankructwo",check:0},{eng:"advertisement",pl:"reklama",check:0},{eng:"playwright",pl:"dramaturg",check:0},{eng:"medical",pl:"medyczny",check:0},{eng:"natural",pl:"naturalny",check:0},{eng:"teenager",pl:"nastolatek",check:0},{eng:"daily",pl:"codziennie",check:0},{eng:"surgeon",pl:"chirurg",check:0},{eng:"impractical",pl:"niepraktyczny",check:0},{eng:"unleaded",pl:"bezo\u0142owiowy",check:0},{eng:"conclusion",pl:"wniosek",check:0},{eng:"savings",pl:"oszcz\u0119dno\u015bci",check:0},{eng:"marriage",pl:"ma\u0142\u017ce\u0144stwo",check:0},{eng:"opponent",pl:"przeciwnik",check:0},{eng:"strengthen",pl:"wzmacnia\u0107",check:0},{eng:"impression",pl:"wra\u017cenie",check:0},{eng:"satisfaction",pl:"satysfakcja",check:0},{eng:"cowardly",pl:"tch\u00f3rzliwy",check:0},{eng:"housing estate",pl:"osiedle mieszkaniowe",check:0},{eng:"environmental",pl:"\u015brodowiskowy",check:0},{eng:"extracurricular",pl:"dodatkowe",check:0},{eng:"punctuality",pl:"punktualno\u015b\u0107",check:0},{eng:"outperform",pl:"przewy\u017csza\u0107",check:0},{eng:"off-putting",pl:"odpychaj\u0105cy",check:0},{eng:"unreasonable",pl:"nierozs\u0105dny",check:0},{eng:"strategically",pl:"strategicznie",check:0},{eng:"drought",pl:"susza",check:0},{eng:"reference",pl:"referencje",check:0},{eng:"analysis",pl:"analiza",check:0},{eng:"withdrawing",pl:"wyp\u0142ata (got\u00f3wki)",check:0},{eng:"unappealing",pl:"nieatrakcyjne",check:0},{eng:"unsatisfactory",pl:"niedostateczny",check:0},{eng:"countless",pl:"niezliczony",check:0},{eng:"undemanding",pl:"ma\u0142o wymagaj\u0105cy",check:0},{eng:"contestant",pl:"zawodnik",check:0},{eng:"conviction",pl:"przekonanie",check:0},{eng:"incomprehensible",pl:"niezrozumia\u0142y",check:0},{eng:"unappetizing",pl:"nieapetyczny",check:0},{eng:"fellowship",pl:"kole\u017ce\u0144stwo",check:0},{eng:"proof",pl:"dow\u00f3d",check:0},{eng:"difference",pl:"r\u00f3\u017cnica",check:0},{eng:"anticipation",pl:"oczekiwanie",check:0}
    ]
}