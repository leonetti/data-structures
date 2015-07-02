var Stack = function() {
	var stack = Object.create(stackMethods);
	stack.len = 0;

	return stack;
};

var stackMethods = {};

stackMethods.size = function(){
	return this.len;
};

stackMethods.push = function(value){
	this[this.len] = value;
	this.len++;
};

stackMethods.pop = function(){
	if (this.len > 0) {
		this.len--;
	}
	return this[this.len];
}


