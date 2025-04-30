
/* Para no repetir declaraciones de variables se sacan las variables declaradas de todas las funciones y se declaran globalmente  */
/* solo tuve dos repetidos jaja, menos que él */



const sectionataque = document.getElementById("sectionataque")
const sectionreset=document.getElementById("sectionreset")
const sectionmascota= document.getElementById("sectionmascota")        //elimina la parte de seleccionar mascota
const sectionmensajes = document.getElementById("sectionmensajes")
const varbotonseleccionar = document.getElementById("botonseleccionar")
const botoninicio= document.getElementById("botoninicio")
const sectioninicio = document.getElementById("sectioninicio")
const sectionmapa = document.getElementById("sectionmapa")
const mapa = document.getElementById("mapa")

const eaudublaze = document.getElementById("eau du blaze")
const silty = document.getElementById ("silty")
const bonfy = document.getElementById("bonfy")
const nombretumascota = document.getElementById("nombretumascota")
const mascotarival=  document.getElementById("mascotarival")

const elboton = document.getElementById("elboton")
const botonreset = document.getElementById("botonreset")
const mensajes = document.getElementById("sectionmensajes")    
const tuvida = document.getElementById("tuvida")
const vidarival = document.getElementById ("vidarival")
const spantuataque= document.getElementById("tuataque")
const spantuataquerival= document.getElementById("ataquerival")
const spanresultado= document.getElementById("resultado")
const spanltuataque= document.getElementById("ltuataque")
const spanltuataquerival= document.getElementById("lataquerival")
const spanresultadofinal= document.getElementById("resultadofinal") 

const botonesmascota = document.getElementById("inputmascota")


const botonataque= document.getElementById("botonataque")

let Eaux
let Dimondust
let Ignity


let tueleccion ="Nadie"
let eleccionrival =""
let ataque 
let combate 
 /* los de arriba cambia, por tanto se usa let */
let numerotuataque = 0
let tuataque =""
let ataquerival = ""
let numeroataquerival = 0   
let tusmedallas = 0
let medallasrival = 0
let resultado

let spantusmedallas 

let spanmedallasrival



let numerotueleccion = 10


let inputsmascota = []


let tusataques

let botonfuego 
let botonagua
let botontierra 

 
let secuenciatusataques =[]



let contadordeataques = 5


let secuenciaataquesrival = []

let lienzo = mapa.getContext("2d")

let tumascotax = 1
let tumascotay =1




 






/* crear la clase 
las clases empiezan con mayuscula 
*/


class Mascota {
    constructor(nombre, foto, vida, icono){      /* como que aqui va lo que se le agrega, como sus parámetros minimos para que se cree el objeto */
        /* se crean las variables, es una forma de declararlo */  /*  cada uno de los this es una atributo o propiedad  */
        this.icono= icono
        this.nombre = nombre
        this.foto= foto
        this.vida=vida 
        this.ataques=[]   /* todavía no se agrega al constructor, exactamente porqué no se, creo que porque se le agregará despues el ataque*/
    }
}



/* aqui eaux ya se habia declarado antes como const, lo que hice fue cambiarlo a let, no se si sea mejor cambiarlo diferente al anterior */
/* me mandó error, si es necesario utiliza otra variable, el nombre de las mascota se usan en el .checked*/

let eauxobj = new Mascota ("Eaux", "./csscopy/magua.webp", 3, "./csscopy/imtierra.png")
let dimondustobj= new Mascota ("Dimondust", "./csscopy/mtierra.png",3, "./csscopy/imtierra.png")
let ignityobj = new Mascota ("Ignity", "./csscopy/mfuego.png", 3,"./csscopy/imtierra.png")

let fuegin = new Mascota ("Fuegin", "./csscopy/fuegin.png", 3,"./csscopy/imtierra.png") 



/* así se crea el arreglo */

let mascotas= []

/* con eso introducimos los valores del arreglo  */

