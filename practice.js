// let compare = function(num1, num2) {
//   return num2 - num1
// }

function Stack() {
  this.dataStore = []
  this.top = 0
  this.push = push
  this.peek = peek
}

function push(el) {
  this.dataStore[this.top++] = el
}

function peek() {
  return this.dataStore[this.top - 1]
}

let tmp = new Stack()
tmp.push(5)
console.log(tmp.peek())