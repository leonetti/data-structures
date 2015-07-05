var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	//add a new Tree into the children array
	var temp = this;
	this.children.push(Tree(value));
	this.children[this.children.length-1].parent = temp;
};

treeMethods.contains = function(target){
	var result = false;
	var checkNestedTree = function(currentTree, target) {
		var myChildren = currentTree.children;
		for (var i = 0; i < myChildren.length; i++) {
			var ourValue = myChildren[i].value;
			if (ourValue === target) {
				result = true;;
			}
			if (myChildren[i].children[0]) {
				checkNestedTree(myChildren[i], target);
			}
		}
		return result;
		
	};

treeMethods.removeFromParent = function() {
	var index = _.indexOf(this.parent.children, this)
	var temp = this.parent;
	this.parent.children.splice(index, 1);
}

return checkNestedTree(this, target);

};


/*
 * Complexity: What is the time complexity of the above functions?
 O(n^2)
 */
