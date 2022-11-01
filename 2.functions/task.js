// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = sum + arr[i];

  }
  
  let avg = sum / arr.length;
  console.log(Number(avg.toFixed(2)));
  return { 
    min: min, 
    max: max, 
    avg: Number(avg.toFixed(2)) 
  };
}

// Задание 2
function worker(arr) {
  let sumArr = (sum, i) => sum + i;
  return arr.reduce(sumArr);
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 1; i < arrOfArr.length; i++) {
    let result = func(arrOfArr[i]);
    if (result > max) {
      max = result;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);
  return Math.abs(max - min);
}
