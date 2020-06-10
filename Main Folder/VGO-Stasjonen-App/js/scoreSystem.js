// database
// ligning for å regne ut test score



// let answers =   [
//     {testId: 1, userId: "1035", date: "2020-06-10", answers: Array(12)},
//     {testId: 3, userId: "1035", date: "2020-06-03", answers: Array(25)},
//     {testId: 5, userId: "1035", date: "2020-06-05", answers: Array(8)},
//     {testId: 2, userId: "1035", date: "2020-06-01", answers: Array(2)},
//     {testId: 3, userId: "1035", date: "2020-05-23", answers: Array(10)},
//     {testId: 1, userId: "1035", date: "2020-04-09", answers: Array(24)},
//     {testId: 6, userId: "1035", date: "2020-03-11", answers: Array(22)},
// ];

// -------------------------------------------

let testId = 1;
let arrByID = model.answers.filter(filterByID)

function filterByID(item) {
  if (testId() === item.categoryId) {
    return true
  } 
}

arrByID.sort(function(a, b) {
    var dateA = new Date(a.date), dateB = new Date(b.date);
    return dateA - dateB;
        //return dateB - dateA; Denne gjør at størst er først, den over er størst er sist
});
          