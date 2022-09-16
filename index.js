//!isNaN verifica que no sea letras y diga que es un calculo imposible

const txtOp1 = document.getElementById("op1")
const txtOperador = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("Resultado")
//Funcion que se ejecuta cuando precionan el boton "Calcular"
btnCalcular.addEventListener('click', calcular)


function calcular(){
    const operacion = txtOperador.value 
    const op1 = parseFloat (txtOp1.value)
    const op2 = parseFloat (txtOp2.value)

    //Confirma signos de operacion correctos y no son letras
    if((operacion == "+" || operacion == "-" ||operacion == "*"|| operacion == "/")
    && !isNaN(op1) && !isNaN(op2)){
       let resultado;
        switch(operacion){
            case "+":
                resultado = op1 + op2
                break; //break es para que no ejecute todas las operaciones
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1 * op2
                break;
            case "/":
                resultado = op1 / op2
                break;
       }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "calculo imposible"
    }

}
