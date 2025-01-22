
let count = document.getElementById("count");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const views = document.getElementById("views");
const likes = document.getElementById("likes");
let x = 0;       // Counter value
let NumberOfViews = 0;
let NumberOfLikes = 0;
let intervalId;  // Variable to store the interval ID

// Start button event listener
start.addEventListener("click", () => {
    if (!intervalId) { // Prevent multiple intervals
        intervalId = setInterval(startFun, 1000);
        setLikes = setInterval(startLikes,800);
        setViews = setInterval(startViews,300);
    }
});

stop.addEventListener("click", () => {
    clearInterval(setLikes);
    clearInterval(setViews);
    clearInterval(intervalId); 
    intervalId = null;        

});

// Reset button event listener
reset.addEventListener("click", () => {
    clearInterval(intervalId); // Clear the interval
    intervalId = null;         // Reset the interval ID
    x = 0;                     
    count.innerText = x;   
    NumberOfLikes = 0;
    NumberOfViews = 0;
    views.innerText = NumberOfViews;
    likes.innerText = NumberOfLikes;    
});

// Function to increment the counter
function startFun() {
    x++;
    count.innerText = x;
    if(x==10){
        clearInterval(setLikes);
        clearInterval(setViews);
        clearInterval(intervalId); 
        intervalId = null;        
    
    }
}
function startLikes(){
    NumberOfLikes++;
    likes.innerText = NumberOfLikes;
}
function startViews(){
    NumberOfViews++;
    views.innerText = NumberOfViews;
}