mascotas.push(eauxobj, dimondustobj, ignityobj,fuegin)






/* a esto se le llama objeto literario, estos objetos solo guardan info 

lo que se hace es agregar ataques manualmente para cada tipo de mascota, porque cada mascota tendrá diferentes ataques 

como es un arreglo se agregan varios

y simplemente son distintos ataques encapsulados por {}   y separados por comas ,

así tenemos una pequeña lista, 

dentro de los ataques tenemos una variable y un id 


la razón por la que no se agrega al constructor los ataques es porque cada objeto tiene distintos ataques y este debe ser un array si o si, da de mas agregarlo 
*/






eauxobj.ataques.push(
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
)
dimondustobj.ataques.push (
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
)
ignityobj.ataques.push(
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
)

fuegin.ataques.push(
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"🔥🔥🔥", id: "Fuego🔥"},


) 

/* ataques posibles */
let ataquesposibles = ["Fuego🔥","Agua💧","Tierra🌱"]




/*  botonfuego
    botonagua
    botontierra */


/* eauxobj.ataques.push("Elboton")  */   /* así se agrega de manera sencilla dentro del array info */


/* console logs 

primero mascotas 

luego la mascota que se llama eaux 

luego el los ataques de la mascota 

y luego el ataque de la posicion 5 de la mascota, así podemos llamar a una posición del array


*/




/* console.log(mascotas)   

console.log(mascotas[2])   

console.log(eauxobj)

console.log(eauxobj.ataques)

console.log(eauxobj.ataques[5])

console.log(eauxobj.ataques.length) */


/*  l  et yp = eauxobj.ataques.length */

