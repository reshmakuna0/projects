const inner = document.getElementById("in");
inner.classList.add("clo");
const bar = document.getElementById("bar");
bar.classList.add("menubar");
bar.addEventListener("click",display);
const xmark = document.getElementById("xmark");
xmark.classList.add("in");
xmark.addEventListener("click",close);
function close(){
    inner.classList.remove("open");
    inner.classList.add("close");
    xmark.classList.add("in");
    xmark.classList.remove("menucross");
    bar.classList.remove("in");
    bar.classList.add("menubar");
}
function display(){
    inner.classList.add("open");
    bar.classList.remove("menubar");
    bar.classList.add("in");
    xmark.classList.remove("in");
    xmark.classList.add("menucross");
}