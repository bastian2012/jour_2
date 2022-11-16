var log = (message) => console.log(message);

let max_tab = (tableau) => {
    let max = tableau[0]
    for (const element of tableau) {
        if (element > max)
            max = element;
    }
    log(`le plus grand est ${max}`);
}
let min_tab = (tableau) => {
    let min = tableau[0]
    for (const element of tableau) {
        if (element < min)
            min = element;
    }
    log(`le plus petit est ${min}`);
}

let table = [1, 2, 4, 5, 6, 7,]


max_tab(table);
min_tab(table);


let min_tab_dimensions = (tableau) => {
   let min = tableau[0][0]
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
            if (tableau[i][j]<min){
                min = tableau[i][j];
                }
                else if (isNaN(tableau[i][j])) {
                    throw new Error("tableau ou a pa gn nomb selman");
                    break;
                    
                }
            }
    }

    log(`le plus petit est ${min}`);
}

let max_tab_dimensions = (tableau) => {
   let max = tableau[0][0]
    for (let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau[i].length; j++) {
            if (tableau[i][j]>max){
                max = tableau[i][j];
                }
            }
    }

    log(`le plus grand est ${max}\n`);
}

let table2 = [['6',2,'3', 5, 7, 6, 5],[45, 67, 54, 100]];
min_tab_dimensions(table2)
max_tab_dimensions(table2)




