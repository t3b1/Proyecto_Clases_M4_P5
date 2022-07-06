const inputPrincipal = document.querySelector('#inputprincipal'),
      btnAgrgar = document.querySelector('#btn-agregar'),
      container = document.querySelector('.container');

class Item  {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
        this.Item = Item
    }

    crearDiv(nuevaTarea) {
        const inputItem = document.createElement('input');
        inputItem.classList.add('item-input');
        inputItem.disabled = true;
        inputItem.value = nuevaTarea;

        const divTarea = document.createElement('div');
        divTarea.classList.add('item');
        /*se agrega botones*/
        const btnEditar = document.createElement('button');
        btnEditar.classList.add('btn-editar');
        btnEditar.innerHTML ="<i class='fas fa-lock'></i>";
    
        const btnRemover = document.createElement('button');
        btnRemover.classList.add('btn-remover');
        btnRemover.innerHTML = "<i class='fas fa-trash'></i>"


        divTarea.appendChild(inputItem);
        divTarea.appendChild(btnEditar);
        divTarea.appendChild(btnRemover);
        container.appendChild(divTarea);

        btnEditar.addEventListener('click', () => {
            if(inputItem.disabled){
                inputItem.disabled = false;
                btnEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            }
            else {
                inputItem.disabled = true 
                btnEditar.innerHTML ="<i class='fas fa-lock'></i>";
            }    
        })
    
        btnRemover.addEventListener('click', () => {
            inputItem.parentNode.remove();
        } )
        }
}

btnAgrgar.addEventListener('click', () => {
    if(!inputPrincipal.value.trim() == '') {
        const nuevoItem = new Item(inputPrincipal.value);
        localStorage.setItem(Item, inputItem);
    }
})

/*function guardarLocal () {
    const guardarItem = inputPrincipal.value;
    
    localStorage.setItem('tarea', JSON.stringify(guardarItem));
    saveItem = localStorage.getItem('tarea');

}*/