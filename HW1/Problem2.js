const data = "a b c d e f".split(" ");

const adjacencyData = [
  ["a", "b"],
  ["a", "c"],
  ["b", "a"],
  ["b", "c"],
  ["b", "d"],
  ["c", "a"],
  ["c", "b"],
  ["c", "d"],
  ["c", "e"],
  ["d", "b"],
  ["d", "c"],
  ["d", "e"],
  ["d", "f"],
  ["e", "c"],
  ["e", "d"],
  ["e", "f"],
  ["f", "d"],
  ["f", "e"],
];

const adjacencyList = new Map();

function addNode(airport) {
  adjacencyList.set(airport, []);
}

function addEdge(origin, destination) {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
}

// Create the Graph
data.forEach(addNode);
adjacencyData.forEach((route) => addEdge(...route));
// ================

function dfs(start, visited = new Set()) {
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "a") {
      console.log(`DFS found a`);
      return;
    }

    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs("a");
