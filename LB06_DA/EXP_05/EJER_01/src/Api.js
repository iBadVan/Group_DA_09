import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [] 
    };
  }

  componentDidMount() {
    fetch(
      "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=React&format=json&origin=*"
    )
      .then((response) => response.json()) 
      .then((result) => {
        this.setState({ data: result.query.search });
      })
      .catch((error) => console.log("Error al obtener datos:", error));
  }

  render() {
    return (
      <div>
        <h2>Resultados desde la API de Wikipedia:</h2>
        <ul>
          {this.state.data.map((item) => (
            <li key={item.pageid}>
              <strong>{item.title}</strong> <br />
              {item.snippet.replace(/<\/?[^>]+(>|$)/g, "")}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Api;
