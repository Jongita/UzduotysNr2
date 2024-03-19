// Užduotis 3
// Faile pateikiami duomenys masyvas turintis 4, 4 elementų.Pavyzdžiui:
// 1 2 3 5
// 5 4 4 7
// 3 2 1 9
// 2 3 4 5
// Parašykite programą kuri apverstų(pasuktų) masyvą, rezultatas atvaizduojamas ekrane:
// 1 5 3 2
// 2 4 2 3
// 3 4 1 4
// 5 7 9 5

const fs = require("fs");
let data = fs.readFileSync("array.txt").toString().split("\r\n");
// ['1 2 3 5', '5 4 4 7', '3 2 1 9', '2 3 4 5']


let line = 0;
let mas = [];
data.forEach((element) => {
    mas[line] = [];
    element.split(" ").forEach((x) => {
        mas[line].push(x);
    })
    line++;

});

mas.forEach((line) => {
    let out = "";
    line.forEach((elem) => {
        out += elem + " ";
    });
    console.log(out);
});
console.log('-----------------------');
let mas2 = [];

mas.forEach(n => {
    n.forEach((x, i) => {
        if (!mas2[i]) mas2[i] = [];
        mas2[i].push(x);
    });
});


mas2.forEach((line) => {
    let out2 = "";
    line.forEach((elem) => {
        out2 += elem + " ";
    });
    console.log(out2);
});


