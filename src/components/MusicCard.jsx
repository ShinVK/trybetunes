import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { musicTracks } = this.props;
    console.log(musicTracks);
    return (
      <div>
        {musicTracks.map((track) => (
          <div key={ track.collectionId }>
            <p>{ track.trackName }</p>
            <audio data-testid="audio-component" src={ track.previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              <code>audio</code>
            </audio>
          </div>
        ))}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicTracks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
