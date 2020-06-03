//Modell 

let testUserScore = [
    //Deler på antall spørsmål for å få en snitt score
    {testId: "søvn",
     score: "3",
     userID: "1035",
     date: "25.05.2020",   
    },

    {testId: "kosthold",
     score: "2",
     userID: "1035",
     date: "29.05.2020"   
    },

    {testId: "økonomi",
     score: "4",
     userID: "1035",
     date: "15.05.2020"   
    },
]

let testQuestion = [
    {   category: "søvn",
        spm: ['sov du godt på natten?', 'Drømme du om fine ting?'],
    },

    {   category: "kosthold",
        spm: ['Spise du ritkig om dagen', 'Har du spist en kebab idag?'],
    },

    {   category: "fysiskeAktivitet",
        spm: ['Har du løpte i det siste?', 'Har du gått på tur idag?'],
    },

    {   category: "sosialeAktivitet",
        spm: ['Har du vært i kontakt med noen venner i det siste?', 'Slitter du med å ta kontakt med venner?'],
    },

    {   category: "økonomi",
        spm: ['Følger du at du har god kontroll over din økonomi', 'Kjøpe du ting uten å tenke først?'],
    },

    {   category: "karrierveiledningOgUtdanningsvalg",
        spm: ['Tenke du på å ta noe utdanning i det nærmeste fremtid?', 'Kan du tenke deg en jobb i det nærmeste fremtiden?'],
    },
    
    ]


function randomQuestion() {
    let random = Math.floor(Math.random()*testQuestion.length);
    let randomQ = Math.floor(Math.random()*testQuestion[random].spm.length);
    let spm = testQuestion[random].spm[randomQ];
    console.log(spm);
    //testQuestion.forEach(category => console.log(category));

    // testQuestion.forEach(spm => console.log(spm));


}

//     testQuestion[Math.floor(Math.random()*testQuestion.length)]
    
//     var result = student.map(function(e) {
//         return e.class[0].code;
//       });
      
//       console.log(result)

// }

    //View

    
    //Controller
    // let randomTestQuestion = testQuestion[Math.floor(Math.random()*testQuestion.length)]

    // function getQuestion()  {

    // }

    // for( i in testQuestion){
    //     t = Math.floor( Math.random()* testQuestion[i].length);

    //     console.log(i + testQuestion[i][t]);
    // }