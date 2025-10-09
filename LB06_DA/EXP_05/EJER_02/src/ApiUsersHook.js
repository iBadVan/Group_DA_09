import { useEffect, useState } from "react";

function ApiUsersHook() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []); 

  return (
    <div>
      <h2>Lista de Usuarios (Hooks)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiUsersHook;
