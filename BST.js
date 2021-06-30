class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error('Key Error');
    }
  }
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function findHeight2(node) {
  if (node === null) {
    return 0;
  } else {
    let lDepth = findHeight2(node.left);
    let rDepth = findHeight2(node.right);
    if (lDepth > rDepth) console.log(lDepth + 1);
    else console.log(rDepth + 1);
  }
}

// start at the root node
// if a left node exists,
//      increment the lCount variable
//      save the count to compare it later with the rCount variable
//      make the left node the current node and call findHeight recursively on it
// same logic for the right node.
// compare the lCount and rCount at the end and return the max...
function findHeight(node) {
  let lCount = 0;
  let rCount = 0;
  if (node.left) {
    lCount++;
    console.log(`lCountis `, lCount);
    findHeight(node.left);
  } else {
    count = 0;
    rCount++;
    findHeight(node.right);
  }
  let maxHeight = Math.max(lCount, rCount);
  console.log('Max Height is: ', maxHeight);
}

function isBST(t) {
  while (t) {
    if (!t.left && !t.right) {
      return console.log('null');
    } else if (t.left && t.right) {
      t.left.value > t.right.value ? console.log('true') : console.log('false');
    } else {
      this.parent.value > t.left.value
        ? console.log('true')
        : console.log('false');
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(3);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(9);
bst.insert(2);
bst.insert(5);
bst.insert(7);

// console.log(bst);
// findHeight(bst);
isBST(bst);
