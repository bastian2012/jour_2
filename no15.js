var log = (message) => console.log(message);


let mitan = (chenn) => {
    let essai;
    let longe = chenn.length-1;
     if (longe%2==0) {
        return (`let nn mitan an se ${chenn[longe/2]}`)
        } 
    else
    essai=(longe+1)/2
    return(`chenn sa gn de let nn mitan ki se ${chenn[essai-1]} ak ${chenn[essai]}`)
}

log(mitan(`endpass`))
log(mitan('hidden'))