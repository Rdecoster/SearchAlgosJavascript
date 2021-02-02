const bubbleSort = (arr) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    arr.forEach((current, i) => {
      if (current > arr[i + 1]) {
        const temp = current;
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    });
  }
  return arr;
};

const testArr1 = [2,1, 3,5, 6, 10, 9, 4, 7, 8];

const testArr2 = [1, 2, 3, 5, 8, 9, 4, 6, 7, 10];

console.log(bubbleSort(testArr1), bubbleSort(testArr2));

module.exports = {
  bubbleSort,
};
