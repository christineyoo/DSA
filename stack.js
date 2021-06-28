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
      return this.top;
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

  peek() {
    let current = this.top;
    if (!current) {
      return;
    }
    console.log(current.data);
  }

  isEmpty() {
    if (this.top === null) {
      console.log('The stack is empty');
    } else {
      console.log('The stack is not empty');
    }
  }

  display() {
    let current = this.top;
    if (!current) {
      return;
    } else {
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const length = string.length;
    const mid = length / 2;
    let stack = new Stack();
    if (length % 2 !== 0) {
      for (let i = 0; i < Math.floor(mid); i++) {
        stack.push(string[i]);
      }
      for (let i = Math.floor(mid) + 1; i < string.length; i++) {
        string[i] === stack.pop() ? console.log(`odd true`) : console.log(`odd false`);
      }
    } else {
      for (let i = 0; i < mid; i++) {
        stack.push(string[i]);
      }
      for (let i = mid; i < string.length; i++) {
        string[i] === stack.pop() ? console.log(`even true`) : console.log(`even false`);
      }
    }
  }
}

const s = new Stack();

s.isPalindrome('tauhida');
