//myLibrary stores the books
let myLibrary = [];

//the Book function creates new Book objects
function Book(title, author, pages, haveRead) {
   this.title = title
   this.author = author
   this.pages = pages
   this.haveRead = haveRead //not been read or been read
   this.info = function () {
      return title + ' by ' + author + ',' + ' is ' + pages + ' pages long' + ',' + ' has ' + haveRead + '.'
   }
};

//newBookButton runs the createBook() function
document.getElementById("newBookButton").addEventListener('click', createBook);

//submitButton runs the addBookToLibrary() function
document.getElementById("submitButton").addEventListener('click', addBookToLibrary);

//createBook creates text fields for user to input book values. for addBookToLibrary to then take the values to use to make new Book objects 
function createBook() {
   //debug
   console.log('I am createBook!')

   let titleField = document.createElement('input');
   titleField.setAttribute('type', 'text');
   titleField.setAttribute('id', 'titleField');
   titleField.innerHTML = 'Title Here';
   document.body.appendChild(titleField);

   let authorField = document.createElement('input');
   authorField.setAttribute('type', 'text');
   authorField.setAttribute('id', 'authorField');
   authorField.innerHTML = 'Author Here';
   document.body.appendChild(authorField);

   let pagesField = document.createElement('input');
   pagesField.setAttribute('type', 'text');
   pagesField.setAttribute('id', 'pagesField');
   pagesField.innerHTML = 'Page Number Here';
   document.body.appendChild(pagesField);

   let haveReadField = document.createElement('input');
   haveReadField.setAttribute('type', 'checkbox');
   haveReadField.setAttribute('id', 'haveReadField');
   document.body.appendChild(haveReadField);
};

//creates new Book object with user input values from createBook, pushes the new book to myLibrary array, and clears the old input values from the fields
function addBookToLibrary() {
   //makes new Book object
   let book = new Book(
      document.getElementById('titleField').value,
      document.getElementById('authorField').value,
      document.getElementById('pagesField').value,
      document.getElementById('haveReadField').value,
   );
   myLibrary.push(book);

   //once new Book is pushed to array, clears the previous values
   document.getElementById('titleField').value = '';
   document.getElementById('authorField').value = '';
   document.getElementById('pagesField').value = '';
   document.getElementById('haveReadField').value = '';
};

//test book example below
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not been read")