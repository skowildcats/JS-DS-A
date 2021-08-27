function isValid(s) {
  // if (s.length === 1) {return false}
  let split = s.split("")
  let left = ["(", "[", "{"]
  let right = [")", "]", "}"]

  let tmp = []

  for (let i = 0; i < split.length; i++) {
    if (left.includes(split[i])) {
      tmp.push(split[i])
    } else {
      if (tmp.pop() !== left[right.indexOf(split[i])]) {
        return false
      }
    }
  }
  if (tmp.length) {
    return false
  } else {
    return true
  }
}

// O(n) time complexity
// O(n) space complexity

console.log(isValid("()"))