class Programa{
    constructor(id, nombre, duracionHoras, precioPorHora) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.duracionHoras = duracionHoras;
        this.precioPorHora = precioPorHora;
        this.precioPrograma = this.precioPorHora*this.duracionHoras;
    }

}

function agregarPrograma(){
    let numeroProgramas = parseInt(prompt("¿Cuántos programas desea cargar?"));
    let programas =[];

    for(let index = 0; index < numeroProgramas; index++){
        let id = parseInt(prompt("Asigne número de id del Programa"));
        let nombre = prompt("Ingrese el nombre del Programa");
        let duracionHoras = parseInt(prompt("Ingrese cantidad de horas del Programa"));
        let precioPorHora = parseInt(prompt("Ingrese el precio por hora"));

        let programaACargar = new Programa(id, nombre, duracionHoras, precioPorHora);

        programas.push(programaACargar);
    }

    let programaNuevo = new Programa(2, "Tu Nuevo Rol", 56, 2000);
    programas.unshift(programaNuevo);
    console.log(programas);
    return programas;
}

function mostrarProgramas(programas){
    for (const programa of programas){
        console.log(programa);
        console.log(programa.nombre);
}
}

function main(){
    let programasCargados = agregarPrograma();
    mostrarProgramas(programasCargados);
}

main();
