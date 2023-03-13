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
        if(listaEmail[i].toLowerCase === emailUtente.value.toLowerCase){
            verificaEmail="È NELLA LISTA";
        }
    }

    //OUTPUT
    document.getElementById("stato-email").innerHTML=emailUtente.value + " " + verificaEmail;

    //Ripulisco gli output
    emailUtente.value="";

})

// BOTTONE GENERA PIGIATO
const bottoneGenera= document.getElementById("genera-numeri");
bottoneGenera.addEventListener("click", function(){
    // INIZIALIZZO VARIABILI
    tuoNumero=Math.floor(Math.random()*6)+1;
    pcNumero=Math.floor(Math.random()*6)+1;
    statoVincita="";

    //LOGICA
    if(tuoNumero === pcNumero){
        statoVincita="pareggio";
    }else if(tuoNumero > pcNumero){
        statoVincita="hai vinto!";
    }else{
        statoVincita="hai perso";
    }

    //OUTPUT
    document.querySelector(".numeri").innerHTML=`
        <p>Il tuo nummero è: ${tuoNumero}</p>
        <p>Il nummero del pc è: ${pcNumero}</p>
        <h2>${statoVincita}</h2>
    `
})










