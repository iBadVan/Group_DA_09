const prototipoPersona = {
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
};

const persona1 = Object.create(prototipoPersona);
persona1.nombre = "Laura";
persona1.edad = 22;
persona1.pais = "Argentina";  // Agregando una nueva propiedad a persona1

const persona2 = Object.create(prototipoPersona);
persona2.nombre = "Pedro";
persona2.edad = 35;
persona2.pais = "Perú";  // Agregando una nueva propiedad a persona2

console.log(persona1);
console.log(persona2);
