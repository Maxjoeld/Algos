// The constraint is it must use constant extra memory
// the replcement must be done in place
// otherwise we couldvs just reversed the i+1 elements using reverse()

var nextPermutation = function (nums) {
  let i = nums.length - 2;
  // find inverse point
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  };
  // only if i > 0, if it isnt, that means we reached 
  // the beggining of the array  and it 
  // was dscending and we should rotate the entire array instead of swapping values
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    };
    swap(nums, i, j);
  };
  reverse(nums, i + 1);
};

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}

function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
};