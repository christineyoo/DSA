class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertFirst(value) {
        this.head = new Node(value, this.head);
        this.size++;
    }

    insertLast(value) {
        if (!this.head) {
            return this.insertFirst(value);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new Node(value);
        }
        this.size++;
    }
}

const ll = new LinkedList();
ll.insertFirst(10);
ll.insertLast(5);
ll.insertLast(16);
console.log(ll);