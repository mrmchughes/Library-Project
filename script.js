//myLibrary stores the books
let myLibrary = [];

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
   
      //once new Book is pushed to array, clears the previous values
      document.getElementById('titleField').value = '';
      document.getElementById('authorField').value = '';
      document.getElementById('pagesField').value = '';
   };
};

function removeBookFromLibrary(){
   //removes selected book from library onclick
}

//bookDisplay() displays all the books currently in the library array
function bookDisplay(){
   for (let i = 0; i < myLibrary.length; i++) {
      console.log("I am bookDisplay!");

      let book = myLibrary[i];
      let container = document.getElementById('libraryContainer');

      let div = document.createElement('div');
      div.innerHTML += book.title + ' by ' + book.author + ',' + ' is ' + book.pages + ' pages long' + '.';  

      let readStatusButtons = document.getElementsByName('readRadios');
      
      for (let i = 0; i < readStatusButtons.length; i++) {
         if (readStatusButtons[i].checked){
            div.innerHTML += readStatusButtons[i].value;

            break;
         }
      }

      //run removeBookFromLibrary onclick
      let button = document.createElement('button');
      button.setAttribute('type', 'button');
      button.setAttribute('class', 'btn');
      button.textContent = 'Click here to remove this book.';

      container.appendChild(button);

      container.appendChild(div);
   }
};
//test book example below
//const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not been read")