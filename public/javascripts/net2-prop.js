var netNum = 2
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

/*var nodes = new vis.DataSet([
  {id: 1, x: 0, y: 700},
  {id: 2, x: 200, y: 650},
  {id: 3, x: 450, y: 600},
  {id: 4, x: 650, y: 650},
  {id: 5, x: 900, y: 700},
  {id: 6, x: 1150, y: 750},
  {id: 7, x: 0, y: 0},
  {id: 8, x: 200, y: 0},
  {id: 9, x: 400, y: 0},
  {id: 10, x: 600, y: 0},
  {id: 11, x: 800, y: 0},
  {id: 12, x: 1000, y: 0},
  {id: 13, x: 1200, y: 0},
  {id: 14, x: 1400, y: 0}
]);*/

/*
var edges = new vis.DataSet([
  {from: 1, to: 7, label: '1', title: '1'},
  {from: 1, to: 8, label: '2', title: '2'},
  {from: 1, to: 9, label: '3', title: '3'},
  {from: 1, to: 10, label: '4', title: '4'},
  {from: 1, to: 12, label: '6', title: '6'},
  {from: 2, to: 7, label: '1', title: '1'},
  {from: 2, to: 8, label: '2', title: '2'},
  {from: 2, to: 9, label: '3', title: '3'},
  {from: 2, to: 10, label: '4', title: '4'},
  {from: 2, to: 12, label: '6', title: '6'},
  {from: 3, to: 7, label: '1', title: '1'},
  {from: 3, to: 8, label: '2', title: '2'},
  {from: 3, to: 9, label: '3', title: '3'},
  {from: 3, to: 10, label: '4', title: '4'},
  {from: 3, to: 13, label: '7', title: '7'},
  {from: 4, to: 7, label: '1', title: '1'},
  {from: 4, to: 8, label: '2', title: '2'},
  {from: 4, to: 9, label: '3', title: '3'},
  {from: 4, to: 11, label: '5', title: '5'},
  {from: 4, to: 13, label: '7', title: '7'},
  {from: 5, to: 7, label: '1', title: '1'},
  {from: 5, to: 8, label: '2', title: '2'},
  {from: 5, to: 11, label: '5', title: '5'},
  {from: 5, to: 14, label: '8', title: '8'},
  {from: 6, to: 7, label: '1', title: '1'},
  {from: 6, to: 11, label: '5', title: '5'},
  {from: 6, to: 14, label: '8', title: '8'}
]);*/

// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 7, label: '1'},
  {from: 1, to: 8, label: '2'},
  {from: 1, to: 9, label: '3'},
  {from: 1, to: 10, label: '4'},
  {from: 1, to: 12, label: '6'},
  {from: 2, to: 7, label: '1'},
  {from: 2, to: 8, label: '2'},
  {from: 2, to: 9, label: '3'},
  {from: 2, to: 10, label: '4'},
  {from: 2, to: 12, label: '6'},
  {from: 3, to: 7, label: '1'},
  {from: 3, to: 8, label: '2'},
  {from: 3, to: 9, label: '3'},
  {from: 3, to: 10, label: '4'},
  {from: 3, to: 13, label: '7'},
  {from: 4, to: 7, label: '1'},
  {from: 4, to: 8, label: '2'},
  {from: 4, to: 9, label: '3'},
  {from: 4, to: 11, label: '5'},
  {from: 4, to: 13, label: '7'},
  {from: 5, to: 7, label: '1'},
  {from: 5, to: 8, label: '2'},
  {from: 5, to: 11, label: '5'},
  {from: 5, to: 14, label: '8'},
  {from: 6, to: 7, label: '1'},
  {from: 6, to: 11, label: '5'},
  {from: 6, to: 14, label: '8'}
]);