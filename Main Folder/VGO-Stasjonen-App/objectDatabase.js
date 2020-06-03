const model = {
    page: 'main',
    user: {
        name: 'Terje',
    },
    testUserScore: [
        //Deler på antall spørsmål for å få en snitt score
        {
            testId: "søvn",
            score: "3",
            userID: "1035",
            date: "2020.05.25",
        },

        {
            testId: "kosthold",
            score: "2",
            userID: "1035",
            date: "29.05.2020"
        },

        {
            testId: "økonomi",
            score: "4",
            userID: "1035",
            date: "15.05.2020"
        },
    ],
    questionCategories: [
        { id: 1, text: 'søvn' }
    ],
    testQuestion: [
        {
            categoryId: 1,
            spm: ['sov du godt på natten?', 'Drømme du om fine ting?'],
        },

        {
            category: "kosthold",
            spm: ['Spise du ritkig om dagen', 'Har du spist en kebab idag?'],
        },

        {
            category: "fysiskeAktivitet",
            spm: ['Har du løpte i det siste?', 'Har du gått på tur idag?'],
        },

        {
            category: "sosialeAktivitet",
            spm: ['Har du vært i kontakt med noen venner i det siste?', 'Slitter du med å ta kontakt med venner?'],
        },

        {
            category: "økonomi",
            spm: ['Følger du at du har god kontroll over din økonomi', 'Kjøpe du ting uten å tenke først?'],
        },

        {
            category: "karrierveiledningOgUtdanningsvalg",
            spm: ['Tenke du på å ta noe utdanning i det nærmeste fremtid?', 'Kan du tenke deg en jobb i det nærmeste fremtiden?'],
        },

    ],

    weekPlan: [
        { plan: 'Re sengen', score: 13, categoryId: 'søvn' },
        { plan: 'Legge deg 23.00', score: 15 },
        { plan: 'Våkne en bestemt tid hver dag', score: 23 },
        { plan: 'Våkne 08.00', score: 30 },
    ],


    // let tipsTricks =[
    //     {
    //         søvn =[
    //             { tips1: 'Telle sauer', tips2: 'Pusteøvelser: sampleurl' }
    //         ],
    //         kosthold =[
    //             { tips1: 'Spis én av fem om dagen', tips2: 'Spis regelmessig fremfor i store mengder få ganger daglig' }
    //         ],
    //         fysiskeAktivitet =[
    //             { tips1: 'Det er lettere å fortsette enn å komme i gang', tips2: '7 enkle grep for å komme i form: samlpleurl' }
    //         ],
    //         sosialeAktivitet =[
    //             { tips1: 'Ikke avstå fra sosiale situasjoner', tips2: 'MS paint er fint for moro' }
    //         ],
    //         økonomi =[
    //             { tips1: 'Eksempelmatbudsjett', tips2: '656 tips til lettere sparing' }
    //         ],
    //         karrierveiledningOgUtdanningsvalg =[
    //             { tips1: 'Interessetest: sampleurl', tips2: 'hvilke form for antarktismurmeldyr med kompetanse er du?' }
    //         ],
    //     }
    // ]
}