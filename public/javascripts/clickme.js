window.onload = function() {
var start = new Date();
const nodesToChoose = document.getElementById('nodesToChose')
var strNodes = numNodesToChoose.toString();
var textToPresent = "אנא בחר מהרשת הנתונה <b>" + strNodes + "</b> קודקודים להסרה בכדי להרוס אותה ככל האפשר."
nodesToChoose.innerHTML = textToPresent

const remainNodesPar = document.getElementById('remainNodes')
var numReaminNodes = numNodesToChoose
var strRemainNodes = numReaminNodes.toString();
var txtRemainedNodes = "מספר הקודקודים שנשאר לבחור: <b>" + strRemainNodes + "</b>"
remainNodesPar.innerHTML = txtRemainedNodes

var chosenNodes;

const nextButton = document.getElementById('nextButton')
nextButton.disabled = true;
nextButton.addEventListener("click", myFunction);

function myFunction() {
    var end = new Date();
    var diffSec = Math.abs(end - start)/1000.0;
    document.getElementById('time').value = diffSec;
    document.getElementById('weight').value = sumOfEdges;
    if (netNum === 1 || netNum === 2) {
        document.getElementById('node1').value = chosenNodes[0];
        document.getElementById('node2').value = chosenNodes[1];
        document.getElementById('node3').value = chosenNodes[2];
        document.getElementById('node4').value = chosenNodes[3];
        document.getElementById('node5').value = chosenNodes[4];
        document.getElementById('node6').value = chosenNodes[5];
    } else if (netNum === 3 || netNum === 4) {
        document.getElementById('node1').value = chosenNodes[0];
        document.getElementById('node2').value = chosenNodes[1];
        document.getElementById('node3').value = chosenNodes[2];
        document.getElementById('node4').value = chosenNodes[3];
        document.getElementById('node5').value = chosenNodes[4];
        document.getElementById('node6').value = chosenNodes[5];   
        document.getElementById('node7').value = chosenNodes[6];  
    }

}

// create a network
var edgesDataset = edges;

var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
interaction:{
  dragNodes:false,
  //dragView: false,
  hideEdgesOnDrag: false,
  hideNodesOnDrag: false,
  hover: true,
  hoverConnectedEdges: true,
  keyboard: {
    enabled: false,
    speed: {x: 10, y: 10, zoom: 0.02},
    bindToWindow: true
  },
  multiselect: true,
  navigationButtons: false,
  selectable: true,
  selectConnectedEdges: true,
  tooltipDelay: 300,
  zoomView: true
},
//layout:{
//    randomSeed:2
//    },
nodes:{
    color: {
        highlight: '#FF4500',
        hover: '#C0C0C0'
    }
},
edges:{
    labelHighlightBold: false,
    width: 2,
    hoverWidth: 0,
    color: {
        color: 'Black',
        highlight: '#D0D0D0',
        hover: 'Black'
    },
    font: {
        background: 'White',
        color: 'Blue',
        size: 16,
        bold: {
        color: 'Blue',
        size: 16, // px
        mod: 'bold'
      },
    }
}
}
var network = new vis.Network(container, data, options);
var sumOfEdges;

network.on("selectNode", function (params) {
  chosenNodes = params.nodes
  params.event = "[original event]";
  //document.getElementById('eventSpan').innerHTML = '<h2>Select Node event:</h2>' + JSON.stringify(params, null, 4);
  //document.getElementById('eventSpan').innerHTML = '<h2>הקודקודים שנבחרו: ' + chosenNodes.toString() +'</h2>';
  console.log('selectNode event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
  numSelected = params.nodes.length
  numReaminNodes = numNodesToChoose - numSelected
  var strRemainNodes = numReaminNodes.toString();
  if (numReaminNodes === 0) {
    // can select a next button
    var txtRemainedNodes = "מספר הקודקודים שנשאר לבחור: <b>" + strRemainNodes + "</b>"
    remainNodesPar.innerHTML = txtRemainedNodes
    nextButton.disabled = false;
  }
  else if (numReaminNodes < 0) {
    var numDeselectNodes = -numReaminNodes
    var strDeselectNodes = numDeselectNodes.toString();
    var txtRemainedNodes = "עליך להסיר מבחירתך <b>" + strDeselectNodes + "</b> קודקודים."
    remainNodesPar.innerHTML = txtRemainedNodes
    nextButton.disabled = true;
  }
  else {
    var txtRemainedNodes = "מספר הקודקודים שנשאר לבחור: <b>" + strRemainNodes + "</b>"
    remainNodesPar.innerHTML = txtRemainedNodes
    nextButton.disabled = true;
  }
  
  selectedEdges = network.getSelectedEdges()
  sumOfEdges = 0;
  for (var selectedEdgeid of selectedEdges) {
      edgeInfo = edgesDataset.get(selectedEdgeid)
      if ('label' in edgeInfo) {
          edgeValue = parseInt(edgeInfo.label)
          console.log(edgeValue)
          sumOfEdges = sumOfEdges + edgeValue
      } else {
          sumOfEdges = sumOfEdges + 1
      }
  }
  document.getElementById('weightOfSelecteEdges').innerHTML = '<h2> סך המשקל של הקשתות שהורדו הוא: ' + sumOfEdges.toString() + '</h2>';
});

network.on("deselectNode", function (params) {
  chosenNodes = params.nodes
  params.event = "[original event]";
  //document.getElementById('eventSpan').innerHTML = '<h2>deselectNode Node event:</h2>' + JSON.stringify(params, null, 4);
  //document.getElementById('eventSpan').innerHTML = '<h2>הקודקודים שנבחרו: ' + chosenNodes.toString() +'</h2>';
  console.log('deselectNode event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
  numUnselected = params.previousSelection.nodes.length - params.nodes.length
  numReaminNodes = numReaminNodes + numUnselected
  var strRemainNodes = numReaminNodes.toString();
  var txtRemainedNodes = "מספר הקודקודים שנשאר לבחור: <b>" + strRemainNodes + "</b>"
  remainNodesPar.innerHTML = txtRemainedNodes
  
  // bug: unselecting a node Leads to unselecting edges that should be selected
  var selectedNodes = network.getSelectedNodes()
  network.selectNodes(selectedNodes)
  
  if (numReaminNodes === 0) {
    nextButton.disabled = false;
  }
  else {
    nextButton.disabled = true
  }
  
  selectedEdges = network.getSelectedEdges()
  sumOfEdges = 0;
  for (var selectedEdgeid of selectedEdges) {
      edgeInfo = edgesDataset.get(selectedEdgeid)
      if ('label' in edgeInfo) {
          edgeValue = parseInt(edgeInfo.label)
          console.log(edgeValue)
          sumOfEdges = sumOfEdges + edgeValue
      } else {
          sumOfEdges = sumOfEdges + 1
      }
  }
  document.getElementById('weightOfSelecteEdges').innerHTML = '<h2> סך המשקל של הקשתות שהורדו הוא: ' + sumOfEdges.toString() + '</h2>';
  
  console.log('Client-side code running');
  
});

network.on("selectEdge", function (params) {
  var selectedNodes = network.getSelectedNodes()
  network.selectNodes(selectedNodes)
});

network.on("deselectEdge", function (params) {
  var selectedNodes = network.getSelectedNodes()
  network.selectNodes(selectedNodes)
});


/*network.on("click", function (params) {
  params.event = "[original event]";
  document.getElementById('eventSpan').innerHTML = '<h2>click:</h2>' + JSON.stringify(params, null, 4);
  console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
});*/

}


