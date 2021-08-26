function roman(s) {
  let numerals = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}

  let sum = 0

  let split = s.split("")

  for (let i = 0; i < split.length; i++) {
    let curr = split[i]
    let next = split[i + 1]
    if (numerals[next]) {
      if (numerals[next] > numerals[curr]) {
        sum += (numerals[next] - numerals[curr])
        i += 1
      } else {
        sum += numerals[curr]
      }
    } else {
      sum += numerals[curr]
    }
  }
  return sum
}

console.log(roman("MCMXCIV"))