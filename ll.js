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

  insertBefore(nodeToInsert, nodeBefore) {
    let currNode = this.head;
    if (this.head === null) {
      this.insertFirst(nodeToInsert);
    }
    if (nodeBefore.next === null) {
      this.head = new _Node(nodeToInsert, nodeBefore);
    }
    while (currNode.next !== null) {
      if (currNode.next.value === nodeBefore) {
        currNode.next = new _Node(nodeToInsert, nodeBefore);
      } else {
        currNode = currNode.next;
      }
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
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const SLL = new LinkedList();
SLL.insertFirst('A');
SLL.insertLast('B');
SLL.insertLast('C');
SLL.insertLast('D');
// SLL.insertBefore('A.5', 'B');
// SLL.insertAt('A1', 2);
// SLL.insertAt('A1', 3);
SLL.insertAfter('C2', 2);

SLL.printListData();
