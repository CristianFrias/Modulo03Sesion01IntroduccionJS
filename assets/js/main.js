var apellido = "Frías"
var porcentaje;

var persona = {
    nombre: "Cristián", // cuando tenemos comillas lee la variable y entiende que es una cadena de caracteres
    apellido: apellido, // aqui declaramos la variable antes
    edad: 36, // cuando es numerico es sin comillas
 // activo: true // los boolean tampoco van con comillas, con comillas es una cadena de caracteres
    activo: false,
    departamento: null // existe, está definida pero no tiene valor
}

console.log(persona);
console.log("Salario", persona.salario); //ejemplo de undefined distinto de null
console.log("Porcentaje", porcentaje); //ejemplo de undefined

var n1 = Number(prompt("Ingrese el primer número"))
var n2 = prompt("Ingrese el segundo número")

console.log(n1, n2, n1+n2); // al recibir valores por el prompt los trató como letras
console.log("Ejemplo con conversión", Number(n1), Number(n2), Number(n1)+Number(n2));
console.log("Ejemplo con conversión", Number(n1), Number(n2), Number(n1+n2));

console.log("Cristián"+" "+"Frías"); //ejemplo de concatenacion
console.log(5 + 8 + 9); //ejemplo de adicion o suma
console.log(5 + "8" + 9); //ejemplo de concatenacion
console.log(5 + 8 + "9") //ejemplo de adicion o suma y concatenacion

var num = new Number(15)
console.log(num);

console.log("Number", Number(15.55555));
console.log("ParseInt", parseInt(15.5));
console.log("ParseFloat", parseFloat(15.55555));

console.log("Conversión a String", String(10));

console.log("Conversión a Booleano", Boolean("JavaScript"));
console.log("Conversión a Booleano", Boolean("true"));
console.log("Conversión a Booleano con error", Boolean("false"));
console.log("Conversión a Booleano cadena vacía", Boolean(""));
console.log("Conversión a Booleano con cero", Boolean(0));
console.log("Conversión a Booleano con 1", Boolean(1));

console.log("comparación número con letra no estricta", 5 == "5");
console.log("comparación número con letra estricta", 5 === "5");
console.log("comparación número con número estricta", 5 === 5);
console.log("comparación número con letra estricta", "5" === "5");