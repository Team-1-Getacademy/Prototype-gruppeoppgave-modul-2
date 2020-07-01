let nrButtons = '<button onclick="registerAnswer(5)">5</button> <button onclick="registerAnswer(4)">4</button> <button onclick="registerAnswer(3)">3</button> <button onclick="registerAnswer(2)">2</button> <button onclick="registerAnswer(1)">1</button>';

function updateAnswers(id) {
    const today = new Date();
    let user = model.user.userId;
    model.answers.push({categoryId: id, userId: user ,date: today ,answers: []});
}

function showPageTest1View() {
    let i = model.answers.length; i--;
    const currentQuestionIndex = model.answers[i].answers.length;
    const text = currentQuestionIndex >= model.testQuestion.length
    ? scoreboardPoints(5) + 'du er ferdig <button>gå til side b</button>'
    : ` ${model.testQuestion[currentQuestionIndex].text} <br> ${nrButtons}`
    innhold.innerHTML = `
    <div>
    ${text}
    </div>            
    `;
}

function registerAnswer(answer) {
    let i = model.answers.length; i--;
    
    model.answers[i].answers.push(answer);
    showPageTest1View();
}

// function scoreboardPoints(value){
//    let scoreInnhold = document.getElementById("innhold").innerHTML;
//     return `${value}`
// }
