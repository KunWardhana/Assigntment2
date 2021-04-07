const products = document.getElementById('products')

const urlproduct = ("https://fakestoreapi.com/products")

function createNode(element) {
    return document.createElement(element)
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(urlproduct)
.then(response => response.json())
.then((json) => {
    console.log(json)
     json.map((product) => {
     let li = createNode("li")
     let img = createNode("img")
     let span = createNode("span")

    img.setAttribute("width", "200")
     img.src=product.image;
     span.innerHTML = `${product.title}, ${product.price}`

    append(li, img)
    append(li, span)
    append(products, li)
 })

 
})
.catch((error)=>console.log(error))