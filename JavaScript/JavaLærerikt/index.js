 

let sauer = 100;
 
 
 function tellEnSau() {

  sauer = sauer -1;


  console.log(sauer);


 }


//Oppgave b/d
function tellNoenSauer(beti) {
    sauer = sauer - beti;
    
    if (sauer <= 0) {
        console.log("zzzz");
    } else {
        console.log("Du har " + sauer + " sauer igjen før du sovner");
    }
}

tellNoenSauer(8);


//Oppgave c
function mistetTellingen(){};



