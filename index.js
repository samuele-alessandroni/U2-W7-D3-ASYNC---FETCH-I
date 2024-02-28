let cart = []
fetch("https://striveschool-api.herokuapp.com/books")

.then(response => {
    if (response.ok) {
        return response.json()
    } else {
    throw new Error("ERRORE NEL REPERIMENTO DATI");  
    }
})

.then(bookData => {
    console.log(bookData);
    const row = document.getElementsByClassName("row")[0]
    bookData.forEach(element => {
        
        const addCartBtn = document.createElement("a")
        addCartBtn.classList = "btn btn-secondary btn-sm"
        addCartBtn.innerHTML = "Add to cart"
        const deleteBtn = document.createElement("a")
        deleteBtn.classList = "btn btn-danger btn-sm"
        deleteBtn.innerHTML = "DELETE"
        const price = document.createElement("p")
        price.innerHTML = element.price
        const title = document.createElement("h5")
        title.classList = "card-title fs-6"
        title.innerHTML = element.title
        const cardBody = document.createElement("div")
        cardBody.classList = "card-body"
        cardBody.appendChild(title)
        cardBody.appendChild(price)
        cardBody.appendChild(deleteBtn)
        cardBody.appendChild(addCartBtn)
        const bookImg = document.createElement("img")
        bookImg.classList = "card-img-top"
        bookImg.src = element.img
        bookImg.width = "100"
        bookImg.height = "200"
        const card = document.createElement("div")
        card.classList = "card"
        card.style.width = "15rem"
        card.appendChild(bookImg)
        card.appendChild(cardBody)
        const col = document.createElement("div")
        col.classList = "col-12 col-md-4 col-lg-3 d-flex justify-content-center"
        col.appendChild(card)
        row.appendChild(col)

        deleteBtn.onclick = (e) =>{
            const cardBodyContentToDelete = e.target.offsetParent
            const cardToDelete = cardBodyContentToDelete.parentNode
            cardToDelete.remove()
        }

        const cart = document.getElementsByClassName("cart")[0]

        addCartBtn.onclick = (e) => {
            const card= e.target.offsetParent
            const img = card.firstChild
    
            bookData.forEach(element => {
                if (img.currentSrc === element.img) {
                    cart.push(element)
                    localStorage.setItem("cart-memory", JSON.stringify(cart))
                    const newItem = document.createElement("li")
                    const cartMemoryArr = JSON.parse(localStorage.getItem("cart-memory"))
                    console.log(cartMemoryArr);
                    /*const lastTitleAdd = */
                }


            });
        }
    });
    
})

.catch(error => console.log(error));