var Stack = function() {
  var storage = {};

  storage.len = 0;
  storage.contents = [];

  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};

stackMethods.size = function() {
	return this.len;
};

stackMethods.push = function(value) {
	this.contents[this.len] = value;
	this.len++;
};

stackMethods.pop = function() {
	var temp = this.contents[this.len-1];
	if (this.len > 0) {
		this.len--; 	
	}
	
	return temp;
};

