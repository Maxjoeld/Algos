var wiggleSort = function (nums) {
  let median = findKthLargest(nums, (nums.length + 1) / 2);
  let n = nums.length;

  let left = 0,
    i = 0,
    right = n - 1;

  while (i <= right) {

    if (nums[newIndex(i, n)] > median) {
      swap(nums, newIndex(left++, n), newIndex(i++, n));
    } else if (nums[newIndex(i, n)] < median) {
      swap(nums, newIndex(right--, n), newIndex(i, n));
    } else {
      i++;
    }
  }

};

function newIndex(index, n) {
  return (1 + 2 * index) % (n | 1);
}

const findKthLargest = (nums, lo = 0, pivot = nums.length - 1) => {
  let partitionIdx = lo;
  let j = lo;
  while (j < pivot) {
    if (nums[j] <= nums[pivot]) {
      swap(nums, partitionIdx++, j);
    }
    j++;
  }
  swap(nums, partitionIdx, pivot);

  const m = pivot - partitionIdx + 1;
  if (m === k) return nums[partitionIdx];
  if (m > k) return findKthLargest(nums, partitionIdx + 1, pivot);
  return findKthLargest(nums, lo, partitionIdx - 1);
};

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};