class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      //if the stack is empty, the node will be @ the top
      this.top = new _Node(data, null);
    }
    // if the stack already has something, create a new node, add data to the new node and have the pointer (.next) point to the top (.top)
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    // need to point the pointer to the next time and that next item becomes the top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}
