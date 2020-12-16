let div = document.querySelectorAll(".containerChiffre");
let input = document.querySelector("input")
let buttonCol1 = div[0].querySelectorAll("button");
let buttonCol2 = div[1].querySelectorAll("button");
let buttonCol3 = div[2].querySelectorAll("button");
let buttonCol4 = div[3].querySelectorAll("button");
console.log(buttonCol1,buttonCol2,buttonCol3,buttonCol4);


let value1;
let value2;
let valueOperator = "";
let valueReponse;

            // Bouton 7 4 1 0

for (let i = 0; i < buttonCol1.length; i++) {
    buttonCol1[i].addEventListener("click", function(){
        if (valueOperator == "") {
            input.value += this.innerHTML
            value1 = Number(input.value)
            console.log(value1);
        } else {
            input.value += this.innerHTML
            value2 = Number(input.value)
            console.log(value2);
        }
    })
    
}

            // Bouton 8 5 2 ,

for (let i = 0; i < 3; i++) {
    buttonCol2[i].addEventListener("click", function(){
        if (valueOperator == "") {
            input.value += this.innerHTML
            value1 = Number(input.value)
            console.log(value1);
        } else {
            input.value += this.innerHTML
            value2 = Number(input.value)
            console.log(value2);
        }
    })
    
}

buttonCol2[3].addEventListener("click", function(){
    input.value += this.innerHTML
})