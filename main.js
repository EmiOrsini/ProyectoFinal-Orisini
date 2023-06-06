let numero1 = parseInt(prompt("establesca cantidad de goles:"))
let numer2 = parseInt(prompt("establesca cantidad de asistencias:"))
let numero3 = parseInt(prompt("establesca cantidd de partidos jugados:"))

class topPromedios {
    constructor(nombreJugador, promedioJugador){
        this.nombre = nombreJugador
        this.promedio = promedioJugador
    }
}

const top5 = new topPromedios("Cristiano", 0.75)

const top4 = new topPromedios("Eusebio", 0.81)

const top3 = new topPromedios("Messi", 0.89)

const top2 = new topPromedios("Seeler", 0.92)

const top1 = new topPromedios("Muller", 0.94)

function calcularPromedio(goles, asistencias, partidos) {

    if (!goles) {
        alert("Ingrese cantidad de goles!")
        return false
    }

    if (!asistencias) {
        alert("Ingrese cantidad de asistencias!")
        return false
    }

    if ((!partidos) || (numero3 == 0)) {
        alert("Ingrese cantidad de partidos jugados!")
        return false
    }
    
    let promedio = (goles + asistencias) / partidos

    if (promedio > 0.70) {
        alert("Entras en el top 5 futboilistas con mejor promedio")
    } else {
        alert("no entra dentro del top 5 futbolistas con mejor promedio")
    }
   
    if ((promedio > 0.75) && (promedio < 0.79)) {
        alert("Felicidades!! te ubicas en el top 5 superando a" + this.nombre + "que su poromedio es de" + this.promedio)
    }

    if ((promedio > 0.79) && (promedio < 0.81)){
        alert("Felicidades!! te ubicas en el top 4 superando a" + this.nombre + "que su poromedio es de" + this.promedio)
    }
    
    if ((promedio > 0.81) && (promedio < 0.89)){
        alert("Felicidades!! te ubicas en el top 3 superando a" + this.nombre + "que su poromedio es de" + this.promedio)
    }

    if ((promedio > 0.89) && (promedio < 0.92)){
        alert("Felicidades!! te ubicas en el top 2 superando a" + this.nombre + "que su poromedio es de" + this.promedio)
    }

    if (promedio > 0.94){
        alert("Felicidades!! te ubicas en el top 1 superando a" + this.nombre + "que su poromedio es de" + this.promedio)
    }

    console.log(promedio)
    alert("el promedio de participacion en goles por partidos es de " + promedio.toFixed(2))
}

calcularPromedio(numero1, numer2, numero3)