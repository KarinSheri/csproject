var netNum = 9
var numNodesToChoose=2

//numNodesToChoose	Optimal	            Greedy	          Defference
//2	                40.0(8:14)	        5.0(7:8)	        5
//3	                53.0(2:8:14)	      48.0(2:7:8)   	  5
//4	                61.0(2:8:13:14)	    60.0(1:2:7:8)	    1
//5	                69.0(2:8:13:14:16)	68.0(1:2:7:8:16)	1


/*var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'green'},
  {id: 1, label: '1', color: 'green'},
  {id: 2, label: '2', color: 'green'},
  {id: 3, label: '3', color: 'green'},
  //{id: 4, label: '4', color: 'blue'},
  {id: 5, label: '5', color: 'green'},
  {id: 6, label: '6', color: 'green'},
  {id: 7, label: '7', color: 'green'},
  {id: 8, label: '8', color: 'green'},
  {id: 9, label: '9', color: 'green'},
  {id: 10,label: '10', color: 'green'},
  {id: 11,label: '11', color: 'green'},
  //{id: 12,label: '12', color: 'green'},
  {id: 13,label: '13', color: 'green'},
  {id: 14,label: '14', color: 'green'},
  {id: 15,label: '15', color: 'green'},
  {id: 16,label: '16', color: 'blue'},
  {id: 17,label: '17', color: 'blue'},
  //{id: 18,label: '18', color: 'blue'},
  {id: 19,label: '19', color: 'blue'}
]);*/

/*var nodes = new vis.DataSet([
  {id: 0, label: '0'},
  {id: 1, label: '1'},
  {id: 2, label: '2'},
  {id: 3, label: '3'},
  {id: 5, label: '5'},
  {id: 6, label: '6'},
  {id: 7, label: '7'},
  {id: 8, label: '8'},
  {id: 9, label: '9'},
  {id: 10,label: '10'},
  {id: 11,label: '11'},
  {id: 13,label: '13'},
  {id: 14,label: '14'},
  {id: 15,label: '15'},
  {id: 16,label: '16'},
  {id: 17,label: '17'},
  {id: 19,label: '19'}
]);*/

var nodes = new vis.DataSet([
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
  {id: 11},
  {id: 13},
  {id: 14},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 19}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 8, label: '6'},
  {from: 0, to: 10, label: '1'},
  {from: 0, to: 11, label: '2'},
  {from: 1, to: 9, label: '4'},
  {from: 1, to: 14, label: '8'},
  {from: 2, to: 3, label: '5'},
  {from: 2, to: 11, label: '4'},
  {from: 2, to: 15, label: '4'},
  {from: 3, to: 6, label: '1'},
  {from: 5, to: 13, label: '3'},
  {from: 7, to: 8, label: '7'},
  {from: 7, to: 13, label: '5'},
  {from: 7, to: 14, label: '9'},
  {from: 8, to: 13, label: '8'},
  {from: 14, to: 15, label: '2'},
  {from: 16, to: 17, label: '6'},
  {from: 16, to: 19, label: '2'}
]);