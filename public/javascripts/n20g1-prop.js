var netNum = 8
var numNodesToChoose=3

//numNodesToChoosee	Optimal	            Greedy	            Defference
//2	                29.0(12:15)	        29.0(12:15)	        0
//3	                41.0(12:17:19)	    38.0(2:12:15)	      3
//4	                50.0(2:12:17:19)  	47.0(2:12:15:18)	  3
//5	                56.0(2:9:12:17:19)	53.0(1:2:12:15:18)	3


/*var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'blue'},
  {id: 1, label: '1', color: 'blue'},
  {id: 2, label: '2', color: 'blue'},
  //{id: 3, label: '3', color: 'blue'},
  //{id: 4, label: '4', color: 'blue'},
  {id: 5, label: '5', color: 'blue'},
  {id: 6, label: '6', color: 'blue'},
  {id: 7, label: '7', color: 'green'},
  //{id: 8, label: '8', color: 'green'},
  {id: 9, label: '9', color: 'green'},
  {id: 10,label: '10', color: 'green'},
  //{id: 11,label: '11', color: 'green'},
  {id: 12,label: '12', color: 'green'},
  {id: 13,label: '13', color: 'green'},
  //{id: 14,label: '14', color: 'red'},
  {id: 15,label: '15', color: 'red'},
  {id: 16,label: '16', color: 'red'},
  {id: 17,label: '17', color: 'red'},
  {id: 18,label: '18', color: 'red'},
  {id: 19,label: '19', color: 'red'}
]);*/

/*var nodes = new vis.DataSet([
  {id: 0, label: '0'},
  {id: 1, label: '1'},
  {id: 2, label: '2'},
  {id: 5, label: '5'},
  {id: 6, label: '6'},
  {id: 7, label: '7'},
  {id: 9, label: '9'},
  {id: 10,label: '10'},
  {id: 12,label: '12'},
  {id: 13,label: '13'},
  {id: 15,label: '15'},
  {id: 16,label: '16'},
  {id: 17,label: '17'},
  {id: 18,label: '18'},
  {id: 19,label: '19'}
]);*/

var nodes = new vis.DataSet([
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 9},
  {id: 10},
  {id: 12},
  {id: 13},
  {id: 15},
  {id: 16},
  {id: 17},
  {id: 18},
  {id: 19}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 1, label: '5'},
  {from: 1, to: 6, label: '1'},
  {from: 2, to: 5, label: '9'},
  {from: 7, to: 12, label: '6'},
  {from: 7, to: 13, label: '4'},
  {from: 9, to: 10, label: '6'},
  {from: 9, to: 12, label: '1'},
  {from: 12, to: 13, label: '9'},
  {from: 15, to: 17, label: '9'},
  {from: 15, to: 19, label: '4'},
  {from: 16, to: 17, label: '3'},
  {from: 18, to: 19, label: '9'}
]);