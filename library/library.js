let myLibrary = [
    {
        name: "defaultBook",
        author: "defaultAuthor",
        read: "Read"
    }
];

function displayLibrary(){
    myLibrary.forEach(book => {
        addBook(book.name, book.author, book.read)
    })
}

function updateLibrary() {
    let bookDetails = {}
    const bookName = document.querySelector('#name').value
    const bookAuthor = document.querySelector('#author').value
    bookDetails.name = bookName
    bookDetails.author = bookAuthor
    bookDetails.read = "Read"
    myLibrary.push(bookDetails)
    addBook(bookDetails.name, bookDetails.author, bookDetails.read)
    return bookDetails
}

function addBook(name, author, read){
    const book = document.createElement("div")
    const bookName = document.createElement("h2")
    const bookAuthor = document.createElement("h3")
    const bookRead = document.createElement("button")
    book.className = "book"
    book.appendChild(bookName)
    book.appendChild(bookAuthor)
    book.appendChild(bookRead)
    bookName.className = "b_title"
    bookName.innerText = name
    bookAuthor.className = "b_author"
    bookAuthor.innerText = author
    bookRead.className = "b_read"
    bookRead.innerHTML = read
    books.appendChild(book)
    bookRead.addEventListener("click", () => changeBackground(bookRead.parentElement))
}

function changeBackground(element){
    element.classList.toggle("not_read")
}

const books = document.querySelector('.books')
displayLibrary()
const addBookBtn = document.querySelector('#addBookBtn')
const detail = addBookBtn.addEventListener('click', updateLibrary)