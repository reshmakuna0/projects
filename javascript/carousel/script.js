const arr = document.querySelectorAll(".item");
const prev = document.createElement("button");
const aft = document.createElement("button");
prev.innerText ="<--";
aft.innerText ="-->";
let activeindex = 0;
prev.addEventListener('click',pre);
prev.classList.add("prevbtn");
aft.classList.add("aftbtn");
aft.addEventListener('click',af);
function update(){
 arr.forEach((items,index)=>{
    items.classList.toggle("active",index===activeindex);
 })
}

function pre(){
   if(activeindex===0){
    activeindex = arr.length -1;
   }
   else{
    activeindex--;
   }
   update();
}
function af(){
    if(activeindex===arr.length-1){
     activeindex = 0;
    }
    else{
     activeindex++;
    }
    update();
 }
 document.querySelector(".main").append(prev,aft);

