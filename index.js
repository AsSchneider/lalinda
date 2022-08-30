

/*function formaDePago(tarjeta, contado, debito){

    let pago = prompt("ingrese su forma de pago: contado - tarjeta - debito");

    switch (pago) {
        case "tarjeta":
            alert("su interes es del 10%");

            break;

        case "debito":
            alert("su interes es del 5%");
            break;

        case "contado":
            alert("el precio final es el que esta publicado");

            break;

        default:
            alert("operacion no definida");
            break;
    }
}

formaDePago();*/


function tarjeta (visa){
    return `el pago con tarjeta ${visa} lo puede hacer en 12 cuotas sin interes`
    
}
let visa= prompt ("ingrese visa si desea un beneficio")
let mensaje= tarjeta(visa);
alert (mensaje);



