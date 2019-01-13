function quickSort(arr, left = 0, right = arr.length - 1) {
  let len = arr.length;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, left, pivot);

    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, left, partitionIndex +  1)
  }
  return arr;
}


function partition(arr, left, pivot) {
  let pivotVal = arr[pivot];
  let partitionIndex = left;
  for (let i = left; i < pivot; i++) {
    if(arr[i] < pivotVal) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, partitionIndex, pivot);
  return partitionIndex;
}


function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}


function partition(arr, left, pivot) {
  var pivotValue = arr[pivot],
    partitionIndex = left;
  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, pivot, partitionIndex);
  return partitionIndex;
}


function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};


