export class GraphAdjacencyMatrix {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.adjMatrix = new Array(numVertices).fill(null).map(() => new Array(numVertices).fill(0));
    }

    addEdge(vertex1, vertex2) {
        // Check if vertices are valid
        if (vertex1 < 0 || vertex1 >= this.numVertices || vertex2 < 0 || vertex2 >= this.numVertices) {
            throw new Error('Invalid vertices');
        }

        // Add edge between vertex1 and vertex2
        this.adjMatrix[vertex1][vertex2] = 1;
        // For undirected graph, uncomment the following line to add edge from vertex2 to vertex1
        // this.adjMatrix[vertex2][vertex1] = 1;
    }

    removeEdge(vertex1, vertex2) {
        // Check if vertices are valid
        if (vertex1 < 0 || vertex1 >= this.numVertices || vertex2 < 0 || vertex2 >= this.numVertices) {
            throw new Error('Invalid vertices');
        }

        // Remove edge between vertex1 and vertex2
        this.adjMatrix[vertex1][vertex2] = 0;
        // For undirected graph, uncomment the following line to remove edge from vertex2 to vertex1
        // this.adjMatrix[vertex2][vertex1] = 0;
    }

    printGraph() {
        for (let i = 0; i < this.numVertices; i++) {
            const row = this.adjMatrix[i].join(' ');
            console.log(`${i} -> ${row}`);
        }
    }
}