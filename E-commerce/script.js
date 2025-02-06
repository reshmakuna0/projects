const showDIV = document.getElementById("show");
const listItemsDiv = document.getElementById("listItems")
const inp = document.getElementById("inp");
const btn = document.getElementById("searchbtn");
const spanCount = document.getElementById("count");
let cartArr=[]
btn.addEventListener("click",function(){
    fetchData(`https://dummyjson.com/products/search?q=${inp.value}`)
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    inp.value=""

})
 
async function fetchlist(){
    try{
        const res = await fetch('https://dummyjson.com/products/category-list')
        const data = await res.json();
        displaylist(data)
    }
    catch(err){
        console.log(err)
    }
}
fetchlist();
function displaylist(it){
    it.forEach((p)=>{
        
        const liDiv = document.createElement("div");
        liDiv.classList.add("names")
        const liName = document.createElement("h2");
        liName.textContent=p
        liDiv.appendChild(liName)
        
        
      liDiv.addEventListener("click",function()
      {
        fetchData(`https://dummyjson.com/products/category/${liName.textContent}`)
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    })
    
        showDIV.appendChild(liDiv)
    })
}

async function fetchData (url)
{
    try
    {
        const res = await fetch(url);
        const data = await res.json();
        displayData(data.products)
    }
    catch(err)
    {
        console.log("error: "+err)
    }
}
fetchData("https://dummyjson.com/products")
function displayData (it)
{
listItemsDiv.textContent=" ";
    it.forEach((p) =>
    {
        const productDiv = document.createElement("div")
        productDiv.classList.add("productDivClass")
        const productImage = document.createElement("img")
        productImage.classList.add('itemImage')
        productImage.src = p.thumbnail;
        productImage.alt = p.title;
        const productTitle = document.createElement("h2")
        
        productTitle.textContent = p.title;
        const productPrice = document.createElement("p")
        productPrice.textContent= "Price: $"+ p.price
        const addCartButton = document.createElement("button")
        addCartButton.textContent = "add to cart"
        addCartButton.classList.add("cartbtn")
        addCartButton.addEventListener('click', function ()
        {
          cartArr.push(p)
    spanCount.textContent = cartArr.length;
    localStorage.setItem('cartItems',JSON.stringify(cartArr))
     addCartButton.textContent = "added"
        })
        
		productDiv.append(
					productImage,
					productTitle,
					productPrice,
					addCartButton,
        )
        				listItemsDiv.appendChild(productDiv)
    })
}

