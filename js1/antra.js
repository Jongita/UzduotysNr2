// Užduotis 2
// Faile pateikti skaičiai(sveikieji, iš intervalo nuo 0 iki 9), parašykite JS programą kuri suskaičiuotų kiek ir kokių skaičių yra tekstiniame faile.

const fs = require("fs");
let data = fs.readFileSync("numbers.txt").toString().split(" ");

let arr1 = [];
data.forEach((d) => {
    arr1.push(Number(d));
});

let arr2 = [];
for (let i = 0; i <= 9; i++) {
    arr2.push(i);
}

const count = (arrUnique, arrRepeated) => arrUnique.reduce((ob, valUnique) => {
    ob[valUnique] = arrRepeated.filter(v => valUnique === v).length;
    return ob;
}, {});

console.log(count(arr2, arr1));











// const total = {};

// for (let i = 0; i < dataArray.length; i++) {
//     let n = dataArray[i];
//     if (total[n]) {
//         total[n]++;
//     } else {
//         total[n] = 1;
//     }
// }
// console.log(total);



// const counts = {};
// data.forEach((x) => {
//     counts[x] = (counts[x] || 0) + 1;
// });
// console.log(counts)



// const occurrences = data.reduce(function (acc, curr) {
//     return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
// }, {});

// console.log(occurrences);

