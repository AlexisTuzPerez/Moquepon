
const sectionataque = document.getElementById("sectionataque")
const sectionreset=document.getElementById("sectionreset")
const sectionmascota= document.getElementById("sectionmascota")       
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
const sectionvictoria = document.getElementById("sectionvictoria")
const imgmascota= document.getElementById("imgmascota")
const resetfinal = document.getElementById("resetfinal")
let jugadoreservidor = []
let enemigos = []
let jugadorId = null
let Eaux
let Dimondust
let Ignity
let tueleccion ="Nadie"
let eleccionrival =""
let ataque 
let combate 
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
let tumascotaxcopy 
let tumascotaycopy
let mascotas= []
let ataquesposibles = ["Fuego🔥","Agua💧","Tierra🌱"]
let coordenadasm = []
let mascotacolisionada = ""
let s =[0,1,2,3,4]
let mascotasderrotadas=[]
let fotomascota
let vy = 0
let vx= 0 

const arbol = new Image()
arbol.src= "./css/arbol.png"

class Mascota {
    constructor(nombre, foto, iconoderrota){ 
        this.nombre = nombre
        this.foto= foto
        this.fotomapa = new Image()
        this.fotomapa.src = foto
        this.ataques=[] 
        this.iconoderrota= iconoderrota  
        this.x = 0
        this.y = 0
        this.xs = 0
        this.ys= 0
    }
    pintarmascota(){
        lienzo.drawImage(this.fotomapa,this.x,this.y,200,200)
      } 
}
let eauxobj = new Mascota ("Eaux", "./css/magua.webp","./css/iconoderrota/maguaderrota.png" )
let dimondustobj= new Mascota ("Dimondust", "./css/mtierra.png", "./css/iconoderrota/mtierraderrota.png" )
let ignityobj = new Mascota ("Ignity", "./css/mfuego.png","./css/iconoderrota/mfuegoderrota.png")
let fuegin = new Mascota ("Fuegin", "./css/fuegin.png","./css/iconoderrota/fueginderrota.png") 
let awita = new Mascota ("Awita", "./css/awita.png", "./css/iconoderrota/awitaderrota.png"  )
let tronco = new Mascota ("Tronco", "./css/tronco.png", "./css/iconoderrota/troncoderrota.png")
mascotas.push(eauxobj, dimondustobj, ignityobj,fuegin, awita, tronco)


let eauxataques =[ 
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
]

eauxobj.ataques.push(...eauxataques)




let dimondustataques = [
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
]

dimondustobj.ataques.push (...dimondustataques)


let ignityataques =[
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
]

ignityobj.ataques.push(...ignityataques)


let fueginataques =[
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
]

fuegin.ataques.push(...fueginataques)


let awitaataques=[
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
]

awita.ataques.push(...awitaataques) 

let troncoataques = [
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
    {nombreataque: "🔥🔥🔥", id: "Fuego🔥"},
    {nombreataque:"💧💧💧", id: "Agua💧"},
    {nombreataque:"🌱🌱🌱", id: "Tierra🌱"},
]
tronco.ataques.push(...troncoataques)

    



