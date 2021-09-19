//          2 ----- 0
//         / \
//        /   \
//       1 --- 3
//

// EDGE LIST shows the connection. [0, 2] means 0 is connected to 2
const graph = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3]
];

// ADJACENT LIST - where the index is the graph node's value and the value is the node's neighbors
// index (node) 0 is connected to 2
// index (node) 1 is connected to 2 and 3
// index (node) 2 is connected to 0, 1, and 3
// index (node) 4 is connected to 1 and 2

const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]];

// ADJACENT MATRIX
// 0 means no connection
// 1 means yes connection
// if you want to make a weighted graph, you can use numbers other than 0 and 1 to indicate the weight
const graph3 = [
  [0, 0, 1, 0], // 0 is connected to 2
  [0, 0, 1, 1], // node 1 is connected to 2 and 3
  [1, 1, 0, 1], // node 2 is connected to 0, 1, and 3
  [0, 1, 1, 0] // node 3 is connected to 1 and 2
];

// ADJACENT LIST
const graph4 = {
  0: [0, 0, 1, 0], // 0 is connected to 2
  1: [0, 0, 1, 1], // node 1 is connected to 2 and 3
  2: [1, 1, 0, 1], // node 2 is connected to 0, 1, and 3
  3: [0, 1, 1, 0] // node 3 is connected to 1 and 2
};

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + '--> ' + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('2', '1');
myGraph.addEdge('2', '4');

myGraph.showConnections();
