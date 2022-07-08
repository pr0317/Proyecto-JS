var pacientes = document.querySelectorAll(".paciente"); 

for (var i = 0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso"); //se usa . para llamar a una clase
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdIMC = paciente.querySelector(".info-imc");
    
    //Funcion para calcular imc
    function imc(peso, altura){
        var imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

    //Var global para verificar valores
    pesoValido = true;
    alturaValida = true;


    if(peso < 0 || peso > 300){
        tdIMC.textContent = "Peso Incorrecto";
        pesoValido = false;        
        paciente.classList.add("paciente-incorrecto"); //llama a la clase CSS paciente-incorrecto
    }

    if(altura < 0 || altura > 3.00){
        tdIMC.textContent = "Altura Incorrecta";
        alturaValida = false;
        paciente.classList.add("paciente-incorrecto"); //llama a la clase CSS paciente-incorrecto
    }

    if (pesoValido && alturaValida){
        //Reemplaza el contenido de .info-imc
        tdIMC.textContent = imc(peso,altura);
    }
}