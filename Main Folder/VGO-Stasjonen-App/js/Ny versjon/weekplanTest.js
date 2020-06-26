

let todaysDate = new Date();


let weekPlan3 = [];
let weekPlanDone = [];
let planHtml;
answerSorted()
weekplanSorted();
showWeekPlan();



let kategorier;
function answerSorted(){
    for (let i = 0; i < 2; i++) {
        dateFilter(i); 
        weekPlan3.push(newArray6);
    }
}

function dateFilter(i) {
    let kategorier = modelTest.kategori[i];
    newArray6 = modelTest[kategorier].userAnswers.sort((a, b) => b.date - a.date)
    newArray6.splice(1,Infinity)
    return newArray6;
}

function weekplanSorted(){
    for (let j = 0; j < weekPlan.length; j++) {
        for (let i = 0; i < weekPlan[j].length; i++) {
            k = weekPlan3[j].answers[i];
            weekPlanText = modelTest[modelTest.kategori[j]].weekPlan[k]
            weekPlanDone.push({weekPlanText,
                isDone: false,
                deadline: undefined,
                dateDone: undefined,
            })
       }
    }
}





function showWeekPlan() {
     planHtml = `<table>
                    <tr>
                        <th>Kategori</th>
                        <th>Oppgave</th>
                        <th>Gjort</th>
                        <th>Dato ferdig</th>
                        <th>Sett frist</th>
                    </tr>`;

    for (let j = 0; j < weekPlan.length; j++) {
        for (let i = 0; i < weekPlan[j].length; i++) {
            planHtml += createHtmlRow(j, i);
       }
    }
    planHtml += `</table>`;
    weekPlanHTML = planHtml;    
}


function createHtmlRow(j, i) {
    const objectWeekplan = weekPlan[j][i];
    const checkedHtml = objectWeekplan.isDone ? 'checked="checked"' : '';
        return `<tr>    <td>${objectWeekplan.kategori}</td>
                        <td>${objectWeekplan.plan}</td>
                        <td><input onchange="changeIsDone(this, ${j} , ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${objectWeekplan.dateDone}</td>
                        <td><input type="date" onchange="changeDate(this, ${j} , ${i})" value="${objectWeekplan.deadline || ''}"/><td>
                        </td>
                    </tr>
                    `;
}



function changeIsDone(checkbox, j,index) {
    weekPlan[j][index].isDone = checkbox.checked;
    if (weekPlan[j][index].isDone)  {
            weekPlan[j][index].dateDone = todaysDate.toLocaleDateString();
    }
    else {weekPlan[j][index].dateDone = 'Ikke gjort'}
    showWeekPlan();
    show();
}
function changeDate(newDate, j,index){
    weekPlan[j][index].deadline = newDate.value;
    showWeekPlan();
    show();
}

