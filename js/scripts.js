console.log('int ok');

/*

- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.          //ok

- Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
---- creare un controllo di numeri che non si ripetono                                          //ok 1/2

- in seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - 
abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.                        //ok

-  Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.            //ok

-La partita termina quando il giocatore clicca su una bomba o quando raggiunge 
il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

-Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.
*/




const containerGrid = document.getElementById('container-grid');
console.log('containerGrid',containerGrid);

const submitStart = document.getElementById('submit-start');

const listControlNumber = [];
let gameWin = false;
let gameOver = false;
let giocoPerso = false;

let totalScore = 0;
console.log('totalScore',totalScore);
let totalePunti = 0;
console.log('totalePunti',totalePunti);

const scoreLive = document.getElementById('score-live');

const alertWin = document.getElementById('alert-win-doc');
const alertWinTitle = document.createElement('h3');
alertWin.classList.add('alert-win');



submitStart.addEventListener('click',                   // click su start

    function(){                                         // click su start
        const selectionDif = document.getElementById('select-difficulty').value;
        console.log('selectionDif',selectionDif);
        
        if(selectionDif == 'easy'){
            console.log('Hai inserito EASY');
            // funzione principale
            createCellGrid(containerGrid, 100, 'cell-easy', listControlNumber, gameOver, totalScore);                  //chiamata funzione principale

        
        }
        else if(selectionDif == 'medium'){
            console.log('Hai inserito MEDIUM');
            // funzione principale
            createCellGrid(containerGrid,81,'cell-medium', listControlNumber, gameOver. totalScore);                  //chiamata funzione principale
        
        }
        else if(selectionDif == 'hard'){
            console.log('Hai inserito HARD');
            // funzione principale
            createCellGrid(containerGrid,49,'cell-hard', listControlNumber, gameOver. totalScore);                  //chiamata funzione principale
        
        }
        else{
            alert('Seleziona una difficoltà')
        }


        

    }                                                   // fine click su start
)                                                       // fine click su start











function createCellGrid(containerGrid, numberN, difS, nameArray, gameOver, totalScore){                 //funzione principale ---- creazione celle dentro griglia 

    containerGrid.innerHTML = "";                                                 //serve per svuotare il div prima di doverlo riempire
    nameArray = []

    gameWin = false;
    gameOver = false;                                       //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
    giocoPerso = false;                                     //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/

    totalScore = 0;                                         //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
    //console.log('totalScore',totalScore);                   //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
    totalePunti = 0;                                        //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
    //console.log('totalePunti',totalePunti);                 //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/

    alertWinTitle.innerHTML= '';
    controlNumberRandom (nameArray, 1, numberN);                                  //creazione e controllo su lista di numero random bomba
    
    for (let i = 1 ; i <= numberN ; i++){
        console.log('Inizio for')
        
        const newCell = document.createElement('div');
        newCell.classList.add('cell',difS);
        
        newCell.innerHTML = i;
        containerGrid.append(newCell);

        controlCellActive (newCell, i, nameArray, numberN, gameOver, gameWin, totalScore, containerGrid);                   //chiamata controllo click per cella attiva          //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/

        //console.log('TOTALSCORE DOPO FUNZIONE:', totalScore);                //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
        //console.log('TOTALE PUNTI DOPO FUNZIONE:', totalePunti);               //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/


        //console.log('nameArray',nameArray);
            
    }
}

function controlCellActive (newCell, i, nameArray, numberN, gameOver, totalScore, containerGrid){                          //controllo click per cella attiva       //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
    
        newCell.addEventListener('click',
                function () {
                    if(gameOver == true || giocoPerso == true){         //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                        alert('Hai perso la Partita')
                    }

                    else if(gameWin == true){
                        alert('Hai Vinto la Partita, inizia una nuova partita')
                    }
                    else{
                        

                        if(newCell.classList.contains('cell-active')){
                            newCell.classList.remove('cell-active');
                            console.log('Hai cliccato su ', i);
                            totalScore--;                                      //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                            console.log('totalScore',totalScore);             //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                            totalePunti--;                                    //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                            console.log('totalePunti -',totalePunti);           //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                        }
                        else{
                            if(nameArray.includes(i)){
                                newCell.classList.add('cell-bomb');
                                console.log('Hai cliccato su ', i, 'Bomba');
                                //alert('Bomba');
                                gameOver = true;                            //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                                giocoPerso = true;                          //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                                alertWinTitle.innerHTML = 'Hai perso!!!';
                                alertWin.append(alertWinTitle);
    
                            }
                            else{
                                newCell.classList.add('cell-active');
                                console.log('Hai cliccato su ', i);
                                totalScore++;                                   //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                                console.log('totalScore',totalScore);           //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                                totalePunti++;                                  //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                                console.log('totalePunti +',totalePunti);         //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                                if(totalePunti == (numberN - nameArray.length)){

                                   alert('Hai vinto la Partita');
                                   
                                   alertWinTitle.innerHTML = 'Hai vinto!!!';
                                   alertWin.append(alertWinTitle);
                                   
                                   gameWin = true;
                                }
                            }
            
                        }
                    }

                    scoreLive.innerHTML = `Score: ${totalePunti}`;
                    console.log('Il tuo punteggio è:', totalScore);                //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                    console.log('Il tuo punteggio è:', totalePunti);               //****************  DA CONTROLLARE PERCHè NON VA CON L'ARGOMENTO MA CON LA COSTANTE DIRETTA FUNZIONA/
                }
        )
    }







//  GENERATORE NUMERI RANDOM PER BOMBA

function numberRandom (min, max){
    return Math.floor(Math.random () * (max - min + 1) + min);
}
function controlNumberRandom (nameArray, min, max){
    for(let i = 1 ; i <= 16; i++){
        if(nameArray.length < max){
            let numberRandomReturn = numberRandom (min, max);
            while(nameArray.includes(numberRandomReturn)){
                numberRandomReturn = numberRandom (min, max);
            }
            nameArray.push(numberRandomReturn);
        }
        
    }
    console.log('console log dentro funzione',nameArray.sort());
}