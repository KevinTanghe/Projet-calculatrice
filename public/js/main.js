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

            // Bouton 8 5 2 virgule

for (let i = 0; i < 4; i++) {
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

for (let i = 0; i < 3; i++) {
    buttonCol3[i].addEventListener("click", function(){
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
            // bouton C

buttonCol4[0].addEventListener("click", function(){
    input.value = "";
    value1 = "";
    value2 = "";
});


            // bouton /

buttonCol4[1].addEventListener("click", function(){
    valueOperator = "/"
    input.value = ""
})


            // bouton X

buttonCol4[2].addEventListener("click", function(){
    valueOperator = "*"
    input.value = ""
})

            // bouton -

buttonCol4[3].addEventListener("click", function(){
    valueOperator = "-"
    input.value = ""
})

            // bouton + 

buttonCol4[4].addEventListener("click", function(){
    valueOperator = "+"
    input.value = ""
})


            // bouton =

buttonCol3[3].addEventListener("click", function(){
    switch (valueOperator) {
        case "/":
            valueReponse = value1 / value2;
            break;
        case "*":
            valueReponse = value1 * value2;
            break;
        case "-":
            valueReponse = value1 - value2;
            break;
        case "+":
            valueReponse = value1 + value2;
            break;
        default:
            break;
    }
    input.value = valueReponse
    valueOperator = "";
    value1 = ""
    value2 = ""

})