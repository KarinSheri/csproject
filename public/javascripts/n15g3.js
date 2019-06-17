var netNum = 13
var numNodesToChoose=4

//numNodesToChoose	Optimal     	  Greedy	        Defference
//2	                28.0(12:13) 	  27.0(11:14)	    1
//3	                36.0(9:12:13)	  35.0(9:11:14)	  1
//4	                43.0(3:9:12:13)	42.0(3:9:11:14)	1


var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'blue'},
  {id: 1, label: '1', color: 'blue'},
  {id: 2, label: '2', color: 'blue'},
  {id: 3, label: '3', color: 'blue'},
  {id: 4, label: '4', color: 'blue'},
  {id: 5, label: '5', color: 'green'},
  {id: 6, label: '6', color: 'green'},
  {id: 7, label: '7', color: 'green'},
  {id: 8, label: '8', color: 'green'},
  {id: 9, label: '9', color: 'green'},
  {id: 10,label: '10', color: 'red'},
  {id: 11,label: '11', color: 'red'},
  {id: 12,label: '12', color: 'red'},
  {id: 13,label: '13', color: 'red'},
  {id: 14,label: '14', color: 'red'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 3, label: '4'},
  {from: 0, to: 4, label: '2'},
  {from: 1, to: 3, label: '1'},
  {from: 3, to: 4, label: '2'},
  {from: 5, to: 9, label: '4'},
  {from: 8, to: 9, label: '4'},
  {from: 10, to: 13, label: '1'},
  {from: 11, to: 12, label: '9'},
  {from: 11, to: 13, label: '7'},
  {from: 12, to: 14, label: '3'},
  {from: 13, to: 14, label: '8'}
]);