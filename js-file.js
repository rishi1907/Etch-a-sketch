const container = document.querySelector(".container");
container.style["width"]="995px"
const reset = document.querySelector(".reset");
const click = document.querySelector(".apply");

for(let i = 0; i<256; i = i + 1) {
    let divs = document.createElement("div")
    divs.style["height"]="62.1875px";
    divs.style["width"]="62.1875px";
    divs.classList.add(`div${i}`);
    container.appendChild(divs)

    divs.addEventListener("mouseover", () => {
             divs.style["backgroundColor"] = "black";
    });
    reset.addEventListener("click", ()=>{
          divs.style["backgroundColor"] = "beige";
    });
}


const input = document.querySelector("#pixelValue");
const label = document.querySelector(".labelnum");


console.log(label.textContent);

input.addEventListener("input", (e)=>{
     label.textContent = `${e.target.value} x ${e.target.value}`;
});

click.addEventListener("click", ()=>{
     container.innerHTML ="";
     let dim = 995/(input.value);
     let pixelnum = (input.value)**2; 

     for(let i = 0; i<pixelnum; i = i + 1) {
        let divs = document.createElement("div")
        divs.style["height"] = `${dim}px`;
        divs.style["width"] = `${dim}px`;

        container.appendChild(divs);
    
        divs.addEventListener("mouseover", () => {
                 divs.style["backgroundColor"] = "black";
        });
        reset.addEventListener("click", ()=>{
              divs.style["backgroundColor"] = "beige";
        });


    }
})