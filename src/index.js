
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
  if (matrix == "" || matrix == [] || matrix == undefined) return [];

  if (matrix.length < 4) {
    return matrix.splice(0, 3, matrix[1].reverse()).flat();
  } else {
    return matrix.splice(0, 4, matrix[1].reverse(), matrix[3].reverse() ).flat();
  }
}
