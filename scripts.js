const myLibrary = [];
const display = document.getElementById("display");
var books = document.getElementById("books");
var form = document.getElementById("book-form");
form.style.display = "none";

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    const ID = crypto.randomUUID;
}

Book.prototype.changeStatus = function (bookInfo) {
    this.read = this.read === "yes" ? "no" : "yes";
    bookInfo.textContent = `read: ${this.read}`;
}

Book.prototype.displayBook = function(index){
    const displayBook = document.createElement("div");
    displayBook.classList.add('book-card');
    displayBook.setAttribute('data-index', index);
    displayBook.textContent = `${this.title} by ${this.author},
        pages: ${this.pages}`;

    const status = document.createElement("div");
    status.textContent = `read: ${this.read}`;

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("buttons");

    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggle");
    toggleBtn.textContent = "toggle read";
    toggleBtn.addEventListener("click", () => this.changeStatus(status));

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-book");
    removeBtn.textContent = "x";
    removeBtn.addEventListener("click", () => this.removeBook(displayBook));

    bookButtons.appendChild(toggleBtn);
    bookButtons.appendChild(removeBtn);

    displayBook.appendChild(status);
    displayBook.appendChild(bookButtons);
    
    return displayBook;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);

    const bookElement = book.displayBook(myLibrary.length - 1);
    books.appendChild(bookElement);
}

Book.prototype.removeBook = function (book){
    let target = Number(book.getAttribute('data-index'));
    book.remove();
    myLibrary.splice(target, 1)
}

function bookForm(){
    if(form.style.display === "none"){
        form.style.display = "block";
        books.style.display = "none";
    } else {
        form.style.display = "none"
        books.style.display = "flex";
    }
}

addBookToLibrary("Those Who Wait", "Haley Cass", 632, "yes");
addBookToLibrary("The Sword of Kaigen", "M.L. Wang", 651, "yes");

let title, author, pages, completed;

document.getElementById("submit-book").onclick = function(e){
    e.preventDefault();
    title = document.getElementById("title").value;
    author = document.getElementById("author").value;
    pages = document.getElementById("pages").value;
    completed = document.getElementById("completed").value;

    addBookToLibrary(title, author, pages, completed);
    form.style.display = "none";
    books.style.display = "flex";

    document.getElementById("form").reset();
}