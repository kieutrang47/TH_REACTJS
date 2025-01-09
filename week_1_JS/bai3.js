// Test data
const dolphinsScores1 = [96, 108, 89]; // Data 1
const koalasScores1 = [88, 91, 110];

// Calculate average
const calculateAverage = scores => scores.reduce((a, b) => a + b) / scores.length;

// Average scores
const dolphinsAvg = calculateAverage(dolphinsScores1);
const koalasAvg = calculateAverage(koalasScores1);

// Log the average scores
console.log(`Dolphins Average: ${dolphinsAvg.toFixed(1)}`);
console.log(`Koalas Average: ${koalasAvg.toFixed(1)}`);

// Determine winner or draw
if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log(`Dolphins win the trophy!`);
} else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
    console.log(`Koalas win the trophy!`);
} else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log(`It's a draw! Both teams have the same average score and both have >= 100 points.`);
} else {
    console.log(`No team wins the trophy.`);
}

// Data bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Calculate new averages 
const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);

console.log(`Dolphins Average (Bonus 1): ${dolphinsAvgBonus1.toFixed(1)}`);
console.log(`Koalas Average (Bonus 1): ${koalasAvgBonus1.toFixed(1)}`);

// Determine 
if (dolphinsAvgBonus1 > koalasAvgBonus1 && dolphinsAvgBonus1 >= 100) {
    console.log(`Dolphins win the trophy!`);
} else if (koalasAvgBonus1 > dolphinsAvgBonus1 && koalasAvgBonus1 >= 100) {
    console.log(`Koalas win the trophy!`);
} else if (dolphinsAvgBonus1 === koalasAvgBonus1 && dolphinsAvgBonus1 >= 100 && koalasAvgBonus1 >= 100) {
    console.log(`It's a draw! Both teams have the same average score and both have >= 100 points.`);
} else {
    console.log(`No team wins the trophy.`);
}

// data bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Calculate
const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);

console.log(`Dolphins Average (Bonus 2): ${dolphinsAvgBonus2.toFixed(1)}`);
console.log(`Koalas Average (Bonus 2): ${koalasAvgBonus2.toFixed(1)}`);

// Determine 
if (dolphinsAvgBonus2 > koalasAvgBonus2 && dolphinsAvgBonus2 >= 100) {
    console.log(`Dolphins win the trophy!`);
} else if (koalasAvgBonus2 > dolphinsAvgBonus2 && koalasAvgBonus2 >= 100) {
    console.log(`Koalas win the trophy!`);
} else if (dolphinsAvgBonus2 === koalasAvgBonus2 && dolphinsAvgBonus2 >= 100 && koalasAvgBonus2 >= 100) {
    console.log(`It's a draw! Both teams have the same average score and both have >= 100 points.`);
} else {
    console.log(`No team wins the trophy.`);
}
