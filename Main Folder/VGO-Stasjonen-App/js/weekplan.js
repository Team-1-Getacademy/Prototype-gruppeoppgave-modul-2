
// Controller
let todaysDate = new Date();

let isDone = false;
// function addobjectWeekplan() {
//     objectWeekplans.push({
//         category: categoryId,
//         description: plan,
//         isDone: false,
//         dateDone: undefined
//     });
    
//     show();
// }

// View
// weekPlanHTML = document.getElementById('planBox');
let weekPlan = [];

weekplanSorted();
show();

function weekplanSorted(){
    for (let i = 1; i < 7; i++) {
        sortWeekplan(i); 
        weekPlan.push(weekplanFinal);
    }
}

function show() {
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
    // return `<tr>
    //                     <td><input id="editPerson${i}" type="text" value="${objectWeekplan.person}"/></td>
    //                     <td><input id="editDescription${i}" type="text" value="${objectWeekplan.description}"/></td>
    //                     <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
    //                     <td>${objectWeekplan.dateDone}</td>
    //                     <td><input type="date" onchange="changeDate(this, ${i})"/><td>
    //                     <td>
    //                         <button onclick="updateobjectWeekplan(${i})">Lagre</button>
    //                     </td>
    //                 </tr>
    //                 `;
}



function changeIsDone(checkbox, j,index) {
    weekPlan[j][index].isDone = checkbox.checked;
    if (weekPlan[j][index].isDone)  {
                weekPlan[j][index].dateDone = todaysDate.toLocaleDateString();
    }
    else {weekPlan[j][index].dateDone = 'Ikke gjort'}
    //show();
}
function changeDate(newDate, j,index){
    weekPlan[j][index].deadline = newDate.value;
    show()
}

// function deleteobjectWeekplan(index) {
//     objectWeekplans.splice(index, 1);
//     show();
// }

// function editobjectWeekplan(index) {
//     objectWeekplans[index].editMode = true;
//     show();
// }

// function updateobjectWeekplan(index) {
//     const id = `editDescription${index}`;
//     const idPerson = `editPerson${index}`;
//     const inputTag = document.getElementById(id);
//     const inputTagPerson = document.getElementById(idPerson);
//     const objectWeekplan = objectWeekplans[index];
//     objectWeekplan.description = inputTag.value;
//     objectWeekplan.person = inputTagPerson.value;
//     objectWeekplan.editMode = false;
//     show();
// }

