import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Album extends Component {
  render() {
    // console.log(this.props.location.query.idCol);
    const { location: { query: { idCol } } } = this.props;
    return (
      <>
        <Header />
        <div data-testid="page-album">
          <h2>Album page</h2>
          <h2>{idCol}</h2>
        </div>
      </>
    );
  }
}

Album.propTypes = {
  location: PropTypes.objectOf(PropTypes.object).isRequired,
  idCol: PropTypes.string.isRequired,
};
