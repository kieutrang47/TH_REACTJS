// BMI calculation for Mark and John
const markMass = 78; // in kg
const markHeight = 1.69; // in meters
const johnMass = 92; // in kg
const johnHeight = 1.95; // in meters

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

// Compare the BMIs and print the result
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is the same as John's (${johnBMI.toFixed(1)})!`);
}