function funcioncargar (){
    sectioninicio.style.display="flex"
    sectionvictoria.style.display="none"
    sectionmapa.style.display="none"
    sectionataque.style.display="none"
    sectionreset.style.display="none"
    sectionmascota.style.display="none"
    sectionmensajes.style.display="none"
    botoninicio.addEventListener("click",funcionbotoninicio)
    varbotonseleccionar.addEventListener("click", funcionbotonseleccionar)
}
function funcionbotoninicio(){
    sectioninicio.style.display="none"
    sectionmascota.style.display="flex"
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
    inicioServer()

    



}
function funcionbotonseleccionar (){
    
    funciontumascota()
    funcionmapa()
    mascotaJugador(tueleccion)
}
function funciontumascota(){
    
    sectionmascota.style.display="none"       
    for (let i = 0; i < (inputsmascota.length); i++) {
        if (inputsmascota[i].checked){
            numerotueleccion = i
        }  
    }
    if (numerotueleccion== 10){     
        alert("Selecciona una mascota")
        location.reload()              
    }
    tueleccion = mascotas[numerotueleccion]
    

    nombretumascota.innerHTML= tueleccion.nombre
    fotomascota = ` <img src= "${tueleccion.foto}" alt= "${tueleccion.nombre}" id="${tueleccion.nombre}"> `
    nombretumascota.innerHTML += fotomascota
    alert ("Has elegido a: " + tueleccion.nombre)

    /* var jsonString = JSON.stringify(tueleccion);
    console.log(jsonString); */
}
function funcionmascotarival(){
    eleccionrival = mascotacolisionada
    mascotarival.innerHTML = eleccionrival.nombre
    fotomascota = ` <img src= "${eleccionrival.foto}" alt= "${eleccionrival.nombre}" id="${eleccionrival.nombre}"> `
    mascotarival.innerHTML += fotomascota
    alert("Vas enfrentar a: " + eleccionrival.nombre) 
    n = eleccionrival.ataques.length
    secuenciaataquesrival=[]
    for (i=0; i<n; i++){
    secuenciaataquesrival.push(i)
    }
    for (i=0; i < secuenciaataquesrival.length; i++){
        let numeroprueba = Math.floor(Math.random()*n+0) 
        let k= secuenciaataquesrival[i]
        secuenciaataquesrival[i] = secuenciaataquesrival[numeroprueba]
        secuenciaataquesrival[numeroprueba] = k
    }
    console.log(secuenciaataquesrival) 
    console.log(eleccionrival.ataques)
}
function funcionmapa(){
   




  


    mapa.width= 3000
    mapa.height= 1500

    setInterval(responsive, 125)
    setInterval(drawimage, 125)
    sectionmapa.style.display="flex" 
    tueleccion.pintarmascota()
    lienzo.drawImage(arbol,500,500,200,200)


    


   setInterval(listadejugadores, 125)









    
   //listadejugadores()   se hace  con set interval para estar constantemente recibiendo los jugadores 


    
    mascotas.forEach(element => {
        element.x = (Math.floor(Math.random()*(24)+5))*100
        element.y =  (Math.floor(Math.random()*(9)+5))*100
        element.pintarmascota()
        coordenadasm.push(element.x,element.y)
    });
  


    tueleccion.x = 0 
    tueleccion.y= 0
    document.addEventListener("keydown",  (e)=>{  
        movertumascota(e)
    });
    document.addEventListener("keyup", (e)=>{
        if (e.code == "ArrowUp" || e.code == "ArrowLeft" || e.code == "ArrowDown" || e.code == "ArrowRight")
        detenermov()

    });


}
function responsive (){
    let width= window.innerWidth - 100
    let height = width* 400 / 1000
    if (width < 1000){
        mapa.style.height = height + "px"
        mapa.style.width= width + "px"
    }
    else{
        mapa.style.height = "400px"
        mapa.style.width="1000px"
    }
   }
