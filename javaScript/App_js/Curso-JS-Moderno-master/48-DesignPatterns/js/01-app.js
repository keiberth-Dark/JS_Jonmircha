// Class Pattern

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const persona = new Persona('Marco', 'correo@correo.com');

console.log(persona);
