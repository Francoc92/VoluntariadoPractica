/* objetos que van a contener lo que ingrese */



//elementos html
const cantidad = document.querySelector('#cantidad');
categoria = document.querySelector('#categoria');
const totalAPagar = document.querySelector('#totalAPagar');
const btnResumen = document.querySelector('.btnResumen');
const btnBorrar = document.querySelector('.btnBorrar');
const formulario = document.querySelector('.formulario');

const datos = {
    cantidad: '',
    categoria: ''
};

// se le asigno valor a la primera posicion del select
var categoria;
datos.categoria = 'estudiante'
;

//guardo los datos ingresador por los inputs a partir de la creacion  de los elementos anteriores
cantidad.addEventListener('input', function(event){
    datos.cantidad = event.target.value;
    console.log("Cantidad: " + event.target.value + " guardada");
});

categoria.addEventListener('change', function(event){
    datos.categoria = event.target.value;
    console.log("Categoria: " + event.target.value + " guardada");
});

//button resume
btnResumen.addEventListener('click' , function(event){
    event.preventDefault();
    const {cantidad, categoria} = datos;
    var resultado = 0;    
    var indice = 0;
    //Condiciones+calculos de descuentos
    indice = totalAPagar.textContent.indexOf('$');
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    if(categoria == 'estudiante'){
        resultado = (200*cantidad)*0.8;
        console.log("La categoria seleccionada es (E): " + categoria);
    } 
    else if(categoria == 'trainee'){
        resultado = (200*cantidad)*0.5;
        console.log("La categoria seleccionada es (T): " + categoria);
    }
    else if(categoria == 'junior'){
        resultado = (200*cantidad)*0.15;
        console.log("La categoria seleccionada es (J): " + categoria);
    }
    totalAPagar.textContent += resultado;
    return; 
    //devuelve el total en el label totalAPagar
});

//limpia el registro de datos
btnBorrar.addEventListener('click' , function(event){
    event.preventDefault();
    var indice = 0;
    indice = totalAPagar.textContent.indexOf('$');
    totalAPagar.textContent = totalAPagar.textContent.substring(0, indice+1);
    formulario.reset();
    return;
});