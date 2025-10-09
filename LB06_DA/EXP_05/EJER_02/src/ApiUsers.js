import React, { Component } from "react";

class ApiUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [] 
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.error("Error al obtener datos:", error));
  }

  render() {
    return (
      <div>
        <h2>Lista de Usuarios (Clase)</h2>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ApiUsers;