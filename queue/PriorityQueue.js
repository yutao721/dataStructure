// 优先队列类
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  /**
   * 向队列尾部添加一个（或多个）新的项
   * @param val 要插入的元素
   * @param priority 权重 一般为number数字，
   */
  enqueue(val, priority = 0) {
    // 如果队列中没有元素，则不管权重，直接插入
    if (this.isEmpty) {
      this.items.push({ val, priority });
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        let items = this.items[i]
        if (priority < items[i].priority) {
          this.items.splice(i, 0, { val, priority });
          added = true;
          break
        }
      }
      // 添加元素的priority值大于任何已有的元素，把它添加到队列的末尾就行了
      if (!added) {
        this.items.push({ val, priority });
      }
    }

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

let queue = new PriorityQueue();
console.log(queue.isEmpty());
queue.enqueue('John', 2);
queue.dequeue();
queue.enqueue('Camila');
console.log(queue.front());
queue.enqueue('Jack', 1);
queue.enqueue('coco', 5);
queue.enqueue('Camila', 1);
queue.print();
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.front());
