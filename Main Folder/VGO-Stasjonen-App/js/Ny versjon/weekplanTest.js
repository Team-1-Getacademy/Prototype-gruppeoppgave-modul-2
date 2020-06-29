

let todaysDate = new Date();


let weekPlan = [];
// let planHtml;

// weekplanSorted();
// showWeekPlan();



let weekPlan3 = [];
let weekPlanDone = [];
let planHtml;
answerSorted()
weekplanSorted();
weekplanSorted1();
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

function weekplanSorted1(){
    for (let j = 0; j < weekPlan3.length; j++) {
        for (let i = 0; i < weekPlan3[j][0].answers.length; i++) {
            k = weekPlan3[j][0].answers[i];
            weekPlanText = modelTest[modelTest.kategori[j]].weekPlan[i][k];
            console.log(weekPlanText);
            weekPlanDone.push({weekPlanText,
                isDone: false,
                deadline: undefined,
                dateDone: undefined,
            })
       }
    }
}



// const weekPlan3 = [];
// weekplanSorted1();
// let kategorier;
// function weekplanSorted1(){
//     for (let i = 0; i < 2; i++) {
//         dateFilter(i); 
//         weekPlan3.push(newArray6);
//     }
// }

// function dateFilter(i) {
//     let kategorier = modelTest.kategori[i];
//     newArray6 = modelTest[kategorier].userAnswers.sort((a, b) => b.date - a.date)
//     newArray6.splice(1,Infinity)
//     return newArray6;
// }







// function weekplanSorted(){
//     for (let i = 1; i < 7; i++) {
//         sortWeekplan(i); 
//         weekPlan.push(weekplanFinal);
//     }
// }

function showWeekPlan() {
     planHtml = `<table>
                    <tr>
                        <th>Kategori</th>
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


function createHtmlRow(j, i) {
    const objectWeekplan = weekPlanDone[i];
    const checkedHtml = objectWeekplan.isDone ? 'checked="checked"' : '';
        return `<tr>    <td>${objectWeekplan.kategori}</td>
                        <td>${objectWeekplan.plan}</td>
                        <td><input onchange="changeIsDone(this , ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${objectWeekplan.dateDone}</td>
                        <td><input type="date" onchange="changeDate(this, ${i})" value="${objectWeekplan.deadline || ''}"/><td>
                        </td>
                    </tr>
                    `;
}



function changeIsDone(checkbox, j,index) {
    weekPlanDone[index].isDone = checkbox.checked;
    if (weekPlanDone[index].isDone)  {
            weekPlanDone[index].dateDone = todaysDate.toLocaleDateString();
    }
    else {weekPlanDone[index].dateDone = 'Ikke gjort'}
    showWeekPlan();
    show();
}
function changeDate(newDate, j,index){
    weekPlanDone[index].deadline = newDate.value;
    showWeekPlan();
    show();
}

