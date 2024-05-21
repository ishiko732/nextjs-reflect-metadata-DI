class Graph<T> {
  private nodes: Map<T, Vertex<T>> = new Map();

  addEdge(from: T, to: T) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) {
      throw new Error("Vertex does not exist");
    }
    fromNode.addAdjacent(toNode);
  }
  removeEdge(from: T, to: T) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);
    if (!fromNode || !toNode) {
      throw new Error("Vertex does not exist");
    }
    fromNode.removeAdjacent(toNode);
  }
  addVertex(data: T) {
    if (this.nodes.has(data)) {
      throw new Error("Vertex already exists");
    }
    this.nodes.set(data, new Vertex(data));
  }

  //DAG
  topologicalSort(): T[] {
    const visited = new Set<Vertex<T>>();
    const sorted: T[] = [];
    const visit = (vertex: Vertex<T>) => {
      if (visited.has(vertex)) return;
      visited.add(vertex);
      vertex.adjacents.forEach(visit);
      sorted.unshift(vertex.data);
    };
    this.nodes.forEach(visit);
    return sorted;
  }
}

class Vertex<T> {
  private _data: T;
  private _adjacent: Set<Vertex<T>> = new Set();
  constructor(data: T) {
    this._data = data;
  }

  addAdjacent(vertex: Vertex<T>) {
    this._adjacent.add(vertex);
  }
  removeAdjacent(vertex: Vertex<T>) {
    return this._adjacent.delete(vertex);
  }
  get adjacents(): Vertex<T>[] {
    return Array.from(this._adjacent);
  }

  get data() {
    return this._data;
  }
}

export { Graph, Vertex };
