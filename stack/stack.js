// 栈的创建
class Stack {
  constructor() {
    // 用数组来存储
    this.items = []
  }

  // 添加一个（或几个）新元素到栈顶
  push(val) {
    this.items.push(val)
  }

  // 移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop()
  }

  //返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返 回它）
  peek() {
    return this.items[this.items.length - 1]
  }

  // 如果栈里没有任何元素就返回true，否则返回false
  isEmpty() {
    return this.items.length === 0
  }

  // 移除栈里的所有元素
  clear() {
    this.items = []
  }

  // 返回栈里的元素个数。这个方法和数组的length属性很类似。
  size() {
    return this.items.length
  }

  // 辅助方法，叫print。它会把栈里的元素都输出到控制台
  print() {
    console.log(this.items.toString());
  }
}

// let stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(1)
// stack.push(2)
// console.log(stack.peek());
// stack.push(11);
// console.log(stack.size());
// console.log(stack.isEmpty());
// stack.pop();
// stack.pop();
//
// console.log(stack.size());
// stack.print();

// 进制转化
function divideBy2(decNumber, base) {
  let remStack = new Stack(), rem, binaryString = '', digits = '0123456789ABCDEF';
  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()];
  }

  return binaryString;
}

console.log(divideBy2(100, 2));
console.log(divideBy2(100, 8));
console.log(divideBy2(100, 16));
