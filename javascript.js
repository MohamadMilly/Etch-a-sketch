const containerDiv = document.querySelector('.container');
let length = 16;
const editButton = document.querySelector('#editBtn'); 

editButton.addEventListener("click", ()=>{
   containerDiv.innerHTML = "";
   length = +prompt("Enter the new size",16);
   if (length<=100) {
    let isDrawing = false;
   for (let i = 1 ; i<=length;i++) {
    const line = document.createElement('div');
    line.classList.add("line");
    
    for (let j = 1 ; j<=length;j++) {
        const sketchDiv = document.createElement("div");
        sketchDiv.classList.add("pixel");
        sketchDiv.style.cssText = `width:${500/length}px ; height:${500/length}px`;
        line.appendChild(sketchDiv);
        
       sketchDiv.addEventListener("mousedown", (e)=>{
        isDrawing=true;
        e.target.style.background = `rgb(${random(255)} ${random(255)} ${random(255)})`;
       });
        sketchDiv.addEventListener("mouseenter",(e)=>{
         if (isDrawing) {
            e.target.style.background = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        }
       });
       document.addEventListener("mouseup",()=>{
        isDrawing=false;
       });
          
    }

    containerDiv.appendChild(line);
}
   }
   else alert("enter a number less than or equal to 100");

});

function random(number) {
    return Math.random(number) * (number + 1);
}









