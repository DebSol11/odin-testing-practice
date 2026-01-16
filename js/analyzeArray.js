function calculateAverage(arr) {
  let average = 0;
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr += arr[i];
  }
  average = sumArr / arr.length;
  return average;
}

function returnMin(arr) {
    let minValue = Math.min(...arr);
    return minValue;
}

function returnMax(arr) {
    let maxValue = Math.max(...arr);
    return maxValue;
}

function returnLength(arr) {
    let lengthArr = arr.length;
    return lengthArr;
}

function analyzeArray(arr) {
    const average = calculateAverage(arr);
    const min = returnMin(arr);
    const max = returnMax(arr);
    const length = returnLength(arr);
    return {average, min, max, length};
}

module.exports = analyzeArray;
