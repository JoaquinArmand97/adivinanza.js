let arrayPalabras = [ "GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA" ]
let ayudas = [
    "Instrumento Musical",
    "Animal de la selva",
    "Es un color",
    "Nombre de mujer",
    "Hardware de computadora",
    "Es un Pais"
]

let cantPalabrasJugadas = 0;


let intentosRestantes = 5;

let posActual;

let arrayPalabraActual = [];

let cantidadAcertadas = 0;

let divsPalabrasActual = [];

let totalQueDebeAcertar;

function cargarNuevaPalabra(){
    cantPalabrasJugadas++;
    if(cantPalabrasJugadas > arrayPalabras.length){
        arrayPalabras =  [ "GUITARRA", "ELEFANTE", "TURQUESA", "MARIELA", "TECLADO", "INGLATERRA" ];
        ayudas = [
            "Instrumento Musical",
            "Animal de la selva",
            "Es un color",
            "Nombre de mujer",
            "Hardware de computadora",
            "Es un Pais"
        ]
        
    }


    posActual = Math.floor(Math.random()*arrayPalabras.length);
    
    let palabra = arrayPalabras[posActual];
    totalQueDebeAcertar = palabra.length
    cantidadAcertadas = 0;

    arrayPalabraActual = palabra.split('');
    console.log(arrayPalabraActual);

    document.getElementById("palabra").innerHTML = "";
    document.getElementById("letrasIngresadas").innerHTML = "";

    for (var i = 0; i < palabra.length; i++) {
        var divLetra = document.createElement("div");
        divLetra.className = "letra";
        document.getElementById("palabra").appendChild(divLetra);
    }
    
    divsPalabrasActual = document.getElementsByClassName("letra");

    intentosRestantes = 5;
    document.getElementById("intentos").innerHTML = intentosRestantes;

    document.getElementById("ayuda").innerHTML = ayudas[posActual];

    arrayPalabras.splice(posActual,1)
    ayudas.splice(posActual,1);
}

document.addEventListener("keydown", event => {
    if (isLetter(event.key)) {
    alert(event.key)
    let acerto = false;
    for (i=0;i < arrayPalabraActual.length; i++){
        if(arrayPalabraActual[i] == event.key.toUpperCase()){
            divsPalabrasActual[i].innerHTML = event.key.toUpperCase();
            acerto = true;
            cantidadAcertadas = cantidadAcertadas + 1;
        }
    }

    if(acerto === true){
        if(totalQueDebeAcertar == cantidadAcertadas){
            for(i=0; i <arrayPalabraActual.length;i++){
                divsPalabrasActual[i].className = "letra pintar";
            }
        }
    }else{
        intentosRestantes = intentosRestantes - 1;
        document.getElementById("intentos").innerHTML =
        intentosRestantes;

        if(intentosRestantes<=0){
            for(i=0; i < arrayPalabraActual.length;i++){
                divsPalabrasActual[i].className = "letra pintarError"
            }
        }

    }
    document.getElementById("letrasIngresadas").innerHTML += event.key
    toLocaleUperCase() + " - ";
    }
});


function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

cargarNuevaPalabra();