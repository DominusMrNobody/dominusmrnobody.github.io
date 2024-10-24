const allWords = {
	p1: [
		{eng:"aunt",pl:"ciocia",check:0},{eng:"auntie",pl:"ciocia (zdrobniale)",check:0},{eng:"brother",pl:"brat",check:0},{eng:"brother-in-law",pl:"szwagier",check:0},{eng:"cousin",pl:"kuzyn kuzynka",check:0},{eng:"dad\/daddy\/father",pl:"tata\/tatu\u015b\/ojciec (3s - \/\/)",check:0},{eng:"daughter",pl:"c\u00f3rka",check:0},{eng:"daughter-in-law",pl:"synowa",check:0},{eng:"ex-husband",pl:"by\u0142y m\u0105\u017c",check:0},{eng:"ex-wife",pl:"by\u0142a \u017cona",check:0},{eng:"father-in-law",pl:"te\u015b\u0107",check:0},{eng:"grandchildren",pl:"wnuki",check:0},{eng:"granddaughter",pl:"wnuczka",check:0},{eng:"grandfather\/grandad\/grandpa",pl:"dziadek (11L)\/(7L)\/(zdrobniale)",check:0},{eng:"grandmother\/grandma\/granny",pl:"babcia (11L)\/(7L)\/(zdrobniale)",check:0},{eng:"grandparents",pl:"dziadkowie",check:0},{eng:"grandson",pl:"wnuk",check:0},{eng:"great-grandchildren",pl:"prawnuki",check:0},{eng:"great-granddaughter",pl:"prawnuczka",check:0},{eng:"great-grandfather",pl:"pradziadek",check:0},{eng:"great-grandmother",pl:"prababcia",check:0},{eng:"great-grandparents",pl:"pradziadkowie",check:0},{eng:"great-grandson",pl:"prawnuk",check:0},{eng:"half-brother",pl:"przyrodni brat",check:0},{eng:"half-sister",pl:"przyrodnia siostra",check:0},{eng:"husband",pl:"m\u0105\u017c",check:0},{eng:"mother-in-law",pl:"te\u015bciowa",check:0},{eng:"mum\/mummy\/mother",pl:"mama\/mamusia\/matka (3s - \/\/)",check:0},{eng:"nephew",pl:"siostrzeniec \/ bratanek",check:0},{eng:"niece",pl:"siostrzenica \/ bratanica",check:0},{eng:"only child",pl:"jedynak \/ jedynaczka",check:0},{eng:"parents",pl:"rodzice",check:0},{eng:"parents-in-law",pl:"te\u015bciowie (p)",check:0},{eng:"relative",pl:"krewny",check:0},{eng:"sister",pl:"siostra",check:0},{eng:"sister-in-law",pl:"szwagierka \/ bratowa",check:0},{eng:"single mother",pl:"matka samotnie wychowuj\u0105cy dziecko",check:0},{eng:"single parent",pl:"rodzic samotnie wychowuj\u0105cy dziecko",check:0},{eng:"son",pl:"syn",check:0},{eng:"son-in-law",pl:"zi\u0119\u0107",check:0},{eng:"twin brother",pl:"brat blizniak",check:0},{eng:"twins",pl:"blizniaki",check:0},{eng:"uncle",pl:"wujek \/ stryjek",check:0},{eng:"wife",pl:"\u017cona",check:0},{eng:"adoptive parents",pl:"rodzice adopcyjni",check:0},{eng:"ex",pl:"by\u0142a \/ by\u0142y",check:0},{eng:"extended family",pl:"rodzina wielopokoleniowa",check:0},{eng:"generation",pl:"pokolenie",check:0},{eng:"immediate family",pl:" najbli\u017csza rodzina",check:0},{eng:"in-laws",pl:"te\u015bciowie (i)",check:0},{eng:"orphan",pl:"sierota",check:0},{eng:"parenting skills",pl:"umiej\u0119tno\u015bci rodzicielskie",check:0}
	],
	p2: [
		{eng:"be widowed",pl:"by\u0107 wdow\u0105 \/ wdowcem",check:0},{eng:"divorce",pl:"rozw\u00f3d",check:0},{eng:"engaged",pl:"zar\u0119czony \/ zar\u0119czona",check:0},{eng:"become engaged",pl:"zar\u0119czy\u0107 si\u0119 (b)",check:0},{eng:"get engaged",pl:"zar\u0119czy\u0107 si\u0119 (g)",check:0},{eng:"engagement",pl:"zar\u0119czyny",check:0},{eng:"get a divorce",pl:"rozwie\u015b\u0107 si\u0119",check:0},{eng:"get married to sb",pl:"po\u015blubi\u0107 kogo\u015b (4s)",check:0},{eng:"honeymoon",pl:"miesi\u0105c miodowy",check:0},{eng:"marriage",pl:"ma\u0142\u017ce\u0144stwo (zwi\u0105zek)",check:0},{eng:"married couple",pl:"ma\u0142\u017ce\u0144stwo (para ma\u0142\u017ce\u0144ska)",check:0},{eng:"marry sb",pl:"po\u015blubi\u0107 kogo\u015b (2s)",check:0},{eng:"propose marriage",pl:"o\u015bwiadczy\u0107 si\u0119 (2s)",check:0},{eng:"propose to sb",pl:"o\u015bwiadczy\u0107 si\u0119 komu\u015b (3s)",check:0},{eng:"remarry",pl:"ponownie wyj\u015b\u0107 za m\u0105\u017c \/ o\u017ceni\u0107 si\u0119",check:0},{eng:"separation",pl:"separacja",check:0},{eng:"stay single",pl:"pozosta\u0107 w stanie wolnym",check:0},{eng:"wedding",pl:"\u015blub \/ wesele",check:0},{eng:"be a strict parent",pl:"by\u0107 surowym rodzicem",check:0},{eng:"be expecting a child",pl:"spodziewa\u0107 si\u0119 dziecka",check:0},{eng:"be pregnant",pl:"by\u0107 w ci\u0105\u017cy",check:0},{eng:"care for sb",pl:"troszczy\u0107 si\u0119 o kogo\u015b",check:0},{eng:"get pregnant",pl:"zaj\u015b\u0107 w ci\u0105\u017ce",check:0},{eng:"give birth to a child",pl:"urodzi\u0107 dziecko (g)",check:0},{eng:"grow out of sth",pl:"wyrosn\u0105\u0107 z czego\u015b",check:0},{eng:"grow up",pl:"dorasta\u0107",check:0},{eng:"have a baby",pl:"urodzi\u0107 dziecko (h)",check:0},{eng:"look after sb",pl:"opiekowa\u0107 si\u0119 kim\u015b (l)",check:0},{eng:"look alike",pl:"wygl\u0105da\u0107 podobnie",check:0},{eng:"take care of sb",pl:"opiekowa\u0107 si\u0119 kim\u015b (t)",check:0},{eng:"be a lenient parent",pl:"by\u0107 \u0142agodnym rodzicem",check:0},{eng:"be in foster care",pl:"podlega\u0107 opiece zast\u0119pczej",check:0},{eng:"bring up",pl:"wychowywa\u0107 (dziecko)",check:0},{eng:"custody of a child",pl:"prawo do opieki nad dzieckiem",check:0},{eng:"raise children",pl:"wychowywa\u0107 dzieci",check:0},{eng:"show obedience",pl:"okazywa\u0107 pos\u0142usze\u0144stwo",check:0},{eng:"spoil sb",pl:"rozpieszcza\u0107 kogo\u015b",check:0}
	],
	p3: [
		{eng:"acquaintance",pl:"znajomy znajoma",check:0},{eng:"boyfriend",pl:"ch\u0142opak (sympatia)",check:0},{eng:"circle of friends",pl:"grono przyjaci\u00f3\u0142",check:0},{eng:"colleague",pl:"kolega \/ kole\u017canka z pracy",check:0},{eng:"date",pl:"randka",check:0},{eng:"fascination",pl:"fascynacja \/ zauroczenie",check:0},{eng:"friend",pl:"przyjaciel \/ przyjaci\u00f3\u0142ka",check:0},{eng:"best friend",pl:"najlepszy przyjaciel",check:0},{eng:"close friend",pl:"bliski przyjaciel",check:0},{eng:"family friend",pl:"przyjaciel rodziny",check:0},{eng:"girlfriend",pl:"dziewczyna (sympatia)",check:0},{eng:"love at first sight",pl:"mi\u0142o\u015b\u0107 od pierwszego wejrzenia",check:0},{eng:"mate",pl:"kumpel \/ kumpela",check:0},{eng:"mutual",pl:"wzajemny",check:0},{eng:"schoolmate",pl:"kolega \/ kole\u017canka ze szko\u0142y",check:0},{eng:"soulmate",pl:"bratnia dusza",check:0},{eng:"affection",pl:"sympatia (uczucie)",check:0},{eng:"ask sb out",pl:"zaprosi\u0107 kogo\u015b na randk\u0119",check:0},{eng:"be fond of sb",pl:"czu\u0107 do kogo\u015b sympati\u0119",check:0},{eng:"be in love with sb",pl:"by\u0107 w kim\u015b zakochanym",check:0},{eng:"be ready for a serious relationship",pl:"by\u0107 gotowym na powa\u017cny zwi\u0105zek",check:0},{eng:"get along well with sb",pl:"by\u0107 w z kim\u015b w dobrych stosunkach",check:0},{eng:"go out with sb",pl:"chodzi\u0107 z kim\u015b \/ umawia\u0107 si\u0119 na ranki (g)",check:0},{eng:"have sth in common with sb",pl:"mie\u0107 z kim\u015b co\u015b wsp\u00f3lnego",check:0},{eng:"have a lot in common with sb",pl:"mie\u0107 z kim\u015b wiele wsp\u00f3lnego",check:0},{eng:"look up to sb",pl:"podziwia\u0107 kogo\u015b",check:0},{eng:"love sb",pl:"kocha\u0107 kogo\u015b",check:0},{eng:"make new friends",pl:"zawiera\u0107 nowe przyjaznie",check:0},{eng:"rely on sb",pl:"polega\u0107 na kim\u015b",check:0},{eng:"share interest",pl:"mie\u0107 podobne zainseresowania",check:0},{eng:"split up",pl:"rozsta\u0107 si\u0119 \/ rozej\u015b\u0107 si\u0119",check:0},{eng:"start a relationship with sb",pl:"wej\u015b\u0107 z kim\u015b w zwi\u0105zek",check:0},{eng:"stay in touch with sb",pl:"utrzymywa\u0107 z kim\u015b kontakt",check:0},{eng:"be supportive",pl:"by\u0107 wspieraj\u0105cym",check:0},{eng:"date sb",pl:"chodzi\u0107 z kim\u015b \/ umawia\u0107 si\u0119 na randki (d)",check:0}
	],
	p4: [
		{eng:"babysit",pl:"opiekowa\u0107 si\u0119 dzieckiem (kogo\u015b)",check:0},{eng:"cook a meal",pl:"ugotowa\u0107 posi\u0142ek",check:0},{eng:"daily routine",pl:"ustalony porz\u0105dek",check:0},{eng:"eat out",pl:"je\u015b\u0107 poza domem",check:0},{eng:"get dressed",pl:"ubiera\u0107 si\u0119",check:0},{eng:"get ready for bed",pl:"szykowa\u0107 sie do spania",check:0},{eng:"get the children to school",pl:"zaprowadzi\u0107 dzieci do szko\u0142y (g)",check:0},{eng:"get up",pl:"wstawa\u0107",check:0},{eng:"go to bed early",pl:"k\u0142a\u015b\u0107 si\u0119 spa\u0107 wcze\u015bnie",check:0},{eng:"go to school",pl:"i\u015b\u0107 do szko\u0142y",check:0},{eng:"go to work",pl:"i\u015b\u0107 do pracy",check:0},{eng:"have a coffee",pl:"wypi\u0107 kaw\u0119",check:0},{eng:"have a meal",pl:"zje\u015b\u0107 posi\u0142ek",check:0},{eng:"have breakfast",pl:"je\u015b\u0107 \u015bniadanie",check:0},{eng:"have dinner",pl:"je\u015b\u0107 obiad",check:0},{eng:"have supper",pl:"je\u015b\u0107 kolacj\u0119",check:0},{eng:"have tea",pl:"je\u015b\u0107 podwieczorek \/ pi\u0107 herbat\u0119",check:0},{eng:"have a bath",pl:"bra\u0107 k\u0105piel (h)",check:0},{eng:"take a bath",pl:"bra\u0107 k\u0105piel (t)",check:0},{eng:"have a nap",pl:"zdrzemn\u0105\u0107 si\u0119 (h)",check:0},{eng:"take a nap",pl:"zdrzemn\u0105\u0107 si\u0119 (t)",check:0},{eng:"have a rest",pl:"odpoczywa\u0107 (h)",check:0},{eng:"take a rest",pl:"odpoczywa\u0107 (t)",check:0},{eng:"have a shower",pl:"bra\u0107 prysznic (h)",check:0},{eng:"take a shower",pl:"bra\u0107 prysznic (t)",check:0},{eng:"lie down",pl:"po\u0142o\u017cy\u0107 si\u0119",check:0},{eng:"pick up the children from school",pl:"odebra\u0107 dzieci ze szko\u0142y",check:0},{eng:"prepare a meal",pl:"przygotowywa\u0107 posi\u0142ek",check:0},{eng:"take it in turns to do sth",pl:"wykonywa\u0107 co\u015b na zmian\u0119",check:0},{eng:"take the children to school",pl:"zaprowadzi\u0107 dzieci do szko\u0142y (t)",check:0},{eng:"take the dog for a walk",pl:"wyprowadzi\u0107 psa na spacer",check:0},{eng:"undress",pl:"rozbiera\u0107 si\u0119",check:0},{eng:"wake up",pl:"budzi\u0107 si\u0119",check:0}
	],
	p5: [
		{eng:"ahead of time",pl:"z wyprzedzeniem",check:0},{eng:"any day now",pl:"lada dzie\u0144 \/ wkr\u00f3tce",check:0},{eng:"anytime soon",pl:"w najbli\u017cszym czasie",check:0},{eng:"as soon as",pl:"jak tylko \/ kiedy tylko",check:0},{eng:"at once",pl:"natychmiast",check:0},{eng:"at present",pl:"obecnie (2s)",check:0},{eng:"bad time",pl:" z\u0142y moment",check:0},{eng:"right time",pl:" odpowiedni moment",check:0},{eng:"better late than never",pl:"lepiej p\u00f3zno ni\u017c wcale",check:0},{eng:"by the time",pl:"do czasu gdy \/ zanim",check:0},{eng:"currently",pl:"obecnie (1s)",check:0},{eng:"day by day",pl:" z ka\u017cdym dniem \/ stopniowo \/ powoli",check:0},{eng:"day off",pl:"dzie\u0144 wolny",check:0},{eng:"time off",pl:"czas wolny",check:0},{eng:"every time",pl:"za ka\u017cdym razem",check:0},{eng:"for a while",pl:"przez chwil\u0119",check:0},{eng:"in a while",pl:"za chwil\u0119",check:0},{eng:"in no time",pl:"b\u0142yskawicznie \/ w mgnieniu oka",check:0},{eng:"just in time",pl:"w sam\u0105 por\u0119 (j)",check:0},{eng:"meanwhile",pl:"w mi\u0119dzyczasie",check:0},{eng:"never ever",pl:"nigdy w \u017cyciu \/ przenigdy",check:0},{eng:"no sooner",pl:"ledwo",check:0},{eng:"nowadays",pl:"w dzisiejszych czasach",check:0},{eng:"on time",pl:"punktualnie",check:0},{eng:"once",pl:"kiedy\u015b \/ dawniej \/ raz",check:0},{eng:"once in a while",pl:"raz na jaki\u015b czas",check:0},{eng:"once upon a time",pl:"dawno dawno temu",check:0},{eng:"once-in-a-lifetime opportunity",pl:"jedyna w \u017cyciu okazja",check:0},{eng:"pretty soon",pl:"ca\u0142kiem nied\u0142ugo \/ wkr\u00f3tce",check:0},{eng:"soon afterwards",pl:"nied\u0142ugo potem",check:0},{eng:"soon enough",pl:"w por\u0119 (s)",check:0},{eng:"sooner or later",pl:"pr\u0119dzej czy p\u00f3zniej",check:0},{eng:"the other day",pl:"niedawno \/ kilka dni temu",check:0},{eng:"the sooner the better",pl:"im wcze\u015bniej tym lepiej",check:0},{eng:"to the minute",pl:"co do minuty",check:0},{eng:"with time",pl:"z czasem \/ po czasie",check:0}
	],
	p6: [
		{eng:"ball",pl:"bal",check:0},{eng:"entertainment",pl:"rozrywka",check:0},{eng:"free time",pl:"czas wolny",check:0},{eng:"leisure activities",pl:"zaj\u0119cia w czasie wolnym",check:0},{eng:"party",pl:"impreza",check:0},{eng:"dance party",pl:"pota\u0144c\u00f3wka",check:0},{eng:"fancy-dress party",pl:"bal kostiumowy",check:0},{eng:"house party",pl:"impreza w domu",check:0},{eng:"weekend plans",pl:"plany na weekend",check:0},{eng:"do a spanish conversation course",pl:"robi\u0107 kurs m\u00f3wienia z hiszpa\u0144skiego",check:0},{eng:"do creative writing",pl:"uczy\u0107 si\u0119 kreatywnego pisania",check:0},{eng:"enjoy yourself",pl:"dobrze si\u0119 bawi\u0107",check:0},{eng:"go bowling",pl:"i\u015b\u0107 na kr\u0119gle",check:0},{eng:"go cycling",pl:"jezdzi\u0107 na rowerze",check:0},{eng:"go dancing",pl:"i\u015b\u0107 pota\u0144czy\u0107",check:0},{eng:"go for a walk",pl:"i\u015b\u0107 na spacer",check:0},{eng:"go jogging",pl:"i\u015b\u0107 pobiega\u0107",check:0},{eng:"go kayaking",pl:"p\u0142ywa\u0107 kajakiem",check:0},{eng:"go online",pl:"sp\u0119dzia\u0107 czas w internecie",check:0},{eng:"go out",pl:"wychodzi\u0107 z domu",check:0},{eng:"go out for a meal",pl:"i\u015b\u0107 do restauracji",check:0},{eng:"go sightseeing",pl:"zwiedza\u0107",check:0},{eng:"go to a concert",pl:"i\u015b\u0107 na koncert",check:0},{eng:"go to a disco",pl:"i\u015b\u0107 na dyskotek\u0119",check:0},{eng:"go to a party",pl:"i\u015b\u0107 na przyj\u0119cie",check:0},{eng:"go to the cinema",pl:"i\u015b\u0107 do kina",check:0},{eng:"go to the gym",pl:"i\u015b\u0107 na si\u0142ownie",check:0},{eng:"hang out with friends",pl:"sp\u0119dza\u0107 czas z przyjaci\u00f3\u0142mi",check:0},{eng:"have a good time",pl:"dobrze sie bawi\u0107 (4s)",check:0},{eng:"have fun",pl:"dobrze si\u0119 bawi\u0107 (2s)",check:0},{eng:"listen to music",pl:"s\u0142ycha\u0107 muzyki",check:0},{eng:"listen to the radio",pl:"s\u0142ucha\u0107 radia",check:0},{eng:"look forward to sth",pl:"czeka\u0107 na co\u015b z niecierpliwo\u015bci\u0105",check:0},{eng:"meet friends",pl:"spotyka\u0107 si\u0119 z przyjaci\u00f3\u0142mi",check:0},{eng:"play badminton",pl:"gra\u0107 w badmintona",check:0},{eng:"play cards",pl:"gra\u0107 w karty",check:0},{eng:"play chess",pl:"gra\u0107 w szachy",check:0},
		{eng:"play video games",pl:"gra\u0107 w gry komputerowe",check:0},{eng:"play sports",pl:"uprawia\u0107 sport (p4L)",check:0},{eng:"play the guitar",pl:"gra\u0107 na gitarze",check:0},{eng:"read alound to sb",pl:"czyta\u0107 komu\u015b na g\u0142os",check:0},{eng:"spend time outdoors",pl:"sp\u0119dza\u0107 czas na \u015bwie\u017cym powietrzu",check:0},{eng:"spend time together",pl:"sp\u0119dza\u0107 czas razem",check:0},{eng:"spend time with friends and family",pl:"sp\u0119dza\u0107 czas z przyjaci\u00f3\u0142mi i rodzin\u0105",check:0},{eng:"stay at home",pl:"zostawa\u0107 w domu",check:0},{eng:"watch a film",pl:"ogl\u0105da\u0107 film",check:0},{eng:"watch TV",pl:"ogl\u0105da\u0107 telewizj\u0119",check:0},{eng:"binge-watch",pl:"ogl\u0105da\u0107 jeden po drugim nieprzerwanie ",check:0},{eng:"browse content on the web",pl:"przegl\u0105da\u0107 tre\u015bci w internecie",check:0},{eng:"go clubbing",pl:"i\u015bc do klubu",check:0},{eng:"hit the town",pl:"wyskoczy\u0107 na miasto",check:0},{eng:"lie in",pl:"wylegiwa\u0107 si\u0119",check:0},{eng:"play board games",pl:"gra\u0107 w gry planszowe",check:0},{eng:"practise sport",pl:"uprawia\u0107 sport (p8L)",check:0},{eng:"scan social media sites",pl:"przegl\u0105da\u0107 media spo\u0142eczno\u015bciowe",check:0},{eng:"socialise",pl:"prowadzi\u0107 \u017cycie towarzyskie",check:0}
	],
	p7: [
		{eng:"boxing day",pl:"drugi dzie\u0144 \u015bwi\u0105t bo\u017cego narodzenia",check:0},{eng:"christmas",pl:"bo\u017ce narodzenie",check:0},{eng:"christmas carol",pl:"kol\u0119da",check:0},{eng:"christmas day",pl:"pierwszy dzie\u0144 \u015bwi\u0105t bo\u017cego narodzenia",check:0},{eng:"christmas decorations",pl:"ozdoby \u015bwi\u0105teczne",check:0},{eng:"christmas eve",pl:"wigilia",check:0},{eng:"christmas fair",pl:"jarmark bo\u017conarodzeniowy",check:0},{eng:"christmas tree",pl:"choinka",check:0},{eng:"break the wafer",pl:"\u0142ama\u0107 si\u0119 op\u0142atkiem",check:0},{eng:"decorate the christmas tree",pl:"ubiera\u0107 choink\u0119",check:0},{eng:"first star in the sky",pl:"pierwsza gwiazda na niebie",check:0},{eng:"santa claus",pl:"\u015bwi\u0119ty miko\u0142aj",check:0},{eng:"wrap a present",pl:"zapakowa\u0107 prezent",check:0},{eng:"unwrap a present",pl:"odpakowa\u0107 prezent",check:0},{eng:"festive season",pl:"okres \u015bwi\u0105teczny w czasie bo\u017cego narodzenia",check:0},{eng:"make new year's resolutions",pl:"robi\u0107 postanowienia noworoczne",check:0},{eng:"new year's day",pl:"nowy rok",check:0},{eng:"new year's eve",pl:"sylwester",check:0},{eng:"set off fireworks",pl:"odpala\u0107 fajerwerki",check:0},{eng:"wait till midnight",pl:"wyczekiwa\u0107 p\u00f3\u0142nocy",check:0},{eng:"carnival season",pl:"okres karnawa\u0142u",check:0},{eng:"easter",pl:"wielkanoc",check:0},{eng:"easter basket",pl:"\u015bwi\u0119conka",check:0},{eng:"easter bunny",pl:"zaj\u0105czek wielkanocny",check:0},{eng:"easter egg",pl:"pisanka",check:0},{eng:"easter sunday",pl:"niedziela wielkanocna",check:0},{eng:"easter monday",pl:"poniedzia\u0142ek wielkanocny",check:0},{eng:"go on an egg hunt",pl:"szuka\u0107 prezent\u00f3w od zaj\u0105czka",check:0},{eng:"paint eggs",pl:"malowa\u0107 jajka",check:0},{eng:"wet monday",pl:"lany poniedzia\u0142ek",check:0}
	],
	p8: [
		{eng:"bank holiday",pl:"dzie\u0144 ustawowo wolny od pracy (b)",check:0},{eng:"children's day",pl:"dzie\u0144 dziecka",check:0},{eng:"chinese new year",pl:"chi\u0144ski nowy rok",check:0},{eng:"father's day",pl:"dzie\u0144 ojca",check:0},{eng:"halloween",pl:"halloween",check:0},{eng:"independence day",pl:"\u015bwi\u0119to niepodleg\u0142o\u015bci",check:0},{eng:"labour day",pl:"\u015bwi\u0119to pracy",check:0},{eng:"mother's day",pl:"dzie\u0144 matki",check:0},{eng:"public holiday",pl:"dzie\u0144 ustawowo wolny od pracy (p)",check:0},{eng:"valentine's day",pl:"walentynki",check:0},{eng:"women's day",pl:"dzie\u0144 kobiet",check:0},{eng:"ash wednesday",pl:"\u015broda popielcowa",check:0},{eng:"fat thursday",pl:"t\u0142usty czwartek",check:0},{eng:"holy week",pl:"wielki tydzie\u0144",check:0},{eng:"lent",pl:"wielki post",check:0},{eng:"mardi gras",pl:"ostatni dzie\u0144 karnawa\u0142u",check:0},{eng:"palm sunday",pl:"niedziela palmowa",check:0},{eng:"passover",pl:"pascha",check:0},{eng:"ramadan",pl:"ramadan",check:0},{eng:"religious holiday",pl:"\u015bwi\u0119to religijne",check:0},{eng:"secular holiday",pl:"\u015bwi\u0119to \u015bwieckie",check:0},{eng:"shrove tuesday",pl:"ostatki",check:0},{eng:"anniversary",pl:"rocznica",check:0},{eng:"birthday",pl:"urodziny",check:0},{eng:"birthday cake",pl:"tort urodzinowy",check:0},{eng:"birthday present",pl:"prezent urodzinowy",check:0},{eng:"birthday party",pl:"przyj\u0119cie urodzinowe",check:0},{eng:"celebration",pl:"uroczysto\u015b\u0107 obchody",check:0},{eng:"ceremony",pl:"ceremonia",check:0},{eng:"festival",pl:"festiwal",check:0},{eng:"funeral",pl:"pogrzeb",check:0},{eng:"wedding",pl:"\u015blub",check:0},{eng:"wedding ceremony",pl:"ceremonia za\u015blubin",check:0},{eng:"wedding reception",pl:"przyj\u0119cie weselne",check:0},{eng:"hen party",pl:"wiecz\u00f3r panie\u0144ski",check:0},{eng:"stag party",pl:"wiecz\u00f3r kawalerski",check:0}
	],
	p9: [
		{eng:"blow out candles",pl:"zdmuchiwa\u0107 \u015bwieczki",check:0},{eng:"carve pumpkins",pl:"wydr\u0105\u017ca\u0107 dynie",check:0},{eng:"celebrate sb's birthday",pl:"obchodzi\u0107 czyje\u015b urodziny",check:0},{eng:"dress up as sb",pl:"przebra\u0107 si\u0119 za kogo\u015b",check:0},{eng:"express good wishes",pl:"sk\u0142ada\u0107 \u017cyczenia",check:0},{eng:"follow the custom",pl:"przestrzega\u0107 zwyczaju tradycji",check:0},{eng:"give a card",pl:"podarowa\u0107 kartk\u0119 okoliczno\u015bciow\u0105",check:0},{eng:"go trick-or-treating",pl:"chodzi\u0107 z cukierkiem lub psikusem",check:0},{eng:"have a celebration",pl:"\u015bwi\u0119towa\u0107 (h)",check:0},{eng:"take part in a parade",pl:"uczestniczy\u0107 w paradzie",check:0},{eng:"commemorate an event",pl:"upami\u0119tni\u0107 wydarzenie",check:0},{eng:"fast",pl:"po\u015bci\u0107",check:0},{eng:"feast",pl:"\u015bwi\u0119towa\u0107 (f)",check:0},{eng:"throw a party",pl:"urz\u0105dza\u0107 impreze",check:0},{eng:"active",pl:"aktywny",check:0},{eng:"avoid stress",pl:"unika\u0107 stresu",check:0},{eng:"balanced diet",pl:"zbilansowana dieta",check:0},{eng:"busy",pl:"aktywny \/ pracowity",check:0},{eng:"busy schedule",pl:"wype\u0142niony harmonogram",check:0},{eng:"do regular exercise",pl:"\u0107wiczy\u0107 regularnie",check:0},{eng:"habit",pl:"nawyk",check:0},{eng:"eating habits",pl:"nawyki \u017cywieniowe",check:0},{eng:"keep fit",pl:"utrzymywa\u0107 form\u0119",check:0},{eng:"lifestyle change",pl:"zmiana stylu \u017cycia",check:0},{eng:"out of shape",pl:"nie w formie",check:0},{eng:"reduce stress",pl:"ograniczy\u0107 stres",check:0},{eng:"stressful",pl:"stresuj\u0105cy",check:0},{eng:"stressed",pl:"zestresowany",check:0},{eng:"tiring",pl:"m\u0119cz\u0105cy",check:0}
	],
	p10: [
		{eng:"argue",pl:"k\u0142\u00f3ci\u0107 si\u0119",check:0},{eng:"argument",pl:"k\u0142\u00f3tnia",check:0},{eng:"break sb's heart",pl:"z\u0142ama\u0107 komu\u015b serce",check:0},{eng:"break up with sb",pl:"zerwa\u0107 z kim\u015b",check:0},{eng:"controlling",pl:"kontroluj\u0105cy",check:0},{eng:"cross personal boundaries",pl:"przekracza\u0107 granice osobiste",check:0},{eng:"disagree",pl:"nie zgadza\u0107 si\u0119",check:0},{eng:"disagreement",pl:"r\u00f3\u017cnica zda\u0144",check:0},{eng:"divorce rate",pl:"wskaznik liczby rozwod\u00f3w",check:0},{eng:"end a relationship with sb",pl:"zako\u0144czy\u0107 z kim\u015b zwi\u0105zek",check:0},{eng:"fall out with sb",pl:"pok\u0142\u00f3ci\u0107 si\u0119 z kim\u015b (f)",check:0},{eng:"family values",pl:"warto\u015bci rodzinne",check:0},{eng:"generation gap",pl:"konflikt pokole\u0144",check:0},{eng:"have a bad relationship with sb",pl:"by\u0107 z kim\u015bw z\u0142ych stosunkach",check:0},{eng:"have a row",pl:"pok\u0142\u00f3ci\u0107 si\u0119 (r)",check:0},{eng:"have an argument",pl:"pok\u0142\u00f3ci\u0107 si\u0119 (a)",check:0},{eng:"hurt sb",pl:"zrani\u0107 kogo\u015b",check:0},{eng:"jealous",pl:"zazdrosny",check:0},{eng:"let sb down",pl:"zawie\u015b\u0107 kogo\u015b",check:0},{eng:"make it up to sb after an argument",pl:"zrekompensowa\u0107 komu\u015b k\u0142\u00f3tni\u0119",check:0},{eng:"push the limits",pl:"przesuwa\u0107 granice",check:0},{eng:"quarrel with sb",pl:"pok\u0142\u00f3ci\u0107 si\u0119 z kim\u015b (q)",check:0},{eng:"rebel",pl:"buntowa\u0107 si\u0119",check:0},{eng:"rebellion",pl:"bunt",check:0},{eng:"run away from home",pl:"ucieka\u0107 z domu",check:0},{eng:"set boundaries",pl:"ustala\u0107 granice",check:0},{eng:"split-up",pl:"rozstanie",check:0},{eng:"talk sth through",pl:"om\u00f3wi\u0107 co\u015b",check:0},{eng:"tell sb off",pl:"gani\u0107 (upomina\u0107) kogo\u015b",check:0},{eng:"be grounded",pl:"mie\u0107 szlaban na wyj\u015bcia",check:0},{eng:"cause emotional distress",pl:"wywo\u0142a\u0107 traum\u0119 emocjonaln\u0105",check:0},{eng:"come to a mutual agreement",pl:"doj\u015b\u0107 do obop\u00f3lnej zgody",check:0},{eng:"crash out of a relationship",pl:"zako\u0144czy\u0107 zwi\u0105zek",check:0},{eng:"drive the split",pl:"doprowadzi\u0107 do rozstania",check:0},{eng:"instigate a break-up",pl:"zainicjowa\u0107 rozstanie",check:0},{eng:"soften the blow",pl:"z\u0142agodzi\u0107 cios",check:0},{eng:"take sb's side",pl:"wzi\u0105\u0107 czyj\u0105\u015b stron\u0119",check:0}
	],
}
