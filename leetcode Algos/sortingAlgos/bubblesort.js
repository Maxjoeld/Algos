function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let innerNum = arr[i];
      let outterNum = arr[j];
      if (j !== i) {
        if (innerNum < outterNum) {
          arr[j] = innerNum;
          arr[i] = outterNum;
          innerNum = arr[i + 1];
        }
      }
    }
  }
  return arr
};

bubbleSort([10,2,13,3,5])