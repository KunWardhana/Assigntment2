const products = document.getElementById('products')

const urlproduct = ("https://animechan.vercel.app/api/quotes")

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
     json.map((ser) => {
     let li = createNode("li")
  //   let img = createNode("img")
     let span = createNode("span")

    // img.setAttribute("width", "200")
   //  img.src=tes.image;
     span.innerHTML = `${ser.anime}, ${ser.character}`

   // append(li, img)
    append(li, span)
    append(products, li)
 })

 
})
.catch((error)=>console.log(error))
let productfilter = []

const search = document.getElementById('search')
search.addEventListener('input', event => {
    const searchstring = event.target.value;
    const productfilter = filter( product => {
       return ser.title.contain(searchstring)
    });

  });



