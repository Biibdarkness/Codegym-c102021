let size = 2;
let matrix1 = [];
let matrix2 = [];
let min = 10;
let max = 40;
for (let i = 0; i < size; i++) {
    matrix1[i] = [];
    matrix2[i] = [];
    for (let j = 0; j < size; j++) {
        matrix1[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        matrix2[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(matrix1);
console.log(matrix2);
// let matrix3 = [];
// for (i = 0; i < size; i++) {
//     matrix3[i]=[];
//     for (j = 0; j < size; j++) {
//         matrix3[i][j] = matrix1[i][j] + matrix2[i][j]
//     }
// }
// console.log(`tong hai ma tran:`,matrix3);
// let matrix4 = [];
// for (i = 0; i < size; i++) {
//     matrix4[i]=[];
//     for (j = 0; j < size; j++) {
//         matrix4[i][j] = matrix1[i][j] * matrix2[i][j]
//     }
// }
// console.log(`tich hai ma tran:`,matrix4);




let matrix = matrix1.concat(matrix2);
// console.log(matrix);
// console.log(matrix.reduce(function (total, item) {
//     return total += item;
// }));
let sum1 = matrix1.reduce(function([a1],[b1]){
    return [a1]+[b1];
});
let sum2 = matrix2.reduce(function([a2],[b2]){
    return [a2]+[b2];
});
let sum = matrix.reduce(function([a],[b]){
    return [a]+[b];
});
console.log(sum1);
console.log(sum2);
console.log(sum);