

let todaysDate = new Date();


let weekPlan = [];
let planHtml;

weekplanSorted();
showWeekPlan();

function weekplanSorted(){
    for (let i = 0; i < 6; i++) {
        dateFilter(modelTest.kategori[i]); 
        weekPlan3.push(newArray5);
    }
}

function dateFilter(kategori) {
    newArray5 = modelTest[kategori].userAnswers.sort((a, b) => b.date - a.date);
    return newArray5[0];
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

