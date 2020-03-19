import React, { Component } from "react";
import { MoviesList } from "./components/MoviesList";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = { usedSearch: false, results: [] };

  _handleResults = results => {
    this.setState({
      results,
      usedSearch: true
    });
  };

  _renderResults() {
    return this.state.results.length === 0 ? (
      <p>No se han encontrado las peliculas</p>
    ) : (
      <MoviesList movies={this.state.results} />
    );
  }

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        <div>
          {this.state.usedSearch ? (
            this._renderResults()
          ) : (
            <small>Usa el formulario para buscar una pelicula</small>
          )}
        </div>
      </div>
    );
  }
}

export default App;
