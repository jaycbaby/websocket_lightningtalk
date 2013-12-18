function myStack(){
	//empty array
	this.data = [];
	//default position
	this.position = 0; 
	//add number to top of stack. number is data value
	this.push = function(number) {
		//passing in data at index position
		data[position]= number;
		//incrementing index 
		position++; 
	}
	//move number from top of stack.
	this.pop = function();
}

//creating new object from myStack class
var stack1 = new myStack();

//calling push method to move numbers into empty array
stack1.push(5);
stack1.push(6);

