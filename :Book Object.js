//Book Object
function Book(title, author) {
    //Properties
    this.title = title;
    this.author = author;
    //Methods
    this.titleAndAuthor = function() {
       alert(this.title + ", by " + this.author);
    };
        //enshelf method
    this.enshelf = function(shelfObject) {
       //adding books to shelf
       shelfObject.booksOnShelf[shelfObject.numberOfBooks] = this;
       //incrementing # of books
       shelfObject.numberOfBooks++;
    };
        //???? How do I differentiate "enshelf" and "unshelf"?
    this.unshelf = function(shelfObject) {
       shelfObject.booksOnShelf[shelfObject.numberOfBooks] = this;
       shelfObject.numberOfBooks--;       
    };
}

//Shelf Object
function Shelf() {
    //Properties
    this.booksOnShelf = [10];
    this.numberOfBooks = 0;
    //Methods f
    this.outputBooks = function() {
        var books = "";
            for (var i = 0; i < this.numberOfBooks; i++) { 
                books += this.booksOnShelf[i].title + "\n";
            }
        return books;
    };
    //adding shelf method
    this.addShelfToLibrary = function(libraryObject) {
libraryObject.shelvesInLibrary[libraryObject.numberOfShelves] = this;
//incrementing # of shelves
libraryObject.numberOfShelves++; 
};	
}
//Library Object
function Library() {
//Properties
    this.shelvesInLibrary = [10];
    this.numberOfShelves = 0;
//Methods
    //outputs number of shelves in library
    this.outputShelves = function() {
        alert(this.numberOfShelves);
    };
    //output all books in library
    this.outputbooksOnShelf = function() {
	//creating output variable 
var booksString = "";
	//crawling all shelves in library for books
for (var i = 0; i < this.numberOfShelves; i++) {
	      booksString += this.shelvesInLibrary[i].outputBooks();
	}
	//output 
alert(booksString);
    };
}

//Test code

//outputting books from shelf1
var shelf1 = new Shelf();
book1.enshelf(shelf1);
shelf1.outputBooks();

//outputting books from shelf2
var shelf2= new Shelf ();
book2.enshelf(shelf2);
shelf2.outputBooks();

//outputting all books in library
var book1 = new Book("The Shining", "Stephen King");
book1.titleAndAuthor();
var book2 = new Book("LOTR", "Tolkien");
book2.titleAndAuthor();
var book3 = new Book("Harry Potter", "JK Rowling");
book3.titleAndAuthor();
var book4 = new Book("Outliers", "Malcolm Gladwell");

//creating library object
var library1 = new Library();
shelf1.addShelfToLibrary(library1);
shelf2.addShelfToLibrary(library1);
//library 1 outputting books on all shelves 
library1.outputbooksOnShelf();


