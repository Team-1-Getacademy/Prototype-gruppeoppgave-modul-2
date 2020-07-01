let weekplanFinal = [];
let arrayPlan = [];
let scoreLow = '2.5';
let scoreHigh = '4';

function sortWeekplan(testId){
    arrayPlan = model.weekPlan.filter(function(filterPlan){
        if (filterPlan.categoryId == testId)
            return filterPlan;
    })
    weekplanFinal = arrayPlan.filter(function(filterWeekplan){
        if 
        (testfiltertest(testId) <= scoreLow &&
        (filterWeekplan.score <= scoreLow))
            return  filterWeekplan
        else if (testfiltertest(testId) >= scoreLow && testfiltertest(testId) <= scoreHigh &&
            (filterWeekplan.score >= scoreLow && filterWeekplan.score <= scoreHigh))
            return  filterWeekplan
        else if (testfiltertest(testId) >= scoreHigh &&
            (filterWeekplan.score >= scoreHigh))
            return  filterWeekplan
        })
}

