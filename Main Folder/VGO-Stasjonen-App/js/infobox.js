let tipsArray = [];
let tipsHtml;

tipsSorted();
showInfoBox();

function tipsSorted(){
    for (let j = 0; j < weekPlan.length; j++) {
        for (let i = 0; i < weekPlan[j][0].answers.length; i++) {
            k = weekPlan[j][0].answers[i];
            tipsText = modelTest[modelTest.kategori[j]].tipsTricks[i][k];
            tipsArray.push(tipsText)
       }
    }
}

function showInfoBox(){

    tipsHtml = `<table>
                    <tr>
                        <th>Tips & Triks</th>
                    </tr>`;

        for (let i = 0; i < tipsArray.length; i++) {
            tipsHtml += createTipsHtmlRow(i);
    }
    tipsHtml += `</table>`;
    allTipsHTML = tipsHtml;   
}

function createTipsHtmlRow(i){
    const objectTips = tipsArray[i];
    return `<tr>  
            <td>${objectTips}</td> </tr>`;

}