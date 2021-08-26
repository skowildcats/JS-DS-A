function palindrome(x) {
  if (x < 0 || x % 10 === 0 && x !== 0) {
    return false
  }

  revert = 0
  while (x > revert) {
    revert = revert * 10 + x % 10 
    x = Math.floor(x / 10)
  }

  return x === revert || x === Math.floor(revert / 10)
}

console.log(palindrome(12221))