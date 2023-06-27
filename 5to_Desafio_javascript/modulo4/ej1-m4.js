

function flujoCaja(ingresos, egresos){
    let diferencia = ingresos - egresos;
    if (diferencia > 0){
        return 1;
    } else if(diferencia == 0){
        return 0;
    } else {
        return -1;
    }
}

function inversiones(arrayInversion){
    var interes = [];
    var plazo = 90;
    var taza = 0.15;

    for (var i = 0; i < arrayInversion.length; i++){
        interes.push((arrayInversion[i] * plazo * taza) / 100);
    }

    return interes;
}

