
let todaysDate = new Date();
let weekPlan = [];
let weekPlanDone = [];
let planHtml;
answerSorted()
weekplanSorted();
showWeekPlan();


// Henter det nyeste svaret på testene
let kategorier;
function answerSorted(){
    for (let i = 0; i < 2; i++) {
        dateFilter(i); 
        weekPlan.push(newArray);
    }
}

// Sorterer etter dato på testene
function dateFilter(i) {
    let kategorier = modelTest.kategori[i];
    newArray = modelTest[kategorier].userAnswers.sort((a, b) => b.date - a.date)
    newArray.splice(1,Infinity)
    return newArray;
}

// Bruker Svarene til å finne riktig weekplan for så å putte inn mer data
function weekplanSorted(){
    for (let j = 0; j < weekPlan.length; j++) {
        for (let i = 0; i < weekPlan[j][0].answers.length; i++) {
            k = weekPlan[j][0].answers[i];
            weekPlanText = modelTest[modelTest.kategori[j]].weekPlan[i][k];
            weekPlanDone.push({weekPlanText,
                isDone: false,
                deadline: undefined,
                dateDone: undefined,
            })
       }
    }
}


// Lager weeekplanen
function showWeekPlan() {
     planHtml = `<table>
                    <tr>
                        <th>Oppgave</th>
                        <th>Gjort</th>
                        <th>Dato ferdig</th>
                        <th>Sett frist</th>
                    </tr>`;

    for (let i = 0; i < weekPlanDone.length; i++) {
        planHtml += createHtmlRow(i);
    }
    planHtml += `</table>`;
    weekPlanHTML = planHtml;    
}


function createHtmlRow(i) {
    const objectWeekplan = weekPlanDone[i];
    const checkedHtml = objectWeekplan.isDone ? 'checked="checked"' : '';
        return `<tr>    <td>${objectWeekplan.weekPlanText}</td>
                        <td><input onchange="changeIsDone(this , ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${objectWeekplan.dateDone || 'Ikke gjort'}</td>
                        <td><input type="date" onchange="changeDate(this, ${i})" value="${objectWeekplan.deadline || ''}"/><td>
                        </td>
                    </tr>
                    `;
}



function changeIsDone(checkbox,index) {
    weekPlanDone[index].isDone = checkbox.checked;
    if (weekPlanDone[index].isDone)  {
            weekPlanDone[index].dateDone = todaysDate.toLocaleDateString();
    }
    else {weekPlanDone[index].dateDone = 'Ikke gjort'}
    showWeekPlan();
    show();
}
function changeDate(newDate,index){
    weekPlanDone[index].deadline = newDate.value;
    showWeekPlan();
    show();
}

