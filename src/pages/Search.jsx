import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-search">
          <h2>Serch Page</h2>
        </div>
      </>
    );
  }
}
