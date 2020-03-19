import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "461cd187";
const BASE_END_POINT = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  };

  state = {
    movie: {}
  };

  _fetchMovie({ id }) {
    fetch(`${BASE_END_POINT}i=${id}`)
      .then(response => response.json())
      .then(movie => {
        console.log(movie);
        this.setState({ movie });
      });
  }

  _goBack() {
    window.history.back();
  }

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button onClick={this._goBack}>Volver</button>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}
