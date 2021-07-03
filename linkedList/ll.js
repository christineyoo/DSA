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
    if (index > this.size) {
      return;
    }
    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    const node = new _Node(item);
    let previous;
    let current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //node before index
      current = current.next; //node after index
      count++;
    }
    node.next = current; //the newly inserted node points to the node after index
    previous.next = node; //the previous node points to the newly inserted node
    this.size++;
  }

  insertAfter(item, index) {
    if (index > this.size) {
      return;
    }
    this.insertAt(item, index + 1);
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    console.log(currNode);
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
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

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
SLL.insertLast('B');
SLL.insertLast('C');
SLL.insertLast('D');
SLL.insertAfter('C2', 2);
// SLL.display();
// SLL.listSize();
// SLL.isEmpty();
// SLL.findLast();
SLL.find('C');
// SLL.findPrevious('C');
SLL.reverse();
