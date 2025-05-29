const myLibrary = [];
const display = document.getElementById("display");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.page = pages;
    this.read = read;
    const ID = crypto.randomUUID;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);

    myLibrary.push(book);
}

addBookToLibrary("test", "tst", 24, true);

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        display.innerHTML = myLibrary[i].title;
    }
}

displayBooks();
