var Queue = function(){
  
  var queue = {};
  queue.len = 0;
  queue.front = -1;
  queue.end = 0;
  queue.contents = [];

  _.extend(queue, queueMethods);

  return queue;

};

  var queueMethods = {};

  queueMethods.enqueue = function(value){
  	// put value into queue
  	this.contents[this.end] = value;
  	this.len++;
  	this.end++;
  };

  queueMethods.dequeue = function(){
  	this.front++;
  	if (this.len>0) {
	  	this.len--;
  	}
  	return this.contents[this.front];
  };

  queueMethods.size = function(){
  	return this.len;
  };


