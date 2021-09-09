//you can build a stack with array or linked list

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    // look at the top node
    peek() {
        console.log('Peekaboo', this.top);
    }

    //add a node to the top of the stack
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.bottom = newNode;
            this.top = newNode;
        } else {
            let currNode = this.bottom;
            let count = 1;
            while (count < this.length) {
                currNode = currNode.next;
                count++;
            }
            currNode.next = newNode;
            this.top = newNode;
        }
        this.length++;
        // console.log(this);
    }

    //remove a node from the top
    pop() {
        let removedNode = this.top;

        if (this.length <= 0) return;
        if (this.length === 1) {
            this.bottom = null;
        } else {
            let currNode = this.bottom;
            let count = 1;
            while (count < this.length - 1) {
                currNode = currNode.next;
                count++;
            }
            currNode.next = removedNode.next;
            this.top = currNode;
        }
        this.length--;
        // console.log(this);
    }
}

const myStack =  new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log('before pop', myStack)
myStack.pop();
myStack.peek();
