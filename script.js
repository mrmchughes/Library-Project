//myLibrary stores the books
let myLibrary = [
   {
      title: 'Test Title',
      author: 'Test Author',
      pages: 'Test Pages',
   }
];

let str = localStorage.getItem('myLibrary');

let parsedObj = JSON.parse(str);

//the Book function creates new Book objects
function Book(title, author, pages, read) {
   this.title = title
   this.author = author
   this.pages = pages
   this.read = '' //not been read or been read
   this.info = function () {
      return title + ' by ' + author + ',' + ' is ' + pages + ' pages long' + ',' + ' has ' + read + '.'
   }
};

//submitButton runs the addBookToLibrary() function
document.getElementById("submitButton").addEventListener('click', addBookToLibrary);

//bookDisplayButton runs the addBookToLibrary() function
document.getElementById("bookDisplayButton").addEventListener('click', bookDisplay);

//creates new Book object with user input values from createBook, pushes the new book to myLibrary array, and clears the old input values from the fields
function addBookToLibrary() {
   //makes new Book object
   let title = document.getElementById('titleField').value;
   let author = document.getElementById('authorField').value;
   let pages = document.getElementById('pagesField').value;

   if (title === '' || author === '' || pages === ''){
      alert('Please input a value into each field before submitting your book!');
      document.getElementById('titleField').value = '';
      document.getElementById('authorField').value = '';
      document.getElementById('pagesField').value = '';
   } else {
      let book = new Book(
         title,
         author,
         pages,
      );
      myLibrary.push(book);

      let jsonMyLibrary = JSON.stringify(myLibrary);

      localStorage.setItem('myLibrary', jsonMyLibrary);

      
   
      //once new Book is pushed to array, clears the previous values
      document.getElementById('titleField').value = '';
      document.getElementById('authorField').value = '';
      document.getElementById('pagesField').value = '';
   };
};

//bookDisplay() displays all the books currently in the library array
function bookDisplay(){
   let container = document.getElementById('libraryContainer');
   container.innerHTML = '';

   for (let i = 0; i < myLibrary.length; i++) {
      console.log("I am bookDisplay!");

      let bookContainer = document.createElement('div');
      let book = myLibrary[i];

      let bookDiv = document.createElement('div'); 

      let bookText = document.createElement('p');
      bookText.textContent = book.title + ' by ' + book.author + ',' + ' is ' + book.pages + ' pages long' + '.';

      let haveBeenReadText = document.createElement('p'); 

      //marks a book as read
      let readBookButton = document.createElement('button');
      readBookButton.setAttribute('type', 'button');
      readBookButton.setAttribute('class', 'btn');
      readBookButton.textContent = 'Click to mark book as read.';

      readBookButton.addEventListener('click', bookRead);

      function bookRead() {   
         haveBeenReadText.textContent = 'This book has been read.';
      };

      //run removeBookFromLibrary onclick
      let removeBookButton = document.createElement('button');
      removeBookButton.setAttribute('type', 'button');
      removeBookButton.setAttribute('class', 'btn');
      removeBookButton.textContent = 'Click here to remove this book.';

      removeBookButton.addEventListener('click', removeBookFromLibrary);

      function removeBookFromLibrary(){
         //removes selected book from library onclick
         myLibrary.splice([i], 1)
      }

      //appends elements to a Book's entry div
      bookDiv.appendChild(bookText);
      bookDiv.appendChild(haveBeenReadText);
      bookContainer.appendChild(readBookButton);
      bookContainer.appendChild(removeBookButton);
      bookContainer.appendChild(bookDiv);
      container.appendChild(bookContainer);
   }
};
//test book example below
//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not been read")