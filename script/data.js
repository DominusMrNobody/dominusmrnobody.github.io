const allWords = {
	p1: [{"eng":"amount","pl":"ilo\u015b\u0107","check":0},{"eng":"eliminate","pl":"wyeliminowa\u0107","check":0},{"eng":"healthy","pl":"zdrowy","check":0},{"eng":"healthy diet","pl":"zdrowa dieta","check":0},{"eng":"healthy food","pl":"zdrowe jedzenie","check":0},{"eng":"healthy habits","pl":"zdrowe nawyki","check":0},{"eng":"high-fat food","pl":"\u017cywno\u015b\u0107 o wysokiej zawarto\u015bci t\u0142uszczu","check":0},{"eng":"inactivity","pl":"brak aktywno\u015bci","check":0},{"eng":"low-fat diet","pl":"dieta niskot\u0142uszczowa","check":0},{"eng":"physical activity","pl":"aktywno\u015b\u0107 fizyczna","check":0},{"eng":"processed food","pl":"przetworzona \u017cywno\u015b\u0107","check":0},{"eng":"reduce","pl":"redukowa\u0107, zmniejsza\u0107","check":0},{"eng":"sleeping patterns","pl":"rytm snu","check":0},{"eng":"unhealthy","pl":"niezdrowy","check":0},{"eng":"variety","pl":"zr\u00f3\u017cnicowanie, urozmaicenie","check":0},{"eng":"avoid stress","pl":"unika\u0107 stresu","check":0},{"eng":"be in good health","pl":"cieszy\u0107 si\u0119 dobrym zdrowiem","check":0},{"eng":"be overweight","pl":"mie\u0107 nadwag","check":0},{"eng":"be unfit","pl":"by\u0107 w z\u0142ej kondycji fizycznej","check":0},{"eng":"breathe smoke","pl":"wdycha\u0107 dym","check":0},{"eng":"consult a health-care professional","pl":"skonsultowa\u0107 si\u0119 z lekarzem","check":0},{"eng":"cope with stress","pl":"radzi\u0107 sobie ze stresem","check":0},{"eng":"cut down on fatty food","pl":"ograniczy\u0107 t\u0142uste pokarmy","check":0},{"eng":"cut out sweets","pl":"wyeliminowa\u0107 s\u0142odycze","check":0},{"eng":"do regular exercise","pl":"regularnie \u0107wiczy\u0107","check":0},{"eng":"follow a sensible diet","pl":"od\u017cywia\u0107 si\u0119 racjonalnie","check":0},{"eng":"get enough sleep","pl":"wysypia\u0107 si\u0119","check":0},{"eng":"give up smoking","pl":"rzuci\u0107 palenie","check":0},{"eng":"have regular check-ups","pl":"przechodzi\u0107 okresowe badania lekarskie","check":0},
	{"eng":"improve your memory","pl":"poprawia\u0107 pami\u0119\u0107","check":0},{"eng":"join a gym","pl":"zapisa\u0107 si\u0119 na si\u0142owni\u0119","check":0},{"eng":"lead a healthy lifestyle","pl":"prowadzi\u0107 zdrowy tryb \u017cycia","check":0},{"eng":"lose weight","pl":"schudn\u0105\u0107","check":0},{"eng":"mealtimes","pl":"pory posi\u0142k\u00f3w","check":0},{"eng":"prevent diseases","pl":"zapobiega\u0107 chorobom","check":0},{"eng":"put on weight","pl":"przybra\u0107 na wadze, przyty\u0107","check":0},{"eng":"take a nap","pl":"zdrzemn\u0105\u0107 si\u0119","check":0},{"eng":"take care of your teeth","pl":"dba\u0107 o z\u0119by","check":0},{"eng":"take the stairs","pl":"chodzi\u0107 po schodach","check":0},{"eng":"feel depressed","pl":"czu\u0107 si\u0119 przygn\u0119bionym","check":0},{"eng":"feel fit","pl":"czu\u0107 si\u0119 dobrze (f)","check":0},{"eng":"feel good","pl":"czu\u0107 si\u0119 dobrze (g)","check":0},{"eng":"feel terrible","pl":"czu\u0107 si\u0119 okropnie","check":0},{"eng":"feel unwell","pl":"\u017ale si\u0119 czu\u0107 (2s)","check":0},{"eng":"feel weak","pl":"czu\u0107 si\u0119 s\u0142abym","check":0},{"eng":"take things easy","pl":"nie denerwowa\u0107 si\u0119 (t)","check":0},{"eng":"tiredness","pl":"zm\u0119czenie","check":0},{"eng":"well-being","pl":"dobre samopoczucie","check":0},{"eng":"mental well-being","pl":"dobre samopoczucie psychiczne","check":0},{"eng":"apprehension","pl":"l\u0119k, obawa","check":0},{"eng":"as right as rain","pl":"zdr\u00f3w jak ryba","check":0},{"eng":"be a bundle of nerves","pl":"by\u0107 k\u0142\u0119bkiem nerw\u00f3w","check":0},{"eng":"be alive and well","pl":"dobrze si\u0119 trzyma\u0107","check":0},{"eng":"be back on your feet","pl":"wr\u00f3ci\u0107 do zdrowia, stan\u0105\u0107 na nogi","check":0},
	{"eng":"feel off-colour","pl":"nie by\u0107 w formie","check":0},{"eng":"feel under the weather","pl":"\u017ale si\u0119 czu\u0107 (idiom)","check":0},{"eng":"give sb a clean bill of health","pl":"wystawi\u0107 komu\u015b \u015bwiadectwo zdrowia","check":0},{"eng":"go cold turkey","pl":"rzuci\u0107, odstawi\u0107 co\u015b nagle, z dnia na dzie\u0144","check":0},{"eng":"look the picture of health","pl":"by\u0107 okazem zdrowia","check":0},{"eng":"sleep like a log","pl":"spa\u0107 jak kamie\u0144\/suse\u0142","check":0},{"eng":"get stressed","pl":"zestresowa\u0107 si\u0119, zdenerwowa\u0107 si\u0119","check":0},{"eng":"cut down on junk food","pl":"ograniczy\u0107 niezdrowe pokarmy","check":0},{"eng":"not feel well","pl":"\u017ale si\u0119 czu\u0107 (3s)","check":0},{"eng":"take it easy","pl":"nie denerwowa\u0107 si\u0119 (i)","check":0}],

	p2: [{"eng":"ankle","pl":"kostka","check":0},{"eng":"arm","pl":"r\u0119ka, rami\u0119","check":0},{"eng":"back","pl":"plecy","check":0},{"eng":"blood","pl":"krew","check":0},{"eng":"bone","pl":"ko\u015b\u0107","check":0},{"eng":"bottom","pl":"pupa","check":0},{"eng":"bowels","pl":"jelita","check":0},{"eng":"brain","pl":"m\u00f3zg","check":0},{"eng":"cell","pl":"kom\u00f3rka","check":0},{"eng":"chest","pl":"klatka piersiowa","check":0},{"eng":"elbow","pl":"\u0142okie\u0107","check":0},{"eng":"foot","pl":"stopa","check":0},{"eng":"feet","pl":"stopy","check":0},{"eng":"finger","pl":"palec (u r\u0119ki)","check":0},{"eng":"fist","pl":"pi\u0119\u015b\u0107","check":0},{"eng":"forehead","pl":"czo\u0142o","check":0},{"eng":"gene","pl":"gen","check":0},{"eng":"head","pl":"g\u0142owa","check":0},{"eng":"heart","pl":"serce","check":0},{"eng":"heel","pl":"pi\u0119ta","check":0},{"eng":"hip","pl":"biodro","check":0},{"eng":"hormone","pl":"hormon","check":0},{"eng":"kidney","pl":"nerka","check":0},{"eng":"knee","pl":"kolano","check":0},{"eng":"lung","pl":"p\u0142uco","check":0},{"eng":"muscle","pl":"mi\u0119sie\u0144","check":0},{"eng":"nail","pl":"paznokie\u0107","check":0},{"eng":"neck","pl":"szyja","check":0},{"eng":"rib","pl":"\u017cebro","check":0},{"eng":"shoulder","pl":"rami\u0119","check":0},{"eng":"skin","pl":"sk\u00f3ra","check":0},{"eng":"skull","pl":"czaszka","check":0},{"eng":"spine","pl":"kr\u0119gos\u0142up","check":0},{"eng":"stomach","pl":"\u017co\u0142\u0105dek","check":0},{"eng":"thigh","pl":"udo","check":0},
	{"eng":"throat","pl":"gard\u0142o","check":0},{"eng":"thumb","pl":"kciuk","check":0},{"eng":"toe","pl":"palec (u stopy)","check":0},{"eng":"tonsil","pl":"migda\u0142ek","check":0},{"eng":"vein","pl":"\u017cy\u0142a","check":0},{"eng":"waist","pl":"talia","check":0},{"eng":"wrist","pl":"nadgarstek","check":0},{"eng":"abdomen","pl":"jama brzuszna, brzuch","check":0},{"eng":"appendix","pl":"wyrostek robaczkowy","check":0},{"eng":"grey matter","pl":"szare kom\u00f3rki","check":0},{"eng":"muscle control","pl":"kontrola nad mi\u0119\u015bniami","check":0},{"eng":"reproductive system","pl":"uk\u0142ad rozrodczy","check":0},{"eng":"sensory perception","pl":"percepcja sensoryczna, postrzeganie zmys\u0142owe","check":0},{"eng":"breathe","pl":"oddycha\u0107","check":0},{"eng":"digest","pl":"trawi\u0107","check":0},{"eng":"expel","pl":"wydala\u0107","check":0},{"eng":"pump blood","pl":"pompowa\u0107 krew","check":0},{"eng":"remove waste and toxins","pl":"usuwa\u0107 zanieczyszczenia i toksyny","check":0}],

	p3: [{"eng":"acne","pl":"tr\u0105dzik","check":0},{"eng":"allergy","pl":"alergia","check":0},{"eng":"cancer lung","pl":"rak p\u0142uc","check":0},{"eng":"cancer breast","pl":"rak piersi","check":0},{"eng":"cold","pl":"przezi\u0119bienie","check":0},{"eng":"condition","pl":"choroba\/schorzenie\/dolegliwo\u015b\u0107; stan","check":0},{"eng":"bad condition","pl":"z\u0142y stan (zdrowia) (b)","check":0},{"eng":"chronic condition","pl":"choroba przewlek\u0142a","check":0},{"eng":"critical condition","pl":"stan krytyczny","check":0},{"eng":"health condition","pl":"problem ze zdrowiem","check":0},{"eng":"skin condition","pl":"choroba sk\u00f3ry","check":0},{"eng":"coronavirus","pl":"koronawirus","check":0},{"eng":"cough","pl":"kaszel","check":0},{"eng":"depression","pl":"depresja","check":0},{"eng":"diarrhoea","pl":"biegunka","check":0},{"eng":"disease","pl":"choroba (d)","check":0},{"eng":"fatal disease","pl":"choroba \u015bmiertelna (f)","check":0},{"eng":"heart disease","pl":"choroba serca","check":0},{"eng":"infectious disease","pl":"choroba zaka\u017ana","check":0},{"eng":"epilepsy","pl":"epilepsja, padaczka","check":0},{"eng":"fast pulse","pl":"szybkie t\u0119tno","check":0},{"eng":"fever","pl":"gor\u0105czka","check":0},{"eng":"flu","pl":"grypa (f)","check":0},{"eng":"food poisoning","pl":"zatrucie pokarmowe","check":0},{"eng":"hay fever","pl":"katar sienny","check":0},{"eng":"headache","pl":"b\u00f3l g\u0142owy","check":0},{"eng":"heart attack","pl":"zawa\u0142 serca","check":0},{"eng":"heart-related illnesses","pl":"choroby zwi\u0105zane z uk\u0142adem kr\u0105\u017cenia","check":0},{"eng":"ill","pl":"chory (i)","check":0},{"eng":"illness","pl":"choroba (i)","check":0},{"eng":"infected","pl":"zara\u017cony, zaka\u017cony","check":0},
	{"eng":"influenza","pl":"grypa (i)","check":0},{"eng":"insomnia","pl":"bezsenno\u015b\u0107","check":0},{"eng":"irritated","pl":"podra\u017cniony","check":0},{"eng":"life-threatening","pl":"zagra\u017caj\u0105cy \u017cyciu","check":0},{"eng":"minor health problem","pl":"ma\u0142y, drobny (problem zdrowotny)","check":0},{"eng":"pain","pl":"b\u00f3l","check":0},{"eng":"chest pain","pl":"b\u00f3l w klatce piersiowej","check":0},{"eng":"pain in your leg","pl":"b\u00f3l w nodze","check":0},{"eng":"muscle pain","pl":"b\u00f3l mi\u0119\u015bni","check":0},{"eng":"sharp pain","pl":"ostry b\u00f3l","check":0},{"eng":"painful","pl":"bolesny","check":0},{"eng":"pandemic","pl":"pandemia","check":0},{"eng":"rash","pl":"wysypka","check":0},{"eng":"redness","pl":"zaczerwienienie, rumie\u0144","check":0},{"eng":"respiratory problems","pl":"problemy z uk\u0142adem oddechowym","check":0},{"eng":"restless legs syndrome","pl":"zesp\u00f3\u0142 niespokojnych n\u00f3g","check":0},{"eng":"runny nose","pl":"katar","check":0},{"eng":"sick","pl":"chory (s)","check":0},{"eng":"sleepiness","pl":"senno\u015b\u0107","check":0},{"eng":"sore throat","pl":"bol\u0105ce gard\u0142o, b\u00f3l gard\u0142a","check":0},{"eng":"stomach cramp","pl":"skurcz \u017co\u0142\u0105dka","check":0},{"eng":"stomachache","pl":"b\u00f3l brzucha","check":0},
	{"eng":"swollen","pl":"spuchni\u0119ty","check":0},{"eng":"toothache","pl":"b\u00f3l z\u0119ba","check":0},{"eng":"travel sickness","pl":"choroba lokomocyjna","check":0},{"eng":"upset stomach","pl":"problemy z \u017co\u0142\u0105dkiem","check":0},{"eng":"virus","pl":"wirus","check":0},{"eng":"brain damage","pl":"uszkodzenie m\u00f3zgu","check":0},{"eng":"bronchitis","pl":"zapalenie oskrzeli","check":0},{"eng":"cardiac arrest","pl":"zatrzymanie akcji serca (c)","check":0},{"eng":"fear of germs","pl":"l\u0119k przed zarazkami","check":0},{"eng":"itchy rash","pl":"sw\u0119dz\u0105ca wysypka","check":0},{"eng":"heart failure","pl":"zatrzymanie akcji serca (h)","check":0},{"eng":"leukaemia","pl":"bia\u0142aczka","check":0},{"eng":"meningitis","pl":"zapalenie opon m\u00f3zgowych","check":0},{"eng":"nausea","pl":"md\u0142o\u015bci","check":0},{"eng":"neurological disorder","pl":"zaburzenia neurologiczne","check":0},{"eng":"obsessive-compulsive disorder","pl":"zaburzenie obsesyjno--kompulsywne, nerwica natr\u0119ctw","check":0},{"eng":"premature death","pl":"przedwczesna \u015bmier\u0107","check":0},{"eng":"post-traumatic stress disorder","pl":"zesp\u00f3\u0142 stresu pourazowego","check":0},{"eng":"sleep disorder","pl":"zaburzenia snu","check":0},{"eng":"splitting headache","pl":"b\u00f3l rozsadzaj\u0105cy g\u0142ow\u0119","check":0},{"eng":"terminal disease","pl":"choroba \u015bmiertelna (t)","check":0},{"eng":"poor condition","pl":"z\u0142y stan (zdrowia) (p)","check":0}],

	p4: [{"eng":"asthma","pl":"astma","check":0},{"eng":"chronic stress","pl":"przewlek\u0142y stres","check":0},{"eng":"dementia","pl":"demencja","check":0},{"eng":"diabetes","pl":"cukrzyca","check":0},{"eng":"hypertension","pl":"nadci\u015bnienie","check":0},{"eng":"life expectancy","pl":"\u015brednia d\u0142ugo\u015b\u0107 \u017cycia","check":0},{"eng":"longevity","pl":"d\u0142ugowieczno\u015b\u0107","check":0},{"eng":"non-communicable disease","pl":"choroba niezaka\u017ana","check":0},{"eng":"obese","pl":"oty\u0142y","check":0},{"eng":"obesity","pl":"oty\u0142o\u015b\u0107","check":0},{"eng":"sedentary lifestyle","pl":"siedz\u0105cy tryb \u017cycia","check":0},{"eng":"stroke","pl":"udar","check":0},{"eng":"be allergic to sth","pl":"by\u0107 uczulonym na co\u015b","check":0},{"eng":"be in pain","pl":"cierpie\u0107 (b\u00f3l)","check":0},{"eng":"catch a cold","pl":"przezi\u0119bi\u0107 si\u0119","check":0},{"eng":"cough","pl":"kaszle\u0107","check":0},{"eng":"die of sth","pl":"umrze\u0107 na co\u015b","check":0},{"eng":"feel cold","pl":"odczuwa\u0107 zimno (4L)","check":0},{"eng":"feel dizzy","pl":"mie\u0107 zawroty g\u0142owy","check":0},{"eng":"feel hot","pl":"by\u0107 rozpalonym","check":0},{"eng":"feel sick","pl":"mie\u0107 md\u0142o\u015bci","check":0},{"eng":"hurt","pl":"bole\u0107","check":0},{"eng":"my arm hurt","pl":"boli mnie r\u0119ka","check":0},{"eng":"look sick","pl":"wygl\u0105da\u0107 na chorego","check":0},{"eng":"lose your eyesight","pl":"straci\u0107 wzrok","check":0},{"eng":"have a heart attack","pl":"mie\u0107 zawa\u0142 serca","check":0},{"eng":"have a high fever","pl":"mie\u0107 wysok\u0105 gor\u0105czk\u0119","check":0},{"eng":"have a high temperature","pl":"mie\u0107 wysok\u0105 temperatur\u0119","check":0},{"eng":"shiver","pl":"mie\u0107 dreszcze","check":0},
	{"eng":"sneeze","pl":"kicha\u0107","check":0},{"eng":"snore","pl":"chrapa\u0107","check":0},{"eng":"suffer an injury","pl":"zosta\u0107 rannym","check":0},{"eng":"suffer from a disease","pl":"cierpie\u0107 na chorob\u0119","check":0},{"eng":"throw up","pl":"wymiotowa\u0107(t)","check":0},{"eng":"tremble","pl":"dr\u017ce\u0107, trz\u0105\u015b\u0107 si\u0119","check":0},{"eng":"vomit","pl":"wymiotowa\u0107(v)","check":0},{"eng":"water","pl":"\u0142zawi\u0107","check":0},{"eng":"dislocate","pl":"wybi\u0107, zwichn\u0105\u0107","check":0},{"eng":"pass away","pl":"umrze\u0107","check":0},{"eng":"pass out","pl":"zemdle\u0107","check":0},{"eng":"pass the virus on to sb","pl":"przenie\u015b\u0107 wirusa na kogo\u015b, zarazi\u0107 kogo\u015b","check":0},{"eng":"tear a muscle","pl":"naderwa\u0107, zerwa\u0107 mi\u0119sie\u0144","check":0},{"eng":"feel chilly","pl":"odczuwa\u0107 zimno (6L)","check":0}],

	p5: [{"eng":"blood pressure","pl":"ci\u015bnienie krwi","check":0},{"eng":"blood test","pl":"badanie krwi","check":0},{"eng":"cream","pl":"ma\u015b\u0107, krem","check":0},{"eng":"crutches","pl":"kule","check":0},{"eng":"cure for sth","pl":"lekarstwo na co\u015b","check":0},{"eng":"diagnosis","pl":"diagnoza","check":0},{"eng":"drops","pl":"krople","check":0},{"eng":"examination","pl":"badanie","check":0},{"eng":"herbal tea","pl":"herbata zio\u0142owa","check":0},{"eng":"in plaster","pl":"w gipsie","check":0},{"eng":"injection","pl":"zastrzyk","check":0},{"eng":"medical advice","pl":"porada lekarska","check":0},{"eng":"medical check-up","pl":"wizyta kontrolna u lekarza","check":0},{"eng":"medication\/medicine\/drug","pl":"lekarstwo","check":0},{"eng":"natural remedy","pl":"naturalny \u015brodek, naturalne lekarstwo","check":0},{"eng":"painkiller","pl":"\u015brodek przeciwb\u00f3lowy","check":0},{"eng":"pill","pl":"tabletka","check":0},{"eng":"sleeping pill","pl":"tabletka nasenna","check":0},{"eng":"plaster cast","pl":"gips","check":0},{"eng":"plastic surgery","pl":"operacja plastyczna","check":0},{"eng":"prescription","pl":"recepta","check":0},{"eng":"on prescription","pl":"na recept\u0119","check":0},{"eng":"prognosis","pl":"rokowania","check":0},{"eng":"side effects","pl":"skutki uboczne","check":0},{"eng":"stethoscope","pl":"stetoskop","check":0},{"eng":"surgery","pl":"operacja \/ gabinet lekarski","check":0},{"eng":"thermometer","pl":"termometr","check":0},{"eng":"treatment","pl":"leczenie, terapia","check":0},{"eng":"vaccination","pl":"szczepienie","check":0},
	{"eng":"vaccine","pl":"szczepionka","check":0},{"eng":"vitamin","pl":"witamina","check":0},{"eng":"x-ray","pl":"prze\u015bwietlenie","check":0},{"eng":"ointment","pl":"ma\u015b\u0107","check":0},{"eng":"over-the-counter medicine","pl":"lek bez recepty","check":0},{"eng":"psychotheraphy","pl":"psychoterapia","check":0},{"eng":"accident and emergency department","pl":"ostry dy\u017cur, oddzia\u0142 ratunkowy (pe\u0142na nazwa)","check":0},{"eng":"a&e","pl":"ostry dy\u017cur, oddzia\u0142 ratunkowy (skr\u00f3t)","check":0},{"eng":"chemist","pl":"farmaceuta, farmaceutka(c)","check":0},{"eng":"general practitioner","pl":"lekarz rodzinny, lekarka rodzinna (pe\u0142na nazwa)","check":0},{"eng":"gp","pl":"lekarz rodzinny, lekarka rodzinna (skr\u00f3t)","check":0},{"eng":"health care","pl":"ochrona zdrowia","check":0},{"eng":"public health care","pl":"publiczny system opieki zdrowotnej","check":0},{"eng":"health centre","pl":"przychodnia, o\u015brodek zdrowia","check":0},{"eng":"hospital","pl":"szpital","check":0},{"eng":"hospital ward","pl":"oddzia\u0142 szpitalny","check":0},{"eng":"optician","pl":"optyk, optyczka","check":0},{"eng":"paramedic","pl":"ratownik medyczny, ratowniczka medyczna","check":0},{"eng":"pharmacist","pl":"farmaceuta, farmaceutka(p)","check":0},{"eng":"consultant","pl":"lekarz specjalista, lekarka specjalistka","check":0},{"eng":"waiting room","pl":"poczekalnia","check":0},{"eng":"be on duty","pl":"mie\u0107 dy\u017cur","check":0},{"eng":"cardiologist","pl":"kardiolog, kardiolo\u017cka","check":0},{"eng":"dermatologist","pl":"dermatolog, dermatolo\u017cka","check":0},{"eng":"ophthalmologist","pl":"okulista, okulistka","check":0},{"eng":"psychiatrist","pl":"psychiatra","check":0},{"eng":"speech therapist","pl":"logopeda, logopedka","check":0},{"eng":"surgeon","pl":"chirurg","check":0}],

	p6: [{"eng":"carry out an operation","pl":"przeprowadzi\u0107 operacj\u0119 (c)","check":0},{"eng":"consult a doctor","pl":"zasi\u0119gn\u0105\u0107 porady lekarza","check":0},{"eng":"cure sb of a disease","pl":"wyleczy\u0107 kogo\u015b z choroby","check":0},{"eng":"diagnose","pl":"diagnozowa\u0107","check":0},{"eng":"drink lots of liquids","pl":"pi\u0107 du\u017co p\u0142yn\u00f3w","check":0},{"eng":"examine sb","pl":"zbada\u0107 kogo\u015b","check":0},{"eng":"extract a tooth","pl":"wyrwa\u0107 z\u0105b (e)","check":0},{"eng":"get better","pl":"wydobrze\u0107","check":0},{"eng":"give sb a blood test","pl":"wykona\u0107 badanie krwi","check":0},{"eng":"give sb an injection","pl":"zrobi\u0107 komu\u015b zastrzyk","check":0},{"eng":"go for a check-up","pl":"i\u015b\u0107 na badania kontrolne","check":0},{"eng":"go to the doctor's","pl":"i\u015b\u0107 do lekarza","check":0},{"eng":"have a tooth out","pl":"usun\u0105\u0107 z\u0105b","check":0},{"eng":"lie down","pl":"po\u0142o\u017cy\u0107 si\u0119","check":0},{"eng":"make an appointment with a doctor","pl":"umawia\u0107 si\u0119 na wizyt\u0119 lekarsk\u0105","check":0},{"eng":"operate on sb","pl":"operowa\u0107 kogo\u015b","check":0},{"eng":"prescribe a medicine","pl":"przepisa\u0107 lekarstwo","check":0},{"eng":"put a plaster cast on sth","pl":"za\u0142o\u017cy\u0107 gips na co\u015b","check":0},{"eng":"recover from sth","pl":"wyzdrowie\u0107","check":0},{"eng":"regain your sight","pl":"odzyska\u0107 wzrok","check":0},{"eng":"run tests","pl":"przeprowadzi\u0107 badania","check":0},{"eng":"see patients","pl":"przyjmowa\u0107 pacjent\u00f3w","check":0},{"eng":"stick a plaster on sth","pl":"przyklei\u0107 plaster na co\u015b (s)","check":0},{"eng":"take sb's blood pressure\/temperature","pl":"mierzy\u0107 komu\u015b ci\u015bnienie\/temperatur\u0119","check":0},{"eng":"treat","pl":"leczy\u0107","check":0},{"eng":"vaccinate against sth","pl":"zaszczepi\u0107 przeciwko czemu\u015b","check":0},{"eng":"ease pain","pl":"z\u0142agodzi\u0107 b\u00f3l","check":0},
	{"eng":"check up on patients","pl":"sprawdza\u0107, jak czuj\u0105 si\u0119 pacjenci","check":0},{"eng":"clear up a rash","pl":"wyleczy\u0107 wysypk\u0119 (o lekach)","check":0},{"eng":"come off a medicine","pl":"przesta\u0107 bra\u0107 lekarstwo","check":0},{"eng":"come round","pl":"odzyska\u0107 przytomno\u015b\u0107","check":0},{"eng":"fight off an illness","pl":"zwalczy\u0107 chorob\u0119","check":0},{"eng":"get referred to a specialist","pl":"zosta\u0107 skierowanym do lekarza specjalisty","check":0},{"eng":"improve metabolism","pl":"poprawi\u0107 przemian\u0119 materii","check":0},{"eng":"increase immunity to infection","pl":"podnosi\u0107 odporno\u015b\u0107 na zaka\u017cenie","check":0},{"eng":"increase the body's flexibility","pl":"zwi\u0119kszy\u0107 elastyczno\u015b\u0107 cia\u0142a","check":0},{"eng":"make a full recovery","pl":"ca\u0142kowicie wyzdrowie\u0107","check":0},{"eng":"relieve tension","pl":"zmniejsza\u0107 napi\u0119cie","check":0},{"eng":"respond well to treatment","pl":"dobrze reagowa\u0107 na leczenie","check":0},{"eng":"sleep deprivation","pl":"niedob\u00f3r snu","check":0},{"eng":"straighten","pl":"wyprostowa\u0107, rozprostowa\u0107","check":0},{"eng":"toss and turn","pl":"przewraca\u0107 si\u0119 z boku na bok","check":0},{"eng":"walk on crutches","pl":"chodzi\u0107 o kulach","check":0},{"eng":"put a plaster on sth","pl":"przyklei\u0107 plaster na co\u015b (p)","check":0},{"eng":"remove a tooth","pl":"usun\u0105\u0107 z\u0105b (r)","check":0},{"eng":"perform an operation","pl":"przeprowadzi\u0107 operacj\u0119 (p)","check":0}],

	p7: [{"eng":"accessible toilet","pl":"toaleta dla os\u00f3b niepe\u0142nosprawnych","check":0},{"eng":"braille","pl":"alfabet Braille'a","check":0},{"eng":"blind","pl":"niewidomy","check":0},{"eng":"deaf","pl":"nies\u0142ysz\u0105cy","check":0},{"eng":"disability","pl":"niepe\u0142nosprawno\u015b\u0107","check":0},{"eng":"disabled","pl":"niepe\u0142nosprawny","check":0},{"eng":"guide dog","pl":"pies przewodnik","check":0},{"eng":"hearing aid","pl":"aparat s\u0142uchowy","check":0},{"eng":"short-sighted","pl":"kr\u00f3tkowzroczny","check":0},{"eng":"sign language","pl":"j\u0119zyk migowy","check":0},{"eng":"speech disorder","pl":"zaburzenie mowy","check":0},{"eng":"speech-impaired","pl":"z zaburzeniem mowy","check":0},{"eng":"visually impaired","pl":"niedowidz\u0105cy","check":0},{"eng":"wheelchair","pl":"w\u00f3zek inwalidzki","check":0},{"eng":"wheelchair user","pl":"osoba poruszaj\u0105ca si\u0119 na w\u00f3zku inwalidzkim","check":0},{"eng":"addict","pl":"osoba uzale\u017cniona","check":0},{"eng":"addiction","pl":"uzale\u017cnienie(a)","check":0},{"eng":"addictive substance","pl":"substancja uzale\u017cniaj\u0105ca","check":0},{"eng":"be addicted to sth","pl":"by\u0107 od czego\u015b uzale\u017cnionym","check":0},{"eng":"be in therapy","pl":"przechodzi\u0107 terapi\u0119","check":0},{"eng":"caffeine","pl":"kofeina","check":0},{"eng":"drugs","pl":"narkotyki","check":0},{"eng":"sober","pl":"trze\u017awy","check":0},{"eng":"take an overdose","pl":"przedawkowa\u0107","check":0},{"eng":"be hooked on sth","pl":"by\u0107 uzale\u017cnionym od czego\u015b","check":0},{"eng":"behavioural addictions","pl":"uzale\u017cnienia behawioralne","check":0},{"eng":"dependence","pl":"uzale\u017cnienie(d)","check":0},{"eng":"drug abuse","pl":"uzale\u017cnienie od narkotyk\u00f3w","check":0},{"eng":"gambling","pl":"hazard","check":0},{"eng":"nicotine","pl":"nikotyna","check":0},{"eng":"substance addiction","pl":"uzale\u017cnienie od substancji odurzaj\u0105cych","check":0},{"eng":"get addicted to sth","pl":"uzale\u017cni\u0107 si\u0119 od czego\u015b","check":0}],

	p8: [{"eng":"accident victim","pl":"ofiara wypadku","check":0},{"eng":"bleed","pl":"krwawi\u0107","check":0},{"eng":"blister","pl":"p\u0119cherz, b\u0105bel","check":0},{"eng":"broken","pl":"z\u0142amany","check":0},{"eng":"bruise","pl":"siniak","check":0},{"eng":"burn","pl":"oparzy\u0107; oparzenie","check":0},{"eng":"burnt","pl":"poparzony","check":0},{"eng":"casualty","pl":"ofiara","check":0},{"eng":"choke","pl":"krztusi\u0107 si\u0119, d\u0142awi\u0107 si\u0119","check":0},{"eng":"cut","pl":"skaleczenie","check":0},{"eng":"faint","pl":"zemdle\u0107","check":0},{"eng":"injured","pl":"kontuzjowany, ranny","check":0},{"eng":"injury","pl":"uraz, obra\u017cenie, kontuzja","check":0},{"eng":"minor","pl":"niewielkie obra\u017cenie","check":0},{"eng":"insect bite","pl":"uk\u0105szenie owada","check":0},{"eng":"lose consciousness","pl":"straci\u0107 przytomno\u015bv","check":0},{"eng":"scratch","pl":"zadrapa\u0107; zadrapanie","check":0},{"eng":"sprain","pl":"zwichn\u0105\u0107, skr\u0119ci\u0107","check":0},{"eng":"sprained wrist","pl":"skr\u0119cony nadgarstek","check":0},{"eng":"twisted ankle","pl":"zwichni\u0119ta kostka","check":0},{"eng":"unconscious","pl":"nieprzytomny","check":0},{"eng":"wound","pl":"rana","check":0},{"eng":"open wound","pl":"otwarta rana","check":0},{"eng":"wounded","pl":"ranny","check":0},
	{"eng":"drown","pl":"ton\u0105\u0107, topi\u0107 si\u0119","check":0},{"eng":"fracture","pl":"z\u0142amanie, p\u0119kni\u0119cie","check":0},{"eng":"scalded","pl":"poparzony (wrz\u0105tkiem)","check":0},{"eng":"stung","pl":"u\u017c\u0105dlony","check":0},{"eng":"bandage","pl":"banda\u017c","check":0},{"eng":"put a bandage on sth","pl":"zabanda\u017cowa\u0107 cos","check":0},{"eng":"clean a wound","pl":"oczy\u015bci\u0107 ran\u0119","check":0},{"eng":"first aid","pl":"pierwsza pomoc","check":0},{"eng":"first aid kit","pl":"apteczka","check":0},{"eng":"ice pack","pl":"kompres lodowy","check":0},{"eng":"mouth to mouth","pl":"oddychanie metoda usta-usta","check":0},{"eng":"oxygen","pl":"tlen","check":0},{"eng":"plaster","pl":"plaster","check":0},{"eng":"pressure","pl":"nacisk","check":0},{"eng":"reassure sb","pl":"uspokoi\u0107 kogo\u015b","check":0},{"eng":"take\/check sb's pulse","pl":"zmierzy\u0107 komu\u015b puls","check":0},{"eng":"apply pressure to a wound","pl":"uciska\u0107 ran\u0119","check":0},{"eng":"put sb in the recovery position","pl":"u\u0142o\u017cy\u0107 kogo\u015b w pozycji bocznej ustalonej","check":0},{"eng":"sterile","pl":"sterylny","check":0},{"eng":"stop the bleeding","pl":"zatamowa\u0107 krwawienie","check":0}],

	p9: []
}