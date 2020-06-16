let weekPlanHTML = "";

function showMainPageContentView()  {
        innholdDiv.innerHTML = 
    `<div class="grid-container">
    <div class="grid-item grid-item-2">infobox/feed, her kan   det legges til artikler eller annet nyttig</div>
    <div id="scoreboard" class="grid-item grid-item-3">Scoreboard
    </div>
    <div id="planbox" class="grid-item grid-item-4">${weekPlanHTML}
    </div>
    </div>
    `;
}
