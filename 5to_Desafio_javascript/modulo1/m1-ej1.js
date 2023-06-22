var costosFijos = 0;
var precioVenta = 0;
var costosVariables = 0;
var puntoEquilibrio = 0;

costosFijos = prompt("Ingrese los costos fijos: ");
precioVenta = prompt("Ingrese el precio de venta: ");
costosVariables = prompt("Ingrese los costos variables: ");

puntoEquilibrio = costosFijos / (precioVenta - costosVariables);

alert("El punto de equilibrio es: " + puntoEquilibrio);



