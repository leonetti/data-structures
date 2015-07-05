var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var prev = list.tail;
      list.tail.next = Node(value);
      list.tail = list.tail.next;
      list.tail.previous = prev;
    }
  };

  list.addToHead = function(value){
    if (list.head === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      var temp = list.head;
      list.head = Node(value);
      list.head.next = temp;
      temp.previous = list.head;
    }
  }

  list.removeHead = function(){
    if (list.head !== null) {
        var temp = list.head.value;
        list.head = list.head.next;
        return temp;
    }
  };

  list.removeTail = function() {
    list.tail = list.tail.previous;
    list.tail.next = null;
  }

  list.contains = function(target){
    var currentNode = list.head;
    while(currentNode !== null){
      if (target === currentNode.value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
  //we finished
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n)
 */
