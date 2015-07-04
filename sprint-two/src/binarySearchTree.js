var BinarySearchTree = function(value){
	this.value = value;
};

BinarySearchTree.prototype.insert = function(value){
	
	if (value > this.value) {
		if (this.right === undefined) {
			this.right = new BinarySearchTree(value);
		} else {
			this.right.insert(value);
		}
	} else if (value < this.value) {
		if (this.left === undefined) {
			this.left = new BinarySearchTree(value);
		} else {
			this.left.insert(value);
		}
	}
};

BinarySearchTree.prototype.contains = function(value){
	if (value === this.value) {
		return true;
	}
	if (value > this.value && this.right !== undefined) {
		return this.right.contains(value);
	} else if (value < this.value && this.left !== undefined) {
		return this.left.contains(this.left);
	}
	
	return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb){
	cb(this.value);
	if (this.left) {
		return this.left.depthFirstLog(cb);
	}
	if (this.right) {
		return this.right.depthFirstLog(cb);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
