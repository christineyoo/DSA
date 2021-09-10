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

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let currNode = this.first;
            let count = 1;
            while (count < this.length) {
                currNode = currNode.next;
                count++;
            }
            currNode.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        let currHead = this.first;
        this.first = currHead.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
myQueue.enqueue('joy');
myQueue.enqueue('priscilla');
myQueue.enqueue('samir');
myQueue.enqueue('jorge');
// console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue);