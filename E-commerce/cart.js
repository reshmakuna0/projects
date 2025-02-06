let spanCount = document.getElementById("count")
const listItemsDiv = document.getElementById("listItem")
let arr = JSON.parse(localStorage.getItem('cartItems'))
spanCount.textContent=arr.length;
function displayCart(){
 if(arr.length==0){
    listItemsDiv.textContent="Cart is Empty"
    listItemsDiv.classList.add("display")
    
 }
 else{
 listItemsDiv.textContent="";
 
arr.forEach((p,index) => {
    const productDiv = document.createElement("div")
    productDiv.classList.add("fl")
    const productImage = document.createElement("img")
    productImage.classList.add('cartImage')
    productImage.src = p.thumbnail;
    productImage.alt = p.title;
    const productTitle = document.createElement("p")
    
    productTitle.textContent = p.title;
    productTitle.classList.add("font");
    const productPrice = document.createElement("p")
    productPrice.textContent= "Price: $"+ p.price
    productPrice.classList.add("text-dark")
    const remove = document.createElement("button")
    remove.textContent="remove"
    remove.classList.add("removeBtn")
    
    remove.addEventListener("click",function(){
        update(index);

    })

   productDiv.append(productImage,productTitle,productPrice,remove)
   listItemsDiv.appendChild(productDiv);
  
});
 }
}
function update(i){
    arr.splice(i,1);
    spanCount.textContent=arr.length;
    localStorage.setItem('cartItems',JSON.stringify(arr));
    displayCart();
    TotalCalculate();

}
displayCart();
function TotalCalculate(){
    let total = document.createElement("p");
    let sum = arr.reduce((prev, current) => prev  + current.price, 0);
    total.textContent="Total = $"+sum;
    total.classList.add("text-dark","display-6")
    const checkout = document.createElement("button");
checkout.textContent="Checkout";
checkout.classList.add("checkout");
    listItemsDiv.append(total,checkout);
}
TotalCalculate();

const checkout = document.createElement("button");
checkout.textContent="Checkout";
checkout.classList.add("checkout");
