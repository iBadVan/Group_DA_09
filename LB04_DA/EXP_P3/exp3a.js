const foo = () => {
  console.log("foobar");
}
foo(); // Invoke it using the variable
// Output: foobar

function sayHello() {
 return "Hello, ";
}
function greeting(helloMessage, name) {
 console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

function sayHello() {
  return () => {
    console.log("Hello!");
  }
}
const greet = sayHello(); // Esto devuelve la función interna
greet(); // Ahora invoca la función interna que imprime "Hello!"


