//define Linkedlist
function LinkedList (){
	//having property of head that initially points to null
	this.head = null
};

//defining insert functionality.
Linkedlist.prototype.insert = function(value) {
	//traversing through entire linkedlist until we find the end and add the head
	
	//first checking if the head exists,  
	if(this.head === null) {
		//if it does, it will point to node
		this.head = {data: value, next:null} 
		//otherwise, it will exist and will append to end of that linked list
	{	else {
			var temp = this.head;
			while(temp.next != null) {
				temp=temp.next
			}
		temp.next = {data: value, next:null};
}
console.log(ll.head)
				

	//insert will create a node
	var node = {
		//with the value
		value: value,
		//points to nothing
		next = null
	};
	var current; 


		}
		//returning node to pass into remove function
		return node; 
	}
}

//defining remove functionality
LinkedList.prototype.remove = function(value){
	//storing node 
	var current, value = node.value; 

	//check if head equals to node
	if(this.head !== null) {
		//if it does, it will remove head
		if(this.head===node){
			//it will 
			this.head = this.head.next;
			node.next = null;
			return value;
		}
	}
}



---
/* var ll = new linkedList(){
	//empty list container
	var listContainer = {}
	this.insert= function(node, next){
		//if list is empty....
		if (list{}===null){
			//appending node into 
			this.next= null
			};
	this.delete= function(i){
		//looping through list container
		for(var i = 0; i < listContainer.length; i++){
			//remove node at current index
			node.prototype.remove= function()
		}  
	};
	this.print= function();
}


// Provided by the framework
function executeHello(helloFn) {
    helloFn();
}
 


 CLOSURES
//////////////////////////////////////////////////////////////////////////////
// MESSING WITH THIS
//////////////////////////////////////////////////////////////////////////////
function nonClosureHello() {
    console.log("Hello " + this.name);
}
 
// Try calling
var name = "Colin";
executeHello(nonClosureHello);
 
// Oops. Need to bind this to an object with name defined
executeHello(function() {nonClosureHello.apply({name: "Colin"})});
 
 
 
 
 
 
//////////////////////////////////////////////////////////////////////////////
// CLOSURES WTF!
//////////////////////////////////////////////////////////////////////////////
function closureHello(name) {
    return function() {
        console.log("Hello again " + name);
    }
}
 
executeHello(closureHello("Dan"));
























