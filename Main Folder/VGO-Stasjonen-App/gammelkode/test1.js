let nrButtons = '<button onclick="registerAnswer(5)">5</button> <button onclick="registerAnswer(4)">4</button> <button onclick="registerAnswer(3)">3</button> <button onclick="registerAnswer(2)">2</button> <button onclick="registerAnswer(1)">1</button>';
function updateAnswers() {
    const today = new Date().toISOString().substr(0, 10);
    let user = model.user.userId;
    model.answers.push({userId: user ,date: today ,answers: []});
}

function showPageTest1View() {
    let i = model.answers.length; i--;
   // const answers = getCurrentAnswers();
    const currentQuestionIndex = model.answers[i].answers.length;
    const text = currentQuestionIndex >= model.testQuestion.length
    ? 'du er ferdig <button>gå til side b</button>'
    : ` ${model.testQuestion[currentQuestionIndex].text} <br> ${nrButtons}`
    innhold.innerHTML = `
    <div>
    ${text}
    </div>            
    `;
}

// function getCurrentAnswers() {
//     const today = new Date().toISOString().substr(0, 10);
//     for (let answerObj of model.answers) {
//         if (answerObj.userId == model.user.userId && answerObj.date == today) {
//             return answerObj.answers;
//         }
//     }
// }
function registerAnswer(answer) {
    let i = model.answers.length; i--;
    //const answers = getCurrentAnswers();
    model.answers[i].answers.push(answer);
    showPageTest1View();
}