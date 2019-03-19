const MS1 = {
    minore100: 0.95, M100: 0.88, M200: 0.84, M400: 0.80, M800: 0.74
};
const MS2 = {
    minore100: 1.04, M100: 0.97, M200: 0.92, M400: 0.87, M800: 0.81
};
const MS3 = {
    minore100: 1.08, M100: 1.01, M200: 0.96, M400: 0.91, M800: 0.84
};
const MS5 = {
    minore100: 1.08, M100: 1.01, M200: 0.96, M400: 0.91, M800: 0.84
};
const MS7 = {
    minore100: 1.26, M100: 1.18, M200: 1.12, M400: 1.06, M800: 0.98
};
const MS9 = {
    minore100: 1.58, M100: 1.47, M200: 1.40, M400: 1.33, M800: 1.23
};
const MS10 = {
    minore100: 1.80, M100: 1.68, M200: 1.60, M400: 1.52, M800: 1.40
};
const MS11 = {
    minore100: 1.58, M100: 1.47, M200: 1.40, M400: 1.33, M800: 1.23
};
const MS12 = {
    minore100: 1.71, M100: 1.60, M200: 1.52, M400: 1.44, M800: 1.33
};
const MS13 = {
    minore100: 1.80, M100: 1.68, M200: 1.60, M400: 1.52, M800: 1.40
};
const MS14 = {
    minore100: 1.94, M100: 1.81, M200: 1.72, M400: 1.63, M800: 1.51
};
const MS15 = {
    minore100: 1.89, M100: 1.76, M200: 1.68, M400: 1.60, M800: 1.47
};
const MS16 = {
    minore100: 2.03, M100: 1.89, M200: 1.80, M400: 1.71, M800: 1.58
};
const MS17 = {
    minore100: 2.16, M100: 2.02, M200: 1.92, M400: 1.82, M800: 1.68
};
const MS18 = {
    minore100: 2.30, M100: 2.14, M200: 2.04, M400: 1.94, M800: 1.79
};
const MS19 = {
    minore100: 2.25, M100: 2.10, M200: 2.00, M400: 1.90, M800: 1.75
};
const MS20 = {
    minore100: 2.52, M100: 2.35, M200: 2.24, M400: 2.13, M800: 1.96
};
const MS70 = {
    minore100: 1.26, M100: 1.18, M200: 1.12, M400: 1.06, M800: 0.98
};
const MS90 = {
    minore100: 1.58, M100: 1.47, M200: 1.40, M400: 1.33, M800: 1.23
};
const MS200 = {
    minore100: 2.52, M100: 2.35, M200: 2.24, M400: 2.13, M800: 1.96
};

let $nomeArticolo = prompt("Inserisci il nome articolo");

switch ($nomeArticolo){

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
    
    case 'MS-2':
    case 'MS -2':
    case 'MS- 2':
    case 'MS - 2':
    case 'MS2':
    case 'MS 2':

    case 'Ms-2':
    case 'Ms -2':
    case 'Ms- 2':
    case 'Ms - 2':
    case 'Ms2':
    case 'Ms 2':

    case 'ms-2':
    case 'ms -2':
    case 'ms- 2':
    case 'ms - 2':
    case 'ms2':
    case 'ms 2':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS2m100;
                    console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS2_100;
                        console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS2_200;
                            console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS2_400;
                                console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS2_800;
                                console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }

        break;

    case 'MS-3':
    case 'MS -3':
    case 'MS- 3':
    case 'MS - 3':
    case 'MS3':
    case 'MS 3':

    case 'Ms-3':
    case 'Ms -3':
    case 'Ms- 3':
    case 'Ms - 3':
    case 'Ms3':
    case 'Ms 3':

    case 'ms-3':
    case 'ms -3':
    case 'ms- 3':
    case 'ms - 3':
    case 'ms3':
    case 'ms 3': 

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS3m100;
                    console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS3_100;
                        console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS3_200;
                            console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS3_400;
                                console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS3_800;
                                console.log(new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }

        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-1':
    case 'MS -1':
    case 'MS- 1':
    case 'MS - 1':
    case 'MS1':
    case 'MS 1':

    case 'Ms-1':
    case 'Ms -1':
    case 'Ms- 1':
    case 'Ms - 1':
    case 'Ms1':
    case 'Ms 1':

    case 'ms-1':
    case 'ms -1':
    case 'ms- 1':
    case 'ms - 1':
    case 'ms1':
    case 'ms 1':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS1.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS1.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS1.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS1.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS1.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS1.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS1.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS1.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    default:
        console.log("SOLO I PRIMI 3 ARTICOLI")
}

//la stringha sottostante serve per stampare il risultato in dollari
//console.log(new Intl.NumberFormat('en-CA',{style: 'currency', currency: 'CAD'}).format(Tot));
//la stringha sottostante serve per stampare il risultato in sterline
//nella stringa qua sotto il simbolo delle sterline è messo prima della cifra(en)
//console.log(new Intl.NumberFormat('en-GB',{style: 'currency', currency: 'GBP'}).format(Tot));
//nella stringa qua sotto il simbolo delle sterline è messo dopo della cifra(de)
//console.log(new Intl.NumberFormat('de-GB',{style: 'currency', currency: 'GBP'}).format(Tot));

// IL RISULTATO CHE ANDRA' SPEDITO AL CARRELLO, UNA VOLTA FINITO TUTTO, E' QUELLO CHE ORA VIENE FORMATTATO E STAMPATO