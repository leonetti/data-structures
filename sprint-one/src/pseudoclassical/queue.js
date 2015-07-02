var Queue = function() {
	this.first = 0;
	this.end = 0;
	this.len = 0;
	this.storage = {};
};

Queue.prototype.size = function(){
	return this.len;
};

Queue.prototype.enqueue = function(value){
	this.storage[this.end] = value;
	this.len++;
	this.end++;
};

Queue.prototype.dequeue = function(){
	if (this.len>0) {
		this.len--;
	}
	this.first++;
	return this.storage[this.first-1];
}


