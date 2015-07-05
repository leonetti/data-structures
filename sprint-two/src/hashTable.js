var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var getLinkedList = this._storage.get(i);
  var tuple = [k,v];
  var replacedKey = false;

  if(getLinkedList === undefined){
    var addLinkedList = LinkedList();
    addLinkedList.addToTail(tuple);
    this._storage.set(i, addLinkedList);
  } else {
    do{
      if(getLinkedList.head.value[0] === k){
        replacedKey = true;
        getLinkedList.head.value[1] = v;
      } else {
        getLinkedList = getLinkedList.head.next;
      }
    }while(getLinkedList !== null);

    getLinkedList = this._storage.get(i);

    if(replacedKey === false){
      getLinkedList.addToTail(tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var nodeHead = this._storage.get(i).head;
  var descendLinkedList = function(node){
    if(k === node.value[0]){
      return node.value[1];
    } else if(node.next.value){
      return descendLinkedList(node.next);
    }
  };

  return descendLinkedList(nodeHead);

};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
  var nodeHead = this._storage.get(i).head;

  var descendLinkedList = function(node){
    if(k === node.value[0]){
      node.value[1] = null;
    } else if(node.next){
      descendLinkedList(node.next);
    }
  };

  descendLinkedList(nodeHead);
};




/*
 * Complexity: What is the time complexity of the above functions?
 O(1)
 */
