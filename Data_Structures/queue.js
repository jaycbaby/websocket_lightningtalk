var myQueue = function(){
	//default values
	this.head == null;
	this.tail == null;
};


myQueue.prototype.enqueue = function(value) {
		//check to see if queue is empty
		//if the head is empty, then the list is empty
		if (this.head == null) {
			//...create the node and insert data into new node
			this.head = {data:value, next:null};
			this.tail = this.head;
		//otherwise, create "next" node and insert data
		}	else	{
			this.tail.next = {data:value, next:null}; 
			//move tail to the end of the queue
			this.tail = this.tail.next;
		}
}

myQueue.prototype.dequeue = function() {
	//if list is not empty
	if (this.head != null) {
		//..point head to the next node, effectively deleting the first node
		this.head = this.head.next;
	}
}

myQueue.prototype.size = function(){
	//default value for size of queue
	var size = 0;
	//creating temp variable and pointing to head node
	var temp = this.head;
	//while the list is not empty, 
	while (temp != null){
		//add 1 to size
		size ++ 	
	}
	console.log(size)
};
