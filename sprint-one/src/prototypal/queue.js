var Queue = function() {
  var storage = Object.create(queueMethods);

  storage.len = 0;
  storage.first = 0;
  storage.end = 0;

  return storage;
};

var queueMethods = {};

queueMethods.size = function() {
	return this.len;
};

queueMethods.enqueue = function(value) {
	this[this.end] = value;
	this.end++;
	this.len++;
};

queueMethods.dequeue = function() {
	if (this.len > 0) {
		this.len--;	
	}
	this.first++;
	return this[this.first-1];
};

