
// Controller
let todaysDate = new Date();

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
let planHtml = `
<tr>
    <th>Kategori></th>
    <th>Oppgave</th>
    <th>Gjort</th>
    <th>Dato ferdig</th>
    <th>Sett frist</th>
</tr>`;
show();

function show() {
    let planHtml = `<table>
                    <tr>
                        <th>Kategori</th>
                        <th>Oppgave</th>
                        <th>Gjort</th>
                        <th>Dato ferdig</th>
                        <th>Sett frist</th>
                    </tr>`;
    for (let i = 0; i < weekPlan.length; i++) {
        planHtml += createHtmlRow(i);
    }planHtml += `</table>`
    weekPlanHTML = planHtml;    
  
}

function createHtmlRow(i) {
    const objectWeekplan = weekPlan[i];
    const checkedHtml = objectWeekplan.isDone ? 'checked="checked"' : '';
    if (!objectWeekplan.editMode)
        return `<tr>
                        <td>${objectWeekplan.categoryId}</td>
                        <td>${objectWeekplan.plan}</td>
                        <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${objectWeekplan.dateDone}</td>
                        <td><input type="date" onchange="changeDate(this, ${i})" value="${objectWeekplan.deadline || ''}"/><td>
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

function changeIsDone(checkbox, index) {
    objectWeekplans[index].isDone = checkbox.checked;
    if (objectWeekplans[index].isDone){objectWeekplans[index].dateDone = todaysDate.toLocaleDateString();}
    else {objectWeekplans[index].dateDone = 'Ikke gjort'}
    show();
}
function changeDate(newDate, index){
    objectWeekplans[index].deadline = newDate.value;
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


function weekplanSorted(){
    for (let i = 1; i < 7; i++) {
        sortWeekplan(i);
        weekPlan.push(weekplanFinal);
    }
    
    
}