/*console.log(yp) */











 
function funcioncargar (){

    mascotas.forEach((Mascota) => {

        let botonmascota= 
        `<input type="radio" name="mascota" id="${Mascota.nombre}"> 
        <label for="${Mascota.nombre}" class="botonmascota" > 
        <p> ${Mascota.nombre} </p>
        <img src= "${Mascota.foto}" alt= "${Mascota.nombre}" id="${Mascota.nombre}"> 
        </label>`
        botonesmascota.innerHTML += botonmascota
    });
    mascotas.forEach(Mascota => {
        let inputs
        inputs = document.getElementById(Mascota.nombre)
        inputsmascota.push(inputs)         
    });




    

    




 /*    console.log(inputsmascota) */


    /* esto no se puede hacer arriba??????? en el each, siiiiiiiiiiiii, pero el checked no funciona*/

    /* si se puedeeeee, pero es con otro for each aparte  */


  /*   inputeaux = document.getElementById("Eaux")
    inputdimondust = document.getElementById("Dimondust")
    inputignity = document.getElementById("Ignity")

    inputsmascota.push(inputeaux,inputdimondust,inputignity) */




    /* se deben declarar las variables nuevas creadas */
    /* se pone aqui para que en la consola aparezca esta info desde el inicio */



    /* el }  y el / deben mantenerse separados importante */

    /* se puede quitar el / in el input queda <input>  sin cerrarla */

    /* no puedes comentar dentro de `  aqui `  porque entra al html */

    /* como buena practica puede agregarle "" al id ${Mascota.nombre} */
    
    sectionmapa.style.display="none"
    sectionataque.style.display="none"
    sectionreset.style.display="none"
    sectionmascota.style.display="none"
    sectionmensajes.style.display="none"
    botoninicio.addEventListener("click",funcionbotoninicio)
    varbotonseleccionar.addEventListener("click", funcionbotonseleccionar)
    varbotonseleccionar.addEventListener("click", funciontuataque)       //Sirve para que la función tu ataque solo se ejecute despues del boton seleccionar

}
function funcionbotoninicio(){
    sectioninicio.style.display="none"
    sectionmascota.style.display="flex"

}
function funciontumascota(){
    sectionmascota.style.display="none"   


    
    for (let i = 0; i < (inputsmascota.length); i++) {
        if (inputsmascota[i].checked){
            numerotueleccion = i
        }  
    }
    if (numerotueleccion== 10){     /* el == es importante chingada madre */
        alert("Selecciona una mascota")
        location.reload()                    //si no se eligió mascota, al menos reiniciar la pagina para que no muestre nada / no funcionaba porque las anteriores opciones no existian
    }

    tueleccion = mascotas[numerotueleccion]

    nombretumascota.innerHTML= tueleccion.nombre
    alert ("Has elegido a: " + tueleccion.nombre)
   
}
function funcionmascotarival(){
    let numeromascotarival = Math.floor(Math.random()*(mascotas.length)+0) /* este no se declara arriba porque es propio de esta función */

    eleccionrival = mascotas[numeromascotarival]



   /*  if(numeromascotarival == 1){
        eleccionrival= "Eaux💧"
    }
    else if (numeromascotarival ==2){
        eleccionrival= "Dimondust🌱"
    }
    else if (numeromascotarival ==3){
        eleccionrival= "Ignity🔥"
    }
    else if (numeromascotarival ==4){
        eleccionrival= "Eau de Blaze💧🔥"
    }
    else if (numeromascotarival ==5){
        eleccionrival= "Silty💧🌱"
    }
    else if (numeromascotarival ==6){
        eleccionrival= "Bonfy🔥🌱"
    } */
    mascotarival.innerHTML = eleccionrival.nombre
    alert("Tu enemigo eligió a: " + eleccionrival.nombre)
    




    /* Generar el array de secuencia del enemigo, si la mascota rival tiene  6 ataques, tu generes 6 espacios */

    n = eleccionrival.ataques.length
    for (i=0; i<n; i++){
    secuenciaataquesrival.push(i)
    }

    /* console.log(secuenciaataquesrival) */





    /* secuenciaataquesrival=[0,1,2,3,4]        asi estaba declarado antes*/  



    /* Generar los ataques del rival */


    

    for (i=0; i < secuenciaataquesrival.length; i++){
    
    
        let numeroprueba = Math.floor(Math.random()*n+0) 
    
        k= secuenciaataquesrival[i]
    
        secuenciaataquesrival[i] = secuenciaataquesrival[numeroprueba]
    
        secuenciaataquesrival[numeroprueba] = k
    
    }
    
    console.log(secuenciaataquesrival) 
    console.log(eleccionrival.ataques)






}
function funcionbotonseleccionar (){
    funciontumascota()
    funcionmascotarival ()

    //se puede realizar la funcionmascotarival al final de funciontumascota, sirve para no crear otra funcion, pero teniendo una funcion madre es mas visual todo esto 
}


function movertumascota(e){
    lienzo.clearRect(tumascotax,tumascotay,200,200)  /* limpiar lienzo */



    if (e.target.id == "flechaarriba" && tumascotay - 100 > 0 || e.code == "ArrowUp" && tumascotay - 100 > 0){
        tumascotay = tumascotay -100
    }
    else if (e.target.id == "flechaizquierda" && tumascotax - 100 > 0 || e.code == "ArrowLeft" && tumascotax - 100 > 0){
        tumascotax = tumascotax -100    
    }
    else if (e.target.id == "flechaabajo" && tumascotay + 100 <= 1301 || e.code == "ArrowDown" && tumascotay + 100 <= 1301){
        tumascotay = tumascotay +100    
    }
    else if (e.target.id == "flechaderecha" && tumascotax + 100 <= 2801 || e.code == "ArrowRight" && tumascotax + 100 <= 2801){
        tumascotax = tumascotax +100      
    }
    console.log(tumascotax,tumascotay)  /* muestra coordenadas */
    console.log(tumascotax + 200, tumascotay +200)
    
    /* crear la nueva mascota */
    let iconomascota = new Image()
    iconomascota.src=  tueleccion.foto
    lienzo.drawImage(iconomascota,tumascotax,tumascotay,200,200) 


}







