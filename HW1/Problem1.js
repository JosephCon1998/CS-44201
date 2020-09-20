function bfs(graph, root) {
  var nodesLen = {};

  for (var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  var queue = [root];
  var current;

  while (queue.length != 0) {
    current = queue.shift();

    var curConnected = graph[current];
    var neighborIndex = [];
    var index = curConnected.indexOf(1);

    while (index != -1) {
      neighborIndex.push(index);
      index = curConnected.indexOf(1, index + 1);
    }

    for (var j = 0; j < neighborIndex.length; j++) {
      if (nodesLen[neighborIndex[j]] == Infinity) {
        nodesLen[neighborIndex[j]] = nodesLen[current] + 1;
        queue.push(neighborIndex[j]);
      }
    }
  }
  return nodesLen;
}

var bfsGraph = [
  //====== a, b, c, d, e, f
  /* a */ [0, 1, 1, 0, 0, 0],
  /* b */ [1, 0, 1, 1, 0, 0],
  /* c */ [1, 1, 0, 1, 1, 0],
  /* d */ [0, 1, 1, 0, 1, 1],
  /* e */ [0, 0, 1, 1, 0, 1],
  /* f */ [0, 0, 0, 1, 1, 0],
];

// Numbers 0-5 represent a-f in console log
console.log(bfs(bfsGraph, 0));
