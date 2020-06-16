let newArray = [];
let averageScore;

function testfiltertest(testtestId) {
newArray2 = model.answers.sort((a, b) => b.date - a.date);
newArray = newArray2.filter(function(filterTest){
    if (filterTest.categoryId == testtestId)
        return filterTest;
})
    var total = 0;
    let answers = newArray[0].answers
    for(var i = 0; i < answers.length; i++) {
        total += answers[i];
    }
    return averageScore = total / answers.length;
}


