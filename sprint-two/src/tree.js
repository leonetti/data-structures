var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
	//add a new Tree into the children array
	this.children.push(Tree(value));
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

	return checkNestedTree(this, target);

};


/*
 * Complexity: What is the time complexity of the above functions?
 O(n^2)
 */
