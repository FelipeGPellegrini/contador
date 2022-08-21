let NI = 0;

let txtnumber = document.getElementById("number");

function soma(){
    NI += 1;

    txtnumber.innerHTML = NI; 
}

function subtracao(){
    NI -= 1;

    if (NI < 0){
         NI = 0
    }

    txtnumber.innerHTML = NI;

    
}

function reset(){
    NI = 0
    txtnumber.innerHTML = NI;
}