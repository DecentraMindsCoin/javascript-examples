const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//ForLoop, set i to 0; increment by 1 in each iteration;

//   for(let i = 0; i < companies.length; i++) {
//       console.log(companies[i]);
//   }

// forEach better way to loop through an array doesnt use forLoop

companies.forEach(function (company) {
  //   console.log(company.name);
});

// *** FILTER ***
// #1
// Get 21 and older

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
// if(ages[i] >= 21 ) {
//     canDrink.push(ages[i]);
// }
// }
// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })
// console.log(canDrink)
// #2 *** Filter Better Option ***

const canDrink = ages.filter((age) => age >= 21);

// Filter out retail companies only from OUR ARRAY

// const retailCompanies = companies.filter(function(company) {
//     if(company.category == 'Retail') {
//         return true;
//     }
// })

// const retailCompanies = companies.filter(companies => companies.category == 'Retail');

// Get 80's companies

const startedInEighties = companies.filter(
  (company) => company.start >= 1980 && company.start <= 1989
);

// Get Companies that lasted 10 years
// const lastedTen = companies.filter(company => company.end - company.start >= 10)

// console.log(lastedTen);

// *** MAP ***

// Create array of company names

// const companyMap = companies.map(function(company) {
//     return `${company.name} [${company.start} - ${company.end}]`;
// });

//Get array of Names + start to end date. Uing string interpolation

const companyMap = companies.map(
  (company) => `${company.name} ` + `${company.start} - ${company.end}`
);
// console.log(companyMap)
// Get the square root of the ages.

const agesSquare = ages.map((age) => Math.sqrt(age));
// console.log(agesSquare)

const agesTimesTwo = ages.map((age) => age * 2);
// console.log(agesTimesTwo)

//combine Above square root and then times two in one new function
//

const agesSqrtTimeTwo = ages
  .map((newAge) => Math.sqrt(newAge))
  .map((newAge) => newAge * 2);

// console.log(agesSqrtTimeTwo);

// *** SORT ***

// Sort the companies by their start year earliest to latest

// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// New Sort
// ? = terniary operator if condition (c1.start > c2.start is true return 1)
// : = else if not true return -1

const sortedCompanies = companies.sort((c1, c2) =>
  c1.start > c2.start ? 1 : -1
);

// console.log(sortedCompanies);

// Sort ages
// Sort Ages ascending order
const sortedAgesAscending = ages.sort((a, b) => a - b);

//Sort Ages decending order
const sortedAgesDecending = ages.sort((a, b) => b - a);

// console.log(sortedAgesDecending);

// *** Reduce ***
// reduce the ages of all inputes reduced to one number of
//For Loop version

// let reducedAges = 0;
// for(let i = 0; i < ages.length; i++) {
//     reducedAges += ages[i];
// }

// console.log(reducedAges)

// *** Reduce Better option ***

const reducedAges = ages.reduce((a, b) => a + b, 0);

// console.log(reducedAges)

// Reduce get total years for all companies, so add range for all companies
// for loop version

// const reducedYearsCompanies = companies.reduce(function(total, company) {
//     return total + (company.end - company.start);
// }, 0)

const reducedYearsCompanies = companies.reduce(
  (total, company) => total + (company.end - company.start),
  0
);

// console.log(reducedYearsCompanies)

//combine methods
// combine ages *2 + ages over 40 and sort them from lowest to highest and reduce that total down to a single integer.

const combined = ages.map(age => age * 2).filter(age => age >= 40).sort((a, b) => a - b).reduce((a, b) => a + b, 0);

console.log(combined);