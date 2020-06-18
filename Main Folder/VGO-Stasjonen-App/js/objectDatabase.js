const model = {
    page: 'main',
    user: {
        name: 'Geir Eskil Terjesen',
        userId: "1035",
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
        {text: 'sov du godt på natten?', categoryId: 1 },
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
        { categoryId: 1, tips: ['Telle sauer', 'Pusteøvelser: sampleurl']},
        { categoryId: 2, tips: ['Spis én av fem om dagen',  'Spis regelmessig fremfor i store mengder få ganger daglig' ]},
        { categoryId: 3, tips: ['Det er lettere å fortsette enn å komme i gang',  '7 enkle grep for å komme i form: samlpleurl']} ,
        { categoryId: 4, tips: ['Ikke avstå fra sosiale situasjoner',  'MS paint er fint for moro' ]},
        { categoryId: 5, tips: ['Eksempelmatbudsjett',  '656 tips til lettere sparing' ]},
        { categoryId: 6, tips: ['Interessetest: sampleurl', 'hvilke form for antarktismurmeldyr med kompetanse er du?' ]},
        ]

    
}