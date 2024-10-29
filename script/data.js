const allWords = {
	p1: [
		{"eng":"bread","pl":"chleb","check":0},{"eng":"bread roll","pl":"bu\u0142ka","check":0},{"eng":"breakfast cereal","pl":"p\u0142atki \u015bniadaniowe","check":0},{"eng":"cereal foods","pl":"produkty zbo\u017cowe","check":0},{"eng":"cornflakes","pl":"p\u0142atki kukurydziane","check":0},{"eng":"flour","pl":"m\u0105ka","check":0},{"eng":"noodles","pl":"kluski \/ makaron","check":0},{"eng":"pasta","pl":"makaron","check":0},{"eng":"rice","pl":"ry\u017c","check":0},{"eng":"toast","pl":"tost \/ grzanka","check":0},{"eng":"french bread","pl":"bagietka","check":0},{"eng":"rye bread","pl":"chleb \u017cytni","check":0},{"eng":"butter","pl":"mas\u0142o","check":0},{"eng":"cheese","pl":"ser","check":0},{"eng":"cream","pl":"\u015bmietana","check":0},{"eng":"milk","pl":"mleko","check":0},{"eng":"drinkable yoghurt","pl":"jogurt pitny","check":0},{"eng":"fruit yoghurt","pl":"jogurt owocowy","check":0},{"eng":"natural yoghurt","pl":"jogurt naturalny","check":0},{"eng":"blue cheese","pl":"ser ple\u015bniowy (niebieski)","check":0},{"eng":"cottage cheese","pl":"twaro\u017cek","check":0},{"eng":"cream cheese","pl":"serek \u015bmietankowy","check":0},{"eng":"hard cheese","pl":"ser \u017c\u00f3\u0142ty (np. gouda)","check":0},{"eng":"bacon","pl":"bekon","check":0},{"eng":"beef","pl":"wo\u0142owina","check":0},{"eng":"chicken","pl":"kurczak","check":0},{"eng":"egg","pl":"jajko","check":0},{"eng":"egg white","pl":"bia\u0142ko jajka","check":0},{"eng":"ham","pl":"szynka","check":0},{"eng":"pork","pl":"wieprzowina","check":0},{"eng":"sausage","pl":"kie\u0142basa","check":0},
		{"eng":"tofu","pl":"tofu","check":0},{"eng":"turkey","pl":"indyk","check":0},{"eng":"pork ribs","pl":"\u017ceberka wieprzowe","check":0},{"eng":"cod","pl":"dorsz","check":0},{"eng":"mackerel","pl":"makrela","check":0},{"eng":"prawn","pl":"krewetka","check":0},{"eng":"salmon","pl":"\u0142oso\u015b","check":0},{"eng":"sardine","pl":"sardynka","check":0},{"eng":"seafood","pl":"owoce morza","check":0},{"eng":"tuna","pl":"tu\u0144czyk","check":0},{"eng":"cherry","pl":"czere\u015bnia","check":0},{"eng":"sour cherry","pl":"wi\u015bnia","check":0},{"eng":"grapes","pl":"winogrona","check":0},{"eng":"kiwi fruit","pl":"kiwi","check":0},{"eng":"lemon","pl":"cytryna","check":0},{"eng":"lime","pl":"limonka","check":0},{"eng":"orange","pl":"pomara\u0144cza","check":0},{"eng":"peach","pl":"brzoskwinia","check":0},{"eng":"pear","pl":"gruszka","check":0},{"eng":"pineapple","pl":"ananas","check":0},{"eng":"plum","pl":"\u015bliwka","check":0},{"eng":"strawberry","pl":"truskawka","check":0},{"eng":"watermelon","pl":"arbuz","check":0}
	],
	p2: [
		{"eng":"aubergine","pl":"bak\u0142a\u017can","check":0},{"eng":"beans","pl":"fasola","check":0},{"eng":"broccoli","pl":"broku\u0142","check":0},{"eng":"cabbage","pl":"kapusta","check":0},{"eng":"carrot","pl":"marchewka","check":0},{"eng":"cauliflower","pl":"kalafior","check":0},{"eng":"chilli","pl":"papryczka chilli","check":0},{"eng":"courgette","pl":"cukinia","check":0},{"eng":"cucumber","pl":"og\u00f3rek","check":0},{"eng":"green peas","pl":"groszek","check":0},{"eng":"lettuce","pl":"sa\u0142ata","check":0},{"eng":"muschroom","pl":"grzyb \/ pieczarka","check":0},{"eng":"olive","pl":"oliwka","check":0},{"eng":"onion","pl":"cebula","check":0},{"eng":"green pepper","pl":"zielona papryka","check":0},{"eng":"red pepper","pl":"czerwona papryka","check":0},{"eng":"potato","pl":"ziemniak","check":0},{"eng":"sweet potato","pl":"batat","check":0},{"eng":"spinach","pl":"szpinak","check":0},{"eng":"sweetcorn","pl":"s\u0142odka kukurydza","check":0},{"eng":"tomato","pl":"pomidor","check":0},{"eng":"apple pie","pl":"szarlotka \/ jab\u0142ecznik","check":0},{"eng":"banana bread","pl":"chlebek bananowy","check":0},{"eng":"biscuit","pl":"herbatnik","check":0},{"eng":"bun","pl":"dro\u017cd\u017c\u00f3wka","check":0},{"eng":"cake","pl":"ciasto \/ tort","check":0},{"eng":"sponge cake","pl":"biszkopt","check":0},{"eng":"cheesecake","pl":"sernik","check":0},{"eng":"chocolate bar","pl":"baton czekoladowy","check":0},{"eng":"dark chocolate","pl":"gorzka czekolada","check":0},{"eng":"milk chocolate","pl":"mleczna czekolada","check":0},{"eng":"crisps","pl":"chipsy","check":0},{"eng":"doughnut","pl":"p\u0105czek","check":0},{"eng":"honey","pl":"mi\u00f3d","check":0},{"eng":"ice cream","pl":"lody","check":0},{"eng":"jam","pl":"d\u017cem","check":0},{"eng":"marmalade","pl":"marmolada","check":0},{"eng":"sweet","pl":"cukierek","check":0},{"eng":"sweets","pl":"s\u0142odycze","check":0},{"eng":"vanilla cream","pl":"krem waniliowy","check":0},{"eng":"custard tart","pl":"babeczka z kremem","check":0},{"eng":"dough","pl":"ciasto (masa) (d)","check":0},{"eng":"pastry","pl":"ciasto (masa) \/ ciastko (p)","check":0},{"eng":"waffles","pl":"gofry","check":0},{"eng":"whipped cream","pl":"bita \u015bmietana","check":0}
	],
	p3: [
		{"eng":"breadcrumbs","pl":"bu\u0142ka tarta","check":0},{"eng":"coriander","pl":"kolendra","check":0},{"eng":"fat","pl":"t\u0142uszcz","check":0},{"eng":"flavour","pl":"smak","check":0},{"eng":"garlic","pl":"czosnek","check":0},{"eng":"ginger","pl":"imbir","check":0},{"eng":"herbs","pl":"zio\u0142a","check":0},{"eng":"ketchup","pl":"keczup","check":0},{"eng":"margarine","pl":"margaryna","check":0},{"eng":"mayonnaise","pl":"majonez","check":0},{"eng":"mint","pl":"mi\u0119ta","check":0},{"eng":"mustard","pl":"musztarda","check":0},{"eng":"olive oil","pl":"oliwa","check":0},{"eng":"parsley","pl":"pietruszka","check":0},{"eng":"pepper","pl":"pieprz","check":0},{"eng":"salad dressing","pl":"sos do sa\u0142atek","check":0},{"eng":"a pinch of salt","pl":"szczypta soli","check":0},{"eng":"barbecue sauce","pl":"sos barbecue","check":0},{"eng":"sweet and sour sauce","pl":"sos s\u0142odko-kwa\u015bny","check":0},{"eng":"spice","pl":"przyprawa","check":0},{"eng":"sugar","pl":"cukier","check":0},{"eng":"icing sugar","pl":"cukier puder","check":0},{"eng":"sunflower oil","pl":"olej s\u0142onecznikowy","check":0},{"eng":"tomato paste","pl":"koncentrat pomidorowy","check":0},{"eng":"vinegar","pl":"ocet","check":0},{"eng":"avocado oil","pl":"olej z awokado","check":0},{"eng":"coconut oil","pl":"olej kokosowy","check":0},{"eng":"nuts","pl":"orzechy","check":0},{"eng":"seeds","pl":"ziarna \/ nasiona \/ pestki","check":0},{"eng":"sesame oil","pl":"olej sezamowy","check":0},{"eng":"cocoa","pl":"kakao","check":0},{"eng":"coffee","pl":"kawa","check":0},{"eng":"cola","pl":"cola","check":0},{"eng":"juice","pl":"sok","check":0},{"eng":"milkshake","pl":"koktajl mleczny","check":0},{"eng":"herbal tea","pl":"herbata zio\u0142owa","check":0},{"eng":"sparkling water","pl":"woda gazowana","check":0},{"eng":"still water","pl":"woda niegazowana","check":0},{"eng":"tap water","pl":"woda z kranu","check":0},{"eng":"caffeine","pl":"kofeina","check":0},{"eng":"filter coffee","pl":"kawa z ekspresu (przelewowego)","check":0}
	],
	p4: [
		{"eng":"baked beans","pl":"fasolka w sosie pomidorowym","check":0},{"eng":"chicken wings","pl":"skrzyde\u0142ka z kurczaka","check":0},{"eng":"curry","pl":"curry (potrawa)","check":0},{"eng":"fish and chips","pl":"ryba z frytkami","check":0},{"eng":"fried eggs","pl":"jajka sadzone","check":0},{"eng":"meatballs","pl":"klopsiki","check":0},{"eng":"omlette","pl":"omlet","check":0},{"eng":"pancake","pl":"nale\u015bnik","check":0},{"eng":"ratatouille","pl":"ratatuja (danie kuchni francuskiej z duszonych warzyw)","check":0},{"eng":"ready meal","pl":"danie gotowe do spo\u017cycia","check":0},{"eng":"salad","pl":"sa\u0142atka","check":0},{"eng":"green salad","pl":"sur\u00f3wka z zielonych warzyw","check":0},{"eng":"scrambled eggs","pl":"jajecznica","check":0},{"eng":"chicken soup","pl":"ros\u00f3\u0142 (7L)","check":0},{"eng":"clear soup","pl":"ros\u00f3\u0142 (5L)","check":0},{"eng":"steak","pl":"stek","check":0},{"eng":"sweet and sour chicken","pl":"kurczak w sosie s\u0142odko-kwa\u015bnym","check":0},{"eng":"casserole","pl":"zapiekanka \/ potrawa duszona","check":0},{"eng":"dumplings","pl":"pierogi \/ knedle \/ kluski","check":0},{"eng":"mashed potatoes","pl":"t\u0142uczone ziemniaki","check":0},{"eng":"spring rolls","pl":"sajgonki","check":0},{"eng":"stew","pl":"gulasz \/ potrawka","check":0},{"eng":"bag","pl":"torebka","check":0},{"eng":"bar","pl":"tabliczka","check":0},{"eng":"bottle","pl":"butelka","check":0},{"eng":"box","pl":"pude\u0142ko","check":0},{"eng":"bunch of grapes","pl":"ki\u015b\u0107 winogron","check":0},{"eng":"can","pl":"puszka (np. zupy)","check":0},{"eng":"caron","pl":"karton","check":0},{"eng":"container","pl":"pojemnik","check":0},{"eng":"jar","pl":"s\u0142oik","check":0},{"eng":"loaf","pl":"bochenek","check":0},{"eng":"packet","pl":"paczka","check":0},{"eng":"portion","pl":"porcja","check":0},{"eng":"tin","pl":"puszka (t)","check":0}
	],
	p5: [
		{"eng":"finely chopped","pl":"drobno posiekany","check":0},{"eng":"crunchy","pl":"chrupi\u0105cy \/ chrupki","check":0},{"eng":"dairy-free","pl":"bez nabia\u0142u","check":0},{"eng":"delicious","pl":"pyszny","check":0},{"eng":"disgusting","pl":"ohydny","check":0},{"eng":"dry","pl":"suchy","check":0},{"eng":"fatty","pl":"t\u0142usty","check":0},{"eng":"fresh","pl":"\u015bwie\u017cy","check":0},{"eng":"gluten-free","pl":"bezglutenowy","check":0},{"eng":"grated","pl":"starty","check":0},{"eng":"hot","pl":"ostry \/ pikantny \/ gor\u0105cy","check":0},{"eng":"juicy","pl":"soczysty","check":0},{"eng":"mild","pl":"\u0142agodny","check":0},{"eng":"mouth-watering","pl":"apetyczny \/ a\u017c \u015blinka cieknie","check":0},{"eng":"overcooked","pl":"zbyt d\u0142ugo gotowany","check":0},{"eng":"rare","pl":"niedosma\u017cony \/ krwisty (o steku)","check":0},{"eng":"raw","pl":"surowy","check":0},{"eng":"savoury","pl":"wytrawny \/ s\u0142ony","check":0},{"eng":"sliced","pl":"krojony (o chlebie) \/ w plasterkach","check":0},{"eng":"smoked","pl":"w\u0119dzony","check":0},{"eng":"sour","pl":"kwa\u015bny","check":0},{"eng":"spicy","pl":"pikantny \/ ostry (s)","check":0},{"eng":"sugar-free","pl":"bezcukrowy","check":0},{"eng":"sweet","pl":"s\u0142odki","check":0},{"eng":"tasty","pl":"smaczny","check":0},{"eng":"thick","pl":"g\u0119sty","check":0},
		{"eng":"tough","pl":"twardy","check":0},{"eng":"underdone","pl":"niedosma\u017cony \/ niedogotowany","check":0},{"eng":"well-done","pl":"dobrze wysma\u017cony","check":0},{"eng":"yummy","pl":"pyszny (pycha)","check":0},{"eng":"beaten","pl":"roztrzepany (o jajku)","check":0},{"eng":"chewy","pl":"gumowaty \/ trudny do pogryzienia","check":0},{"eng":"condensed","pl":"skondensowany (o mleku)","check":0},{"eng":"creamy","pl":"kremowy","check":0},{"eng":"crusty","pl":"chrupi\u0105cy","check":0},{"eng":"free-range","pl":"z wolnego chowu (o jajkach \/ drobiu)","check":0},{"eng":"freshly-ground","pl":"\u015bwie\u017co zmielony","check":0},{"eng":"hard boiled","pl":"na twardo (o jajku)","check":0},{"eng":"instant","pl":"rozpuszczalny","check":0},{"eng":"lean","pl":"chudy (o mi\u0119sie)","check":0},{"eng":"minced","pl":"mielony (o mi\u0119sie)","check":0},{"eng":"off-putting","pl":"odpychaj\u0105cy","check":0},{"eng":"oily","pl":"t\u0142usty (o rybie)","check":0},{"eng":"organic","pl":"ekologiczny","check":0},{"eng":"pasteurised","pl":"pasteryzowany","check":0},{"eng":"scrumptious","pl":"przepyszny","check":0},{"eng":"skimmed","pl":"odt\u0142uczony (o mleku \/ jogurcie)","check":0},{"eng":"soft-boiled","pl":"na mi\u0119kko (o jajku)","check":0},{"eng":"stale","pl":"czerstwy (o pieczywie \/ cie\u015bcie)","check":0},{"eng":"tender","pl":"mi\u0119kki \/ kruchy","check":0},{"eng":"wholemeal","pl":"pe\u0142noziarnisty \/ razowy","check":0}
	],
	p6: [
		{"eng":"a piece of cake","pl":"pestka \/ bu\u0142ka z mas\u0142em","check":0},{"eng":"as cheap as chips","pl":"tanie jak barszcz","check":0},{"eng":"eat like a horse","pl":"je\u015b\u0107 za dw\u00f3ch \/ zje\u015b\u0107 konia z kopytami","check":0},{"eng":"have too much on your plate","pl":"mie\u0107 za du\u017co na g\u0142owie","check":0},{"eng":"it's not my cup of tea","pl":"nie przepadam za tym","check":0},{"eng":"there's no such things as a free lunch","pl":"niema nic za darmo","check":0}
	],
	p7: [
		{"eng":"afternoon tea","pl":"podwieczorek","check":0},{"eng":"barbecue","pl":"grill","check":0},{"eng":"breakfast","pl":"\u015bniadanie","check":0},{"eng":"course","pl":"danie (cz\u0119\u015b\u0107 posi\u0142ku)","check":0},{"eng":"dinner","pl":"obiad \/ kolacja","check":0},{"eng":"dish","pl":"danie \/ potrawa","check":0},{"eng":"packed lunch","pl":"drugie \u015bniadanie \/ suchy prowiant","check":0},{"eng":"picnic","pl":"piknik","check":0},{"eng":"snack","pl":"przek\u0105ska","check":0},{"eng":"supper","pl":"kolacja","check":0},{"eng":"takeaway","pl":"posi\u0142ek na wynos","check":0},{"eng":"dessert spoon","pl":"\u0142y\u017ceczka deserowa","check":0},{"eng":"eggcup","pl":"kieliszek do jajek","check":0},{"eng":"glass","pl":"szklanka \/ kieliszek","check":0},{"eng":"water glass","pl":"szklanka do wody","check":0},{"eng":"butter knife","pl":"n\u00f3\u017c do mas\u0142a","check":0},{"eng":"napkin","pl":"serwetka","check":0},{"eng":"plate","pl":"talerz","check":0},{"eng":"dinner plate","pl":"p\u0142ytki talerz obiadowy","check":0},{"eng":"saucer","pl":"spodek","check":0},{"eng":"side plate","pl":"talerzyk","check":0},{"eng":"soup bowl","pl":"g\u0142\u0119boki talerz do zupy","check":0},{"eng":"spoon","pl":"\u0142y\u017cka","check":0},{"eng":"tablecloth","pl":"obrus","check":0},{"eng":"teaspoon","pl":"\u0142y\u017ceczka (1s)","check":0},{"eng":"baking dish","pl":"naczynie \u017caroodporne \/ brytfanka (b)","check":0},{"eng":"frying pan","pl":"patelnia","check":0},{"eng":"ingredient","pl":"sk\u0142adnik","check":0},{"eng":"leftover","pl":"pozosta\u0142y \/ resztkowy","check":0},{"eng":"leftovers","pl":"resztki","check":0},{"eng":"bottle opener","pl":"otwieracz do butelek","check":0},{"eng":"can opener","pl":"otwieracz do puszek (c)","check":0},{"eng":"tin opener","pl":"otwieracz do puszek (t)","check":0},{"eng":"over","pl":"piekarnik","check":0},{"eng":"over-proof dish","pl":"naczynie \u017caroodporne (o)","check":0},{"eng":"pot","pl":"garnek","check":0},{"eng":"recipe","pl":"przepis","check":0},{"eng":"saucepan","pl":"rondel","check":0},{"eng":"slice","pl":"plasterek","check":0},{"eng":"tablespoonful","pl":"\u0142y\u017cka sto\u0142owa (ilo\u015b\u0107)","check":0},{"eng":"teaspoonful","pl":"\u0142y\u017ceczka (ilo\u015b\u0107)","check":0},{"eng":"topping","pl":"posypka","check":0}
	],
	p8: [
		{"eng":"add","pl":"dodawa\u0107","check":0},{"eng":"bake","pl":"piec (chleb \/ ciasto)","check":0},{"eng":"barbecue","pl":"grillowa\u0107 (na polu) (b)","check":0},{"eng":"beat","pl":"ubija\u0107 (np. jajka)","check":0},{"eng":"boil","pl":"zagotowa\u0107 do wrzenia \/ wrze\u0107","check":0},{"eng":"burn","pl":"przypali\u0107","check":0},{"eng":"chop","pl":"sieka\u0107","check":0},{"eng":"cut","pl":"kroi\u0107","check":0},{"eng":"freeze","pl":"zamra\u017ca\u0107","check":0},{"eng":"fry","pl":"sma\u017cy\u0107","check":0},{"eng":"grate","pl":"trze\u0107 (na tarce)","check":0},{"eng":"grill","pl":"grillowa\u0107 (g)","check":0},{"eng":"heat","pl":"podgrzewa\u0107 (1s)","check":0},{"eng":"melt","pl":"rozpuszcza\u0107 \/ topi\u0107","check":0},{"eng":"mix","pl":"miesza\u0107 (\u0142\u0105czy\u0107 r\u00f3\u017cne sk\u0142adniki)","check":0},{"eng":"overcook","pl":"rozgotowa\u0107 \/ gotowa\u0107 zbyt d\u0142ugo","check":0},{"eng":"peel","pl":"obiera\u0107","check":0},{"eng":"pour","pl":"nalewa\u0107","check":0},{"eng":"rise","pl":"rosn\u0105\u0107 (o cie\u015bcie)","check":0},{"eng":"roast","pl":"piec (mi\u0119so lub warzywa)","check":0},{"eng":"serve","pl":"podawa\u0107","check":0},{"eng":"slice finely","pl":"cienko pokroi\u0107","check":0},{"eng":"sprinkle","pl":"posypa\u0107 \/ pokropi\u0107","check":0},{"eng":"taste","pl":"pr\u00f3bowa\u0107 \/ smakowa\u0107","check":0},{"eng":"add salt to taste","pl":"posoli\u0107 do smaku","check":0},{"eng":"undercook","pl":"nie dogotowa\u0107","check":0},{"eng":"warm up","pl":"podgrzewa\u0107 (2s)","check":0},{"eng":"be thirsty","pl":"by\u0107 spragnionym","check":0},{"eng":"grab a coffee","pl":"wypi\u0107 szybko kaw\u0119","check":0},{"eng":"grab a quick snack to eat","pl":"przek\u0105si\u0107 co\u015b szybko","check":0},{"eng":"have a meal","pl":"je\u015b\u0107 posi\u0142ek","check":0},{"eng":"lay the table","pl":"nakry\u0107 do sto\u0142u (l)","check":0},{"eng":"perfect your cooking technique","pl":"udoskonali\u0107 technik\u0119 gotowania","check":0},{"eng":"prepare a meal","pl":"przygotowywa\u0107 posi\u0142ek","check":0},{"eng":"set the table","pl":"nakry\u0107 do sto\u0142u (s)","check":0},{"eng":"top sth with sth","pl":"posypa\u0107 co\u015b czym\u015b","check":0},{"eng":"communicate positive emotions through food","pl":"wyra\u017ca\u0107 pozytywne emocje poprzez jedzenie","check":0},{"eng":"take sb back to their heritage","pl":"przypomina\u0107 o czyi\u015b korzeniach","check":0}
	],
	p9: [
		{"eng":"calorie","pl":"kaloria","check":0},{"eng":"eat slowly","pl":"je\u015b\u0107 powoli","check":0},{"eng":"eat quickly","pl":"je\u015b\u0107 szybko","check":0},{"eng":"fattening","pl":"tucz\u0105cy","check":0},{"eng":"non-fattening","pl":"niet\u0142ucz\u0105cy","check":0},{"eng":"healthy","pl":"zdrowy","check":0},{"eng":"mineral","pl":"minera\u0142","check":0},{"eng":"vegan diet","pl":"dieta wega\u0144ska","check":0},{"eng":"vegetarian diet","pl":"dieta wegetaria\u0144ska","check":0},{"eng":"vitamin","pl":"witamina","check":0},{"eng":"plant-based diet","pl":"dieta ro\u015blinna","check":0},{"eng":"willpower","pl":"si\u0142a woli","check":0},{"eng":"be a food lover","pl":"by\u0107 smakoszem","check":0},{"eng":"be a vegan","pl":"by\u0107 weganinem","check":0},{"eng":"be a vegetarian","pl":"by\u0107 wegetarianinem","check":0},{"eng":"be fussy","pl":"grymasi\u0107","check":0},{"eng":"eat junk food","pl":"je\u015b\u0107 niezdrowe jedzenie","check":0},{"eng":"go on a diet","pl":"rozpocz\u0105\u0107 diet\u0119","check":0},{"eng":"have a sweet tooth","pl":"mie\u015b\u0107 s\u0142abo\u015b\u0107 do s\u0142odyczy","check":0},{"eng":"have an appetite","pl":"mie\u0107 apetyt","check":0},{"eng":"high in sth","pl":"o wysokiej zawarto\u015bci czego\u015b","check":0},{"eng":"low in sth","pl":"o niskiej zawarto\u015bci czego\u015b","check":0},{"eng":"put on weight","pl":"przybiera\u0107 na wadze","check":0},{"eng":"skip breakfast","pl":"nie je\u015b\u0107 \u015bniadania","check":0},{"eng":"starve","pl":"g\u0142odowa\u0107 \/ umiera\u0107 z g\u0142odu","check":0},{"eng":"leave out a meal","pl":"pomija\u0107 posi\u0142ek","check":0},{"eng":"stay hydrated","pl":"pi\u0107 wystarczaj\u0105co du\u017co p\u0142yn\u00f3w ","check":0},{"eng":"trigger a burst of energy","pl":"wywo\u0142ywa\u0107 przyp\u0142yw energii","check":0},{"eng":"anorexia","pl":"anoreksja \/ jad\u0142owstr\u0119t psychiczny","check":0},{"eng":"binge eating","pl":"objadanie napadowe","check":0},{"eng":"bulimia","pl":"bulimia \/ \u017car\u0142oczno\u015b\u0107 psychiczna","check":0},{"eng":"distorted body image","pl":"zniekszta\u0142cony obraz w\u0142asnego cia\u0142a","check":0},{"eng":"malnutrition","pl":"niedo\u017cywienie","check":0},{"eng":"overweight","pl":"z nadwag\u0105","check":0},{"eng":"underweight","pl":"z niedowag\u0105","check":0}
	],
	p10: [
		{"eng":"cafe","pl":"kawiarnia","check":0},{"eng":"cafeteria","pl":"bar samoobs\u0142ugowy \/ bufet \/ sto\u0142\u00f3wka","check":0},{"eng":"canteen","pl":"sto\u0142\u00f3wka \/ kantyna","check":0},{"eng":"fast food restaurant","pl":"bar szybkiej obs\u0142ugi","check":0},{"eng":"food truck","pl":"furgonetka sprzedaj\u0105ca szybkie dania","check":0},{"eng":"pub","pl":"pub","check":0},{"eng":"self-service restaurant","pl":"restauracja samoobs\u0142ugowa","check":0},{"eng":"tekeaway","pl":"restauracja sprzedaj\u0105ca jedzenie na wynos","check":0},{"eng":"baker","pl":"piekarz","check":0},{"eng":"bill","pl":"rachunek","check":0},{"eng":"buffet breakfast","pl":"\u015bniadanie w formie szwedzkiego sto\u0142u","check":0},{"eng":"menu","pl":"karta da\u0144","check":0},{"eng":"order","pl":"zam\u00f3wienie \/ zamawia\u0107","check":0},{"eng":"server","pl":"kelner","check":0},{"eng":"service included","pl":"obs\u0142uga wliczona w cen\u0119","check":0},{"eng":"speciality","pl":"specjalno\u015b\u0107","check":0},{"eng":"starter","pl":"przystawka","check":0},{"eng":"tip","pl":"napiwek (t)","check":0},{"eng":"gratuity","pl":"napiwek (g)","check":0},{"eng":"main course","pl":"danie g\u0142\u00f3wne","check":0},{"eng":"overpriced","pl":"zbyt drogi","check":0},{"eng":"pastry chef","pl":"cukiernik","check":0},{"eng":"rare delicacy","pl":"rzadki przysmak","check":0},{"eng":"reasonably priced","pl":"w rozs\u0105dnej cenie","check":0},{"eng":"set menu","pl":"gotowy zestaw da\u0144","check":0},{"eng":"ask for the bill","pl":"poprosi\u0107 o rachunek","check":0},{"eng":"book a table","pl":"zarezerwowa\u0107 stolik","check":0},{"eng":"collect your order","pl":"odebra\u0107 zam\u00f3wienie","check":0},{"eng":"eat in","pl":"je\u015b\u0107 posi\u0142ek w domu","check":0},{"eng":"enjoy your meal","pl":"smacznego","check":0},{"eng":"leave a tip","pl":"zostawi\u0107 napiwek","check":0},{"eng":"look through the menu","pl":"przegl\u0105da\u0107 kart\u0119 da\u0144","check":0},{"eng":"mix up orders","pl":"pomyli\u0107 zam\u00f3wienia","check":0},{"eng":"serve","pl":"obs\u0142ugiwa\u0107 \/ podawa\u0107","check":0},{"eng":"show sb to their table","pl":"zaprowadzi\u0107 kogo\u015b do stolika","check":0}
	],
}