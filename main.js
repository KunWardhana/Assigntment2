const products = document.getElementById('productsTable')

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
     let tr = createNode("tr")
     let th1 = createNode("th");
     let th2 = createNode("th");
     let th3 = createNode("th");
     let img = createNode("img")
     let spanTitle = createNode("span")
     let spanPrice = createNode("price");

    img.setAttribute("width", "200")
    img.src=product.image;
    spanTitle.innerHTML = `${product.title}`
    spanPrice.innerHTML = `${product.price}`


    //append colomb 1
    append(th1, img);
    //append colomb 2
    append(th2, spanTitle);
    //append colomb 3
    append(th3, spanPrice);
    //append all
    append(tr, th1)
    append(tr, th2)
    append(tr, th3)
    append(products, tr)
 })

 
})
.catch((error)=>console.log(error))