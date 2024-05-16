import { MinHeap } from "../graph in js/MinHeap.js";

export class Graph {

    constructor() {
        this.list = new Map();
    }

    addVertex(vertex) {
        if (!this.list.has(vertex)) {
            this.list.set(vertex, []); //
        }
    }

    addEdge(vertex1, vertex2, cost) {
        if (!this.list.has(vertex1) || !this.list.has(vertex2)) {
            throw new Error("Vertices not found in the graph");
        }
        this.list.get(vertex1).push({ node: vertex2, cost });
        this.list.get(vertex2).push({ node: vertex1, cost });
    }



    dijkstra(start, end) {
        const distances = {};
        const previous = {};
        const priorityQueue = new MinHeap();



        for (let vertex of this.list.keys()) {
            if (vertex === start) {
                distances[vertex] = 0;
                priorityQueue.insert(vertex, 0);
            } else {
                distances[vertex] = Infinity;
            }
            previous[vertex] = null;
        }

        while (!priorityQueue.isEmpty()) {
            const { key: currentVertex } = priorityQueue.extractMin();

            if (currentVertex === end) {
                const path = [];
                let temp = currentVertex;
                while (temp) {
                    path.push(temp);
                    temp = previous[temp];
                }
                path.reverse();
                console.log(`Path found: ${path.join(' -> ')}`);
                console.log(`Total cost: ${distances[end]}`);
                return { path, distance: distances[end] };
            }

            for (let neighbor of this.list.get(currentVertex)) {
                const alt = distances[currentVertex] + neighbor.cost;
                if (alt < distances[neighbor.node]) {
                    distances[neighbor.node] = alt;
                    previous[neighbor.node] = currentVertex;
                    priorityQueue.insert(neighbor.node, alt);
                }
            }
        }

        console.log('No path found');
        return null;
    }


}

