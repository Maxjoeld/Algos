const quickSelect = (nums, lo, pivot, k) => {
  // use quick sort's idea
  // put nums that are <= pivot to the left
  // put nums that are  > pivot to the right
  let partitionIdx = lo;
  let j = lo;
  while (j < pivot) {
    if (nums[j] <= nums[pivot]) {
      swap(nums, partitionIdx++, j);
    }
    j++;
  }
  swap(nums, partitionIdx, j);
  // count the nums that are >= pivot
  const m = pivot - partitionIdx + 1;
  // pivot is the one!
  if (m === k) return nums[partitionIdx];
  // pivot is too small, so it must be on the right
  if (m > k) return quickSelect(nums, partitionIdx + 1, pivot, k);
  // pivot is too big, so it must be on the left
  return quickSelect(nums, lo, partitionIdx - 1, k - m);
};

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}