import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
      listFavorites: [],
    };
    this.getFavMusics = this.getFavMusics.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  componentDidMount() {
    this.getFavMusics();
  }

  async getFavMusics() {
    this.setState({
      load: true,
    });
    await getFavoriteSongs().then((results) => this.setState({
      listFavorites: results,
    }));
    this.setState({
      load: false,
    });
  }

  async removeTrack(data) {
    this.setState({
      load: true,
    });
    await removeSong(data);
    await this.getFavMusics();
  }

  render() {
    const { load, listFavorites } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-favorites">
          <h2>Favoritos</h2>
          {(load) ? <Loading /> : null}
          {listFavorites.map((dataTrack) => {
            const isChecked = true;
            return (
              <MusicCard
                key={ dataTrack.trackId }
                onHandleChange={ () => this.removeTrack(dataTrack) }
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
