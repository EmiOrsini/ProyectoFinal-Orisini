let numero1 = parseInt(prompt("establesca cantidad de goles:"))
let numer2 = parseInt(prompt("establesca cantidad de asistencias:"))
let numero3 = parseInt(prompt("establesca cantidd de partidos jugados:"))

function promedioParticipacionDeGolesPorPartido(goles, asistencias, partidos) {

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
    
    if (promedio > 0.80) {
        alert("top 10 futboilistas con mejor promedio")
    } else {
        alert("no entra dentro del top 10 futbolistas con mejor promedio")
    }

    let promedio = (goles + asistencias) / partidos
    console.log(promedio)
    alert("el promedio de participacion en goles por partidos es de " + promedio.toFixed(2))
}

promedioParticipacionDeGolesPorPartido(numero1, numer2, numero3)