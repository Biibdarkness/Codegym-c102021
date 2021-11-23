
function play(size) {
    let matrix = [];
    for (i = 0; i < size; i++) {
        matrix[i] = [];
        for (j = 0; j < size; j++) {
            matrix[i][j] = 0 ;
           
        }
    }  return matrix;
}
test = play(5);
console.log(test);