window.onload = function() {
const nodesToChoose = document.getElementById('nodesToChose')
var strNodes = numNodesToChoose.toString();
var textToPresent = "Please choose from the following networks <b>" + strNodes + "</b> nodes to remove to maximally weaken them."
nodesToChoose.innerHTML = textToPresent

const remainNodesPar = document.getElementById('remainNodes')
var numReaminNodes = numNodesToChoose
var strRemainNodes = numReaminNodes.toString();
var txtRemainedNodes = "Remaining nodes to choose: <b>" + strRemainNodes + "</b>"
remainNodesPar.innerHTML = txtRemainedNodes

var chosenNodes;

const nextButton = document.getElementById('nextButton')
nextButton.disabled = true;
nextButton.addEventListener("click", myFunction);

function myFunction() {
    if (netNum === 1) {
        var chosen1 = document.getElementById('node1').value = chosenNodes[0];
        var chosen2 = document.getElementById('node2').value = chosenNodes[1];
        var chosen3 = document.getElementById('node3').value = chosenNodes[2];
    } else if (netNum === 2) {
        var chosen1 = document.getElementById('node1').value = chosenNodes[0];
        var chosen2 = document.getElementById('node2').value = chosenNodes[1];
        var chosen3 = document.getElementById('node3').value = chosenNodes[2];    
        var chosen4 = document.getElementById('node4').value = chosenNodes[3];    
    } else {
        var chosen1 = document.getElementById('node1').value = chosenNodes[0];       
    }
  
}

// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
interaction:{
  dragNodes:false,
  dragView: false,
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
nodes:{
    color: {
        highlight: '#FF4500',
        hover: '#C0C0C0'
    }
}
}
var network = new vis.Network(container, data, options);


network.on("selectNode", function (params) {
  chosenNodes = params.nodes
  params.event = "[original event]";
  //document.getElementById('eventSpan').innerHTML = '<h2>Select Node event:</h2>' + JSON.stringify(params, null, 4);
  document.getElementById('eventSpan').innerHTML = '<h2>Selected Nodes:</h2>' + chosenNodes.toString();
  console.log('selectNode event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
  numSelected = params.nodes.length
  numReaminNodes = numNodesToChoose - numSelected
  var strRemainNodes = numReaminNodes.toString();
  if (numReaminNodes === 0) {
    // can select a next button
    var txtRemainedNodes = "Remaining nodes to choose: <b>" + strRemainNodes + "</b>"
    remainNodesPar.innerHTML = txtRemainedNodes
    nextButton.disabled = false;
  }
  else if (numReaminNodes < 0) {
    var numDeselectNodes = -numReaminNodes
    var strDeselectNodes = numDeselectNodes.toString();
    var txtRemainedNodes = "You Should de-select <b>" + strDeselectNodes + "</b> nodes."
    remainNodesPar.innerHTML = txtRemainedNodes
    nextButton.disabled = true;
  }
  else {
    var txtRemainedNodes = "Remaining nodes to choose: <b>" + strRemainNodes + "</b>"
    remainNodesPar.innerHTML = txtRemainedNodes
    nextButton.disabled = true;
  }
});

network.on("deselectNode", function (params) {
  chosenNodes = params.nodes
  params.event = "[original event]";
  //document.getElementById('eventSpan').innerHTML = '<h2>deselectNode Node event:</h2>' + JSON.stringify(params, null, 4);
  document.getElementById('eventSpan').innerHTML = '<h2>Selected Nodes:</h2>' + chosenNodes.toString();
  console.log('deselectNode event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
  numUnselected = params.previousSelection.nodes.length - params.nodes.length
  numReaminNodes = numReaminNodes + numUnselected
  var strRemainNodes = numReaminNodes.toString();
  var txtRemainedNodes = "Remaining nodes to choose: <b>" + strRemainNodes + "</b>"
  remainNodesPar.innerHTML = txtRemainedNodes
  if (numReaminNodes === 0) {
    nextButton.disabled = false;
  }
  else {
    nextButton.disabled = true
  }
  
  console.log('Client-side code running');
  
});


/*network.on("click", function (params) {
  params.event = "[original event]";
  document.getElementById('eventSpan').innerHTML = '<h2>click:</h2>' + JSON.stringify(params, null, 4);
  console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
});*/

}


