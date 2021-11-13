import React, { Component } from 'react';

import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      dataAlbum: [],
      dataTracks: [],
    };
    this.fetchMusics = this.fetchMusics.bind(this);
  }

  componentDidMount() {
    this.fetchMusics();
  }

  fetchMusics() {
    // const { location: { query: { idCol } } } = this.props;
    const urlId = window.location.pathname;
    const colId = urlId.replace(/[^0-9]/g, '');
    getMusics(colId).then(([album, ...tracks]) => this.setState(
      { dataAlbum: album,
        dataTracks: tracks },
    ));
  }

  renderTracks() {
    const { dataAlbum } = this.state;
    return (
      <section className="sectionTracks">
        <div className="cardAlbum">
          <h2 data-testid="artist-name">{ dataAlbum.artistName }</h2>
          <p data-testid="album-name">
            { `Album: ${dataAlbum.collectionName}
            Artista: ${dataAlbum.artistName}`}
          </p>
          <img
            src={ dataAlbum.artworkUrl100 }
            alt={ dataAlbum.collectionCensoredName }
          />
        </div>
      </section>
    );
  }

  render() {
    // console.log(this.props.location.query.idCol);
    // const { location: { query: { idCol } } } = this.props;
    const { dataTracks } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-album">
          {this.renderTracks()}
          <MusicCard musicTracks={ dataTracks } />
        </div>
      </>
    );
  }
}
