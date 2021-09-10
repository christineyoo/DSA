class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

//O(1) time | O(1) space
  peek() {
    return this.first;
  }

//O(1) time | O(1) space
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

//O(1) time | O(1) space
  dequeue() {
    if (!this.first) {
        return null;
    }
    if (this.first === this.last) {
        this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue('joy');
myQueue.enqueue('priscilla');
myQueue.enqueue('samir');
myQueue.enqueue('jorge');
// console.log(myQueue.peek());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue);
// console.log('isEmpty', myQueue.isEmpty());

// IMPLEMENT A QUEUE USING A STACK
class CrazyQueue {
    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value) {
        const length = this.first.length;
        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value); //adds to the end of the queue
        return this;
    }

    dequeue() {
        const length = this.last.length;
        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop(); //removes and returns the first one that went in
        return this;
    }

    peek() {
        if (this.last.length === 0) {
            return this.first[this.first.length - 1];
        } else if (this.last.length > 0) {
            return this.last[0];
        }
    }
}

const myCrazyQueue = new CrazyQueue();
myCrazyQueue.enqueue('a');
myCrazyQueue.enqueue('b');
myCrazyQueue.enqueue('c');
myCrazyQueue.enqueue('d');
// myCrazyQueue.dequeue();
console.log(myCrazyQueue.peek());


console.log(myCrazyQueue);