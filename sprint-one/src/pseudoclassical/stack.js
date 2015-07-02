var Stack = function() {
	this.stack = {};
	this.len = 0;
};

Stack. .size = function() {
	return this.len;
};

Stack.prototype.push = function(value) {
	this.stack[this.len] = value;
	this.len++;
};

Stack.prototype.pop = function() {
	if (this.len > 0) {
		this.len--;
	}
	return this.stack[this.len];
};



