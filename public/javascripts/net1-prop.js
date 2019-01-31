var netNum = 1
var numNodesToChoose=6

var nodes = new vis.DataSet([
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 12},
  {id: 13},
  {id: 14}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 7},
  {from: 1, to: 8},
  {from: 1, to: 9},
  {from: 1, to: 10},
  {from: 1, to: 12},
  {from: 2, to: 7},
  {from: 2, to: 8},
  {from: 2, to: 9},
  {from: 2, to: 10},
  {from: 2, to: 12},
  {from: 3, to: 7},
  {from: 3, to: 8},
  {from: 3, to: 9},
  {from: 3, to: 10},
  {from: 3, to: 13},
  {from: 4, to: 7},
  {from: 4, to: 8},
  {from: 4, to: 9},
  {from: 4, to: 11},
  {from: 4, to: 13},
  {from: 5, to: 7},
  {from: 5, to: 8},
  {from: 5, to: 11},
  {from: 5, to: 14},
  {from: 6, to: 7},
  {from: 6, to: 11},
  {from: 6, to: 14}
]);