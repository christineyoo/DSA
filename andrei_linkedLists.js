class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList() {
        const array = [];
        let currNode = this.head;
        while (currNode !== null) {
            array.push(currNode.value);
            currNode = currNode.next;
        }
        return array;
    }

    insertAt(value, index) {
        if (index > this.length) return;
        if (this.length === 0) return this.append(value);
        
        const newNode = new Node(value);
        let currNode = this.head;
        let prev;
        let count = 0;
        while (currNode !== null && count < index) {
            prev = currNode;
            currNode = currNode.next;
            count++;
        }
        prev.next = newNode;
        newNode.next = currNode;
        this.length++;
    }
}

const ll = new LinkedList(10);
ll.append(5);
ll.append(16);
ll.prepend(1);
ll.insertAt(15, 2);
console.log(ll.printList());