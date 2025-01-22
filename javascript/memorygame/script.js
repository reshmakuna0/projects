const arr = document.querySelectorAll(".child");
let misses = document.getElementById("miss");
let prev = null;
let prevBefore = null;
let count =0;
arr.forEach((item, index) => {
    item.addEventListener("click", function () {
        item.classList.remove("child");
        item.classList.add("display");
        if (prevBefore !== null && prev !== null) {
            
            const prevCard = arr[prev];
            const prevBeforeCard = arr[prevBefore];

            if (
                prevCard.querySelector("img").src !==
                prevBeforeCard.querySelector("img").src
            ) 
            setTimeout(()=>{
                
                prevCard.classList.remove("display");
                prevBeforeCard.classList.remove("display");
                prevCard.classList.add("child");
                prevBeforeCard.classList.add("child");
                count++;
                misses.innerText=count;
            },500);
            prevBefore = null;
            prev = null;
        }
        prevBefore = prev;
        prev = index;
    });
});
