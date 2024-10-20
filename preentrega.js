//Inicializo el saldo y el array
let saldo = 1000;  //Saldo inicial
let historialTransacciones = [];  //Array para guardar el historial

//Función flecha para mostrar el saldo actual
const consultarSaldo =()=> {
    console.log(`Tu saldo actual es: $${saldo}`);
}

/*function consultarSaldo() {
    console.log(`Tu saldo actual es: $${saldo}`);   Quise utilizar al menos 1 función flecha para ir practicando, es muy nuevo aun y no me acostumbro
}*/

//Función para retirar dinero
function retirarDinero(monto) {
    if (monto > saldo) {
        console.log('Saldo insuficiente para realizar esta operación.');
    } else {
        saldo -= monto;
        historialTransacciones.push(`Retiraste $${monto}`);  //Se guarda la transacción en el historial
        console.log(`Has retirado $${monto}. Tu saldo actual es: $${saldo}`);
    }
}

//Función para mostrar el array/historial de transacciones
function mostrarHistorial() {
    if (historialTransacciones.length === 0) {
        console.log('No hay transacciones registradas.');
    } else {
        console.log('Historial de transacciones:');
        for (let i = 0; i < historialTransacciones.length; i++) {
            console.log(historialTransacciones[i]);  //Muestra cada transacción
        }
    }
}

//Menú del cajero automático
function cajeroAutomatico() {
    let opcion;
    do {    //Hacer mientras sea distinto de 4
        opcion = prompt('Elige una opción:\n1. Consultar saldo\n2. Retirar dinero\n3. Mostrar historial\n4. Salir');

        switch(opcion) {
            case '1':
                consultarSaldo();
                break;
            case '2':
                let monto = parseFloat(prompt('¿Cuánto deseas retirar?'));
                retirarDinero(monto);
                break;
            case '3':
                mostrarHistorial();
                break;
            case '4':
                console.log('Gracias por usar el cajero automático.');
                break;
            default:
                console.log('Opción no válida. Intenta de nuevo.');
        }

    } while (opcion !== '4');
}

//Llamamos al simulador de cajero
cajeroAutomatico();