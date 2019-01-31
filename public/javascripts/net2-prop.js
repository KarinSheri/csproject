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