function drawimage(){
    lienzo.clearRect(tueleccion.x,tueleccion.y,200,200) 
    tumascotaxcopy = tueleccion.x
    tumascotaycopy = tueleccion.y
    tueleccion.y = tueleccion.y + vy
    tueleccion.x = tueleccion.x + vx  
    if (tueleccion.y +  vy < -100 || tueleccion.y + vy >= 1500  ){
        tueleccion.y = tueleccion.y - vy
    }
    else if (tueleccion.x + vx < -100 || tueleccion.x + vx >= 3000 ){  
        tueleccion.x = tueleccion.x - vx     
    }
    dibujarmascota()
}
function movertumascota(e){
  /*   lienzo.clearRect(tueleccion.x,tueleccion.y,200,200) 
    vy=0 
    vx=0
    tumascotaxcopy = tueleccion.x
    tumascotaycopy = tueleccion.y */
    if (e.code == "ArrowUp" && tueleccion.y - 100 >= 0){
        //tueleccion.y = tueleccion.y -100
        moverarriba()
    }
    else if (e.code == "ArrowLeft" && tueleccion.x - 100 >= 0){
        //tueleccion.x = tueleccion.x -100  
        moverizquierda()  
    } 
    else if (e.code == "ArrowDown" && tueleccion.y + 100 <= 1300){
        //tueleccion.y = tueleccion.y +100   
        moverabajo ()
    }
    else if (e.code == "ArrowRight" && tueleccion.x + 100 <= 2800){
        //tueleccion.x = tueleccion.x +100
        moverderecha()     
    }

    //dibujarmascota()

    
    
    
} 
function dibujarmascota(){
    tueleccion.xs = tueleccion.x + 200
    tueleccion.ys = tueleccion.y + 200 
    colisionador(500,500,700,700)




    
    jugadoreservidor.forEach(element => {

        if (element.x >= 300 || element.y == 300){
        colisionador(element.x, element.y, (element.x + 200), (element.y + 200))

        }
    });

    for( ii=0; ii<(mascotas.length*2); ii+=2){
        colisionador(coordenadasm[ii],coordenadasm[ii+1], (coordenadasm[ii]+200), (coordenadasm[ii+1]+200))
        for(d=0; d<mascotasderrotadas.length; d++){
            if (mascotasderrotadas[d]== mascotas[(ii/2)].nombre){
                mascotas[(ii/2)].fotomapa.src=mascotas[(ii/2)].iconoderrota 
            }
        }
        lienzo.drawImage(mascotas[(ii/2)].fotomapa,coordenadasm[ii],coordenadasm[ii+1],200,200)
    } 


    lienzo.drawImage(arbol,500,500,200,200)
    tueleccion.pintarmascota() 
    enviarCoordenadas(tueleccion.x, tueleccion.y, tueleccion.foto)


}
function colisionador(posicionx, posiciony, posicionxs, posicionys){
    if(posicionx < tueleccion.xs  && tueleccion.xs < posicionxs &&  tueleccion.y == posiciony ){
        accioncolisionador(posicionx,posiciony)  
    }
    else if (posicionx < tueleccion.x && tueleccion.x < posicionxs && tueleccion.y == posiciony){
        accioncolisionador(posicionx,posiciony)
    }
    else if ( posiciony < tueleccion.ys && tueleccion.ys < posicionys && tueleccion.x == posicionx){
        accioncolisionador(posicionx,posiciony) 
    }
    else if (posiciony < tueleccion.y && tueleccion.y < posicionys && tueleccion.x == posicionx){
        accioncolisionador(posicionx,posiciony)
    }
}
function accioncolisionador(posicionx,posiciony){
    vx=0 
    vy = 0 
    tueleccion.x = tumascotaxcopy
    tueleccion.y = tumascotaycopy
    let ganaste = ""
    for (j=0;j<((coordenadasm.length)*2); j+=2){
        if (coordenadasm[j]== posicionx && coordenadasm[j+1] == posiciony){ 
            mascotacolisionada = mascotas[j/2]
            for (t=0; t<mascotasderrotadas.length; t++){
                if(mascotacolisionada.nombre== mascotasderrotadas[t]){
                    alert("Ya le ganaste a este rival")
                    ganaste = "t"
                }
            }
            if(mascotasderrotadas.length==0 || ganaste != "t"){
                funcionmascotarival()
                funciontuataque()
            }    
        }
    } 


    enemigos.forEach(element => {
        if (element.x == posicionx && element.y == posiciony){

            mascotacolisionada =element

            funcionmascotarival()
                

            funciontuataque()

            
        }
        

        
    });


    


}
function moverabajo(){
    vx=0
    vy = 100
}
function moverarriba(){
    vx=0
    vy = -100
}
function moverderecha(){
    vy=0
    vx = 100
}
function moverizquierda(){
    vy=0
    vx = -100
} 
function detenermov(){
    vx=0 
    vy=0
}
function funciontuataque(){
    sectionataque.style.display="flex"
    sectionmensajes.style.display="flex"
    sectionmapa.style.display="none" 
    botonataque.innerHTML = ""
    sectionmensajes.innerHTML=""
    contadordeataques = 5
    tusmedallas = 0
    medallasrival=0
    vidarival.innerHTML=""
    tuvida.innerHTML=""
    spantuataque.innerHTML=  ""
    spantuataquerival.innerHTML= ""
    spanresultado.innerHTML = ""
    for (i=0; i < 5; i++){
        let numeroprueba = Math.floor(Math.random()*5+0)
        let k= s[i]
        s[i] = s[numeroprueba]
        s[numeroprueba] = k
    }
    s.forEach((element) => {  
        let botonesataque = `
        <button class="botonataque" id="${tueleccion.ataques[element].id}"  > 
        ${tueleccion.ataques[element].nombreataque}
        </button>
        `
        botonataque.innerHTML += botonesataque
    });
   tusataques = document.querySelectorAll(".botonataque")   
   tusataques.forEach(element => {     
        element.addEventListener("click", (e) => {
            for (i=0; i<ataquesposibles.length; i++){
                if (ataquesposibles[i] == e.target.id){
                    numerotuataque = i
                }
            }
            element.disabled = true
            element.style.borderColor = "white"
            contadordeataques = contadordeataques -1
            tuataque= e.target.id
            alert ("Has decidido atacar con: " + tuataque)
            funcionataquerival()
            secuenciatusataques.push(numerotuataque)  
        }
        )
   });
}
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
function funcionataquerival(){
    let ataquemascotarival = (eleccionrival.ataques[secuenciaataquesrival[contadordeataques]].id) 
    for (i=0; i<ataquesposibles.length; i++){
        if (ataquesposibles[i] == ataquemascotarival ){
            numeroataquerival = i
        }
    }
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
    spantusmedallas = ""
    spanmedallasrival =""
    for (i=0; i < tusmedallas; i++){
        spantusmedallas += "🎖️"
        tuvida.innerHTML = spantusmedallas
    }
    for (i=0; i < medallasrival; i++){
        spanmedallasrival += "🎖️"    
        vidarival.innerHTML = spanmedallasrival
    }
    spantuataque.innerHTML=  tuataque
    spantuataquerival.innerHTML= ataquerival
    spanresultado.innerHTML = resultado
}
function addataqueyresultado() {        
    let parrafo = document.createElement("p")  
    parrafo.innerHTML = ("Tu ataque: " + tuataque + "                     " + "Ataque rival: " + ataquerival)
    sectionmensajes.appendChild(parrafo)
    parrafo = document.createElement("p")
    parrafo.innerHTML = ("Resultado: " + resultado)
    sectionmensajes.appendChild(parrafo)
    parrafo = document.createElement("p")
    parrafo.innerHTML = ("----------")
    sectionmensajes.appendChild(parrafo)
    if (contadordeataques == 0){
        let resultadofinal
        if (tusmedallas > medallasrival){
            resultadofinal= "GANASTE"
            mascotasderrotadas.push(eleccionrival.nombre)
        }
        else if (tusmedallas < medallasrival){
            resultadofinal = "PERDISTE"
        }
        else {
            resultadofinal = "EMPATE 😒"
        }
        resultado = resultadofinal
        spanltuataque.innerHTML=  tuataque
        spanltuataquerival.innerHTML= ataquerival
        spanresultadofinal.innerHTML = resultado + "!"
        sectionataque.style.display= "none"
        sectionreset.style.display="flex"
        alert ("Se ha acabado, " + resultado +  ", reinicia")
        botonreset.addEventListener("click", reinicio)     
        let parrafo = document.createElement("p")
        parrafo.innerHTML = ("Se acabó: " + resultado)
        mensajes.appendChild(parrafo)
        if(mascotasderrotadas.length == mascotas.length){
            final()
        }
    }
}
function final(){
    sectionvictoria.style.display="flex"
    sectionmapa.style.display="none"
    sectionreset.style.display="none"
    sectionmensajes.style.display="none"
    let imgvictoria = `<img src= "${tueleccion.foto}" alt= "${tueleccion.nombre}" id="imgvictoria"> `
    imgmascota.innerHTML += imgvictoria
    resetfinal.addEventListener("click", funcionresetfinal)
}
function funcionresetfinal(){
    location.reload()
}
function reinicio(){
    sectionreset.style.display="none"
    sectionmensajes.style.display="none"
    sectionmapa.style.display="flex"  
}

