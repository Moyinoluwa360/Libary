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

// submit form
const form = document.querySelector("#form")
    form.addEventListener('submit',(submit) =>{
        submit.preventDefault();
        addBook()
        createBookCard()
        console.log(books)
    })


// Create cards 
function createBookCard(){
    //parent element
    const booksLibary = document.querySelector(".booksLibary")
    // create card elements 
    const carddiv = document.createElement("div");
    const authorDiv = document.createElement("div")
    const titleDiv = document.createElement("div")
    const pageNumDiv = document.createElement("div")
    const isReadDiv = document.createElement("div")
    const removeBtnDiv = document.createElement("div")

    removeBtnDiv.textContent = "Remove"

    // assigning text contents to the elements except removeBtnDiv and isReadDiv
    books.map((book)=>{
        authorDiv.textContent = "Author: " + book.author
        titleDiv.textContent = "Title: " + book.title
        pageNumDiv.textContent = "Number of pages: " + book.pageNum
        if (book.isRead == "true"){
            isReadDiv.textContent = "Read"
        }else{
            isReadDiv.textContent = "Not Read"
        }
    })
    // styling elements
    carddiv.setAttribute(
        "style",
        "background: rgb(238, 238, 238); color: black; height:300px; padding:20px; display:flex; flex-direction:column; justify-content:space-around; font-size:20px; text-align:center; border-radius:10px; font-weight:bolder;"
        );
    // styling isreaddiv
    books.map((book)=>{
        if (book.isRead == "true"){
            isReadDiv.setAttribute("style","background:rgb(137, 228, 167); height:45px; font-size:25px; border-radius:10px; display:flex; align-items:center; justify-content:center;")
        }else{
            isReadDiv.setAttribute("style","background:rgb(238, 167, 167); height:45px; font-size:25px; border-radius:10px; display:flex; align-items:center; justify-content:center;")
        }
    })
    //isreaddiv when clicked
    isReadDiv.addEventListener('click',()=>{
        books.map((book)=>{
            if (book.isRead == "true"){
                book.isRead = "false"
                isReadDiv.textContent = "Not Read"
                isReadDiv.setAttribute("style","background:rgb(238, 167, 167); height:45px; font-size:25px; border-radius:10px; display:flex; align-items:center; justify-content:center;")
            }else{
                book.isRead = "true"
                isReadDiv.textContent = "Read"
                isReadDiv.setAttribute("style","background:rgb(137, 228, 167); height:45px; font-size:25px; border-radius:10px; display:flex; align-items:center; justify-content:center;")
            }
        })
    })
    // styling removeBtnDiv
    removeBtnDiv.setAttribute("style", "background:rgb(238, 167, 167); height:45px; font-size:25px; border-radius:10px; display:flex; align-items:center; justify-content:center;")
    //when removeBtnDiv is clicked
    removeBtnDiv.addEventListener('click',()=>{
        booksLibary.removeChild(carddiv)
    })
    // append elements to carddiv
    carddiv.appendChild(titleDiv)
    carddiv.appendChild(authorDiv)
    carddiv.appendChild(pageNumDiv)
    carddiv.appendChild(isReadDiv)
    carddiv.appendChild(removeBtnDiv)

    //append to booksLibary
    booksLibary.appendChild(carddiv)
}
    