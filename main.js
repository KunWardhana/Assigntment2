const products = document.getElementById('productsTable')
const urlproduct = ("https://fakestoreapi.com/products")
const searchbar = document.getElementById('search')

function createNode(element) {
    return document.createElement(element)
}

function append(parent, el) {
    return parent.appendChild(el);
}

function initialize()
{
    fetch(urlproduct)
    .then(response => response.json())
    .then((json) => (loadData(json)))
    .catch((error)=>console.log(error));
}



function loadData(json) 
{
    showData(json)
    searchbar.addEventListener('keypress', (e) =>{
        if (e.key === 'Enter') {
            console.log(e.target.value);
            const stringsearch = e.target.value.toLowerCase();
            const filtered = json.filter((product) =>{
                return (
                    product.title.toLowerCase().includes(stringsearch)
                );
            })
            while (products.firstChild) {
                products.removeChild(products.lastChild);
              }
            showData(filtered)
          }

    })

}

function showTitle()
{
    let HeaderImage = createNode("th")
        HeaderImage.innerHTML = "Image"
        HeaderImage.setAttribute("width", "200")

    let HeaderName = createNode("th")
        HeaderName.innerHTML = "Name"
        HeaderName.setAttribute("width", "700")
        
    let HeaderPrice = createNode("th")
        HeaderPrice.innerHTML = "Price"

    append(products, HeaderImage)
    append(products, HeaderName)
    append(products, HeaderPrice)
}

function showData(json){
    console.log(json)

    showTitle()

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
       spanPrice.innerHTML = "$. "+`${product.price}`
        
       
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
}

initialize();



