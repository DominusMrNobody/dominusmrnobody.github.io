const allWords = {
	p1: [{"eng":"antisocial behaviour","pl":"postawa aspo\u0142eczna","check":0},{"eng":"charity","pl":"organizacja charytatywna","check":0},{"eng":"child benefit","pl":"zasi\u0142ek na dziecko","check":0},{"eng":"community centre","pl":"o\u015brodek kultury","check":0},{"eng":"corruption","pl":"korupcja","check":0},{"eng":"demonstration","pl":"manifestacja","check":0},{"eng":"discrimination","pl":"dyskryminacja","check":0},{"eng":"drug abuse","pl":"narkomania","check":0},{"eng":"emigration","pl":"emigracja","check":0},{"eng":"equal","pl":"r\u00f3wny","check":0},{"eng":"unequal","pl":"nier\u00f3wny","check":0},{"eng":"equality","pl":"r\u00f3wnouprawnienie","check":0},{"eng":"foreigner","pl":"obcokrajowiec","check":0},{"eng":"government programme","pl":"program rz\u0105dowy","check":0},{"eng":"home country","pl":"ojczyna (2s)","check":0},{"eng":"homeland","pl":"ojczyzna (1s)","check":0},{"eng":"homeless","pl":"bezdomny","check":0},{"eng":"homelessness","pl":"bezdomno\u015b\u0107","check":0},{"eng":"immigrant","pl":"imigrant","check":0},{"eng":"immigration","pl":"imigracja","check":0},{"eng":"nation","pl":"nar\u00f3d","check":0},{"eng":"opinion poll","pl":"badanie opinii publicznej","check":0},{"eng":"peaceful gathering","pl":"pokojowe zgromadzenie","check":0},{"eng":"policy","pl":"polityka (spos\u00f3b post\u0119powania)","check":0},{"eng":"social policy","pl":"polityka spo\u0142eczna","check":0},{"eng":"population","pl":"ludno\u015b\u0107","check":0},{"eng":"poverty","pl":"bieda","check":0},{"eng":"racism","pl":"rasizm","check":0},{"eng":"refugee","pl":"uchod\u017aca","check":0},{"eng":"social issues","pl":"kwestie spo\u0142eczne","check":0},{"eng":"social services","pl":"pomoc spo\u0142eczna","check":0},{"eng":"unemployment","pl":"bezrobocie","check":0},{"eng":"unemployment benefit","pl":"zasi\u0142ek dla bezrobotnych","check":0},{"eng":"voluntary work","pl":"wolontariat","check":0},{"eng":"volunteer","pl":"wolontariusz","check":0},
	{"eng":"voting","pl":"g\u0142osowanie","check":0},{"eng":"voting age","pl":"wiek uprawniaj\u0105cy do g\u0142osowania","check":0},{"eng":"welfare benefit","pl":"zasi\u0142ek z opieki spo\u0142ecznej","check":0},{"eng":"welfare state","pl":"pa\u0144stwo opieku\u0144cze","check":0},{"eng":"gender inequality","pl":"nier\u00f3wno\u015b\u0107 mi\u0119dzy kobietami i m\u0119\u017cczyznami","check":0},{"eng":"overpopulation","pl":"przeludnienie","check":0},{"eng":"be on the dole","pl":"by\u0107 na zasi\u0142ku dla bezrobotnych","check":0},{"eng":"be out of work","pl":"nie mie\u0107 pracy","check":0},{"eng":"claim benefits","pl":"pobiera\u0107 zasi\u0142ki","check":0},{"eng":"demonstrate","pl":"manifestowa\u0107","check":0},{"eng":"discriminate against sb","pl":"dyskryminowa\u0107 kogo\u015b","check":0},{"eng":"emigrate","pl":"emigrowa\u0107","check":0},{"eng":"immigrate","pl":"imigrowa\u0107","check":0},{"eng":"meet basic needs","pl":"zaspokaja\u0107 podstawowe potrzeby","check":0},{"eng":"raise money","pl":"zbiera\u0107 pieni\u0105dze","check":0},{"eng":"represent","pl":"reprezentowa\u0107","check":0},{"eng":"vote","pl":"g\u0142osowa\u0107","check":0}],

	p2: [{"eng":"balance of power","pl":"r\u00f3wnowaga si\u0142","check":0},{"eng":"border","pl":"granica","check":0},{"eng":"border country","pl":"kraj s\u0105siaduj\u0105cy (b)","check":0},{"eng":"cabinet","pl":"rz\u0105d \/ gabinet \/ rada ministr\u00f3w","check":0},{"eng":"the lower chamber","pl":"izba ni\u017csza","check":0},{"eng":"the upper chamber","pl":"izba wy\u017csza","check":0},{"eng":"county","pl":"hrabstwo \/ powiat","check":0},{"eng":"current constitution","pl":"obecna konstytucja","check":0},{"eng":"democratic state","pl":"pa\u0144stwo demokratyczne","check":0},{"eng":"executive branch","pl":"w\u0142adza wykonawcza (b)","check":0},{"eng":"executive power","pl":"w\u0142adza wykonawcza (p)","check":0},{"eng":"inhabitant","pl":"mieszkaniec (i)","check":0},{"eng":"judicial power","pl":"w\u0142adza s\u0105downicza (2s)","check":0},{"eng":"judiciary","pl":"s\u0105downictwo \/ w\u0142adza s\u0105downicza (1s)","check":0},{"eng":"legislature","pl":"zgromadzenie ustawodawcze","check":0},{"eng":"national anthem","pl":"hymn pa\u0144stwowy","check":0},{"eng":"neighbouring country","pl":"kraj s\u0105siaduj\u0105cy (n)","check":0},{"eng":"prosecution","pl":"oskar\u017cenie","check":0},{"eng":"resident","pl":"mieszkaniec (r)","check":0},{"eng":"separation of powers","pl":"podzia\u0142 w\u0142adz","check":0},{"eng":"amnesty international","pl":"amnesty international (organizacja na rzecz praw cz\u0142owieka)","check":0},{"eng":"european union","pl":"unia europejska (EU)","check":0},{"eng":"international monetary fund","pl":"mi\u0119dzynarodowy fundusz walutowy (IMF)","check":0},{"eng":"non-governmental organisation","pl":"organizacja pozarz\u0105dowa (NGO)","check":0},{"eng":"non-profit organisation","pl":"organizacja non-profit","check":0},{"eng":"north atlantic treaty organisation","pl":"pakt p\u00f3\u0142nocno atlantycki (NATO)","check":0},{"eng":"united nations","pl":"ONS - organizacja narod\u00f3w zjednoczonych (UN)","check":0},{"eng":"world health organisation","pl":"\u015bwiatowa organizacja zdrowia (WHO)","check":0}],

	p3: [{"eng":"ambassador","pl":"ambasador","check":0},{"eng":"appointment","pl":"mianowanie","check":0},{"eng":"authorities","pl":"w\u0142adze","check":0},{"eng":"be made up of sth","pl":"sk\u0142ada\u0107 si\u0119 z czego\u015b (b)","check":0},{"eng":"city council","pl":"rada miejska (c)","check":0},{"eng":"city councillor","pl":"radny (c)","check":0},{"eng":"city hall","pl":"ratusz (c)","check":0},{"eng":"civil servant","pl":"urz\u0119dnik pa\u0144stwowy","check":0},{"eng":"consist of sth","pl":"sk\u0142ada\u0107 si\u0119 z czego\u015b (c)","check":0},{"eng":"defence ministry","pl":"ministerstwo obrony (2s)","check":0},{"eng":"department for education","pl":"ministerstwo edukacji","check":0},{"eng":"department for transport","pl":"ministerstwo transportu","check":0},{"eng":"embassy","pl":"ambasada","check":0},{"eng":"federal government","pl":"rz\u0105d federalny","check":0},{"eng":"head of government","pl":"szef rz\u0105du","check":0},{"eng":"inaugurate","pl":"wprowadza\u0107 na urz\u0105d","check":0},{"eng":"institution","pl":"instytucja","check":0},{"eng":"intelligence services","pl":"s\u0142u\u017cby wywiadowcze","check":0},{"eng":"legislative brach","pl":"w\u0142adza ustawodawcza","check":0},{"eng":"mayor","pl":"burmistrz","check":0},{"eng":"member of parliament","pl":"pose\u0142 (MP)","check":0},{"eng":"minister","pl":"minister","check":0},{"eng":"ministry of defence","pl":"ministerstwo obrony (3s)","check":0},{"eng":"ministry of justice","pl":"ministerstwo sprawiedliwo\u015bci","check":0},{"eng":"monarch","pl":"monarcha","check":0},{"eng":"official residence","pl":"oficjalna rezydencja","check":0},{"eng":"parliament","pl":"parlament","check":0},{"eng":"passport office","pl":"urz\u0105d paszportowy","check":0},{"eng":"president","pl":"prezydent","check":0},{"eng":"prime minister","pl":"premier (PM)","check":0},{"eng":"representative","pl":"przedstawiciel","check":0},{"eng":"secret service","pl":"s\u0142u\u017cby specjalne","check":0},{"eng":"senator","pl":"senator","check":0},
	{"eng":"state","pl":"pa\u0144stwo","check":0},{"eng":"head of state","pl":"g\u0142owa pa\u0144stwa","check":0},{"eng":"tax office","pl":"urz\u0105d skarbowy","check":0},{"eng":"the capitol","pl":"kapitol","check":0},{"eng":"the house of commons","pl":"izba gmin","check":0},{"eng":"the house of lords","pl":"izba lord\u00f3w","check":0},{"eng":"the house of representatives","pl":"izba reprezentant\u00f3w","check":0},{"eng":"the senate","pl":"senat","check":0},{"eng":"the united states congress","pl":"kongres stan\u00f3w zjednoczonych","check":0},{"eng":"cabinet minister","pl":"minister \/ cz\u0142onek rady ministr\u00f3w","check":0},{"eng":"chancellor","pl":"kanclerz","check":0},{"eng":"the constitutional tribunal","pl":"trybuna\u0142 konsytucyjny","check":0},{"eng":"the council of ministers","pl":"rada ministr\u00f3w","check":0},{"eng":"the supreme court","pl":"s\u0105d najwy\u017cszy","check":0},{"eng":"the tribunal of state","pl":"trybuna\u0142 stanu","check":0},{"eng":"apply the law","pl":"stosowa\u0107 prawo","check":0},{"eng":"attribute to sb","pl":"przypisywa\u0107 komu\u015b","check":0},{"eng":"composed of sth","pl":"z\u0142o\u017cony z czego\u015b","check":0},{"eng":"exercise power","pl":"sprawowa\u0107 w\u0142adz\u0119","check":0},{"eng":"implement","pl":"wdra\u017ca\u0107 \/ wprowadza\u0107 w \u017cycie","check":0},{"eng":"pass a new law","pl":"przyj\u0105\u0107 nowe prawo","check":0},{"eng":"pass a new bill","pl":"przyj\u0105\u0107 now\u0105 ustaw\u0119","check":0},{"eng":"ratify treaties","pl":"ratyfikowa\u0107 traktaty","check":0},{"eng":"resolve disputes","pl":"rozstrzyga\u0107 spory","check":0},{"eng":"vest power","pl":"nadawa\u0107 w\u0142adz\u0119","check":0}],

	p4: [{"eng":"civilian","pl":"cywil","check":0},{"eng":"front line","pl":"linia frontu","check":0},{"eng":"intervention","pl":"interwencja","check":0},{"eng":"liberation","pl":"wyzwolenie","check":0},{"eng":"march","pl":"marsz \/ maszerowa\u0107","check":0},{"eng":"mob","pl":"t\u0142um","check":0},{"eng":"peace conference","pl":"konferencja pokojowa","check":0},{"eng":"protester","pl":"protestuj\u0105cy","check":0},{"eng":"rebellion","pl":"bunt","check":0},{"eng":"riots","pl":"zamieszki","check":0},{"eng":"soldier","pl":"\u017co\u0142nierz","check":0},{"eng":"tank","pl":"czog\u0142","check":0},{"eng":"the military","pl":"wojsko \/ armia","check":0},{"eng":"weapon","pl":"bro\u0144","check":0},{"eng":"world peace","pl":"pok\u00f3j na \u015bwiecie","check":0},{"eng":"world war","pl":"wojna \u015bwiatowa","check":0},{"eng":"armed conflict","pl":"konflikt zbrojny","check":0},{"eng":"civil war","pl":"wojna domowa","check":0},{"eng":"break out","pl":"wybuchn\u0105\u0107 (o wojnie lub zamieszkach)","check":0},{"eng":"bring sth under control","pl":"opanowa\u0107 co\u015b \/ zapanowa\u0107 nad czym\u015b","check":0},{"eng":"cause damage","pl":"wyrz\u0105dzi\u0107 szkod\u0119","check":0},{"eng":"declare war on sb","pl":"wypowiedzie\u0107 komu\u015b wojn\u0119","check":0},{"eng":"follow orders","pl":"wykonywa\u0107 rozkazy","check":0},{"eng":"invade","pl":"naje\u017cd\u017ca\u0107","check":0},{"eng":"occupy","pl":"okupowa\u0107","check":0},{"eng":"prostest","pl":"protestowa\u0107","check":0},{"eng":"surrender","pl":"podda\u0107 si\u0119","check":0},{"eng":"withdraw troops","pl":"wycofa\u0107 wojsko","check":0},
	{"eng":"assault","pl":"napada\u0107 \/ atakowa\u0107","check":0},{"eng":"attack","pl":"atakowa\u0107","check":0},{"eng":"attempt","pl":"pr\u00f3bowa\u0107 \/ usi\u0142owa\u0107","check":0},{"eng":"blow up","pl":"wysadzi\u0107 w powietrze","check":0},{"eng":"bribe","pl":"przekupi\u0107","check":0},{"eng":"burgle","pl":"w\u0142ama\u0107 si\u0119 i okra\u015b\u0107","check":0},{"eng":"deny","pl":"zaprzecza\u0107","check":0},{"eng":"fake","pl":"podrobi\u0107 \/ udawa\u0107","check":0},{"eng":"hack","pl":"hakowa\u0107","check":0},{"eng":"investigate","pl":"prowadzi\u0107 dochodzenie","check":0},{"eng":"kidnap","pl":"porwa\u0107","check":0},{"eng":"mug","pl":"napa\u015b\u0107 (na ulicy)","check":0},{"eng":"murder","pl":"zamordowa\u0107","check":0},{"eng":"prove","pl":"udowodni\u0107","check":0},{"eng":"punish","pl":"kara\u0107","check":0},{"eng":"rob","pl":"obrabowa\u0107","check":0},{"eng":"shoplift","pl":"kra\u015b\u0107 w sklepie","check":0},{"eng":"smuggle","pl":"przemyca\u0107","check":0},{"eng":"steal","pl":"kra\u015b\u0107","check":0},{"eng":"threaten","pl":"grozi\u0107","check":0}],

	p5: [{"eng":"arrest","pl":"aresztowanie","check":0},{"eng":"assault","pl":"napa\u015b\u0107","check":0},{"eng":"ban","pl":"zakaz","check":0},{"eng":"stadium ban","pl":"zakaz stadionowy","check":0},{"eng":"bribe","pl":"\u0142ap\u00f3wka","check":0},{"eng":"burglar","pl":"w\u0142amywacz","check":0},{"eng":"burglary","pl":"kradzie\u017c z w\u0142amaniem","check":0},{"eng":"capital punishment","pl":"kara \u015bmierci (c)","check":0},{"eng":"community service","pl":"prace spo\u0142eczne","check":0},{"eng":"crime","pl":"przest\u0119pstwo","check":0},{"eng":"criminal","pl":"przest\u0119pca","check":0},{"eng":"death penalty","pl":"kara \u015bmierci (d)","check":0},{"eng":"defence lawyer","pl":"obro\u0144ca","check":0},{"eng":"drug dealing","pl":"handel narkotykami (d)","check":0},{"eng":"drug trafficking","pl":"handel narkotykami (t)","check":0},{"eng":"evidence","pl":"dow\u00f3d \/ dowody","check":0},{"eng":"fine","pl":"mandat \/ grzywna","check":0},{"eng":"fingerprint","pl":"odcisk palca","check":0},{"eng":"fraud","pl":"oszustwo","check":0},{"eng":"guilty","pl":"winny","check":0},{"eng":"hacker","pl":"haker","check":0},{"eng":"hacking","pl":"hakerstwo","check":0},{"eng":"hold-up","pl":"napa\u015b\u0107 z broni\u0105 w r\u0119ku","check":0},{"eng":"hostage","pl":"zak\u0142adnik","check":0},{"eng":"imprisonment","pl":"karta pozbawienia wolno\u015bci","check":0},{"eng":"innocent","pl":"niewinny","check":0},
	{"eng":"investigation","pl":"\u015bledztwo \/ dochodzenie","check":0},{"eng":"jail","pl":"wi\u0119zienie (j)","check":0},{"eng":"justice","pl":"sprawiedliwo\u015b\u0107","check":0},{"eng":"kidnapper","pl":"porywacz","check":0},{"eng":"kidnapping","pl":"porwanie","check":0},{"eng":"law","pl":"przepis \/ ustawa","check":0},{"eng":"life of crime","pl":"\u017cycie przest\u0119pcze","check":0},{"eng":"murder","pl":"morderstwo","check":0},{"eng":"murderer","pl":"morderca","check":0},{"eng":"offence","pl":"przest\u0119pstwo \/ wykroczenie","check":0},{"eng":"offender","pl":"sprawca \/ przest\u0119pca","check":0},{"eng":"pickpocket","pl":"kieszonkowiec","check":0},{"eng":"pickpocketing","pl":"kradzie\u017c kieszonkowa","check":0},{"eng":"pirate","pl":"pirat (np. komputerowy)","check":0},{"eng":"prison","pl":"wi\u0119zienie (p)","check":0},{"eng":"prisoner","pl":"wi\u0119zie\u0144","check":0},{"eng":"prison officer","pl":"stra\u017cnik wi\u0119zienny","check":0},{"eng":"private detective","pl":"prywatny detektyw","check":0},{"eng":"prosecutor","pl":"oskar\u017cyciel \/ prokurator","check":0},{"eng":"punishment","pl":"kara","check":0},{"eng":"ransom","pl":"okup","check":0},{"eng":"robber","pl":"rabu\u015b","check":0},{"eng":"robbery","pl":"napad rabunkowy","check":0},{"eng":"armed robbery","pl":"napad z broni\u0105 w r\u0119ku","check":0},{"eng":"security camera","pl":"kamera nadzoruj\u0105ca","check":0},
	{"eng":"sentence","pl":"wyrok","check":0},{"eng":"life sentence","pl":"do\u017cywocie","check":0},{"eng":"five-year sentence","pl":"pi\u0119\u0107 lat pozbawienia wolno\u015bci","check":0},{"eng":"prison sentence","pl":"kara pozbawienia wolno\u015bci","check":0},{"eng":"suspended sentence","pl":"wyrok w zawieszeniu","check":0},{"eng":"severe punishment","pl":"surowa kara","check":0},{"eng":"shoplifter","pl":"z\u0142odziej sklepowy","check":0},{"eng":"shoplifting","pl":"kradzie\u017c sklepowa","check":0},{"eng":"smuggler","pl":"przemytnik","check":0},{"eng":"smuggling","pl":"przemyt","check":0},{"eng":"speeding","pl":"przekroczenie pr\u0119dko\u015bci przez kierowce","check":0},{"eng":"suspect","pl":"podejrzany","check":0},{"eng":"terrorism","pl":"terroryzm","check":0},{"eng":"terrorist","pl":"terrorysta","check":0},{"eng":"the accused","pl":"oskar\u017cony","check":0},{"eng":"theft","pl":"kradzie\u017c","check":0},{"eng":"thief","pl":"z\u0142odziej","check":0},{"eng":"trial","pl":"rozprawa","check":0},{"eng":"vandal","pl":"wandal","check":0},{"eng":"vandalism","pl":"wandalizm","check":0},{"eng":"victim","pl":"ofiara","check":0},{"eng":"violence","pl":"przemoc","check":0},{"eng":"violent","pl":"agresywny \/ brutalny","check":0},{"eng":"witness","pl":"\u015bwiadek","check":0},{"eng":"bully","pl":"osoba zn\u0119caj\u0105ca si\u0119 nad s\u0142abszymi","check":0},{"eng":"court of law","pl":"s\u0105d","check":0},{"eng":"juvenile delinquent","pl":"m\u0142odociany przest\u0119pca (j)","check":0},{"eng":"teenage delinquent","pl":"m\u0142odociany przest\u0119pca (t) ","check":0},{"eng":"manslaughter","pl":"nieumy\u015blne spowodowanie \u015bmierci","check":0},{"eng":"stalker","pl":"prze\u015bladowca","check":0},{"eng":"verdict","pl":"wyrok \/ werdykt","check":0}],

	p6: [{"eng":"accept a bribe","pl":"przyj\u0105\u0107 \u0142ap\u00f3wk\u0119","check":0},{"eng":"be accused of sth","pl":"zosta\u0107 o co\u015b oskar\u017conym","check":0},{"eng":"be executed","pl":"zosta\u0107 straconym","check":0},{"eng":"be identified","pl":"zosta\u0107 zidentyfikowanym","check":0},{"eng":"be sentenced to three years","pl":"by\u0107 skazanym na trzy lata","check":0},{"eng":"be under arrest","pl":"by\u0107 aresztowanym","check":0},{"eng":"break into sth","pl":"w\u0142ama\u0107 si\u0119 do czego\u015b","check":0},{"eng":"break out of prison","pl":"uciec z wi\u0119zienia","check":0},{"eng":"break the law","pl":"z\u0142ama\u0107 prawo","check":0},{"eng":"commit a crime","pl":"pope\u0142ni\u0107 przest\u0119pstwo","check":0},{"eng":"deal drugs","pl":"handlowa\u0107 narkotykami","check":0},{"eng":"drop charges","pl":"wycofa\u0107 oskar\u017cenie","check":0},{"eng":"drop your weapon","pl":"rzuci\u0107 bro\u0144","check":0},{"eng":"get away with sth","pl":"unikn\u0105\u0107 kary za co\u015b","check":0},{"eng":"give sb a ticket for speeding","pl":"da\u0107 komu\u015b mandat za przekroczenie pr\u0119dko\u015bci","check":0},{"eng":"go on trial","pl":"stan\u0105\u0107 przed s\u0105dem","check":0},{"eng":"have a criminal record","pl":"by\u0107 notowanym (przez policj\u0119)","check":0},{"eng":"have the right to remain silent","pl":"mie\u0107 prawo zachowa\u0107 milczenie","check":0},{"eng":"hold up sth","pl":"napada\u0107 na co\u015b","check":0},{"eng":"lock sb up","pl":"zamyka\u0107 kogo\u015b (np. w wi\u0119zieniu)","check":0},{"eng":"negotiate a deal","pl":"negocjowa\u0107 uk\u0142ad","check":0},
	{"eng":"pick sb's pocket","pl":"dokona\u0107 kradzie\u017cy kieszonkowej","check":0},{"eng":"put under arrest","pl":"aresztowa\u0107","check":0},{"eng":"release from prison","pl":"zwolni\u0107 z wi\u0119zienia","check":0},{"eng":"release sb on bail","pl":"zwolni\u0107 kogo\u015b za kaucj\u0105","check":0},{"eng":"report sth to the police","pl":"zg\u0142osi\u0107 co\u015b na policji","check":0},{"eng":"send sb to jail","pl":"wys\u0142a\u0107 kogo\u015b do wi\u0119zienia","check":0},{"eng":"serve a prison sentence","pl":"odbywa\u0107 kar\u0119 wi\u0119zienia","check":0},{"eng":"set fire to sth","pl":"podpali\u0107 co\u015b","check":0},{"eng":"shoot sb down","pl":"zastrzeli\u0107 kogo\u015b","check":0},{"eng":"sneak up on sb","pl":"podkra\u015b\u0107 si\u0119 do kogo\u015b","check":0},{"eng":"suspect sb of sth","pl":"podejrzewa\u0107 kogo\u015b o co\u015b","check":0},{"eng":"accuse sb of sth","pl":"oskar\u017cy\u0107 kogo\u015b o co\u015b (a)","check":0},{"eng":"charge sb with sth","pl":"oskar\u017cy\u0107 kogo\u015b o co\u015b (c)","check":0},{"eng":"find sb guilty","pl":"uzna\u0107 kogo\u015b za winnego","check":0},{"eng":"hold sb in custody","pl":"trzyma\u0107 kogo\u015b w areszcie","check":0},{"eng":"plead guilty","pl":"przyzna\u0107 si\u0119 do winy","check":0},{"eng":"plead not guilty","pl":"nie przyzna\u0107 si\u0119 do winy (g)","check":0},{"eng":"plead innocent","pl":"nie przyzna\u0107 si\u0119 do winy (i)","check":0},{"eng":"sentence to prison","pl":"skaza\u0107 na wi\u0119zienie","check":0}],

	p7: [{"eng":"assembly","pl":"zgromadzenie","check":0},{"eng":"conservative","pl":"konserwatywny","check":0},{"eng":"democracy","pl":"demokracja","check":0},{"eng":"election","pl":"wybory","check":0},{"eng":"general election","pl":"wybory powszechne","check":0},{"eng":"local election","pl":"wybory samorz\u0105dowe","check":0},{"eng":"presidential election","pl":"wybory prezydenckie","check":0},{"eng":"election manifesto","pl":"program wyborczy","check":0},{"eng":"foreign affairs","pl":"sprawy zagraniczne","check":0},{"eng":"forthcoming elections","pl":"nadchodz\u0105ce wybory","check":0},{"eng":"leadership","pl":"przyw\u00f3dztwo","check":0},{"eng":"left-wing","pl":"lewicowy","check":0},{"eng":"liberal","pl":"liberalny","check":0},{"eng":"opposition leader","pl":"lider opozycji","check":0},{"eng":"political","pl":"polityczny","check":0},{"eng":"political leader","pl":"przyw\u00f3dca polityczny","check":0},{"eng":"political scene","pl":"scena polityczna","check":0},{"eng":"political system","pl":"system polityczny","check":0},{"eng":"polling station","pl":"lokal wyborczy","check":0},{"eng":"referendum","pl":"referendum","check":0},{"eng":"right-wing","pl":"prawicowy","check":0},{"eng":"supporter","pl":"zwolennik","check":0},{"eng":"unanimously","pl":"jednog\u0142o\u015bnie \/ jednomy\u015blnie","check":0},{"eng":"vote-winning strategy","pl":"strategia zdobywaj\u0105ca g\u0142osy (wyborc\u00f3w)","check":0},{"eng":"abstain","pl":"wstrzyma\u0107 si\u0119 od g\u0142osu","check":0},{"eng":"be in office","pl":"sprawowa\u0107 w\u0142adz\u0119 \/ piastowa\u0107 urz\u0105d","check":0},{"eng":"declare","pl":"og\u0142asza\u0107","check":0},{"eng":"declare independence","pl":"og\u0142asza\u0107 niepodleg\u0142o\u015b\u0107","check":0},{"eng":"elect","pl":"wybiera\u0107","check":0},{"eng":"eligible to vote","pl":"uprawniony do g\u0142osowania","check":0},{"eng":"form a government","pl":"utworzy\u0107 rz\u0105d (g)","check":0},{"eng":"form a cabinet","pl":"utworzy\u0107 rz\u0105d (c)","check":0},{"eng":"hold an election","pl":"zorganizowa\u0107 wybory","check":0},{"eng":"impeach","pl":"postawi\u0107 w stan oskar\u017cenia","check":0},{"eng":"resign","pl":"z\u0142o\u017cy\u0107 rezygnacj\u0119 (1s)","check":0},{"eng":"serve a term","pl":"sprawowa\u0107 kadencj\u0119","check":0},{"eng":"step down","pl":"z\u0142o\u017cy\u0107 rezygnacj\u0119 (2s)","check":0},{"eng":"support","pl":"popiera\u0107","check":0}],

	p8: [{"eng":"decrease","pl":"spada\u0107 \/ spadek (d)","check":0},{"eng":"demand","pl":"popyt","check":0},{"eng":"domestic trade","pl":"handel wewn\u0119trzny","check":0},{"eng":"downturn","pl":"spadek \/ schy\u0142ek koniunktury","check":0},{"eng":"economic crisis","pl":"kryzys gospodarczy","check":0},{"eng":"economic growth","pl":"wzrost gospodarczy","check":0},{"eng":"economic recovery","pl":"uzdrowienie gospodarki","check":0},{"eng":"econimics","pl":"ekonomia","check":0},{"eng":"fall","pl":"spada\u0107 \/ spadek (f)","check":0},{"eng":"food bank","pl":"bank \u017cywno\u015bci","check":0},{"eng":"food poverty","pl":"niedostatek \u017cywno\u015bci","check":0},{"eng":"foreign trade","pl":"handel zagraniczny","check":0},{"eng":"increase borrowing","pl":"zwi\u0119kszy\u0107 zad\u0142u\u017cenie","check":0},{"eng":"investment","pl":"inwestycja","check":0},{"eng":"low-income","pl":"o niskich dochodach","check":0},{"eng":"public spending","pl":"wydatki publiczne (p)","check":0},{"eng":"government spending","pl":"wydatki publiczne (g)","check":0},{"eng":"supply","pl":"poda\u017c","check":0},{"eng":"sustainable economy","pl":"gospodarka zr\u00f3wnowa\u017cona","check":0},{"eng":"citizenship","pl":"obywatelstwo","check":0},{"eng":"change citizenship","pl":"zmieni\u0107 obywatelstwo","check":0},{"eng":"civil liberties","pl":"swobody obywatelskie","check":0},{"eng":"freedom of conscience","pl":"wolno\u015b\u0107 sumienia","check":0},{"eng":"freedom of speech and expression","pl":"wolno\u015b\u0107 s\u0142owa","check":0},{"eng":"violate sb's rights","pl":"narusza\u0107 czyje\u015b prawa","check":0},{"eng":"churchgoer","pl":"osoba chodz\u0105ca do ko\u015bcio\u0142a","check":0},{"eng":"clergy","pl":"kler","check":0},{"eng":"mystical","pl":"mistyczny","check":0},{"eng":"orthodox","pl":"ortodoksyjny","check":0},{"eng":"parishioner","pl":"parafian","check":0},{"eng":"secular","pl":"\u015bwiecki","check":0},{"eng":"spiritual","pl":"duchowy","check":0},{"eng":"anarchist","pl":"anarchista","check":0},{"eng":"apolitical","pl":"apolityczny","check":0},{"eng":"humanism","pl":"humanizm","check":0},{"eng":"idealism","pl":"idealizm","check":0},{"eng":"materialism","pl":"materializm","check":0},{"eng":"pacifist","pl":"pacyfista","check":0},{"eng":"utopian","pl":"utopijny","check":0}],

	p9: [],

	p10: []
}