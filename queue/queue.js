// 创建Queue类
class Queue {
  constructor() {
    this.items = [];
  }

  // 向队列尾部添加一个（或多个）新的项
  enqueue(val) {
    this.items.push(val);
  }

  // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
  dequeue() {
    return this.items.shift();
  }

  // front()：返回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不 做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）。
  front() {
    return this.items[0];
  }

  // 如果队列中不包含任何元素，返回true，否则返回false
  isEmpty() {
    return this.items.length === 0;
  }

  // 返回队列包含的元素个数，与数组的length属性类似。
  size() {
    return this.items.length;
  }

  // 辅助方法
  print() {
    console.log(this.items.toString());
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
queue.print();


function hotPotato(nameList, num) {
  let queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  let eliminated = '';
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + '在击鼓传花游戏中被淘汰。');
  }

  return queue.dequeue();
}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7);
console.log('胜利者：' + winner)
