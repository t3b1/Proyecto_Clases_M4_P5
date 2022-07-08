import { Item, container } from "./classItem.js";
//variables html
const inputPrincipal = document.querySelector('#inputprincipal'),
       btnAgrgar = document.querySelector('#btn-agregar');

btnAgrgar.addEventListener('click', () => { // boton agregar tarea
    chequearInput();

})
inputPrincipal.addEventListener('keydown', (evento) => {// evento que agraga la tarea si se aprieta enter
    if(evento.keyCode === 13){
        chequearInput();
    }
})

/*function guardarLocal () {
    const guardarItem = inputPrincipal.value;
    
    localStorage.setItem('tarea', JSON.stringify(guardarItem));
    saveItem = localStorage.getItem('tarea');
}*/

function chequearInput(){ // funcion que crear un objeto de la clase Item para entregarle el valor del inputPrincipal
    if(!inputPrincipal.value.trim() == ''){
        const nuevoItem = new Item(inputPrincipal.value);
        inputPrincipal.value = '';
    }
}