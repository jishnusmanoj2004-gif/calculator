let input = document.querySelector("#input")
textDisplay=""
let optr=""
function onNumber(value){
    textDisplay+=value
    input.value=textDisplay
   
}

function onOperator(symbol){
    
        optr=symbol
        textDisplay+=symbol
        input.value=textDisplay
    
console.log(symbol);
}

function onClear(){
    textDisplay=""
    input.value=textDisplay
    
}

function onEqual(symbol){
    try {
        input.value=eval(textDisplay)
        
    } catch (error) {
        input.value="Err"
        
    }
 
 
}