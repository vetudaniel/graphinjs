import { Graph } from "../graph in js/Graph.js";
import { GraphAdjacencyMatrix } from "../graph in js/GraphAdjacencyMatrix.js"

const graph = new Graph();



graph.addVertex('0');
graph.addVertex('1');
graph.addVertex('2');
graph.addVertex('3');
graph.addVertex('4');
graph.addVertex('5');

graph.addEdge('0', '1', 3);
graph.addEdge("0", "2", 2);
graph.addEdge('1', '3', 2);
graph.addEdge('2', '3', 5);
graph.addEdge('2', '4', 2);
graph.addEdge('4', '5', 1);
graph.addEdge('3', '5', 4);




graph.dijkstra('0', '5');


/* const numVertices = 6; // Number of vertices in the graph
const graph = new GraphAdjacencyMatrix(numVertices);

graph.addEdge(0, 1);
graph.addEdge(1, 0);
graph.addEdge(0, 2)
graph.addEdge(2, 0);
graph.addEdge(1, 3)
graph.addEdge(3, 1)
graph.addEdge(2, 3)
graph.addEdge(2, 4)
graph.addEdge(3, 2)
graph.addEdge(4, 2)
graph.addEdge(4, 5)
graph.addEdge(5, 4)
graph.addEdge(5, 3)

graph.printGraph(); */