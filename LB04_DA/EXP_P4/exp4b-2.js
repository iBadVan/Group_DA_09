function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Carlos", 40);

persona1.pais = "México";  // Agregando una nueva propiedad a persona1
persona2.pais = "Colombia";  // Agregando una nueva propiedad a persona2

console.log(persona1);
console.log(persona2);