function inicioServer(){

    fetch("http://localhost:8080/inicioServer")
        .then(function(res){
            
            if (res.ok){
                res.text()
                    .then( function(respuesta){
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })

    // para utilizar otro metodo fetch("http://localhost:8080/inicioServer", {method: "post"})

}

function mascotaJugador(tueleccion){

    fetch(`http://localhost:8080/mascotaJugador/${jugadorId}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mascotaJugador: tueleccion.nombre
        })})
        .then(function(res){
            if (res.ok){
                console.log("servicio dos existoso")   
            }
        })    
} 
function enviarCoordenadas(x, y, foto){
    fetch(`http://localhost:8080/coordenadas/${jugadorId}`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x: x,
            y: y,
            foto: foto,
        })})
        .then(function(res){
            if (res.ok){
                //console.log("Servicio tres exitoso")
            }
        })
} 

function listadejugadores(){

    
    fetch(`http://localhost:8080/jugadores/${jugadorId}`)
        .then(function(res){
            if (res.ok){
                //console.log ("Servicio 4 exitoso")
                res.text()
                    .then(function(respuesta){  // podemos poner la variable que se envió en vez de respuesta
                        jugadoreservidor =JSON.parse(respuesta) // importante para pasar de json a array 
                        enemigos = jugadoreservidor



                        dibujarjugadoresservidor(jugadoreservidor)
                                        
                    })
            }
        })


}
function  dibujarjugadoresservidor(jugadoreservidor){
    enemigos = []
    /* mascotas.forEach(element => {
        enemigos.push(element)
        
    }); */


    jugadoreservidor.forEach(element => {

        

 

        let enemigo = ""

        if (element.mascota != null){




            if( element.mascota.nombre == "Eaux"){
                enemigo = new Mascota ("Eaux", "./css/magua.webp","./css/iconoderrota/maguaderrota.png" )
                enemigo.ataques.push(...eauxataques)
            }
            else if ( element.mascota.nombre =="Dimondust"){
                enemigo= new Mascota ("Dimondust", "./css/mtierra.png", "./css/iconoderrota/mtierraderrota.png" )
                enemigo.ataques.push (...dimondustataques)




            }
            else if ( element.mascota.nombre =="Ignity" ){
                enemigo = new Mascota ("Ignity", "./css/mfuego.png","./css/iconoderrota/mfuegoderrota.png")
                enemigo.ataques.push(...ignityataques)


                
            }
            else if ( element.mascota.nombre == "Fuegin"){

                enemigo = new Mascota ("Fuegin", "./css/fuegin.png","./css/iconoderrota/fueginderrota.png") 
                enemigo.ataques.push(...fueginataques)


                
            }
            else if ( element.mascota.nombre == "Awita"){
                enemigo = new Mascota ("Awita", "./css/awita.png", "./css/iconoderrota/awitaderrota.png"  )
                enemigo.ataques.push(...awitaataques) 
                
                
            }
            else if ( element.mascota.nombre == "Tronco"){
                enemigo = new Mascota ("Tronco", "./css/tronco.png", "./css/iconoderrota/troncoderrota.png")
                enemigo.ataques.push(...troncoataques)

            }

            enemigos.push(enemigo)

            enemigo.x = element.x 
            enemigo.y = element.y 

        
            

            if (element.x >= 300  || element.y >= 300){
                lienzo.clearRect(element.xcopy,element.ycopy,200,200) 

            
                let fotoservidor = new Image()
                fotoservidor.src = element.foto
                
                lienzo.drawImage(fotoservidor, element.x, element.y,200, 200)
            }
        


        }

    }); 
    //console.log(enemigos)






}


window.addEventListener("load", funcioncargar)
