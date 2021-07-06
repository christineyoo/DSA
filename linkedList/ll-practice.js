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
    this.size = 0;
  }

  // insertFirst: this head -> new node(item, head)
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    this.size++;
  }

  // insertLast: if !head, this.insertFirst. else, let tempNode = head. While tempNode.next !null, traverse through nodes. At the end of the loop, tempNode.next = new node (item, null).increment size;
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

  // display: let currNode = head; while currNode => console.log(value) traverse through nodes
  display() {
    let currNode = this.head;
    while (currNode) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
  }

  // insertAt: if index > size, if index = 0; const node, let previous, currNode, count. while count < index, previous = curr, curr = curr.next, count++; once out of the loop, set prev.next = node, node.next = curr, this.size++
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

  // insertAfter: if index> size, return. this.insertAt (index + 1)
  insertAfter(item, index) {
    if (index > this.size) return;
    this.insertAt(item, index + 1);
  }
  // find: if !this.head return null. let curr = head. while (curr.value !== item), if (currNode.next == null) return null. Otherwise, keep looping through. At the end, return the currnode.
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

  // findNodeAt: if !head or if index > size, return null. let curr = head. let count = 0; while (count < index), make currnode the next one and count++. at the end, return the currnode.
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

  // remove: if !head, return null. if the root value is the item, then set the head as the next head. let previous, curr. while (curr not null and curr value not item) set previous to the currnode and currnode to the next one. At the end of the loop, if curr is null, return 'not found'. forge new linkage with prev.next = currnode.next
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
    if (currNode === null) return `Not found`;
    previous.next = currNode.next;
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

// const SLL = new LinkedList();
// SLL.insertFirst('A');
// SLL.insertLast('B');
// SLL.insertLast('C');
// SLL.insertFirst('D');
// SLL.insertAt('G', 3);
// SLL.insertAfter('after A', 1);
// console.log('find', SLL.find('C'));
// console.log('findNodeAt', SLL.findNodeAt(2));
// SLL.remove('after A');
// SLL.display();

// list A: Bilboa
const llA = new LinkedList();
llA.insertFirst('B');
llA.insertLast('i');
llA.insertLast('l');
llA.insertLast('b');
llA.insertLast('o');
llA.insertLast('a');

// list B: Bilbob
const llB = new LinkedList();
llB.insertFirst('B');
llB.insertLast('i');
llB.insertLast('l');
llB.insertLast('b');
llB.insertLast('o');
llB.insertLast('b');

console.log(compare(llA, llB));
