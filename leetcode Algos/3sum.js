var threeSum = function (nums) {
  var rtn = [];
  nums = nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length - 2; i++) {
    // this line of code is to prevent us from using duplicates
    //with a sorted array every element must be greather than the previous ele 
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (var j = i + 1, k = nums.length - 1; j < k;) {
      //if we immeditely find a match push it into our array 
      if (nums[i] + nums[j] + nums[k] === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) j++;
        //test case still passes without the code below
        // while (j < k && nums[k] == nums[k + 1]) k--;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // if it's not a macth we decrement k only
        k--;
      } else j++;
    }
  }
  return rtn;
};