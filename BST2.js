// BINARY SEARCH TREE from beiatrix

const Queue = require('./stacksAndQueues/queue');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    console.log('size', this.count);
  }

  insert(value) {
    this.count++;
    let newNode = new Node(value);
    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        // if no left child, append new node
        if (!node.left) {
          node.left = newNode;
        }
        // if left child, look left again
        else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        // if no right child, append new node
        if (!node.right) {
          node.right = newNode;
        }
        // if right child, look right again
        else {
          searchTree(node.right);
        }
      }
    };

    searchTree(this.root);
  }

  min() {
    let currentNode = this.root;

    // continue traversing left until no more children
    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    console.log('min', currentNode.value);
  }

  max() {
    let currentNode = this.root;
    // continue traversing right until no more children
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    console.log('max', currentNode.value);
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // depth first search - branch by branch

  // IN-ORDER
  // left, root, right
  // if left child exists, go left again until you hit the leftmost leaf node
  // capture root node value
  // if right child exists, go right again
  dfsInOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root); //15
    return result;
  }

  // PRE-ORDER
  // root, left, right
  // capture root node value
  // if left child exists, go left again
  // if right child exists, go right again
  dfsPreOrder() {
    let result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  // POST-ORDER
  // left, right, root
  // if left child exists, go left again
  // if right child exists, go right again
  // capture root node value
  dfsPostOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  // breadth first search - level by level
  bfs() {
    let result = [];
    let queue = new Queue();

    queue.enqueue(this.root);

    while (queue.length) {
      let currentNode = queue.dequeue();
      result.push(currentNode.value);
      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
    return result;
  }

  maxDepth(node) {
    if (node == null) return 0;
    else {
      /* compute the depth of each subtree */
      let lDepth = this.maxDepth(node.left);
      let rDepth = this.maxDepth(node.right);

      // console.log(lDepth, rDepth);
      /* use the larger one */
      if (lDepth > rDepth) return lDepth + 1;
      else return rDepth + 1;
    }
  }

  isValidBST(root) {
    function helper(node, min, max) {
      if (!node) return true;
      if (node.value <= min || node.value >= max) return false;
      let left = helper(node.left, min, node.value);
      let right = helper(node.right, node.value, max);
      return left && right;
    }
    return helper(root, -Infinity, Infinity);
  }
}

//      15
//     /  \
//    3    36
//   / \   / \
//  2  12 28 39
const bst = new BST(15);

bst.insert(100);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

// bst.size();
// console.log(bst.root);
// bst.maxDepth(bst.root);
// bst.min();
// bst.max();

// console.log(bst.contains(2));
// console.log(bst.contains(9));

// DFS!!!
// in-order: 2, 3, 12, 15, 28, 36, 39
// console.log(bst.dfsInOrder());

// pre-order: 15, 3, 2, 12, 36, 28, 39
//   bst.dfsPreOrder()

// post-order: 2, 12, 3, 28, 39, 36, 15
//   bst.dfsPostOrder()

// BFS!!!
// 15, 3, 36, 2, 12, 28, 39
// console.log(bst.bfs());

// console.log(bst.maxDepth());
console.log(bst.isValidBST());
