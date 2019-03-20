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
                    var Tot= (num * 10) * MS2.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS2.minore800);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS2.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS2.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS2.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS2.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS2.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS2.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS2.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS2.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
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
                    var Tot= (num * 10) * MS3.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS3.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));                    
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS3.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS3.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS3.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS3.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS3.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS3.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS3.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS3.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }

        break;

    case 'MS-5':
    case 'MS -5':
    case 'MS- 5':
    case 'MS - 5':
    case 'MS5':
    case 'MS 5':

    case 'Ms-5':
    case 'Ms -5':
    case 'Ms- 5':
    case 'Ms - 5':
    case 'Ms5':
    case 'Ms 5':

    case 'ms-5':
    case 'ms -5':
    case 'ms- 5':
    case 'ms - 5':
    case 'ms5':
    case 'ms 5':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS5.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS5.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS5.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS5.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS5.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS5.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS5.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS5.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS5.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS5.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-7':
    case 'MS -7':
    case 'MS- 7':
    case 'MS - 7':
    case 'MS7':
    case 'MS 7':

    case 'Ms-7':
    case 'Ms -7':
    case 'Ms- 7':
    case 'Ms - 7':
    case 'Ms7':
    case 'Ms 7':

    case 'ms-7':
    case 'ms -7':
    case 'ms- 7':
    case 'ms - 7':
    case 'ms7':
    case 'ms 7':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS7.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS7.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS7.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS7.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS7.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS7.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS7.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS7.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS7.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS7.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-9':
    case 'MS -9':
    case 'MS- 9':
    case 'MS - 9':
    case 'MS9':
    case 'MS 9':

    case 'Ms-9':
    case 'Ms -9':
    case 'Ms- 9':
    case 'Ms - 9':
    case 'Ms9':
    case 'Ms 9':

    case 'ms-9':
    case 'ms -9':
    case 'ms- 9':
    case 'ms - 9':
    case 'ms9':
    case 'ms 9':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS9.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS9.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS9.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS9.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS9.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS9.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS9.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS9.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS9.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS9.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-10':
    case 'MS -10':
    case 'MS- 10':
    case 'MS - 10':
    case 'MS10':
    case 'MS 10':

    case 'Ms-10':
    case 'Ms -10':
    case 'Ms- 10':
    case 'Ms - 10':
    case 'Ms10':
    case 'Ms 10':

    case 'ms-10':
    case 'ms -10':
    case 'ms- 10':
    case 'ms - 10':
    case 'ms10':
    case 'ms 10':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS10.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS10.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS10.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS10.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS10.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS10.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS10.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS10.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS10.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS10.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-11':
    case 'MS -11':
    case 'MS- 11':
    case 'MS - 11':
    case 'MS11':
    case 'MS 11':

    case 'Ms-11':
    case 'Ms -11':
    case 'Ms- 11':
    case 'Ms - 11':
    case 'Ms11':
    case 'Ms 11':

    case 'ms-11':
    case 'ms -11':
    case 'ms- 11':
    case 'ms - 11':
    case 'ms11':
    case 'ms 11':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS11.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS11.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS11.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS11.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS11.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS11.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS11.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS11.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS11.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS11.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-12':
    case 'MS -12':
    case 'MS- 12':
    case 'MS - 12':
    case 'MS12':
    case 'MS 12':

    case 'Ms-12':
    case 'Ms -12':
    case 'Ms- 12':
    case 'Ms - 12':
    case 'Ms12':
    case 'Ms 12':

    case 'ms-12':
    case 'ms -12':
    case 'ms- 12':
    case 'ms - 12':
    case 'ms12':
    case 'ms 12':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS12.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS12.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS12.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS12.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS1.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS12.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS12.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS12.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS12.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS12.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-13':
    case 'MS -13':
    case 'MS- 13':
    case 'MS - 13':
    case 'MS13':
    case 'MS 13':

    case 'Ms-13':
    case 'Ms -13':
    case 'Ms- 13':
    case 'Ms - 13':
    case 'Ms13':
    case 'Ms 13':

    case 'ms-13':
    case 'ms -13':
    case 'ms- 13':
    case 'ms - 13':
    case 'ms13':
    case 'ms 13':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS13.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS13.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS13.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS13.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS13.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS13.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS13.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS13.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS13.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS13.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-14':
    case 'MS -14':
    case 'MS- 14':
    case 'MS - 14':
    case 'MS14':
    case 'MS 14':

    case 'Ms-14':
    case 'Ms -14':
    case 'Ms- 14':
    case 'Ms - 14':
    case 'Ms14':
    case 'Ms 14':

    case 'ms-14':
    case 'ms -14':
    case 'ms- 14':
    case 'ms - 14':
    case 'ms14':
    case 'ms 14':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS14.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS14.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS14.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS14.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS14.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS14.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS14.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS14.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS14.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS14.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-15':
    case 'MS -15':
    case 'MS- 15':
    case 'MS - 15':
    case 'MS15':
    case 'MS 15':

    case 'Ms-15':
    case 'Ms -15':
    case 'Ms- 15':
    case 'Ms - 15':
    case 'Ms15':
    case 'Ms 15':

    case 'ms-15':
    case 'ms -15':
    case 'ms- 15':
    case 'ms - 15':
    case 'ms15':
    case 'ms 15':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS15.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS15.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS15.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS15.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS15.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS15.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS15.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS15.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS15.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS15.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-16':
    case 'MS -16':
    case 'MS- 16':
    case 'MS - 16':
    case 'MS16':
    case 'MS 16':

    case 'Ms-16':
    case 'Ms -16':
    case 'Ms- 16':
    case 'Ms - 16':
    case 'Ms16':
    case 'Ms 16':

    case 'ms-16':
    case 'ms -16':
    case 'ms- 16':
    case 'ms - 16':
    case 'ms16':
    case 'ms 16':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS16.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS16.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS16.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS16.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS16.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS16.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS16.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS16.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS16.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS16.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-17':
    case 'MS -17':
    case 'MS- 17':
    case 'MS - 17':
    case 'MS17':
    case 'MS 17':

    case 'Ms-17':
    case 'Ms -17':
    case 'Ms- 17':
    case 'Ms - 17':
    case 'Ms17':
    case 'Ms 17':

    case 'ms-17':
    case 'ms -17':
    case 'ms- 17':
    case 'ms - 17':
    case 'ms17':
    case 'ms 17':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS17.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS17.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS17.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS17.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS17.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS17.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS17.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS17.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS17.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS17.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-18':
    case 'MS -18':
    case 'MS- 18':
    case 'MS - 18':
    case 'MS18':
    case 'MS 18':

    case 'Ms-18':
    case 'Ms -18':
    case 'Ms- 18':
    case 'Ms - 18':
    case 'Ms18':
    case 'Ms 18':

    case 'ms-18':
    case 'ms -18':
    case 'ms- 18':
    case 'ms - 18':
    case 'ms18':
    case 'ms 18':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS18.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS18.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS18.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS18.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS18.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS18.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS18.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS18.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS18.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS18.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-19':
    case 'MS -19':
    case 'MS- 19':
    case 'MS - 19':
    case 'MS19':
    case 'MS 19':

    case 'Ms-19':
    case 'Ms -19':
    case 'Ms- 19':
    case 'Ms - 19':
    case 'Ms19':
    case 'Ms 19':

    case 'ms-19':
    case 'ms -19':
    case 'ms- 19':
    case 'ms - 19':
    case 'ms19':
    case 'ms 19':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS19.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS19.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS19.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS19.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS19.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS19.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS19.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS19.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS19.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS19.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-20':
    case 'MS -20':
    case 'MS- 20':
    case 'MS - 20':
    case 'MS20':
    case 'MS 20':

    case 'Ms-20':
    case 'Ms -20':
    case 'Ms- 20':
    case 'Ms - 20':
    case 'Ms20':
    case 'Ms 20':

    case 'ms-20':
    case 'ms -20':
    case 'ms- 20':
    case 'ms - 20':
    case 'ms20':
    case 'ms 20':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS20.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS20.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS20.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS20.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS20.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS20.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS20.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS20.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS20.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS20.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;
        
    case 'MS-70':
    case 'MS -70':
    case 'MS- 70':
    case 'MS - 70':
    case 'MS70':
    case 'MS 70':

    case 'Ms-70':
    case 'Ms -70':
    case 'Ms- 70':
    case 'Ms - 70':
    case 'Ms70':
    case 'Ms 70':

    case 'ms-70':
    case 'ms -70':
    case 'ms- 70':
    case 'ms - 70':
    case 'ms70':
    case 'ms 70':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS70.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS70.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS70.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS70.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS70.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS70.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS70.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS70.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS70.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS70.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-90':
    case 'MS -90':
    case 'MS- 90':
    case 'MS - 90':
    case 'MS90':
    case 'MS 90':

    case 'Ms-90':
    case 'Ms -90':
    case 'Ms- 90':
    case 'Ms - 90':
    case 'Ms90':
    case 'Ms 90':

    case 'ms-90':
    case 'ms -90':
    case 'ms- 90':
    case 'ms - 90':
    case 'ms90':
    case 'ms 90':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS90.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS90.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS90.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS90.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS90.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS90.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS90.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS90.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS90.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS90.M800);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot));
                            }
                        }
                    }
                }
            }else{
                console.log("NON E' UN NUMERO");
            }
    
        break;

    case 'MS-200':
    case 'MS -200':
    case 'MS- 200':
    case 'MS - 200':
    case 'MS200':
    case 'MS 200':

    case 'Ms-200':
    case 'Ms -200':
    case 'Ms- 200':
    case 'Ms - 200':
    case 'Ms200':
    case 'Ms 200':

    case 'ms-200':
    case 'ms -200':
    case 'ms- 200':
    case 'ms - 200':
    case 'ms200':
    case 'ms 200':

        var num = prompt("INSERISCI LA QUANTITA' DI CONFEZIONI DA COMPRARE");
            if(!isNaN(num)){
                if(num < 100){
                    var Tot= (num * 10) * MS200.minore100;
                    console.log('Prodotto: ' + $nomeArticolo);
                    console.log('Quantità: ' + num);
                    console.log('Confezione da: ' + 10);
                    console.log('Prezzo cad: ' + MS200.minore100);
                    console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                }else if(num >= 100){
                    if(num < 200){
                        var Tot= (num * 10) * MS200.M100;
                        console.log('Prodotto: ' + $nomeArticolo);
                        console.log('Quantità: ' + num);
                        console.log('Confezione da: ' + 10);
                        console.log('Prezzo cad: ' + MS200.M100);
                        console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                    }else if(num >= 200){
                        if(num < 400){
                            var Tot= (num * 10) * MS200.M200;
                            console.log('Prodotto: ' + $nomeArticolo);
                            console.log('Quantità: ' + num);
                            console.log('Confezione da: ' + 10);
                            console.log('Prezzo cad: ' + MS200.M200);
                            console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                        }else if(num >= 400){
                            if(num < 800){
                                var Tot= (num * 10) * MS200.M400;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS200.M400);
                                console.log('Prezzo finale: ' +  new Intl.NumberFormat('de-DE',{style: 'currency', currency: 'EUR'}).format(Tot)); 
                            }else if(num >= 800){
                                var Tot= (num * 10) * MS200.M800;
                                console.log('Prodotto: ' + $nomeArticolo);
                                console.log('Quantità: ' + num);
                                console.log('Confezione da: ' + 10);
                                console.log('Prezzo cad: ' + MS200.M800);
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
        console.log("NON E' UN ARTICOLO!")
}

//la stringha sottostante serve per stampare il risultato in dollari
//console.log(new Intl.NumberFormat('en-CA',{style: 'currency', currency: 'CAD'}).format(Tot));
//la stringha sottostante serve per stampare il risultato in sterline
//nella stringa qua sotto il simbolo delle sterline è messo prima della cifra(en)
//console.log(new Intl.NumberFormat('en-GB',{style: 'currency', currency: 'GBP'}).format(Tot));
//nella stringa qua sotto il simbolo delle sterline è messo dopo della cifra(de)
//console.log(new Intl.NumberFormat('de-GB',{style: 'currency', currency: 'GBP'}).format(Tot));

// IL RISULTATO CHE ANDRA' SPEDITO AL CARRELLO, UNA VOLTA FINITO TUTTO, E' QUELLO CHE ORA VIENE FORMATTATO E STAMPATO