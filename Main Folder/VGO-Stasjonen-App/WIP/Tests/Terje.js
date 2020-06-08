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

    questions: [
        { text: 'a?', categoryId: 1 }, // id og index = 0
        { text: 'b?', categoryId: 1 }, // id og index = 1
        { text: 'c?', categoryId: 2 },
        { text: 'd?', categoryId: 2 },
    ],

    answers: [
        { userId: "1035", date: "2020-06-05", answers: [] },
    ],
}

showAskQuestionPage();
function showAskQuestionPage() {
    const answers = getCurrentAnswers();
    // if(answers==null)lage det
    const currentQuestionIndex = answers.length;
    const text = currentQuestionIndex >= model.questions.length
        ? 'du er ferdig <button>gå til side b</button>'
        : ` ${model.questions[currentQuestionIndex].text} <button onclick="registerAnswer(5)">5</button>`
    document.getElementById('app').innerHTML = `
        <div>
            ${text}

            
        </div>            
    `;
}

function getCurrentAnswers() {
    const today = new Date().toISOString().substr(0, 10);
    for (let answerObj of model.answers) {
        if (answerObj.userId == model.user.userId && answerObj.date == today) {
            return answerObj.answers;
        }
    }
}

function registerAnswer(answer) {
    const answers = getCurrentAnswers();
    answers.push(answer);
    showAskQuestionPage();
}