
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  let result = []
  for (let index = 0; index < matrix.length; index++) {
    if (index % 2 === 0) {
      result.push(...matrix[index]);
    } else {
      result.push(...matrix[index].reverse());
    }
  }
  return result;
}
