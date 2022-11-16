let kod_in_out=(a,b)=>{
    if (a>b) 
        return b
    else if(a<b)
        return a
    return a
}

let log = (message) => console.log(message);

let test =(kod_in_out(12,45))
log(`le resultat est : ${test}`)