import React, { Component } from 'react';
import Header from '../components/Header';

export default class ProfileEdit extends Component {
  render() {
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit">
          <h2>Profile Edit Page</h2>
        </div>
      </>
    );
  }
}
