var netNum = 9
var numNodesToChoose=3

//numNodesToChoose	Optimal	      Greedy    	  Defference
//2	                15.0(2:6)	    15.0(2:6)     0
//3	                19.0(2:3:9)	  17.0(2:3:6) 	2
//4	                20.0(1:2:3:9)	19.0(2:3:5:6)	1


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
  {from: 0, to: 2, label: '2'},
  {from: 1, to: 4, label: '1'},
  {from: 2, to: 5, label: '1'},
  {from: 2, to: 6, label: '2'},
  {from: 3, to: 6, label: '6'},
  {from: 3, to: 8, label: '2'},
  {from: 5, to: 9, label: '2'},
  {from: 6, to: 9, label: '4'}
]);