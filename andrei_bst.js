class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
       const newNode = new Node(value);
       if (this.root === null) {
           this.root = newNode;
       } else {
            let currentNode = this.root;
            while (true) {
               if (value < currentNode.value) {
                   if (!currentNode.left) {
                       currentNode.left = newNode;
                       return this;
                   }
                   currentNode = currentNode.left; //update the node to the left child
               } else {
                   if (!currentNode.right) {
                       currentNode.right = newNode;
                       return this;
                   }
                   currentNode = currentNode.right;
               }
           }
       }
    }

    // returns the value if it's found, otherwise return null
    lookup(value) {
        if (!this.root) return null;
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return currentNode;
            }
        }
        return null;
    }
}

const traverse = (node) => {
    const tree = {value: node.value}
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(20);
bst.insert(170);
bst.insert(15);
bst.insert(1);
console.log(bst.lookup(20));