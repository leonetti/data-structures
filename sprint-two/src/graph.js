

var Graph = function(){
	this.edges = {};
	this.nodes = [];
};

Graph.prototype.addNode = function(node){
	this.nodes.push(node); 
};

Graph.prototype.contains = function(node){
	var result = false;
	_.each(this.nodes, function(item) {
		if (item === node) {
			result = true;
		}
	});
	return result;
};

Graph.prototype.removeNode = function(node){
	for(var i=0; i<this.nodes.length; i++){
		if (node === this.nodes[i]) {
			this.nodes.splice(i, 1);
		}
	}
};

Graph.prototype.hasEdge = function(fromNode, toNode){
	var result = false;
	for(var i=0; i<this.edges[fromNode].length; i++){
		if (toNode === this.edges[fromNode][i]) {
			result = true;
		}
	}
	return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if (this.edges[fromNode]) {
		this.edges[fromNode].push(toNode);
	} else {
		this.edges[fromNode] = [];
		this.edges[fromNode].push(toNode);
	}
	if (this.edges[toNode]) {
		this.edges[toNode].push(fromNode);
	} else {
		this.edges[toNode] = [];
		this.edges[toNode].push(fromNode);
	}
};

Graph.prototype.removeEdge = function(fromNode, toNode){
	if (this.edges[fromNode]) {
		for(var i=0; i<this.edges[fromNode].length; i++){
			if (toNode === this.edges[fromNode][i]) {
				this.edges[fromNode].splice(i, 1);
			}
		}
		for(var i=0; i<this.edges[toNode].length; i++){
			if (fromNode === this.edges[toNode][i]) {
				this.edges[toNode].splice(i, 1);
			}
		}
	}
};

Graph.prototype.forEachNode = function(cb){
	_.each(this.nodes, function(value){
		cb(value);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


