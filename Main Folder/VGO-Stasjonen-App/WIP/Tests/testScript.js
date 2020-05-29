     
let showEndBtns =  `<button id="backToHomePage">Back to homepage</button>
                    <button id="takeMoreTests">Take more tests</button>`

let testFinishComment = ["Thank you for taking the test, now go and put your feet up and relax :)", "Good job!", "Good job, you are one step closer to becoming a better you"]


let testQuestions = ["Do you feel like you have something more in life to conquer?", "Have you ever thought about starting a new direction in life?", "Do you find it hard to finish something once you have started it?", "Do you want to master your own life and start taking control over your lifes direction?"];      
let randomFinalQuote = testFinishComment[Math.floor(Math.random()*testFinishComment.length)]

let contentDiv = document.getElementById("questionsDiv");

let counter = 0;
let score = 0;

show();

let btnValue1  = document.getElementById("a1-1").value;
let btnValue2  = document.getElementById("a1-2").value;
let btnValue3  = document.getElementById("a1-3").value;
let btnValue4  = document.getElementById("a1-4").value;

function checkTest() {

    document.getElementById("q1").innerHTML = randomFinalQuote + showEndBtns;


}

function show()     {

let questionHtml = testQuestions[counter];
contentDiv.innerHTML = `${questionHtml}`

    if (counter == testQuestions.length)    {
        checkTest();
        }
    else showBtns();

}

function showBtns() {

let btnsShow = 
`<button onclick="nextQuestion(this)" class="buttonAnswer" id="a1-1" value="8">&#128512;</button>

<button onclick="nextQuestion(this)" class="buttonAnswer" id="a1-2" value="6">
&#128578;</button>

<button onclick="nextQuestion(this)" class="buttonAnswer" id="a1-3" value="4">
&#128528;</button>

<button onclick="nextQuestion(this)" class="buttonAnswer" id="a1-4" value="2">
&#128577;</button>`;

document.getElementById("a1").innerHTML = btnsShow;

}

function nextQuestion(btn)  {

    score += parseInt(btn.value); 
    counter++;

        show();

    console.log(score);
    sendScoreToObject();
}

function sendScoreToObject()  {

if (counter == testQuestions.length)    {

    scoreObject[0].objScore = score;

}
}

function newPerson()    {
    let person = new ScoreObject
        input1 = person.userId
        input2 = person.testId
        score = person.objectScore
}
