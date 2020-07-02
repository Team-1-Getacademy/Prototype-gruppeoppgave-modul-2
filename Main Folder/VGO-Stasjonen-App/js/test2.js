
function updateAnswers(i) {
    const today = new Date();
    modelTest[modelTest.kategori[i]].userAnswers.push({date: today ,answers: []});
    showPageUserTestView(i);
}

function showPageUserTestView(testNr) {
    let i = modelTest[modelTest.kategori[testNr]].userAnswers.length; i--;
   
    const currentQuestionIndex = modelTest[modelTest.kategori[testNr]].userAnswers[i].answers.length;
    const text = currentQuestionIndex >= modelTest[modelTest.kategori[testNr]].testQuestion.length
    ? 'du er ferdig <button>gå til side b</button>'
    : ` ${modelTest[modelTest.kategori[testNr]].testQuestion[currentQuestionIndex]} <br> ${createAnswer(testNr, currentQuestionIndex)}`
    innhold.innerHTML = `
    <div>
    ${text}
    </div>            
    `;
}

function createAnswer(testNr, currentQuestionIndex){
    let buttonTest ='';
for (let j = 0; j < modelTest[modelTest.kategori[testNr]].testAnswer.length; j++){
    buttonTest += createButton(testNr, currentQuestionIndex,j)
    };
return buttonTest;
}


function createButton(testNr, currentQuestionIndex, j){
    let answer = modelTest[modelTest.kategori[testNr]].testAnswer[currentQuestionIndex][j]
    return `<button onclick="registerAnswer(${testNr},${j})">${answer}</button>`
}

function registerAnswer(testNr , answer) {
    let i = modelTest[modelTest.kategori[testNr]].userAnswers.length; i--;
    
    modelTest[modelTest.kategori[testNr]].userAnswers[i].answers.push(answer);
    showPageUserTestView(testNr);
}




