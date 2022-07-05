const inputPrincipal = document.querySelector('#inputprincipal'),
      btnAgrgar = document.querySelector('#btn-agregar'),
      container = document.querySelector('.container');

class Item  {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    }
}

crearDiv(nuevaTarea){
    const inputItem = document.createElement('input');
    inputItem.classList.add('item-input');
    inputItem.disabled = true;
    inputItem.value = nuevaTarea;
}

const divTarea = document.createElement('div');
divTarea.classList.add('item');

const btnEditar = document.createElement('button');
btnEditar.classList.add('btn-editar');
btnEditar.innerHTML ='<i class="fa-solid fa-pen-to-square"></i>';

const btnRemover = document.createElement('button');
btnRemover.classList.add('btn-remover');
btnRemover.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'