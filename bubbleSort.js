export{};

bubbleSort(arr)=>{
  let swapped;
  while (swapped) {
    swapped = false;
    arr.forEach((current, i ) => {
      if ( current > arr[i+1]) {
        const temp = current;
        current = arr[i+1]
        arr[i+1] = temp
        swapped = true;
      }
    })
  }
  return arr;
}


const testArr1 = [2,1,5,3,6,8,10,7,9]

const testArr2 = [2,1,5,3,6,8,9,7,10]
console.log( bubbleSort(testArr1,testArr2))

module.exports={
  bubbleSort
};
