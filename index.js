
//Importar express js 

const express = require("express")


//crear el servidor, la app

const app = express()


// importar cors y usar cors

const cors = require("cors")

app.use(cors())


// para poder usar información tipo json 



app.use(express.json())



let jugadores =[]

class Jugador {
    constructor(id){
        this.id= id
        this.x = 0
        this.y = 0
        this.xcopy = 0
        this.ycopy = 0
        this.mascota = null
    }

    mascotaJugador(mascota){
        this.mascota= mascota
    }
    coordenadas(x,y, foto){
        this.x = x 
        this.y = y
        this.foto = foto
        
    }
    index(i){
        this.i = i
    }

}

class Mascota{
    constructor(nombre){
        this.nombre = nombre
    }
}

//La respuesta al ingresar al servidor 

app.get("/inicioServer", (req,res)=> {

    const id = `${(Math.floor(Math.random()*(100000)+0))}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)


    // dar acceso al servidor importante


    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)

    //res.send("Hola Mundo 2.0")  solo se puede usar .send una vez al parecer

    //console.log(jugadores)

})


// enviar la mascota seleccionada al servidor

app.post("/mascotaJugador/:jugadorId", (req,res)=>{

    //jugadorId es una variable que se manda a traves del url, asi se mandan variables, el params es eso que se envia 

    const jugadorId= req.params.jugadorId || ""

    const mascotaJugador = req.body.mascotaJugador || ""


    const mascota = new Mascota(mascotaJugador)


    const jugadorIndex = jugadores.findIndex((element) =>  jugadorId === element.id)


    if (jugadorIndex >= 0 ){
        jugadores[jugadorIndex].index(jugadorIndex)
        jugadores[jugadorIndex].mascotaJugador(mascota)

    }

    res.setHeader("Access-Control-Allow-Origin", "*")

    //res.send("respuesta mensaje servicio dos")


    /* console.log(jugadorIndex)
    console.log(jugadorId)
    console.log(mascotaJugador) */

    
   /*  console.log(mascotaJugador)
    console.log(jugadores[jugadorIndex].mascota) */ 

    res.end()

}) 

// enviar coordenadas


app.post("/coordenadas/:jugadorId", (req,res) => {

    const jugadorId = req.params.jugadorId || ""

    const x = req.body.x || 0
    const y = req.body.y || 0
    const foto = req.body.foto || ""

    const jugadorIndex = jugadores.findIndex((element) => jugadorId === element.id)

    if (jugadorIndex >= 0){
        jugadores[jugadorIndex].xcopy =  jugadores[jugadorIndex].x
        jugadores[jugadorIndex].ycopy =  jugadores[jugadorIndex].y



        jugadores[jugadorIndex].coordenadas(x,y, foto) 
    }






    res.setHeader("Access-Control-Allow-Origin", "*")

    res.end()

})


app.get("/jugadores/:jugadorId", (req, res) =>{

    const jugadorId = req.params.jugadorId

    const jugadorIndex = jugadores.findIndex((element) => jugadorId === element.id)

    let jugadorescopy = jugadores.slice()   // la copia hay que hacer una copia tal cual porque si no modifica a jugadores  .slice() 

    
    if (jugadorIndex >= 0){
        jugadorescopy.splice(jugadorIndex,1)
    }   





    res.json(jugadorescopy)
    





})




//Activar el servidor, escuchar activamente las peticiones de usuarios


app.listen(8080,() => {
    console.log("Server funcionando")
})


// cuando corre el archivo 


console.log("Hola Mundo")

console.log("soy un hackerrrrrrr")
