var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;
  var front = -1;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[end] = value;
    end++;
    length++;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
        length--;
    }
    
    front++;
    return storage[front];
    
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
