const model = {
        page: 'main',
        user:   {
            name: 'Geir Eskil Terjesen',
            userId: "1035",
                },
    
    testUserScore: [
        //Deler på antall spørsmål for å få en snitt score
        { CategoryId: 1, score: "3", userID: "1035", date: "2020.05.25", },
        { CategoryId: 2, score: "2", userID: "1035", date: "2020.03.04", },
        { CategoryId: 5, score: "4", userID: "1035", date: "2020.04.15" },
    ],
    
    VGOCategories: [
        { CategoryId: 1, text: 'Søvn' },
        { CategoryId: 2, text: 'Kosthold' },
        { CategoryId: 3, text: 'Fysiske Aktivitet' },
        { CategoryId: 4, text: 'Sosial Aktivitet' },
        { CategoryId: 5, text: 'Økonomi' },
        { CategoryId: 6, text: 'Karrierveiledning og Utdanningsvalg' },
    ],

    testQuestion: [
        {   CategoryId: 1,
            spm: ['sov du godt på natten?', 'Drømme du om fine ting?'],},
        {   CategoryId: 2,
            spm: ['Spise du ritkig om dagen', 'Har du spist en kebab idag?'],},
        {   CategoryId: 3,
            spm: ['Har du løpte i det siste?', 'Har du gått på tur idag?'],},
        {   CategoryId: 4,
            spm: ['Har du vært i kontakt med noen venner i det siste?', 'Slitter du med å ta kontakt med venner?'],},
        {   CategoryId: 5,
            spm: ['Følger du at du har god kontroll over din økonomi', 'Kjøpe du ting uten å tenke først?'],},
        {   CategoryId: 6,
            spm: ['Tenke du på å ta noe utdanning i det nærmeste fremtid?', 'Kan du tenke deg en jobb i det nærmeste fremtiden?'],},

    ],

    weekPlan: [
        { plan: 'Re sengen', score: 13, categoryId: 1 },
        { plan: 'Legge deg 23.00', score: 15, categoryId: 1 },
        { plan: 'Våkne en bestemt tid hver dag', score: 23, categoryId: 1 },
        { plan: 'Våkne 08.00', score: 30, categoryId: 1 },
    ],


     tipsTricks: [        
        { categoryId: 1, tips1: 'Telle sauer', tips2: 'Pusteøvelser: sampleurl' },
        { categoryId: 2, tips1: 'Spis én av fem om dagen', tips2: 'Spis regelmessig fremfor i store mengder få ganger daglig' },
        { categoryId: 3, tips1: 'Det er lettere å fortsette enn å komme i gang', tips2: '7 enkle grep for å komme i form: samlpleurl' },
        { categoryId: 4, tips1: 'Ikke avstå fra sosiale situasjoner', tips2: 'MS paint er fint for moro' },
        { categoryId: 5, tips1: 'Eksempelmatbudsjett', tips2: '656 tips til lettere sparing' },
        { categoryId: 6, tips1: 'Interessetest: sampleurl', tips2: 'hvilke form for antarktismurmeldyr med kompetanse er du?' },
    ]
}