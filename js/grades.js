// Start with array of random scores in your JavaScript
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// var moreScores = [11, 98, 106, 33, 72, 78, 75, 93, 83, 88, 82, 71, 80, 70, 65, 92, 60];

// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are. 
function parseGradeArray (gradeArray){
  let lowestGrade = gradeArray[0];
  let highestGrade = gradeArray[0];
  let counterA = 0;
  let counterB = 0;
  let counterC = 0;
  let counterD = 0;
  let counterF = 0;
  for(let i = 0; i < gradeArray.length; i++){
    if (gradeArray[i] <= lowestGrade){
      lowestGrade = gradeArray[i];
    }else if (gradeArray[i] >= highestGrade) {
      highestGrade = gradeArray[i];
    };
    if (gradeArray[i] <= 60){
// * A score of 50-60 is an F
      counterF++;
    } else if (gradeArray[i] > 60 && gradeArray[i] <= 70) {
// * A score of 61-70 is a D
      counterD++;
    } else if (gradeArray[i] > 70 && gradeArray[i] <= 80) {
// * A score of 71-80 is a C
      counterC++;
    } else if (gradeArray[i] > 80 && gradeArray[i] <= 90) {
// * A score of 81-90 is a B
      counterB++;
    } else if (gradeArray[i] > 90) {
// * A score of 91-100 is an A
      counterA++;
    };
  };
// 1. What is the highest grade?
  console.log("The highest grade was ", highestGrade);
// 1. What is the lowest grade?
  console.log('The lowest grade was ', lowestGrade);
// 1. How many of each grade?
  console.log('Grade Distribution:');
  console.log('As: ', counterA);
  console.log('Bs: ', counterB);
  console.log('Cs: ', counterC);
  console.log('Ds: ', counterD);
  console.log('Fs: ', counterF);
};

parseGradeArray(scores);
// parseGradeArray(moreScores);

// given scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// var scores = [b, c, a, f, a, d, c, c, b, d, f, b];
