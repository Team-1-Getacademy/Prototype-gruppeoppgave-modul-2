let tipsArray = [];
let tipsHtml;

showInfoBox();

function weekplanSorted(){
    for (let j = 0; j < weekPlan.length; j++) {
        for (let i = 0; i < weekPlan[j][0].answers.length; i++) {
            k = weekPlan[j][0].answers[i];
            tipsText = modelTest[modelTest.kategori[j]].weekPlan[i][k];
            tipsArray.push(tipsText)
       }
    }
}

function showInfoBox(){

    tipsHtml = `<table>
                    <tr>
                        <th>Kategori</th>
                        <th>Tips</th>
                    </tr>`;

    for (let j = 0; j < model.tipsTricks.length; j++) {
        for (let i = 0; i < model.tipsTricks[j].tips.length; i++) {
            tipsHtml += createTipsHtmlRow(j, i);
    }
    }
    tipsHtml += `</table>`;
    allTipsHTML = tipsHtml;   
}

function createTipsHtmlRow(j,i){
    const objectKategoriTips = model.tipsTricks[j].kategori;
    const objectTips = model.tipsTricks[j].tips[i];
    return `<tr>    <td>${objectKategoriTips}</td>
            <td>${objectTips}</td> </tr>`;

}