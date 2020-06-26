const model = {
    page: 'login',
    user: {
        name: 'Geir Eskil Terjesen',
        userId: "1035",
        totalLvl: 0,
        xpToNextLvl: 30,
        TimesLogInn: 0,
    },

    VGOCategories: [
        { CategoryId: 1, text: 'Søvn' },
        { CategoryId: 2, text: 'Kosthold' },
        { CategoryId: 3, text: 'Fysiske Aktivitet' },
        { CategoryId: 4, text: 'Sosial Aktivitet' },
        { CategoryId: 5, text: 'Økonomi' },
        { CategoryId: 6, text: 'Karrierveiledning og Utdanningsvalg' },
    ],

    testQuestion: [
        {text: 'sov du godt på natten?', svar: ['Veldig bra', 'Bra', 'Dårlig', 'Veldig Dårlig'], tilbakemelding: ['Ikke noe å endre', 'Fortsette i samme spor','Kjøre noen pusteøvelser','Gå til legen'],categoryId: 1 },
        {text: 'Drømme du om fine ting?', categoryId: 1},
        {text: 'Spise du ritkig om dagen', categoryId: 2},
        {text: 'Har du spist en kebab idag?', categoryId: 2},
        {text: 'Har du løpte i det siste?', categoryId: 3},
        {text: 'Har du gått på tur idag?', categoryId: 3},
        {text: 'Har du vært i kontakt med noen venner i det siste?', categoryId: 4}, 
        {text: 'Sliter du med å ta kontakt med venner?', categoryId: 4},
        {text: 'Føler du at du har god kontroll over din økonomi', categoryId: 5}, 
        {text: 'Kjøpe du ting uten å tenke først?', categoryId: 5},
        {text: 'Tenke du på å ta noe utdanning i det nærmeste fremtid?', categoryId: 6}, 
        {text: 'Kan du tenke deg en jobb i det nærmeste fremtiden?', categoryId: 6},
    ],

    //Deler på antall spørsmål for å få en snitt score
    answers: [         
        // { categoryId: id, userId: user ,date: today ,answers: [] },
        {categoryId: 1, userId: "1035", date: new Date('06.10.2020'), answers: [3,5,4,5,5,5,5,2,4,3,5,]},
        {categoryId: 1, userId: "1035", date: new Date('03.09.2020'), answers: Array(12)},
        {categoryId: 1, userId: "1035", date: new Date('03.10.2020'), answers: Array(12)},
        {categoryId: 2, userId: "1035", date: new Date('2020.06.10'), answers: [3,5,4,1,1,1,1,2,1,3,1,]},
        {categoryId: 2, userId: "1035", date: new Date('2020.03.09'), answers: Array(12)},
        {categoryId: 2, userId: "1035", date: new Date('2020.03.10'), answers: Array(12)},

    ],

    weekPlan: [
        { plan: 'Re sengen', score: 1, categoryId: 1 , kategori: 'Søvn', isDone: false, dateDone: 'Ikke gjort', deadline: undefined},
        { plan: 'Legge deg 23.00', score: 2, categoryId: 1 , kategori: 'Søvn' , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
        { plan: 'Våkne en bestemt tid hver dag', score: 2.4, categoryId: 1 , kategori: 'Søvn' , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
        { plan: 'Våkne 08.00', score: 4, categoryId: 1 , kategori: 'Søvn'  , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
        { plan: 'Våkne 07.30', score: 5, categoryId: 1 , kategori: 'Søvn' , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
        { plan: 'lage middag', score: 1, categoryId: 2 , kategori: 'Kosthold' , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
        { plan: 'spise frokost', score: 2, categoryId: 2 , kategori: 'Kosthold' , isDone: false , dateDone: 'Ikke gjort', deadline: undefined },
        { plan: 'spise tre grønne ting', score: 2.4, categoryId: 2 , kategori: 'Kosthold' , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
        { plan: 'Ikke spis sukker', score: 4, categoryId: 2 , kategori: 'Kosthold' , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
        { plan: 'ingen frossen mat', score: 5, categoryId: 2 , kategori: 'Kosthold' , isDone: false , dateDone: 'Ikke gjort' , deadline: undefined },
    ],

    tipsTricks: [
        { categoryId: 1, kategori: 'Søvn', tips: ['Telle sauer', 'Pusteøvelser: sampleurl']},
        { categoryId: 2, kategori: 'Kosthold', tips: ['Spis én av fem om dagen',  'Spis regelmessig fremfor i store mengder få ganger daglig' ]},
        { categoryId: 3, kategori: 'Fysisk aktivitet', tips: ['Det er lettere å fortsette enn å komme i gang',  '7 enkle grep for å komme i form: samlpleurl']} ,
        { categoryId: 4, kategori: 'Sosial Aktivitet', tips: ['Ikke avstå fra sosiale situasjoner',  'MS paint er fint for moro' ]},
        { categoryId: 5, kategori: 'Økonomi', tips: ['Eksempelmatbudsjett',  '656 tips til lettere sparing' ]},
        { categoryId: 6, kategori: 'Karrierveiledning og Utdanningsvalg', tips: ['Interessetest: sampleurl', 'hvilke form for antarktismurmeldyr med kompetanse er du?' ]},
    ],
}

const modelTest ={
    page: 'login',
    user: {
        name: 'Geir Eskil Terjesen',
        userId: "1035",
        totalLvl: 0,
        xpToNextLvl: 30,
        TimesLogInn: 0,
    },
    kategori: ['kosthold','søvn',],

    kosthold: {
    testQuestion: ["Hvor mange måltider spiser du på en dag?","Hvor spiser du?","Spiser du oftest alene eller sammen med andre?","Hvor mange av regnbuens farger har du på tallerkenen din?"],
    
    testAnswer:[
        ["Spiser 4-6 måltider om dagen","Spiser 1-10 måltidere om dagen","Spiser når sulten 1-3 måltider","Når det er mat"],
        ["Spiser ved kjøkkenbord/spisebord","Spiser ved bordet, TV, seng,...","Der du er","Der du er"],
        ["Spiser alene og sammen med andre","Varierer","Mest alene","Mest alene"],
        ["Mange farger","Varierer","Noen få","Ingen"],
    ],
    userAnswers: [
        {date: new Date('01.10.2040'),testNr: 'nr', answers:[2,3,1,0,]},
        {date: new Date('02.10.2020'),testNr: 'nr', answers:[]},
        {date: new Date('04.10.2020'),testNr: 'nr', answers:[]},
    ],
    testTilbakemelding:[
        ["Supert, du har gode spisemønstre. Fortsett å variere måltidene.","Dette er bra og et godt utgangspunkt, du må ha fokus på drivstoff i kroppen din og bestemme deg for måltidsrytme","Hmmm, her skal vi brette opp arma. Du trenger oversikt over måltidsrytme","Her må en jobb gjøres med måltidsrytme."],
        ["Bra! Kroppen og fordøyelsen fortjener fokus på spisesituasjonen","Bestem deg for et sted å spise, kroppen og fordøyelsen fortjener fokus på spisesituasjonen.","Dette er betenkelig, sosial spising er viktig for matglede og fordøyelse.","Her har du stort forbedringspotensialet- se tipsene"],
        ["Så bra! Å kunne spise sammen med andre er godt sosialt.","Fint med variasjon, å dele et måltid er godt for mennesker. Inviter til et måltid.","Å dele måltider gir gode fellesskap","Å dele måltider gir gode fellesskap"],
        ["Det er bra! Mat med mange farger er bra for fordøyelsen og helsa generelt.","Du må passe på å spise farger til alle måltidene dine.","Det har potensialet.","Hmmmm, her må noe gjøres."],

    ],
    weekPlan:[
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
    ],
    tipsTricks:[
        ["tips1","tips2","tips3","tips4",],
        ["tips1","tips2","tips3","tips4",],
        ["tips1","tips2","tips3","tips4",],
        ["tips1","tips2","tips3","tips4",],
    ],
},
søvn: {
    testQuestion: ["Hvor mange måltider spiser du på en dag?","Hvor spiser du?","Spiser du oftest alene eller sammen med andre?","Hvor mange av regnbuens farger har du på tallerkenen din?"],
    
    testAnswer:[
        ["Spiser 4-6 måltider om dagen","Spiser 1-10 måltidere om dagen","Spiser når sulten 1-3 måltider","Når det er mat"],
        ["Spiser ved kjøkkenbord/spisebord","Spiser ved bordet, TV, seng,...","Der du er","Der du er"],
        ["Spiser alene og sammen med andre","Varierer","Mest alene","Mest alene"],
        ["Mange farger","Varierer","Noen få","Ingen"],
    ],
    userAnswers: [
        {date: new Date('01.10.2090'),testNr: 'nr', answers:[2,3,1,0,]},
        {date: new Date('02.10.2020'),testNr: 'nr', answers:[]},
        {date: new Date('04.10.2080'),testNr: 'nr', answers:[]},
    ],
    testTilbakemelding:[
        ["Supert, du har gode spisemønstre. Fortsett å variere måltidene.","Dette er bra og et godt utgangspunkt, du må ha fokus på drivstoff i kroppen din og bestemme deg for måltidsrytme","Hmmm, her skal vi brette opp arma. Du trenger oversikt over måltidsrytme","Her må en jobb gjøres med måltidsrytme."],
        ["Bra! Kroppen og fordøyelsen fortjener fokus på spisesituasjonen","Bestem deg for et sted å spise, kroppen og fordøyelsen fortjener fokus på spisesituasjonen.","Dette er betenkelig, sosial spising er viktig for matglede og fordøyelse.","Her har du stort forbedringspotensialet- se tipsene"],
        ["Så bra! Å kunne spise sammen med andre er godt sosialt.","Fint med variasjon, å dele et måltid er godt for mennesker. Inviter til et måltid.","Å dele måltider gir gode fellesskap","Å dele måltider gir gode fellesskap"],
        ["Det er bra! Mat med mange farger er bra for fordøyelsen og helsa generelt.","Du må passe på å spise farger til alle måltidene dine.","Det har potensialet.","Hmmmm, her må noe gjøres."],

    ],
    weekPlan:[
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
        ["weekPlan1","weekPlan2","weekPlan3","weekPlan4",],
    ],
    tipsTricks:[
        ["tips1","tips2","tips3","tips4",],
        ["tips1","tips2","tips3","tips4",],
        ["tips1","tips2","tips3","tips4",],
        ["tips1","tips2","tips3","tips4",],
    ],
}

// modelTest.kosthold.testQuestion[]
// modelTest.kosthold.testAnswer[1][2]

}