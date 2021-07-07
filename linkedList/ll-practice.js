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
      previous = currNode;
      currNode = currNode.next;
      count++;
    }
    previous.next = node;
    node.next = currNode;
    this.size++;
  }

  insertAfter(item, index) {
    if (index > this.size) return;
    this.insertAt(item, index + 1);
  }

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

  findNodeAt(index) {
    if (!this.head || index > this.size) return null;
    let currNode = this.head;
    let count = 0;
    while (count < index) {
      currNode = currNode.next;
      count++;
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) return null;
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let previous;
    let currNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previous = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) return `item not found`;
    previous.next = currNode.next;
    this.size--;
  }

  display() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }
}

function compare(listA, listB) {
  let lA = listA.head;
  let lB = listB.head;
  let countA = 0;
  let countB = 0;
  while (lA || lB) {
    if (lA === null) {
      return -1;
    } else if (lB === null) {
      return 1;
    } else if (lA.value === lB.value) {
      lA = lA.next;
      lB = lB.next;
    } else if (lA.value > lB.value) {
      countA++;
      lA = lA.next;
      lB = lB.next;
    } else {
      countB++;
      lA = lA.next;
      lB = lB.next;
    }
  }
  if (countA === countB) {
    return 0;
  } else if (countA > countB) {
    return 1;
  } else {
    return -1;
  }
}

const SLL = new LinkedList();
SLL.insertFirst('A');
SLL.insertLast('B');
SLL.insertLast('C');
SLL.insertFirst('D');
SLL.insertAt('G', 3);
SLL.insertAfter('after A', 1);
console.log('find', SLL.find('C'));
console.log('findNodeAt', SLL.findNodeAt(2));
SLL.remove('after A');
SLL.display();
console.log(SLL.size);

// list A: Bilboa
const llA = new LinkedList();
llA.insertFirst('c');
llA.insertLast('h');
llA.insertLast('i');
llA.insertLast('l');
llA.insertLast('d');
// llA.insertLast('r');
// llA.insertLast('e');
// llA.insertLast('n');

// list B: Bilbob
const llB = new LinkedList();
llB.insertFirst('c');
llB.insertLast('h');
llB.insertLast('i');
llB.insertLast('l');
llB.insertLast('l');

// console.log(compare(llA, llB));
