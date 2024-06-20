// event listener for dialog box
const addBookBtn = document.querySelector(".addBook");
const dialog = document.querySelector("#dialog")
const submitForm = document.querySelector("#submitForm")

addBookBtn.addEventListener('click',() => {
    dialog.showModal();
})

submitForm.addEventListener('click', () => {
    dialog.close();
})

// add books to libary

const books = []

// object constructor
function Books(author, title, pageNum, isRead){
    this.author = author
    this.title = title
    this.pageNum = pageNum
    this.isRead =isRead
}

// add books to arrayBooks
function addBook(){
    const author = document.querySelector("#author").value;
    const title = document.querySelector("#title").value;
    const pageNum = document.querySelector("#pageNum").value;
    let isRead = document.querySelector("#read").checked;
    if (isRead){
        isRead = "true"
    }else{
        isRead = "false"
    }
    books.push(new Books(author, title, pageNum, isRead))
}

//
const form = document.querySelector("#form")
    form.addEventListener('submit',(submit) =>{
        submit.preventDefault();
        addBook()
        console.log(books)
    })