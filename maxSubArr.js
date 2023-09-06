function maxSubarray(nums) {
  if (nums.length === 0) {
    return [];
  }

  let maxEndingHere = nums[0];
  let maxSoFar = nums[0];
  let startIndex = 0;
  let endIndex = 0;
  let tempStartIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxEndingHere + nums[i]) {
      maxEndingHere = nums[i];
      tempStartIndex = i;
    } else {
      maxEndingHere = maxEndingHere + nums[i];
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      startIndex = tempStartIndex;
      endIndex = i;
    }
  }
  console.log(maxSoFar);
  return nums.slice(startIndex, endIndex + 1);
}

const nums = [2, -1];
const resultArray = maxSubarray(nums);
console.log(resultArray); // 输出最大和子数组 [4, -1, 2, 1]
