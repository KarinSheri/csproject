var netNum = 10
var numNodesToChoose=3

//numNodesToChoose	Optimal	          Greedy	          Defference
//2	                31.0(2:13)	      29.0(0:12)	      2
//3	                43.0(1:2:13)	    39.0(0:12:15)	    4
//4	                52.0(1:2:3:13)	  48.0(0:1:12:15)	  4
//5	                59.0(1:2:3:4:13)	55.0(0:1:4:12:15)	4


/*var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'green'},
  {id: 1, label: '1', color: 'green'},
  {id: 2, label: '2', color: 'green'},
  {id: 3, label: '3', color: 'green'},
  {id: 4, label: '4', color: 'blue'},
  {id: 5, label: '5', color: 'green'},
  {id: 6, label: '6', color: 'green'},
  {id: 7, label: '7', color: 'green'},
  {id: 8, label: '8', color: 'green'},
  {id: 9, label: '9', color: 'green'},
  {id: 10,label: '10', color: 'green'},
  {id: 11,label: '11', color: 'green'},
  {id: 12,label: '12', color: 'green'},
  {id: 13,label: '13', color: 'green'},
  {id: 14,label: '14', color: 'green'},
  {id: 15,label: '15', color: 'green'},
  //{id: 16,label: '16', color: 'blue'},
  {id: 17,label: '17', color: 'blue'},
  {id: 18,label: '18', color: 'blue'},
  {id: 19,label: '19', color: 'blue'}
]);
*/

var nodes = new vis.DataSet([
  {id: 0, label: '0'},
  {id: 1, label: '1'},
  {id: 2, label: '2'},
  {id: 3, label: '3'},
  {id: 4, label: '4'},
  {id: 5, label: '5'},
  {id: 6, label: '6'},
  {id: 7, label: '7'},
  {id: 8, label: '8'},
  {id: 9, label: '9'},
  {id: 10,label: '10'},
  {id: 11,label: '11'},
  {id: 12,label: '12'},
  {id: 13,label: '13'},
  {id: 14,label: '14'},
  {id: 15,label: '15'},
  {id: 17,label: '17'},
  {id: 18,label: '18'},
  {id: 19,label: '19'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 1, label: '3'},
  {from: 0, to: 2, label: '5'},
  {from: 0, to: 3, label: '4'},
  {from: 1, to: 5, label: '2'},
  {from: 1, to: 6, label: '3'},
  {from: 1, to: 7, label: '3'},
  {from: 1, to: 8, label: '1'},
  {from: 2, to: 9, label: '1'},
  {from: 2, to: 10, label: '1'},
  {from: 2, to: 11, label: '2'},
  {from: 2, to: 12, label: '6'},
  {from: 3, to: 13, label: '1'},
  {from: 3, to: 14, label: '2'},
  {from: 3, to: 15, label: '3'},
  {from: 4, to: 17, label: '1'},
  {from: 4, to: 18, label: '5'},
  {from: 4, to: 19, label: '1'},
  {from: 7, to: 8, label: '2'},
  {from: 8, to: 9, label: '1'},
  {from: 8, to: 10, label: '2'},
  {from: 8, to: 12, label: '1'},
  {from: 10, to: 12, label: '1'},
  {from: 10, to: 15, label: '1'},
  {from: 12, to: 13, label: '9'},
  {from: 13, to: 15, label: '6'}
]);