var netNum = 5
var numNodesToChoose=10

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
  {id: 14},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 18},
  {id: 19},
  {id: 20},
  {id: 21},
  {id: 22},
  {id: 23},
  {id: 24},
  {id: 25},
  {id: 26},
  {id: 27},
  {id: 28},
  {id: 29},
  {id: 30},
  {id: 31},
  {id: 32},
  {id: 33},
  {id: 34},
  {id: 35},
  {id: 36},
  {id: 37},
  {id: 38},
  {id: 39},
  {id: 40},
  {id: 41},
  {id: 42}     
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
  {from: 6, to: 14},
  {from: 15, to: 21},
  {from: 15, to: 22},
  {from: 15, to: 23},
  {from: 15, to: 24},
  {from: 15, to: 26},
  {from: 16, to: 21},
  {from: 16, to: 22},
  {from: 16, to: 23},
  {from: 16, to: 24},
  {from: 16, to: 26},
  {from: 17, to: 21},
  {from: 17, to: 22},
  {from: 17, to: 23},
  {from: 17, to: 24},
  {from: 17, to: 27},
  {from: 18, to: 21},
  {from: 18, to: 22},
  {from: 18, to: 23},
  {from: 18, to: 25},
  {from: 18, to: 27},
  {from: 19, to: 21},
  {from: 19, to: 22},
  {from: 19, to: 25},
  {from: 19, to: 28},
  {from: 20, to: 21},
  {from: 20, to: 25},
  {from: 20, to: 28},
  {from: 29, to: 35},
  {from: 29, to: 36},
  {from: 29, to: 37},
  {from: 29, to: 38},
  {from: 29, to: 40},
  {from: 30, to: 35},
  {from: 30, to: 36},
  {from: 30, to: 37},
  {from: 30, to: 38},
  {from: 30, to: 40},
  {from: 31, to: 35},
  {from: 31, to: 36},
  {from: 31, to: 37},
  {from: 31, to: 38},
  {from: 31, to: 41},
  {from: 32, to: 35},
  {from: 32, to: 36},
  {from: 32, to: 37},
  {from: 32, to: 39},
  {from: 32, to: 41},
  {from: 33, to: 35},
  {from: 33, to: 36},
  {from: 33, to: 39},
  {from: 33, to: 42},
  {from: 34, to: 35},
  {from: 34, to: 39},
  {from: 34, to: 42}
]);

/*var nodes = new vis.DataSet([
  {id: 1, x: 0, y: 0},
  {id: 2, x: 200, y: 0},
  {id: 3, x: 450, y: 0},
  {id: 4, x: 650, y: 0},
  {id: 10, x: 800, y: 0},
  {id: 5, x: 0, y: 800},
  {id: 6, x: 300, y: 700},
  {id: 7, x: 500, y: 600},
  {id: 8, x: 750, y: 500},
  {id: 9, x: 1000, y: 400},
  {id: 11, x: 1200, y: 300}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 5},
  {from: 1, to: 6},
  {from: 2, to: 5},
  {from: 2, to: 6},
  {from: 2, to: 7},
  {from: 3, to: 5},
  {from: 3, to: 6},
  {from: 3, to: 7},
  {from: 3, to: 8},
  {from: 4, to: 5},
  {from: 4, to: 8},
  {from: 4, to: 9},
  {from: 10, to: 5},
  {from: 10, to: 11}
]);*/