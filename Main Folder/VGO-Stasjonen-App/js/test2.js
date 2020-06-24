// let nrButtons = `<button onclick="registerAnswer(3)">${answer}</button> <button onclick="registerAnswer(2)">3</button> <button onclick="registerAnswer(1)">2</button> <button onclick="registerAnswer(0)">1</button>`;

function updateAnswers2() {
    const today = new Date();
    modelTest.kosthold.userAnswers.push({date: today ,answers: []});
}

function showPageTest2View() {
    let i = modelTest.kosthold.userAnswers.length; i--;
    // for (let j = 0; j < 4; j++);
    const currentQuestionIndex = modelTest.kosthold.userAnswers[i].answers.length;
    const text = currentQuestionIndex >= modelTest.kosthold.testQuestion.length
    ? scoreboardPoints(5) + 'du er ferdig <button>gå til side b</button>'
    : ` ${modelTest.kosthold.testQuestion[currentQuestionIndex].text} <br> ${createButton()}`
    innhold.innerHTML = `
    <div>
    ${text}
    </div>            
    `;
}
function createButton(j){
    let answer = modelTest.kosthold.testAnswer[j]
    return `<button onclick="registerAnswer(${j})">${answer}</button>`
}

function registerAnswer(answer) {
    let i = modelTest.kosthold.userAnswers.length; i--;
    
    modelTest.kosthold.answers[i].userAnswers.push(answer);
    showPageTest1View();
}

// function scoreboardPoints(value){
//    let scoreInnhold = document.getElementById("innhold").innerHTML;
//     return `${value}`
// }
