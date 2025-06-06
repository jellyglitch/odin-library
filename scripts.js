const myLibrary = [];
const display = document.getElementById("display");
var books = document.getElementById("books");
var form = document.getElementById("book-form");
form.style.display = "none";

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
    displayBook.setAttribute('data-index', myLibrary.length);
    displayBook.textContent += `${title} by ${author},
        pages: ${pages}, read: ${read}`;

    var removeBook = document.createElement("div");
    removeBook.innerHTML += `<button class="remove-book" onclick="removeBook(this)">remove</button>`;

    myLibrary.push(book);
    books.appendChild(displayBook);
    displayBook.appendChild(removeBook);
}

function removeBook(button){
    let target = Number(button.parentElement.parentElement.getAttribute('data-index'));
    button.parentElement.parentElement.remove();
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