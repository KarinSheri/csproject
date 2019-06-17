var netNum = 12
var numNodesToChoose=4

//numNodesToChoose	Optimal	        Greedy	        Defference
//2	                33.0(1:4)	      33.0(1:4)	      0
//3	                42.0(1:6:11)    40.0(1:4:11)  	2
//4	                48.0(0:1:6:11)  46.0(0:1:4:11)	2

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
  {from: 0, to: 1, label: '3'},
  {from: 0, to: 2, label: '6'},
  {from: 1, to: 2, label: '6'},
  {from: 1, to: 5, label: '5'},
  {from: 4, to: 6, label: '8'},
  {from: 4, to: 11, label: '9'},
  {from: 4, to: 12, label: '2'},
  {from: 6, to: 11, label: '1'},
  {from: 6, to: 13, label: '4'},
  {from: 8, to: 10, label: '3'}
]);