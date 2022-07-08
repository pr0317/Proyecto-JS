//Titulo del contenedor de añadir pacientes
var titulo_formulario = document.querySelector("#titulo-form");
titulo_formulario.classList.add("titulo-formulario");

//Boton que captura adicionar
var button_add = document.querySelector("#adicionar-paciente");

button_add.addEventListener("click",function(){
    event.preventDefault();
    var form = document.querySelector("#form-adicionar");
    var tabla = document.querySelector("#tabla-pacientes");
    
    var nombre = form.nombre.value; //Captura el valor escrito por el user en cada form.
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
       
    pacienteTr = document.createElement("tr"); //Etiqueta de linea de tabla
    nombreTd = document.createElement("td"); //Etiqueta de columna
    pesoTd = document.createElement("td"); 
    alturaTd = document.createElement("td"); 
    gorduraTd = document.createElement("td"); 
    imcTd = document.createElement("td");
    
    nombreTd.textContent = nombre; //Asigna el dato escrito por el user para cada etiqueta Td
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc(peso,altura);

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr) //Añade el contenido de pacienteTr a la tabla
    
});