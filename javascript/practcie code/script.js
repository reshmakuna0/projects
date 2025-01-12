
const pwdInput = document.getElementById('pwd');

const eyeclose = document.getElementById('closeeye');
const eyeopen = document.getElementById('openeye');
const hide = document.querySelector(".hide");
const lastdiv = document.getElementById("last");
const para = document.getElementById("para");
const emInput = document.getElementById("email");

const inpError = document.getElementById("inpError");
const pwdError = document.getElementById("pwdError");
lastdiv.classList.add("closebutton");
eyeclose.classList.add("closebutton");
let sub = false;
let cup = 0;
let cdown = 0;
inpError.innerText="";
function openform(){
    document.querySelector(".login").classList.add("newlogin");
    document.querySelector("#close").classList.remove("closebutton");
    document.querySelector("#open").classList.add("closebutton");
    document.querySelector("#close").classList.add("cross");
    document.querySelector(".submit").classList.remove("closebutton");
 if(sub==true){
    lastdiv.classList.add("closebutton");
    hide.classList.remove("closebutton");
    para.classList.remove("closebutton");
     cup = 0;
    cdown = 0;
    document.getElementById("countdown").innerText=cdown;
    document.getElementById("countup").innerText=cup;
    document.getElementById("up").style.color="black";
    document.getElementById("down").style.color="black";
 }
}
function Closeform(){
    document.querySelector(".login").classList.remove("newlogin");
    document.querySelector("#close").classList.add("closebutton");
    document.querySelector("#open").classList.remove("closebutton");
    emInput.value="";
  pwdInput.value="";

}
function displaypwd(){
	if (pwdInput.type == "password") {
		pwdInput.type = "text"
        eyeclose.classList.remove("closebutton");
        eyeopen.classList.add("closebutton");
	  
	} else {
		pwdInput.type = "password";
        eyeclose.classList.add("closebutton");
        eyeopen.classList.remove("closebutton");
		
}
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default behavior
    
  });
function appendli(){
     if(pwdInput.value!="" && emInput.value!=""){
      if(pwdInput.value.length < 8 ){
        inpError.innerText="Password should contain minimum 8 characters";
      }
      else if(!(pwdInput.value.match("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])"))){
        inpError.innerText="Password should contain atleast one upper case , one lower case and a numerical value";
      }
      else {
        sub = true;
        inpError.innerText="";
         lastdiv.classList.remove("closebutton");
         hide.classList.add("closebutton");
         para.classList.add("closebutton");
         let formreset = document.querySelector("form");
         formreset.reset();
         document.querySelector(".submit").classList.add("closebutton");
      }
    }
      else {
        inpError.innerText="above fields are required";
      }
}

function counterup(){
  document.getElementById("up").style.color="blue";
   
 document.getElementById("countup").innerText=1;
 document.getElementById("down").style.color="black";
    
 document.getElementById("countdown").innerText=0;
 
}
function counterdown(){
  document.getElementById("down").style.color="blue";
    
 document.getElementById("countdown").innerText=1;
 document.getElementById("up").style.color="black";
   
 document.getElementById("countup").innerText=0;
}
