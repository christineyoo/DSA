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

  // insertFirst: make the head the new node. increment the size.
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    this.size++;
  }

  // insertLast: if there's no head, use insertFirst. Otherwise, make a tempNode, traverse to the second to last node, and make the last node point to the new Node(item, null). size++
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

  // insertAt(item, index): check if index > size (return). if index = 0, use insertFirst. Then create a new node, variables for previous, currNode, and count. As long as count < index, traverse through, reassigning previous->currNode and currNode to next. count++; After the loop, set the pointers for previous and node and increment the size.
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

  // insertAfter: if the index > size, return. Otherwise, use insertAt with index+1;
  insertAfter(item, index) {
    if (index > this.size) return;
    this.insertAt(item, index + 1);
  }

  // find(item): if !head, return null. currNode = head; while the currNode' value is not the item, check if currNode.next is null, return null. Otherwise, keep traverse through the list by pointing to the next node. return the currNode.
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

  // findNodeAt(index): check if !head || index > size, return null. create currNode, count. While the count < index, keep traversing through, incrementing the count each time. At the end of the loop, return currNode.
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

  // remove(item): check if !head, return null. if the head's value is the item, make the new head the node after the head. create variables to store the previous node and currNode. while curr is not null and value is not item, previous to the currnode, currnode keeps traverse to the next node. After the while loop, check if the currnode is null (return item not found);
  // previous points to the currNode.next;
  // decremenet the size.
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
    if (currNode === null) return `Item not found`;
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
const SLL = new LinkedList();
SLL.insertFirst('A');
SLL.insertLast('B');
SLL.insertLast('C');
SLL.insertFirst('D');
SLL.insertAt('G', 3);
SLL.insertAfter('after A', 1);
console.log('find', SLL.find('C'));
console.log('findNodeAt', SLL.findNodeAt(3));
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
