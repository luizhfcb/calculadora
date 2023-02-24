let total=0;
let buffer="0";
let operacaoanterior;

const screen = document.querySelector('.screen');

function cliquebotao(value){
    if(isNaN(value)){
        handleSymbol(value);
    }
    else{
        handleNumber(value)
    }
    screen.innerText = buffer;
}
function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(operacaoanterior === null){
                return
            }
            flushOperation(parseInt(buffer));
            operacaoanterior = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }
            else{
                buffer = buffer.toString(0, buffer.length -1)
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
                break;
    }
}

function handleMath(symbol){
    if (buffer === '0'){
        return
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0){
        runningTotal = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }
    operacaoanterior = symbol;
    buffer = 0;
}

function flushOperation(intBuffer){
    if(operacaoanterior === '+'){
    runningTotal += intBuffer;
    }
    else if(operacaoanterior === '−'){
        runningTotal -= intBuffer;
    }
    else if(operacaoanterior === '×'){
        runningTotal *= intBuffer
    }
    else if(operacaoanterior === '÷'){
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }
    else{
        buffer += numberString;
    }
}
function init(){
    document.querySelector('.botoescalc').addEventListener('click', function(event){
        cliquebotao(event.target.innerText);
    })
}

init();