function calcularImpuestos() {
  
  let intentos = 10;
  for (let i = intentos; i >= 0; i--) {

    let salario = prompt("Ingrese su salario mensual. Tenes " + i + " Pruebas gratis");
  

    if (intentos <= 1) {
  // Cuando no queden mas pruebas gratis, deberia aparecer el Alert diciendo que el usuario agoto las pruebas.
  alert("Has agotado tus 10 pruebas gratuitas. Para tener mas intentos abona 1 euro");
} else {
  // Si el salario es menor a 2500, entonces el impuesto es del 20%
  if (salario <= 2500) {
    alert(`El impuesto a pagar es de  ${salario * 0.2}  euros.`);
    //El usuario tiene 10 pruebas gratis
    alert(`Quedan ${i - 1} pruebas gratis.`);
    
  } else {
    const impuestoBasico = salario * 0.20;

    const excedente = salario - 2500;

    const impuestoExcedente = excedente * 0.4;

    const impuestoTotal = impuestoBasico + impuestoExcedente;

    alert(`El impuesto a pagar es de ${impuestoTotal} Euros.`);

    alert(`Quedan ${i - 1} pruebas gratis.`);

  }
}
}
}
const intentos = 0;

calcularImpuestos(intentos);

/* const resultado = calcularImpuestos(); 
console.log(resultado); */



