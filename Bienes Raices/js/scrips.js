window.addEventListener('load',agignarManejadores);


// agrega manejador a la caja de texto
// let le pone un scope a la variable 
//scope global, estoy definiendo una variabel en un scope especifico
// scope es el hambito donde se declaran las variables
// hay que tenes cuidado cuando ponemos el script y donde se va a poner. Como programas y que variables usar
// ya que el html se ejecuta de arriba hacia abajo, entonces en el script
// estoy llamando a un  id que todavia no existe
// la pagina es "windows"
function agignarManejadores()
{
    let clave = document.getElementById("txtContraseña").value;
    console.log(clave);
    clave.addEventListener('keyup',(e)=>{ //emision del evento 
        console.log(e.target.value);
    })
}
//delegado en c# es lo mismo que puntero en c
// callbacks -> parametro de una funcion a otra funcion
// asincronismo, js es asincronico, en algun momento se va a cargar el navegador, en algun momento
// se va a apretar un boton, es decir cuando pase eso, ejecuta este codigo.

//Entonces cuando ejecutes el evento 'load', ejecuta el asignarManejadores.
//En js no hay hilos(paralelismo), aca hay concurrencia, el concepto de asincronismo.
// Las buenas practicas indican que se hacen asi, muchisima gente tiran el script al final de body.

//funcion nombreda, ya que tiene nombre porque la voy poner nombre.
// puedo asignar el cuerpo de una funcion a una variable
//funcion anonima es sin nombre
// microdatos schema.org