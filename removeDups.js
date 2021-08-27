function removeDups(nums) {
  let i = 0
    
    while (i < nums.length) {
        let count = nums.lastIndexOf(nums[i]) - i
        nums.splice(i+1, count)
        i += 1
    }
    
    return nums.length
}