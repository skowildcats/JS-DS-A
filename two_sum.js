function twosum(nums, target) {
  let tmp = {}

  for (let i = 0; i < nums.length; i++) {
    tmp[nums[i]] = i
  }

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i]
    if (tmp[diff] && i !== tmp[diff]) {
      return [i, tmp[target - nums[i]]]
    }
  }
}

console.log(twosum([3, 3], 6))