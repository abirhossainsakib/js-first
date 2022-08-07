// function functionName(parameters){
//     function body
//     return
// }
// var retuneValue = functionName(parameters value)

function getAvarage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const avarage = total / 3;
    return avarage;
}

const assignment1Marks = 60;
const assignment2Marks = 58;
const assignment3Marks = 59;

var myAvarege = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my avarage:', myAvarege);