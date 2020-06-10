
let newArray = [];

function testfiltertest(testtestId) {
    newArray2 = model.answers.sort((a, b) => a.date - b.date);
newArray = newArray2.filter(function(filterTest){
    if (filterTest.categoryId == testtestId)
        return filterTest;
})     
}    


          