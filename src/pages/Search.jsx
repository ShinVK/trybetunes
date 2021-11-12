import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      nameSearched: '',
      searchInput: '',
      load: false,
      data: '',
      request: false,
    };
    this.onHandleChanger = this.onHandleChanger.bind(this);
    this.onHandleSearchClick = this.onHandleSearchClick.bind(this);
    this.renderAlbums = this.renderAlbums.bind(this);
  }
  // componentDidMount() {
  //   this.onHandleSearchClick();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   this.s
  // }

  onHandleChanger(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onHandleSearchClick(e) {
    const { searchInput } = this.state;
    e.preventDefault();
    this.setState({ load: true, nameSearched: searchInput });
    await searchAlbumsAPI(searchInput).then((album) => this.setState({ data: album }));
    this.setState({ load: false, request: true, searchInput: '' });
  }

  renderAlbums() {
    const { data } = this.state;
    console.log(data);
    return (data.length === 0) ? <p>Nenhum álbum foi encontrado</p>
      : (
        data.map((album) => (
          <div key={ album.collectionId }>
            <img src={ album.artworkUrl100 } alt={ album.collectionName } />
            <h2>{ album.artistName }</h2>
            <Link
              to={ `/album/${album.collectionId}` }
              data-testid={ `link-to-album-${album.collectionId}` }
            >
              { album.collectionName }
            </Link>
          </div>
        )));
  }

  render() {
    const { searchInput, load, nameSearched, request } = this.state;
    const MINLETTER = 2;
    return ((load) ? <Loading />
      : (
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
                onClick={ this.onHandleSearchClick }
              >
                Procurar
              </button>
            </form>
            {(load) ? <Loading />
              : (
                <h2>
                  {`Resultado de álbuns de: ${nameSearched}`}
                </h2>
              )}
            {(request) && this.renderAlbums() }
          </div>
        </>
      )
    );
  }
}
