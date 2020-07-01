const model = {
    page: 'login',
    user: {
        name: 'Geir Eskil Terjesen',
        userId: "1035",
        totalLvl: 0,
        xpToNextLvl: 30,
        TimesLogInn: 0,
    },
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
        {date: new Date('06.10.2020'),testNr: 'nr', answers:[2,3,1,0,]},
        {date: new Date('02.10.2020'),testNr: 'nr', answers:[1,2,1,3,]},
        {date: new Date('04.10.2020'),testNr: 'nr', answers:[]},
    ],
    testTilbakemelding:[
        ["Supert, du har gode spisemønstre. Fortsett å variere måltidene.","Dette er bra og et godt utgangspunkt, du må ha fokus på drivstoff i kroppen din og bestemme deg for måltidsrytme","Hmmm, her skal vi brette opp arma. Du trenger oversikt over måltidsrytme","Her må en jobb gjøres med måltidsrytme."],
        ["Bra! Kroppen og fordøyelsen fortjener fokus på spisesituasjonen","Bestem deg for et sted å spise, kroppen og fordøyelsen fortjener fokus på spisesituasjonen.","Dette er betenkelig, sosial spising er viktig for matglede og fordøyelse.","Her har du stort forbedringspotensialet- se tipsene"],
        ["Så bra! Å kunne spise sammen med andre er godt sosialt.","Fint med variasjon, å dele et måltid er godt for mennesker. Inviter til et måltid.","Å dele måltider gir gode fellesskap","Å dele måltider gir gode fellesskap"],
        ["Det er bra! Mat med mange farger er bra for fordøyelsen og helsa generelt.","Du må passe på å spise farger til alle måltidene dine.","Det har potensialet.","Hmmmm, her må noe gjøres."],

    ],
    weekPlan:[
        ["weekPlan1a","weekPlan2a","weekPlan3a","weekPlan4a",],
        ["weekPlan1b","weekPlan2b","weekPlan3b","weekPlan4b",],
        ["weekPlan1c","weekPlan2c","weekPlan3c","weekPlan4c",],
        ["weekPlan1d","weekPlan2d","weekPlan3d","weekPlan4d",],
    ],
    tipsTricks:[
        ["tips1a","tips2a","tips3a","tips4a",],
        ["tips1b","tips2b","tips3b","tips4b",],
        ["tips1c","tips2c","tips3c","tips4c",],
        ["tips1d","tips2d","tips3d","tips4d",],
    ],
},
søvn: {
    testQuestion: ["Hvor lenge sover du?","Hvor spiser du?","Spiser du oftest alene eller sammen med andre?","Hvor mange av regnbuens farger har du på tallerkenen din?"],
    
    testAnswer:[
        ["Spiser 4-6 måltider om dagen","Spiser 1-10 måltidere om dagen","Spiser når sulten 1-3 måltider","Når det er mat"],
        ["Spiser ved kjøkkenbord/spisebord","Spiser ved bordet, TV, seng,...","Der du er","Der du er"],
        ["Spiser alene og sammen med andre","Varierer","Mest alene","Mest alene"],
        ["Mange farger","Varierer","Noen få","Ingen"],
    ],
    userAnswers: [
        {date: new Date('01.10.2090'),testNr: 'nr', answers:[1,1,1,1,]},
        {date: new Date('02.10.2020'),testNr: 'nr', answers:[]},
        {date: new Date('04.10.2080'),testNr: 'nr', answers:[]},
        {date: new Date('04.10.1990'),testNr: 'nr', answers:[]},
        {date: new Date('04.10.1990'),testNr: 'nr', answers:[]},
        {date: new Date('04.10.1990'),testNr: 'nr', answers:[]},
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
}