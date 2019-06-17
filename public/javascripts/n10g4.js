var netNum = 10
var numNodesToChoose=3

//numNodesToChoose	Optimal	      Greedy	      Defference
//2	                26.0(2:8)	    25.0(0:5)	    1
//3	                33.0(2:5:8)	  30.0(0:3:5)	  3
//4	                34.0(2:4:5:8)	33.0(0:2:3:5)	1


var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'red'},
  {id: 1, label: '1', color: 'blue'},
  {id: 2, label: '2', color: 'red'},
  {id: 3, label: '3', color: 'red'},
  {id: 4, label: '4', color: 'blue'},
  {id: 5, label: '5', color: 'red'},
  {id: 6, label: '6', color: 'red'},
  {id: 7, label: '7', color: 'blue'},
  {id: 8, label: '8', color: 'red'},
  {id: 9, label: '9', color: 'red'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 2},
  {from: 0, to: 8},
  {from: 2, to: 6},
  {from: 3, to: 8},
  {from: 4, to: 7},
  {from: 5, to: 9}
]);