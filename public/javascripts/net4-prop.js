var netNum = 4
var numNodesToChoose=7

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
  {id: 28}
]);

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
  {from: 6, to: 14, label: '8', title: '8'},
  {from: 15, to: 21, label: '1', title: '1'},
  {from: 15, to: 22, label: '2', title: '2'},
  {from: 15, to: 23, label: '3', title: '3'},
  {from: 15, to: 24, label: '4', title: '4'},
  {from: 15, to: 26, label: '6', title: '6'},
  {from: 16, to: 21, label: '1', title: '1'},
  {from: 16, to: 22, label: '2', title: '2'},
  {from: 16, to: 23, label: '3', title: '3'},
  {from: 16, to: 24, label: '4', title: '4'},
  {from: 16, to: 26, label: '6', title: '6'},
  {from: 17, to: 21, label: '1', title: '1'},
  {from: 17, to: 22, label: '2', title: '2'},
  {from: 17, to: 23, label: '3', title: '3'},
  {from: 17, to: 24, label: '4', title: '4'},
  {from: 17, to: 27, label: '7', title: '7'},
  {from: 18, to: 21, label: '1', title: '1'},
  {from: 18, to: 22, label: '2', title: '2'},
  {from: 18, to: 23, label: '3', title: '3'},
  {from: 18, to: 25, label: '5', title: '5'},
  {from: 18, to: 27, label: '7', title: '7'},
  {from: 19, to: 21, label: '1', title: '1'},
  {from: 19, to: 22, label: '2', title: '2'},
  {from: 19, to: 25, label: '5', title: '5'},
  {from: 19, to: 28, label: '8', title: '8'},
  {from: 20, to: 21, label: '1', title: '1'},
  {from: 20, to: 25, label: '5', title: '5'},
  {from: 20, to: 28, label: '8', title: '8'}
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
  {from: 6, to: 14, label: '8'},
  {from: 15, to: 21, label: '1'},
  {from: 15, to: 22, label: '2'},
  {from: 15, to: 23, label: '3'},
  {from: 15, to: 24, label: '4'},
  {from: 15, to: 26, label: '6'},
  {from: 16, to: 21, label: '1'},
  {from: 16, to: 22, label: '2'},
  {from: 16, to: 23, label: '3'},
  {from: 16, to: 24, label: '4'},
  {from: 16, to: 26, label: '6'},
  {from: 17, to: 21, label: '1'},
  {from: 17, to: 22, label: '2'},
  {from: 17, to: 23, label: '3'},
  {from: 17, to: 24, label: '4'},
  {from: 17, to: 27, label: '7'},
  {from: 18, to: 21, label: '1'},
  {from: 18, to: 22, label: '2'},
  {from: 18, to: 23, label: '3'},
  {from: 18, to: 25, label: '5'},
  {from: 18, to: 27, label: '7'},
  {from: 19, to: 21, label: '1'},
  {from: 19, to: 22, label: '2'},
  {from: 19, to: 25, label: '5'},
  {from: 19, to: 28, label: '8'},
  {from: 20, to: 21, label: '1'},
  {from: 20, to: 25, label: '5'},
  {from: 20, to: 28, label: '8'}
]);