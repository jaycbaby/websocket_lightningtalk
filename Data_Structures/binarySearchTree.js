function BinaryTree (){
	this.root= null
};

BinaryTree.prototype.inOrderOutput = function() {
	if(this.root != null) {
		outputHelper(this.root);
	}	else	{
		console.log("this BST is empty");
	}

}

function outputHelper(tempRoot) {
	if(tempRoot === null) {
		return;
	}
	//in-order traversal to output- LNR
	outputHelper(tempRoot.left);
	console.log(tempRoot.data);
	outputHelper(tempRoot.right);
}

BinaryTree.prototype.insert = function(value) {
	if(this.root === null) {
		this.root = {data: value, left:null, right: null}
	}	else {
			insertHelper(this.root, value);
	}	

}

function insertHelper(tempRoot, value) {
	if (value <= tempRoot.data) {
		if (tempRoot.left === null) {
			//insert node to left of root if empty
			tempRoot.left = {data:value, left:null, right: null}
		}	else	{
			//call function recursively to look at the left sub-tree
			insertHelper(tempRoot.left, value);	
		}	
	}	else  {
		if (tempRoot.right === null) {
			//insert node to right of root if empty
			tempRoot.right = {data:value, left:null, right: null}
		}	else	{
			//call function recursively to look at the right sub-tree
			insertHelper(tempRoot.right, value);	
		}	
	}
};

var BSToutput = new BinaryTree();

BSToutput.insert(0)
BSToutput.insert(15)
BSToutput.insert(511)
BSToutput.insert(57456)
BSToutput.insert(51123)
BSToutput.insert(5123)
BSToutput.insert(53)
BSToutput.insert(1)

BSToutput.inOrderOutput()