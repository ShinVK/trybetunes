import React, { Component } from 'react';

import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
      dataAlbum: [],
      dataTracks: [],
      favoritesMusics: [],
    };
    this.fetchMusics = this.fetchMusics.bind(this);
    this.onHandleChangeChecked = this.onHandleChangeChecked.bind(this);
  }

  componentDidMount() {
    this.fetchMusics();
  }

  // https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter

  async onHandleChangeChecked({ target: { id } }, trackId) {
    const { favoritesMusics } = this.state;
    // console.log(trackId);
    if (favoritesMusics.includes(id)) {
      const indexMusic = favoritesMusics.indexOf(id);
      const favMus = [...favoritesMusics];
      favMus.splice(indexMusic, 1);
      return (
        this.setState({
          favoritesMusics: [...favMus],
        }));
    }
    this.setState((prev) => ({
      favoritesMusics: [...prev.favoritesMusics, id],
      load: true,
    }));
    await addSong(trackId);
    this.setState({ load: false });
  }

  // includesInFavoritesMusics(id) {
  //   const { favoritesMusics } = this.state;
  //   favoritesMusics.some((trackId) => trackId === id);
  // }

  // const { location: { query: { idCol } } } = this.props;
  // https://www.codegrepper.com/code-examples/javascript/get+only+numbers+from+string+js
  fetchMusics() {
    const urlId = window.location.pathname;
    const colId = urlId.replace(/[^0-9]/g, '');
    getMusics(colId).then(([album, ...tracks]) => this.setState(
      { dataAlbum: album,
        dataTracks: tracks,
      },
    ));
  }

  // async addSongToFavorites() {
  //   const { favoritesMusics, dataTracks } = this.state;
  //   this.setState({ loading: true });
  //   favoritesMusics.map((musicId) => {
  //     const objMus = dataTracks.filter(({ trackId }) => trackId === musicId);
  //     return addSong(objMus);
  //   });
  //   this.setState({ loading: false });
  // }

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

  // console.log(this.props.location.query.idCol);
  // const { location: { query: { idCol } } } = this.props;
  render() {
    const { dataTracks, load, favoritesMusics } = this.state;
    return ((load) ? <Loading />
      : (
        <>
          <Header />
          <div data-testid="page-album">
            {this.renderTracks()}
            {dataTracks.map((dataTrack) => {
              const isChecked = favoritesMusics
                .includes(`${dataTrack.trackId}`);
              return (
                <MusicCard
                  key={ dataTrack.trackId }
                  onHandleChange={ (e) => this.onHandleChangeChecked(e, dataTrack) }
                  isChecked={ isChecked }
                  trackId={ dataTrack.trackId }
                  trackName={ dataTrack.trackName }
                  previewUrl={ dataTrack.previewUrl }
                />
              );
            })}
          </div>
        </>
      )

    );
  }
}
