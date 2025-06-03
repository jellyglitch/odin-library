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
    displayBook.innerHTML += `${title} by ${author} <br>
        pages: ${pages}, read: ${read}`;

    myLibrary.push(book);
    display.appendChild(displayBook);
}

addBookToLibrary("Those Who Wait", "Haley Cass", 632, true);
addBookToLibrary("The Sword of Kaigen", "M.L. Wang", 651, true);

