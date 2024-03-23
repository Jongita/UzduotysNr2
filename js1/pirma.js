// Užduotis 1
// Faile pateiktos dienos oro temperatūros.Parašykite programą kuri surastų ir išvestų didžiausią ir mažiausią temperatūrą, bei dienas kuriomis buvo šios temperatūros.
// Failo pavyzdys:
// 1 2 7 3 4 6 - 1 2 4 - 3 - 3 - 5 1 5 6 7 5 9 2 3 6 7 8 6 3 6 7 5 6 7 1

const fs = require("fs");
let data = fs.readFileSync("temp.txt").toString().split(" ");

let dataArray = [];

data.forEach((d) => {
    dataArray.push(Number(d));
});

let sorted = [...dataArray].sort((a, b) => b - a);

console.log("maxTemp: " + sorted[0], dataArray.indexOf(sorted[0]) + 1);
console.log("minTemp: " + sorted[sorted.length - 1], dataArray.indexOf(sorted[sorted.length - 1]) + 1);





// visus surastu, jei tokiu butu:
// const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// console.log(indexOfAll(dataArray, sorted[sorted.length - 1]));
// console.log(indexOfAll(dataArray, sorted[0]));

// // Failo nuskaitymas
// const fs = require("fs");
// const input = fs.readFileSync(process.argv[2]).toString().split(" ").map(Number);
// console.log(typeof input[0]);
// let minT = input[0];
// let minD = 1;
// let maxT = input[0];
// let maxD = 1;
// input.forEach((d, i) => {
//     if (minT > d) {
//         minT = d;
//         minD = i + 1;
//     }
//     if (maxT < d) {
//         maxT = d;
//         maxD = i + 1;
//     }
// });
// console.log(`Min: ${minT}, ${minD}  Max: ${maxT}, ${maxD}`);