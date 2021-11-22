// //Bài1

// let myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));

// //Bài2

// var num = 0254623123452;
// var str = num.toString();
// var result = [str[0]];

// for (var x = 1; x < str.length; x++) {
//     if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
//         result.push('-', str[x]);
//     }
//     else {
//         result.push(str[x]);
//     }
// }
// console.log(result.join(''));

// Bài3

var str = 'NguyenVanTuanAnh-nGUYENvANtUANaNH';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

for (let x = 0; x < str.length; x++) {
    if (UPPER.includes(str[x])) {
        result.push(str[x].toLowerCase());
    }
    else if (LOWER.includes(str[x])) {
        result.push(str[x].toUpperCase());
    }
    else {
        result.push(str[x]);
    }
}
console.log(result.join(''));