var netNum = 1
var numNodesToChoose=3

var nodes = new vis.DataSet([
  {id: 1, label: 'Node 1'},
  {id: 2, label: 'Node 2'},
  {id: 3, label: 'Node 3'},
  {id: 4, label: 'Node 4'},
  {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 3, label: 'label1'},
  {from: 1, to: 2, label: 'label2'},
  {from: 2, to: 4, label: 'label3'},
  {from: 2, to: 5, label: 'label4'},
  {from: 3, to: 3, label: 'label5'}
]);