function funciontuataque(){
    sectionataque.style.display="none"
    sectionmensajes.style.display="none"
    sectionmapa.style.display="flex" 

  
    
    let iconomascota = new Image()
    iconomascota.src=  tueleccion.foto  /* no me funciona el icono :( */
    lienzo.drawImage(iconomascota,tumascotax,tumascotay,200,200)

    document.addEventListener("keydown",  (e)=>{
        movertumascota(e)
    });

    botonesmover = document.querySelectorAll(".botonesmover")    /* con esto podemos agarrar elementos con una clase en un html*/
    botonesmover.forEach(element => {     
        element.addEventListener("click",  (e) => {
            movertumascota(e)
        })
   });

   


   /* se puede hacer con listeners, pero es mejor usar los query selector para saber cual se eligio 
   el unico detalle es ponerles id a los botones y id a las imagenes */

    /* const flechaarriba = document.getElementById("flechaarriba")
    const flechaizquierda = document.getElementById("flechaizquierda")
    const flechaabajo = document.getElementById("flechaabajo")
    const flechaderecha = document.getElementById("flechaderecha")


    flechaarriba.addEventListener("click", moverarriba)
    flechaizquierda.addEventListener("click", moverizquierda)
    flechaabajo.addEventListener("click", moverabajo)
    flechaderecha.addEventListener("click", moverarriba) */



    
/*     botonreset.addEventListener ("click", continua)*/

    tueleccion.ataques.forEach((ataques) => {      /* tener en cuenta que el argumento del for each (ataques, tiene que ser igual a los elementos dentor ataques.nombreataque) */
        let botonesataque = `
        <button class="botonataque" id="${ataques.id}"  > 
        ${ataques.nombreataque}
        </button>
        `
        botonataque.innerHTML += botonesataque
    });

    /* tueleccion.ataques.forEach((ataques) => {

        let botonesataque


        input= botonesataque.getElementById(ataques.nombreataque)
        input.addEventListener("mouseover", ataqueelboton)
           
    });   */

    /*console.log(tusataques) */
    
   tusataques = document.querySelectorAll(".botonataque")    /* con esto podemos agarrar elementos con una clase en un html*/
   

   tusataques.forEach(element => {     
        element.addEventListener("click", (e) => {

            for (i=0; i<ataquesposibles.length; i++){
                if (ataquesposibles[i] == e.target.id){
                    numerotuataque = i
                }
            }

            /* if (e.target.id == "Fuego🔥" ){
                numerotuataque = 1
            }
            else if(e.target.id == "Agua💧"){
                numerotuataque= 2
            }
            else if (e.target.id == "Tierra🌱" ){
                numerotuataque= 3
            } 
 */
            element.disabled = true
            element.style.borderColor = "white"
            contadordeataques = contadordeataques -1

            /* tuataque = decodificacionataque (numerotuataque) */
            tuataque= e.target.id
            alert ("Has decidido atacar con: " + tuataque)
            funcionataquerival()
            secuenciatusataques.push(numerotuataque)
            
        }

        )
   });


    /* botonfuego = document.getElementById("🔥🔥🔥") 
    botonagua= document.getElementById("💧💧💧")
    botontierra = document.getElementById("🌱🌱🌱") 

    botonfuego.addEventListener("click", ataquefuego)
    botonagua.addEventListener("click", ataqueagua)
    botontierra.addEventListener("click", ataquetierra) */ 
 




    /* elboton.addEventListener("mouseover", ataqueelboton) */



    //botonfuego.addEventListener("click", funcionataquerival)     
    //botonagua.addEventListener("click", funcionataquerival)
    //botontierra.addEventListener("click", funcionataquerival)

    //es buena opción para ejecutrar el ataque rival a la vez que seleccionas tu ataque, pero se puede de otra forma

    //la otra forma es realizar la funcionataquerival justo cuando termine la funcion ataquefuego

    //entonces dentro de la funcionatquefuego estará la funcionataque rival()

    //esta opcion es mas visual que la actual, depende de la complejidad del codigo



}
function ataquefuego(){  
    //cuando se termina el juego se utiliza la funcion disabled para poder acabar, aqui el boton ya no funciona
    numerotuataque = 1     
    tuataque = decodificacionataque (numerotuataque)
    alert ("Has decidido atacar con: " + tuataque)
        
    funcionataquerival()
}
function ataqueagua(){
    //se usa una condicional if, y cuando se llega a cero ya no permite seguir la función, sin embargo el boton continua
    if (medallasrival < 5 && tusmedallas < 5){
        numerotuataque = 2
        tuataque = decodificacionataque (numerotuataque)
        alert ("Has decidido atacar con: " + tuataque)
        funcionataquerival()
    }
    else {
        alert ("Se ha acabado, " + resultado +  ", reinicia")
    }
}
function ataquetierra(){
    if (medallasrival < 5 && tusmedallas < 5){
        numerotuataque = 3
        tuataque = decodificacionataque (numerotuataque)
        alert ("Has decidido atacar con: " + tuataque)
        funcionataquerival()
    }
    else {
        alert ("Se ha acabado, " + resultado +  ", reinicia")
    }
}
function ataqueelboton(){ 
    alert("EL BOTONNNNNN!!!")
}

