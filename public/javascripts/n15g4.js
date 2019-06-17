var netNum = 14
var numNodesToChoose=3

//numNodesToChoose	Optimal	        Greedy	        Defference
//2	                26.0(0:2)	      24.0(8:14)  	  2
//3	                34.0(0:2:8)	    31.0(1:8:14)  	3
//4	                36.0(0:2:4:8)	  34.0(1:2:8:14)	2


var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'blue'},
  {id: 1, label: '1', color: 'blue'},
  {id: 2, label: '2', color: 'blue'},
  {id: 3, label: '3', color: 'green'},
  {id: 4, label: '4', color: 'red'},
  {id: 5, label: '5', color: 'blue'},
  {id: 6, label: '6', color: 'red'},
  {id: 7, label: '7', color: 'blue'},
  {id: 8, label: '8', color: 'green'},
  {id: 9, label: '9', color: 'green'},
  {id: 10,label: '10', color: 'green'},
  {id: 11,label: '11', color: 'red'},
  {id: 12,label: '12', color: 'red'},
  {id: 13,label: '13', color: 'red'},
  {id: 14,label: '14', color: 'blue'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 1, label: '6'},
  {from: 0, to: 14, label: '9'},
  {from: 1, to: 2, label: '1'},
  {from: 2, to: 7, label: '3'},
  {from: 2, to: 14, label: '7'},
  {from: 3, to: 9, label: '2'},
  {from: 4, to: 6, label: '1'},
  {from: 4, to: 13, label: '1'},
  {from: 8, to: 9, label: '1'},
  {from: 8, to: 10, label: '7'}
]);