// node, ll, insertFirst, insertLast, display, insertAt, insertAfter, find, findNodeAt
class _Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size++;
  }

  // insertFirst
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    this.size++;
  }
  // insertLast
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
  // display
  display() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
  // insertAt
  insertAt(item, index) {
    if (index > this.size) return;
    if (index === 0) return this.insertFirst(item);
    const node = new _Node(item);
    let previous;
    let currNode = this.head;
    let count = 0;
    while (count < index) {
      previous = currNode;
      currNode = currNode.next;
      count++;
    }
    previous.next = node;
    node.next = currNode;
    this.size++;
  }
  // insertAfter
  insertAfter(item, index) {
    if (index > this.size) return;
    this.insertAt(item, index + 1);
  }
  // find
  find(item) {
    if (!this.head) return null;
    let currNode = this.head;
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  // findNodeAt
  findNodeAt(index) {
    // if (!this.head || index > this.size) return null;
    let currNode = this.head;
    let count = 0;
    while (count < index) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
        count++;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) return null;
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
}

const SLL = new LinkedList();
SLL.insertFirst('A');
SLL.insertLast('B');
SLL.insertLast('C');
SLL.insertFirst('D');
SLL.insertAt('G', 3);
SLL.insertAfter('after A', 1);
// console.log('find', SLL.find('C'));
// console.log('findNodeAt', SLL.findNodeAt(2));
SLL.remove('after A');
SLL.display();
