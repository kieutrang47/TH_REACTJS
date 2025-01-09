// Test data 1
let markMass1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnMass1 = 92; // kg
let johnHeight1 = 1.95; // meters

// Test data 2
let markMass2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnMass2 = 85; // kg
let johnHeight2 = 1.76; // meters

// Calculate BMIs for Data 1
let markBMI1 = markMass1 / markHeight1 ** 2;
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// Compare BMIs for Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;

// Output Data 1 results
console.log(`Test Data 1:`);
console.log(`Mark's BMI: ${markBMI1.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI1.toFixed(2)}`);
console.log(`Mark has a higher BMI: ${markHigherBMI1}`);

// Calculate BMIs for Data 2
let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// Compare BMIs for Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;

// Output Data 2 results
console.log(`\nTest Data 2:`);
console.log(`Mark's BMI: ${markBMI2.toFixed(2)}`);
console.log(`John's BMI: ${johnBMI2.toFixed(2)}`);
console.log(`Mark has a higher BMI: ${markHigherBMI2}`);
