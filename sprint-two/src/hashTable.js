var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  
  var ourArray = [];
  ourArray.push(k);
  ourArray.push(v);

  if (this._storage.get(i) === undefined) {
	  var ourValue = LinkedList();
	  ourValue.addToTail(ourArray);
	  this._storage.set(i, ourValue)
  } else {
  	  this._storage.get(i).addToTail(ourArray);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var nodeHead = this._storage.get(i).head;
  var descendLinkedList = function(node) {
  	if (k === node.value[0]) {
  		return node.value[1];
  	} else if (node.next.value) {
  		return descendLinkedList(node.next);
  	}
  };
  return descendLinkedList(nodeHead);
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var nodeHead = this._storage.get(i).head;

	var descendLinkedList = function(node) {
  	if (k === node.value[0]) {
  		node.value[1] = null;
  	} else if (node.next) {
  		descendLinkedList(node.next);
  	}
  };
  descendLinkedList(nodeHead);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
