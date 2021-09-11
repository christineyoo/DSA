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
console.log(JSON.stringify(traverse(bst.root)));