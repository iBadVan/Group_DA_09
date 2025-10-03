import React, { Component } from 'react';

class Api extends Component {
  state = {
    data: '',
    error: null
  };

  componentDidMount() {
    this.fetchWikipediaData();
  }

  fetchWikipediaData = async () => {
    const url = 'https://es.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&explaintext&titles=Universidad_Cat%C3%B3lica_de_Santa_Mar%C3%ADa';

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la solicitud a Wikipedia');
      }

      const data = await response.json();
      const page = data.query.pages[Object.keys(data.query.pages)[0]];
      this.setState({ data: page.extract });
    } catch (error) {
      console.error('Error al obtener los datos de Wikipedia:', error);
      this.setState({ error: 'Error al obtener los datos de Wikipedia' });
    }
  };

  render() {
    const { data, error } = this.state;

    return (
      <div>
        <h1>Extracto de Wikipedia sobre la Universidad Católica de Santa María</h1>
        {error ? <p>{error}</p> : <p>{data}</p>}
      </div>
    );
  }
}

export default Api;
