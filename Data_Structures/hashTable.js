var hashtable = function(capacity) {
	//define _hash as an array of size capacity
	var _hash = this._hash = new Array(capacity)
	this._elementsInserted = 0
	this._hashFn = hashFn || function(key, capacity) {
		return key % capacity;
	};
	this._hashFn = function(key) {
	return hashFn(key, _hash.length)
	}
};

//insert function. make sure to store the key. 
Hastable.prototype.insert = function(key,value) {
	var data = {k:key, v:value};
	var index = this._hashFn(key);
	if(!this._hash[index]) {
		this._hash[index] = [];
	};

	var chain= this.hash[index];
	for (var i = 0; i <chain.length;i++) {
		if(chain[i].key == key) {
			chain[i].value = value;
			return;
		}
	}

	chain.push(k: key, v:value)
};
1
Hashtable.prototype.has = function(key) {
	var index = this.hashFn(key);
	if(this._hash[index]) {
		return false;
	}

	var chain = this._hash[index];
	for(var i= 0; i < chain.length; i++) {
		if chain[i].key == key)
			return true;
	}
		return false;
};

Hashtable.prototype.percentFull = function() {
	var used = 0;
	for(var i =0; i < this._hash.length; i++) {
		if(this._hash[used] && this._hash.length > 0 )
				used++;
	}

	return used/this._hash.length;
};

Hashtable.prototype.collisionFactor = function() {
	return this._elementsInserted / this._hash.length;
};
