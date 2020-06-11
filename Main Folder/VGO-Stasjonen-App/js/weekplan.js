
// Controller
let todaysDate = new Date();

function addTask() {
    tasks.push({
        category: categoryId,
        description: plan,
        isDone: false,
        dateDone: undefined
    });
    
    show();
}

// View
let weekPlan = document.getElementById('planbox');
show();

function show() {
    let planHtml = `
                    <tr>
                        <th>Kategori></th>
                        <th>Oppgave</th>
                        <th>Gjort</th>
                        <th>Dato ferdig</th>
                        </tr>`;
    for (let i = 0; i < tasks.length; i++) {
        planHtml += createHtmlRow(i);
    }
    weekPlan.innerHTML = planHtml;
}

function createHtmlRow(i) {
    const task = tasks[i];
    const checkedHtml = task.isDone ? 'checked="checked"' : '';
    if (!task.editMode)
        return `<tr>
                        <td>${task.person}</td>
                        <td>${task.description}</td>
                        <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${task.dateDone}</td>
                        <td><input type="date" onchange="changeDate(this, ${i})" value="${task.deadline || ''}"/><td>
                        <td>
                            <button onclick="deleteTask(${i})">Slett</button>
                            <button onclick="editTask(${i})">Rediger</button>
                        </td>
                    </tr>
                    `;
    return `<tr>
                        <td><input id="editPerson${i}" type="text" value="${task.person}"/></td>
                        <td><input id="editDescription${i}" type="text" value="${task.description}"/></td>
                        <td><input onchange="changeIsDone(this, ${i})" type="checkbox" ${checkedHtml} /></td>
                        <td>${task.dateDone}</td>
                        <td><input type="date" onchange="changeDate(this, ${i})"/><td>
                        <td>
                            <button onclick="updateTask(${i})">Lagre</button>
                        </td>
                    </tr>
                    `;
}

function changeIsDone(checkbox, index) {
    tasks[index].isDone = checkbox.checked;
    if (tasks[index].isDone){tasks[index].dateDone = todaysDate.toLocaleDateString();}
    else {tasks[index].dateDone = 'Ikke gjort'}
    show();
}
function changeDate(newDate, index){
    tasks[index].deadline = newDate.value;
    show()
}

function deleteTask(index) {
    tasks.splice(index, 1);
    show();
}

function editTask(index) {
    tasks[index].editMode = true;
    show();
}

function updateTask(index) {
    const id = `editDescription${index}`;
    const idPerson = `editPerson${index}`;
    const inputTag = document.getElementById(id);
    const inputTagPerson = document.getElementById(idPerson);
    const task = tasks[index];
    task.description = inputTag.value;
    task.person = inputTagPerson.value;
    task.editMode = false;
    show();
}