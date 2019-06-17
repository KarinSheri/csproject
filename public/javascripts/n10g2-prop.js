var netNum = 7
var numNodesToChoose=3

//numNodesToChoose	Optimal	      Greedy	      Defference
//2	                26.0(2:4)	    26.0(2:4)	    0
//3	                34.0(0:4:5)	  31.0(0:2:4) 	3
//4	                37.0(0:3:4:5)	35.0(0:2:4:5)	2

/*var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'blue'},
  {id: 1, label: '1', color: 'blue'},
  {id: 2, label: '2', color: 'blue'},
  {id: 3, label: '3', color: 'red'},
  {id: 4, label: '4', color: 'red'},
  {id: 5, label: '5', color: 'blue'},
  {id: 6, label: '6', color: 'blue'},
  {id: 7, label: '7', color: 'red'},
  //{id: 8, label: '8', color: 'blue'},
  {id: 9, label: '9', color: 'red'}
]);*/

/*var nodes = new vis.DataSet([
  {id: 0, label: '0'},
  {id: 1, label: '1'},
  {id: 2, label: '2'},
  {id: 3, label: '3'},
  {id: 4, label: '4'},
  {id: 5, label: '5'},
  {id: 6, label: '6'},
  {id: 7, label: '7'},
  {id: 9, label: '9'}
]);*/

var nodes = new vis.DataSet([
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 9}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 1, label: '5'},
  {from: 0, to: 2, label: '10'},
  {from: 2, to: 5, label: '5'},
  {from: 2, to: 6, label: '1'},
  {from: 3, to: 4, label: '5'},
  {from: 3, to: 7, label: '3'},
  {from: 4, to: 7, label: '1'},
  {from: 4, to: 9, label: '4'},
  {from: 5, to: 6, label: '4'}
]);