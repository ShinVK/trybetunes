import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { trackId, trackName, previewUrl, onHandleChange, isChecked } = this.props;
    // console.log(isChecked);
    // console.log('rodou de novo');
    // const { favoritesMusics } = this.state;
    return (
      <div>
        <div>
          <p>{ trackName }</p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
          <label htmlFor={ trackId }>
            Favorita
            <input
              data-testid={ `checkbox-music-${trackId}` }
              type="checkbox"
              name="track"
              checked={ isChecked }
              id={ trackId }
              onChange={ onHandleChange }
            />
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  // musicTracks: PropTypes.arrayOf(PropTypes.object).isRequired,
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};

// MusicCard.defaultProps = {
//   isChecked: null,
// };
