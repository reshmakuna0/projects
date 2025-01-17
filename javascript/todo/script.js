
const btnAdd = document.getElementById("add");
const title = document.getElementById("inp");
let count = 0;
function addel(){
   if(title.value==""){
	alert("Can't Add when input field is empty");
   }
   else{
	const check = document.createElement("p");
   const del = document.createElement("input");
   const liDiv  = document.createElement("div");
   const pDiv  = document.createElement("div");
   const inpDiv  = document.createElement("div");
  

   del.type = "button";
   del.value ="delete";  
   del.classList.add("pointer");
   check.classList.add("pointer");
   del.addEventListener("click" ,functionDelete);
   check.addEventListener("click" ,functioncheck);
	check.innerText = title.value;
   pDiv.appendChild(check);
   inpDiv.appendChild(del);
   liDiv.append(pDiv,inpDiv);
  
	liDiv.classList.add("fl");
   if(count%2==0){
      liDiv.classList.add("grey"); 
   }
   count++;
   document.querySelector("footer").appendChild(liDiv);
   title.value = "";
   function functionDelete(){
      liDiv.style.display = "none";
    } 
    function functioncheck(){
      check.classList.toggle("sty");
     liDiv.classList.toggle("bg");
    
    } 
   }

}
