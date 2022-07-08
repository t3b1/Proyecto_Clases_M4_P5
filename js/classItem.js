// variable de las etiquetas html
export const container = document.querySelector('.container');

export class Item  {  //se define una clase para agregar nuevo elementos al html index
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
//boto que edita las tareas al apretar click sale de su estado desabilitado
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
// boton remover el elemento creado  
        btnRemover.addEventListener('click', () => {
            inputItem.parentNode.remove();
        } )
        }
}