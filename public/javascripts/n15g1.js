var netNum = 11
var numNodesToChoose=4

//numNodesToChoose	Optimal	      Greedy      	Defference
//2	                29.0(2:4)	    29.0(2:4)	    0
//3	                37.0(1:4:5)	  36.0(2:3:4) 	1
//4	                44.0(1:3:4:5)	42.0(1:2:3:4)	2


var nodes = new vis.DataSet([
  {id: 0,  label: '0', color: 'green'},
  {id: 1,  label: '1', color: 'green'},
  {id: 2,  label: '2', color: 'green'},
  {id: 3,  label: '3', color: 'red'},
  {id: 4,  label: '4', color: 'blue'},
  {id: 5,  label: '5', color: 'green'},
  {id: 6,  label: '6', color: 'blue'},
  {id: 7,  label: '7', color: 'green'},
  {id: 8,  label: '8', color: 'red'},
  {id: 9,  label: '9', color: 'red'},
  {id: 10, label: '10', color: 'red'},
  {id: 11, label: '11', color: 'blue'},
  {id: 12, label: '12', color: 'blue'},
  {id: 13, label: '13', color: 'blue'},
  {id: 14, label: '14', color: 'green'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 1, label: '2'},
  {from: 1, to: 2, label: '7'},
  {from: 1, to: 7, label: '4'},
  {from: 2, to: 5, label: '7'},
  {from: 2, to: 7, label: '1'},
  {from: 3, to: 8, label: '2'},
  {from: 3, to: 9, label: '3'},
  {from: 3, to: 10, label: '2'},
  {from: 4, to: 11, label: '6'},
  {from: 4, to: 12, label: '2'},
  {from: 4, to: 13, label: '6'},
  {from: 5, to: 14, label: '3'},
  {from: 12, to: 13, label: '5'}
]);