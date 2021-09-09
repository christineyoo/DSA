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
        return this.top;
    }

    //add a node to the top of the stack
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode; 
            this.bottom = newNode;
        } else {
            const currTop = this.top;
            this.top = newNode;
            this.top.next = currTop;
        }
        this.length++;
        return this;
    }

    //remove a node from the top
    pop() {
        let removedNode = this.top;
        
        if (!this.top) return null;
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = removedNode.next;
        }
        this.length--;
        return this;
    }
}

const myStack =  new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
// console.log(myStack)
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);
// myStack.peek();
