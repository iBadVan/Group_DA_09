const prototipoPersona = {
  saludar: function() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
};

const persona1 = Object.create(prototipoPersona);
persona1.nombre = "Laura";
persona1.edad = 22;

const persona2 = Object.create(prototipoPersona);
persona2.nombre = "Pedro";
persona2.edad = 35;

persona1.saludar();  // Llamando al método del objeto persona1
persona2.saludar();  // Llamando al método del objeto persona2
