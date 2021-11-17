import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
      usrData: [],
    };
    this.fetchUsr = this.fetchUsr.bind(this);
  }

  componentDidMount() {
    this.fetchUsr();
  }

  async fetchUsr() {
    this.setState({
      load: true,
    });
    await getUser().then((usr) => this.setState({
      usrData: usr,
    }));
    this.setState({
      load: false,
    });
  }

  // isDisabled() {
  //   const { usrData } = this.state;
  // }

  render() {
    const { usrData, load } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-profile-edit">
          {(load) ? <Loading />
            : (
              <div className="form__profile">
                <h2>Profile Edit Page</h2>
                <form>
                  <label htmlFor="nameInput">
                    Nome
                    <input
                      id="nameInput"
                      type="text"
                      value={ usrData.name }
                      data-testid="edit-input-name"
                    />
                  </label>
                  <label htmlFor="emailInput">
                    Email
                    <input
                      id="emailInput"
                      type="email"
                      value={ usrData.email }
                      data-testid="edit-input-email"
                    />
                  </label>
                  <label htmlFor="descriptionInput">
                    Descrição
                    <textarea
                      id="descriptionInput"
                      type="textarea"
                      value={ usrData.description }
                      data-testid="edit-input-description"
                    />
                  </label>
                  <label htmlFor="imageInput">
                    Imagem
                    <input
                      id="imageInput"
                      type="text"
                      value={ usrData.image }
                      data-testid="edit-input-image"
                    />
                  </label>
                  <button
                    type="submit"
                    data-testid="edit-button-save"
                    disabled={ this.isDisabled() }
                  >
                    Salvar
                  </button>
                </form>
              </div>)}
        </div>
      </>
    );
  }
}
