class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class DubNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
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
      if (index >= this.length) return this.append(value);

      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;

      return this;
    }
    
    traverseToIndex(index) {
          let counter = 0;
          let currNode = this.head;
          while (counter !== index) {
              currNode = currNode.next;
              counter++;
          }
          return currNode;
      }

      myremove(index) {
          let currNode = this.head;
          let previous;
          let count = 0;
          while (currNode !== null && count < index) {
            previous = currNode;
            currNode = currNode.next;  
            count++
          }
          previous.next = currNode.next;
          this.length--;
          return this;
      }

      remove(index) {
          const leader = this.traverseToIndex(index - 1);
          const unwantedNode = leader.next;
          leader.next = unwantedNode.next;
          this.length--;
          return this.printList();
      }
}

const ll = new LinkedList(10);
ll.append(5);
ll.append(16);
ll.prepend(1);
ll.insertAt(99, 2);
ll.insertAt(98, 200);
ll.remove(3);
console.log(ll.printList());