/* lo de arriba ya no sirve */


function decodificacionataque (numero){
    if (numero  ==1){
        ataque = "Fuego🔥"
    }
    else if (numero == 2){
        ataque ="Agua💧"
    }
    else if (numero ==3){
        ataque = "Tierra🌱"
    }
    return ataque
}

/* esto de auqi arriba tampoco sirve  */
function funcionataquerival(){

    //let numeroataquerival = Math.floor(Math.random()*3+1)       aqui un error, cuando declaramos una vriable dentro de una función solo funciona dentro
    //let ataquerival =""                  //aqui se usa para decidir el ataque,  hace falta declararla arriba para que se guarde 
    //necesitamos declararla afuera para que sea variable global y podamos reutilizarla, y se pueda gurdar

    /* numeroataquerival = Math.floor(Math.random()*3+1)  */   //aqui generamos numeros aleatorios 
    /* numero = numeroataquerival  */

    /* console.log(secuenciaataquesrival[contadordeataques]) */   /* escogemos un numero de la secuencia aleatoria */

    let ataquemascotarival = (eleccionrival.ataques[secuenciaataquesrival[contadordeataques]].id)    /* sacamos el ataque del numero anterio */

    /* console.log(ataquemascotarival) */


    for (i=0; i<ataquesposibles.length; i++){
        if (ataquesposibles[i] == ataquemascotarival ){
            numeroataquerival = i
        }
    }


    /* if (ataquemascotarival == "Fuego🔥" ){
        numeroataquerival = 1
    }
    else if(ataquemascotarival == "Agua💧"){
        numeroataquerival= 2
    }
    else if (ataquemascotarival == "Tierra🌱" ){
        numeroataquerival= 3
    }  */

    /* ataquerival = decodificacionataque(numeroataquerival) */
    ataquerival= eleccionrival.ataques[secuenciaataquesrival[contadordeataques]].id
    alert("Tu rival dedició atacar con: " + ataquerival)
    funcioncombate()
    addataqueyresultado()
}
function funcioncombate(){
    // 1 = fuego 
    // 2 = agua 
    // 3 tierra
    combate = numerotuataque - numeroataquerival
    if (combate == 1 || combate == -2){
        alert ("Ganaste")
        resultado = "GANASTE"
        tusmedallas = tusmedallas +1
    }
    else if ( combate == -1 || combate ==2){ 
        alert ("Perdiste")
        resultado ="PERDISTE"
        medallasrival = medallasrival +1
    }
    else {
        resultado = "Empate😒"
        alert ("Empate ")
    }

    /* tuvida.innerHTML = vidas(tusmedallas) */

    let spantusmedallas = ""
    let spanmedallasrival =""


    for (i=0; i < tusmedallas; i++){
        spantusmedallas += "🎖️"
        tuvida.innerHTML = spantusmedallas
    }
    for (i=0; i < medallasrival; i++){
        spanmedallasrival += "🎖️"    
        vidarival.innerHTML = spanmedallasrival  /* no funciona esto, era un espacio en el id */
    }

    /* vidarival.innerHTML = vidas (medallasrival) */
    spantuataque.innerHTML=  tuataque
    spantuataquerival.innerHTML= ataquerival
    spanresultado.innerHTML = resultado
}
/* function vidas (medallas){

    for (i=0; i < medallas; i++){
        if (i== medallas){
            for (j=0; i < i; j++){
                tuvida.innerHTML +=🎖️
            }
        } 
    }


    if (corazones == 5){
        corazones = "❤️❤️❤️"
    }
    else if (corazones == 4){
        corazones = "❤️❤️"

    }
    else if (corazones == 3){
        corazones = "❤️"
    }
    else {
        corazones = " "
    } 
    return corazones
} */
function addataqueyresultado() {        
    //esta función se ejecutará al elegir un ataque    se puede poner tambien al final de  funcionataque rival
    //let mensajes = document.getElementById("sectionataque")     //"mensajes" es la section donde se muestra tu ataque rival, el resultado y el puntaje
    let parrafo = document.createElement("p")    /* este no se declara arriba porque es propio de esta función*/
    parrafo.innerHTML = ("Tu ataque: " + tuataque + "                     " + "Ataque rival: " + ataquerival)
    sectionmensajes.appendChild(parrafo)
    //mensajes = document.getElementById("mensajes")      no hace falta ponerlo, ya que esta declarado arriba
    parrafo = document.createElement("p")
    parrafo.innerHTML = ("Resultado: " + resultado)
    sectionmensajes.appendChild(parrafo)
    parrafo = document.createElement("p")
    parrafo.innerHTML = ("----------")
    sectionmensajes.appendChild(parrafo)
    if (contadordeataques == 0){
        resultado = resultadofinal()
        spanltuataque.innerHTML=  tuataque
        spanltuataquerival.innerHTML= ataquerival
        spanresultadofinal.innerHTML = resultado + "!"

        // por mas que sea la misma info que la varibale spanresultado (la cual llamma a resultado en la section de ataque), 
        //no sirve si son las mismas variables, hay que cambiar el nombre de las variables

        sectionataque.style.display= "none"
        sectionreset.style.display="flex"
        fin()
        let parrafo = document.createElement("p")
        parrafo.innerHTML = ("Se acabó: " + resultado)
        mensajes.appendChild(parrafo)
    }
    //entonces para introducir al innerhtml, se declara la variable a modificar, se crea el elemento, se le agrega texto, y al final el appen.Child lo introduce
}
function resultadofinal(){
    if (tusmedallas > medallasrival){
        resultadofinal= "GANASTE"
    }
    else if (tusmedallas < medallasrival){
        resultadofinal = "PERDISTE"
    }
    else {
        resultadofinal = "EMPATE 😒"
    }

    return resultadofinal

}


function fin (){
    alert ("Se ha acabado, " + resultado +  ", reinicia")
    /* botonfuego.disabled=true  */
    botonreset.addEventListener("click", reinicio)        //se puede crear el listener junto con los demas botones y reiniciar cuando se quiera
    //en este caso se reinicia cuando acaba el juego
}
function reinicio(){
    location.reload()
}
/* function continua(){
    if (tucorazones > 0 && corazonesrival >0){
    alert("Esto no se acaba hasta que uno de los dos pierda, continua") /* esto ya no sirve, puesto a que se ejecuta la funcion reinicio antes
    si no se ejecuta la funcion reinicio sale esto  
    }
} */
window.addEventListener("load", funcioncargar)
