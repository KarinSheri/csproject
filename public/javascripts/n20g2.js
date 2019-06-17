var netNum = 16
var numNodesToChoose=3

//numNodesToChoose	Optimal	          Greedy	        Defference
//2	                26.0(1:2)	        24.0(0:1)	      2
//3	                37.0(1:2:4)	      31.0(0:1:4)	    6
//4	                41.0(1:2:4:11)	  37.0(0:1:2:4)	  4
//5	                45.0(1:2:3:4:11)	41.0(0:1:2:3:4)	4


var nodes = new vis.DataSet([
  {id: 0, label: '0', color: 'blue'},
  {id: 1, label: '1', color: 'blue'},
  {id: 2, label: '2', color: 'blue'},
  {id: 3, label: '3', color: 'green'},
  {id: 4, label: '4', color: 'blue'},
  {id: 5, label: '5', color: 'red'},
  {id: 6, label: '6', color: 'blue'},
  {id: 7, label: '7', color: 'red'},
  {id: 8, label: '8', color: 'blue'},
  {id: 9, label: '9', color: 'blue'},
  {id: 10,label: '10', color: 'blue'},
  {id: 11,label: '11', color: 'green'},
  {id: 12,label: '12', color: 'green'},
  {id: 13,label: '13', color: 'green'},
  {id: 14,label: '14', color: 'green'},
  {id: 15,label: '15', color: 'blue'},
  {id: 16,label: '16', color: 'blue'},
  {id: 17,label: '17', color: 'blue'},
  {id: 18,label: '18', color: 'blue'},
  {id: 19,label: '19', color: 'red'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 0, to: 1, label: '6'},
  {from: 0, to: 2, label: '5'},
  {from: 0, to: 4, label: '4'},
  {from: 1, to: 6, label: '4'},
  {from: 1, to: 8, label: '5'},
  {from: 2, to: 9, label: '2'},
  {from: 2, to: 10, label: '4'},
  {from: 3, to: 13, label: '2'},
  {from: 3, to: 14, label: '2'},
  {from: 4, to: 17, label: '4'},
  {from: 4, to: 18, label: '3'},
  {from: 11, to: 12, label: '4'}
]);