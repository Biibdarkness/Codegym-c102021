let size = 4;
let matrix = [];
let min = 10;
let max = 90;
// let show = '';
// let sum = 0;
for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
        matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
}
console.log(matrix);

// cộng tổng các số chẵn
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] % 2 == 0) {
//             sum = sum + matrix[i][j];
//         }
//     }
// }
// console.log(sum);

// tổng đường chéo chính
// let sumMainDiagonal = 0;
// for (let i = 0, j = 0; i < size; i++, j++) {
//     sumMainDiagonal +=  matrix[i][j];
// }
// console.log(sumMainDiagonal);

// tổng đường chéo phụ
// let sumAuxiliaryDiagonal = 0;
// let test = size - 1;
// for (let i = 0; i < size; i++) {
//     console.log(i,test);
//     sumAuxiliaryDiagonal += matrix[i][test];
//     test--;
// }
// console.log(sumAuxiliaryDiagonal);

// tổng đường biên
// let sumBorderLine = 0;
// let sumBorderLineTop = 0;
// let sumBorderLineBot = 0;
// let sumBorderLineLeftRight = 0;
// for (let j = 0; j < size; j++) {
//     sumBorderLineTop += matrix[0][j]
// }
// for (let j = 0; j < size; j++) {
//     sumBorderLineBot += matrix[test][j]
// }
// for (let i = 1; i < size - 1; i++) {
//     for (let j = 0; j < size; j += size - 1) {
//         sumBorderLineLeftRight += matrix[i][j]
//     }
// }
// sumBorderLine = sumBorderLineTop + sumBorderLineBot + sumBorderLineLeftRight;
// console.log(sumBorderLine);

// Hiển thị ma trận
// console.log(matrix);

// Hiển trị ma trận tam giác trên
for (let i = 0; i < size; i++) {
    for (let j = i; j < size; j++) {
        console.log(matrix[i][j]);
    }
}

// Hiển trị ma trận tam giác dưới
// for (let i = 0; i < size; i++) {
//     // console.log(matrix[i][test]);
//     // test--;
//     for (let j = 0; j <= i; j++) {
//         console.log(i.j)
//     }
// }