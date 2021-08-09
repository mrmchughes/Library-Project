function Book(title, author, numberOfPages, haveRead){
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.haveRead = haveRead //not been read or been read
    this.info = function() {
      return "${title} by ${author}, is (${numberOfPages}) long, has (${haveRead})"
   }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not been read")