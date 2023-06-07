function Create(rows, columns){
    let name = [];
    let temp = [];
    for(let i=0 ; i<rows ; i++){
        for(let j=0 ; j<columns; j++){
            temp.push(0);
        }
        name.push(temp);
        temp = [];
    }

    return name;
}


function Transpose(matrix){
    let transposedMatrix = [];
    let originalRows = matrix.length;
    let originalColumns = matrix[0].length;
    transposedMatrix = Create(originalColumns, originalRows);

    for(let i=0 ; i<originalColumns ; i++){
        for(let j=0 ; j<originalRows ; j++){
            transposedMatrix[i][j] = matrix[j][i];
        }
    }

    return transposedMatrix;
}