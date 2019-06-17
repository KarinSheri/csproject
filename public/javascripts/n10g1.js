var netNum = 7
var numNodesToChoose=3

// numNodesToChoose	Optimal	       Greedy	      Defference
//	2	              24.0(5:6)	    22.0(0:6)	    2
//	3	              32.0(3:5:6)	  28.0(0:3:6)	  4
//	4	              32.0(0:2:3:6)	32.0(0:2:3:6)	0


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
  {from: 0, to: 3, label: '2'},
  {from: 0, to: 5, label: '7'},
  {from: 0, to: 6, label: '6'},
  {from: 2, to: 5, label: '4'},
  {from: 3, to: 9, label: '6'},
  {from: 6, to: 8, label: '7'}
]);