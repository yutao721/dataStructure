class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// 创建BinarySearchTree类
class BinarySearchTree {
  constructor() {
    this.root = null; // 根节点
  }

  // 向树中插入一个键
  insert(key) {
    // 创建用来表示新节点的Node类实例，它的左指针和右指针的值会由构造函数自动设置为null
    let node = new Node(key);
    // 说明插入的是根节点
    if (this.root === null) {
      this.root = node;
    } else {
      insertNode(this.root, node)
    }

    function insertNode(node, newNode) {
      // 如果新节点的键小于当前节点的键
      if (newNode.key < node.key) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode
        } else {
          insertNode(node.right, newNode)
        }
      }
    }
  }

  // 中序遍历  先访问左节点，再访问根节点，最后访问右节点
  inOrderTraverse(callback) {
    function inOrderTraverseNode(node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callback(node.key)
        inOrderTraverseNode(node.right, callback)
      }
    }

    inOrderTraverseNode(this.root, callback)
  }

  // 先序遍历  先访问根节点，再访问左节点，最后访问右节点
  preOrderTraverse(callback) {
    function preOrderTraverseNode(node, callback) {
      if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
      }
    }

    preOrderTraverseNode(this.root, callback)
  }

  // 后序遍历  先访问左节点，再访问右节点，最后访问根节点
  postOrderTraverse(callback) {
    function postOrderTraverseNode(node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
      }
    }

    postOrderTraverseNode(this.root, callback)
  }

  // 获取树的最小键
  min() {
    function minNode(node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }
        return node.key
      }
      return null
    }

    return minNode(this.root);
  }

  // 获取树的最大键
  max() {
    function maxNode(node) {
      if (node) {
        while (node && node.right !== null) {
          node = node.right;
        }
        return node.key
      }
      return null
    }

    return maxNode(this.root);
  }

  // 搜索特定的值
  search(key) {
    function searchNode(node, key) {
      if (node == null) return false;
      if (key < node.key) {
        return searchNode(node.left, key)
      } else if (key > node.key) {
        return searchNode(node.right, key)
      } else {
        return true
      }
    }

    return searchNode(this.root, key);
  }

  // 删除某一个节点
  remove(key) {

    function findMinNode(node) {
      if (node) {
        while (node && node.left !== null) {
          node = node.left;
        }
        return node
      }
      return null
    }

    function removeNode(node, key) {
      // 检验传入的节点
      if (node == null) return null;
      if (key < node.key) { // 如果要找的键比当前节点的值小,就沿着树的左边找到下一个节点
        node.left = removeNode(node.left, key);
        return node;
      } else if (key > node.key) { // 如果要找的键比当前节点的值大，那么就沿着树的右边找到下一个节点
        node.right = removeNode(node.right, key);
        return node;
      } else { // 键等于node.key
        // 第一种情况——一个叶节点
        if (node.left == null && node.left == null) {
          node = null;
          return node
        }

        // 第二种情况——一个只有一个子节点的节点
        if (node.left == null) {
          node = node.right;
          return node;
        } else if (node.right == null) {
          node = node.left;
          return node;
        }

        //第三种情况——一个有两个子节点的节点
        let aux = findMinNode(node.right);
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node
      }
    }

    this.root = removeNode(this.root, key)
  }

}

function printNode(value) {
  console.table(value);
}

let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
console.log(tree);
tree.insert(6);
console.log(tree);
// tree.inOrderTraverse(printNode)
console.log(tree.min());
console.log(tree.remove(15));
console.log(tree);
