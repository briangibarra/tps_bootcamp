function interes(capital, plazo, tasa){
    var interes = (capital * plazo * tasa) / 100;
    return interes.toFixed(1);
}

const plan1 = [150000, 30, 0.15];
const plan2 = [300000, 180, 0.10];
const plan3 = [485000, 60, 0.23];
const intereses = [];
var sumaIntereses = 0;

intereses.push(interes(plan1[0], plan1[1], plan1[2]));
intereses.push(interes(plan2[0], plan2[1], plan2[2]));
intereses.push(interes(plan3[0], plan3[1], plan3[2]));

alert("Los intereses del Plan 1 es: " + intereses[0]);
alert("Los intereses del Plan 2 es: " + intereses[1]);
alert("Los intereses del Plan 3 es: " + intereses[2]);

sumaIntereses = parseInt(intereses[0]) + parseInt(intereses[1]) + parseInt(intereses[2]); 

alert("La suma de los intereses es: " + sumaIntereses);