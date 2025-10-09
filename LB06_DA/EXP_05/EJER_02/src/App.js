import React from "react";
import ApiUsers from "./ApiUsers";
import ApiUsersHook from "./ApiUsersHook";

function App() {
  return (
    <div>
      <h1>Ejemplo de Consumo de API en React</h1>

      <hr />
      <ApiUsers />       {/* Versión con clase */}
      <hr />
      <ApiUsersHook />   {/* Versión con Hooks */}
    </div>
  );
}
export default App;
