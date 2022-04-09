/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      dataAlbum: [],
      dataTracks: [],
      favoritesMusics: [],
    };
    this.fetchMusics = this.fetchMusics.bind(this);
    this.onHandleChangeChecked = this.onHandleChangeChecked.bind(this);
    this.getFavorites = this.getFavorites.bind(this);
  }

  componentDidMount() {
    this.fetchMusics();
    this.getFavorites();
  }

  // https://stackoverflow.com/questions/42597602/react-onclick-pass-event-with-parameter

  async onHandleChangeChecked(dataTrack) {
    const { favoritesMusics } = this.state;
    this.setState({ load: true });
    if (favoritesMusics.some(({ trackId }) => trackId === dataTrack.trackId)) {
      await removeSong(dataTrack);
      // const indexMusic = favoritesMusics
      //   .findIndex(({ trackId }) => trackId === dataTrack.trackId);
      // const favMus = [...favoritesMusics];
      // favMus.splice(indexMusic, 1);
      // return (
      //   this.setState({
      //     favoritesMusics: [...favMus],
      //   }));
    } else {
      await addSong(dataTrack);
    }
    await getFavoriteSongs().then((res) => this.setState(() => ({
      favoritesMusics: res,
    })));
    this.setState({ load: false });
  }
  // includesInFavoritesMusics(id) {
  //   const { favoritesMusics } = this.state;
  //   favoritesMusics.some((trackId) => trackId === id);
  // }

  async getFavorites() {
    this.setState({ load: true });
    await getFavoriteSongs().then((result) => this.setState({
      favoritesMusics: result,
    }));
    this.setState({
      load: false,
    });
  }

  // const { location: { query: { idCol } } } = this.props;
  // https://www.codegrepper.com/code-examples/javascript/get+only+numbers+from+string+js
  fetchMusics() {
    const { location: { pathname } } = this.props;
    const colId = pathname.replace(/[^0-9]/g, '');

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
      (dataAlbum
        && (
          <section className="sectionTracks">
            <div className="cardAlbum">
              <h2 data-testid="artist-name">{ dataAlbum.artistName }</h2>
              <p data-testid="album-name">
                { `Album: ${dataAlbum.collectionName}
            Artista: ${dataAlbum.artistName}`}
              </p>
              <img
                src={ dataAlbum.artworkUrl100 }
                alt="Capa de album"
              />
            </div>
          </section>
        ))
    );
  }

  // console.log(this.props.location.query.idCol);
  // const { location: { query: { idCol } } } = this.props;
  render() {
    const { dataTracks, load, favoritesMusics } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-album">
          {this.renderTracks()}
          { (load) ? <Loading /> : null }
          {dataTracks.map((dataTrack) => {
            const isChecked = favoritesMusics
              .some((fav) => fav.trackId === dataTrack.trackId);
            return (
              <MusicCard
                key={ dataTrack.trackId }
                onHandleChange={ () => this.onHandleChangeChecked(dataTrack) }
                isChecked={ isChecked }
                trackId={ dataTrack.trackId }
                trackName={ dataTrack.trackName }
                previewUrl={ dataTrack.previewUrl }
              />);
          })}
        </div>
      </>
    );
  }
}
