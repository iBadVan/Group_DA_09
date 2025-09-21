function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  };
}

const persona1 = new Persona("Ana", 25);
const persona2 = new Persona("Carlos", 40);

persona1.saludar();  // Llamando al método del objeto persona1
persona2.saludar();  // Llamando al método del objeto persona2
