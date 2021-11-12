import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
    this.onHandleChanger = this.onHandleChanger.bind(this);
  }

  onHandleChanger(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { searchInput } = this.state;
    const MINLETTER = 2;
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <h2>Search Page</h2>
          <form>
            <input
              type="text"
              data-testid="search-artist-input"
              placeholder="Nome do artista"
              name="searchInput"
              value={ searchInput }
              onChange={ this.onHandleChanger }
            />
            <button
              type="submit"
              data-testid="search-artist-button"
              disabled={ searchInput.length < MINLETTER }
            >
              Procurar
            </button>
          </form>
        </div>
      </>
    );
  }
}
