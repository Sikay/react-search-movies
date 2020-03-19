import React, { Component } from "react";
import { MoviesList } from "./components/MoviesList";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  state = { results: [] };

  _handleResults = results => {
    this.setState({
      results
    });
  };

  render() {
    return (
      <div className="App">
        <Title>Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        <div>
          {this.state.results.length === 0 ? (
            <p>Sin resultados</p>
          ) : (
            <MoviesList movies={this.state.results} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
