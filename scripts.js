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
    var displayBook = document.createElement("div");
    displayBook.classList.add('book-card');
    displayBook.innerHTML = title;

    myLibrary.push(book);
    display.appendChild(displayBook);
}

function displayBooks(){
    for(let i = 0; i < myLibrary.length; i++){
        display.innerHTML = myLibrary[i].title;
    }
}

addBookToLibrary("test", "tst", 24, true);
addBookToLibrary("test1", "tst", 24, true);

