let weekPlanHTML = [];
let allTipsHTML = [];
function showMainPageContentView()  {
        innholdDiv.innerHTML = 
    `<div class="grid-container">
    <div class="grid-item grid-item-2"> ${allTipsHTML}</div>
    <div id="scoreboard" class="grid-item grid-item-3">Scoreboard
    </div>
    <div id="planbox" class="grid-item grid-item-4">${weekPlanHTML}</div>
    </div>
    `;
}

