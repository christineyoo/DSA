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
    node.next = currNode;
    previous.next = node;
    this.size++;
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
SLL.insertFirst('1');
SLL.insertAt('Third', 3);
SLL.display();
