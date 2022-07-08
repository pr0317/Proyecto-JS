var titulo_formulario = document.querySelector("#titulo-form");
titulo_formulario.classList.add("titulo-formulario");

var button_add = document.querySelector("#adicionar-paciente");

//Funcion anonima que actua unicamente para el botón "ADD"
button_add.addEventListener("click",function(){
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = getPatientData(form);
    var pacienteTr = bulidTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    
    tabla.appendChild(pacienteTr) //Añade el contenido de pacienteTr a la tabla

    form.reset(); //Elimina los datos contenidos en los cajones del formulario
});


function getPatientData(form){

    //Clase que captura los datos
    var paciente = {
        nombre: form.nombre.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: imc(form.peso.value,form.altura.value)
    }
    
    return paciente; //Objeto que contiene los datos del paciente       
}

function bulidTr(paciente){

    //Crea los td's y un tr
    
    var pacienteTr = document.createElement("tr"); //Etiqueta de linea de tabla
    pacienteTr.classList.add("paciente");

    //Asigna el td a la tr.
    pacienteTr.appendChild(buildTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(buildTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(buildTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(buildTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(buildTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function buildTd(dat,clase){

    var td = document.createElement("td"); 
    td.classList.add(clase); //Llama la clase del HTML
    td.textContent = dat; //El dato tomado del user
    
    return td;
}