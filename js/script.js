// ESERCIZIO EMAIL

//BOTTONE INVIA PIGIATO
const bottoneInvia= document.getElementById("invia");
bottoneInvia.addEventListener("click", function(){
    // INIZIALIZZO VARIABILI
    const listaEmail = ["pincopallo@gmail.com","lucalaurenti@gmail.com","francorossi@gmail.com","tiziotiziani@gmail.com","caiosempronio@gmail.com"];
    let verificaEmail="NON È NELLA LISTA";
    let emailUtente;

    //INPUT
    emailUtente=document.getElementById("email");

    //LOGICA
    for(let i=0;i<listaEmail.length;i++){
        if(listaEmail[i] === emailUtente.value){
            verificaEmail="È NELLA LISTA";
        }
    }

    //OUTPUT
    document.getElementById("stato-email").innerHTML=emailUtente.value + " " + verificaEmail;

    //Ripulisco gli output
    emailUtente.value="";

})










