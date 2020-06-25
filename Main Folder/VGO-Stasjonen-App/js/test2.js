
function updateAnswers2() {
    const today = new Date();
    modelTest.kosthold.userAnswers.push({date: today ,answers: []});
}

function showPageTest2View() {
    let buttonTest ='';
    let i = modelTest.kosthold.userAnswers.length; i--;
    for (let j = 0; j < 4; j++){
       buttonTest += createButton(j)
    };
    const currentQuestionIndex = modelTest.kosthold.userAnswers[i].answers.length;
    const text = currentQuestionIndex >= modelTest.kosthold.testQuestion.length
    ? 'du er ferdig <button>gå til side b</button>'
    : ` ${modelTest.kosthold.testQuestion[currentQuestionIndex]} <br> ${buttonTest}`
    innhold.innerHTML = `
    <div>
    ${text}
    </div>            
    `;
}
function createButton(j){
    let answer = modelTest.kosthold.testAnswer[j]
    return `<button onclick="registerAnswer(${j})">${answer}</button> <br>`
}

function registerAnswer(answer) {
    let i = modelTest.kosthold.userAnswers.length; i--;
    
    modelTest.kosthold.userAnswers[i].answers.push(answer);
    showPageTest2View();
}








// function scoreboardPoints(value){
//    let scoreInnhold = document.getElementById("innhold").innerHTML;
//     return `${value}`
// }
