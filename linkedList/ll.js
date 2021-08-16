class _Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
    this.size++;
  }

  insertLast(item) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
    this.size++;
  }

  insertAt(item, index) {
    if (index > this.size) return;
    if (index === 0) return this.insertFirst(item);

    const node = new _Node(item);
    let previous;
    let currNode = this.head;
    let count = 0;

    while (count < index) {
      previous = currNode; //node before index
      currNode = currNode.next; //node after index
      count++;
    }
    node.next = currNode; //the newly inserted node points to the node after index
    previous.next = node; //the previous node points to the newly inserted node
    this.size++;
  }

  insertAfter(item, index) {
    if (index > this.size) return;
    this.insertAt(item, index + 1);
  }

  findNthNode(index) {
    if (!this.head) return null;
    if (index > this.size) return null;
    let currNode = this.head;
    let count = 1;
    while (count < index) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) return null;
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) return `Item not found`;
    previousNode.next = currNode.next;
  }

  display() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  // other functions
  listSize() {
    const count = this.size;
    console.log(count);
  }

  isEmpty() {
    console.log(this.size === 0 ? true : false);
  }

  findPrevious(item) {
    let prevNode = this.head;
    let currNode = this.head;
    while (currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    console.log(prevNode);
  }

  findLast() {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    console.log(current.value);
  }

  reverse() {
    let node = this.head;
    let prev;
    let temp;

    while (node) {
      temp = node.next;
      node.next = prev;
      prev = node;
      node = temp;
    }
    console.log(prev);
  }
}

module.exports = LinkedList;

const SLL = new LinkedList();
SLL.insertFirst('A');
SLL.insertAt('C', 1);
SLL.insertAt('D', 2);
SLL.insertAt('B', 3);
SLL.insertAt('F', 4);
SLL.insertAt('K', 5);

SLL.display();
// SLL.reverse();
console.log('hi', SLL.reverse());
SLL.display();
