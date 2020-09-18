class Node {
  constructor(element) {
    this.element = element;
    this.next = null
    this.prev = null
  }
}

// 创建链表类
class DoublyLinkedList {
  constructor() {
    this.length = 0; // 存储列表项的数量的length属性
    this.head = null; // 存储第一个节点的引用
    this.tail = null; // 存储第一个节点的引用
  }

  // 向列表尾部添加一个新的项。
  append(element) {
    // 是把element作为值传入，创建Node项
    let node = new Node(element);
    let current; // 列表中的当前项
    // 说明当前列表为空，添加的是第一个元素，直接让head和tail指向node元素
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      // 列表不为空
    } else {
      current = this.tail;
      // 找到最后一项，将其next赋为node，建立链接
      current.next = node
      node.prev = current
      this.tail = node;
    }
    this.length++; //更新列表的长度
  }

  // 向列表的特定位置插入一个新的项。
  insert(position, element) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;
      // 在第一个位置添加
      if (position == 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          node.next = current;
          current.prev = node;
          this.head = node;
        }
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next
        }
        node.next = current
        previous.next = node;
        current.prev = node;
        node.prev = previous
      }
      this.length++;
      return true;
    } else {
      return false
    }
  }

  remove(element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 返回元素在列表中的索引。如果列表中没有该元素则返回-1
  indexOf(element) {
    let current = this.head;
    let index = -1;
    while (current) {
      index++;
      if (element === current.element) {
        return index
      }
      current = current.next
    }
    return -1
  }

  //从列表的特定位置移除一项,返回移除的项
  removeAt(position) {
    // 校验位置的合法性
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous; // 前一个元素引用
      let index = 0;
      // 移除列表中的第一项,head指向列表的第二个元素
      if (position == 0) {
        this.head = current.next;
        if (this.length === 1) {
          this.tail = null;
        } else {
          this.head.prev = null
        }
      } else if (position === this.length - 1) {// 移除的是最后一项
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next
        }
        // 要从列表中移除当前元素，要做的就是将previous.next和current.next链接起来。这样，当前元素就会被丢弃在计算机内存中，等着被垃圾回收器清除。
        // 对于最后一个元素，跳出循环时，current变量将是对列表中最后一个元素 的引用（要移除的元素）。current.next的值将是null（因为它是最后一个元素）。
        previous.next = current.next;
        current.next.prev = previous
      }
      this.length--;
      return current
    } else {
      return null
    }
  }

  // 如果链表不包含元素的个数返回true,反之false
  isEmpty() {
    return this.length === 0;
  }

  // 返回链表包含元素的个数
  size() {
    return this.length
  }
}

let linkedList = new DoublyLinkedList();
linkedList.append(1)
linkedList.append(3)
console.log(linkedList.insert(1, 2));
console.log(linkedList.removeAt(1));
console.log(linkedList);
