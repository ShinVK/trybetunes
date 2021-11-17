import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

export default class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
      name: '',
      email: '',
      description: '',
      image: '',
      disable: false,
      updated: false,
    };
    this.fetchUsr = this.fetchUsr.bind(this);
    this.onHandleChanger = this.onHandleChanger.bind(this);
    this.isDisable = this.isDisable.bind(this);
    this.onHandleClick = this.onHandleClick.bind(this);
  }

  componentDidMount() {
    this.fetchUsr();
  }

  onHandleChanger({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
    this.isDisable();
  }

  async onHandleClick() {
    const { name, email, image, description } = this.state;
    this.setState({ load: true });
    await updateUser({ name, email, image, description });
    this.setState({ updated: true });
  }

  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

  isDisable() {
    const { name, email, description, image } = this.state;
    this.setState({
      disable: ((name.length === 0)
      || (email.length === 0)
      || !(email.match(/\S+@\S+\.\S+/))
      || (description.length === 0)
      || (image.length === 0)),
    });
  }

  async fetchUsr() {
    this.setState({
      load: true,
    });
    await getUser().then(({ name, email, description, image }) => this.setState({
      name, email, description, image,
    }));
    this.setState({
      load: false,
    });
  }

  // isDisabled() {
  //   const { usrData } = this.state;
  // }

  render() {
    const { name, email, description, image, load, disable, updated } = this.state;
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
                      name="name"
                      type="text"
                      value={ name }
                      data-testid="edit-input-name"
                      onChange={ this.onHandleChanger }
                    />
                  </label>
                  <label htmlFor="emailInput">
                    Email
                    <input
                      name="email"
                      id="emailInput"
                      type="email"
                      value={ email }
                      onChange={ this.onHandleChanger }
                      data-testid="edit-input-email"
                    />
                  </label>
                  <label htmlFor="descriptionInput">
                    Descrição
                    <textarea
                      name="description"
                      id="descriptionInput"
                      type="textarea"
                      value={ description }
                      onChange={ this.onHandleChanger }
                      data-testid="edit-input-description"
                    />
                  </label>
                  <label htmlFor="imageInput">
                    Imagem
                    <input
                      name="image"
                      id="imageInput"
                      type="text"
                      value={ image }
                      onChange={ this.onHandleChanger }
                      data-testid="edit-input-image"
                    />
                  </label>
                  <button
                    type="submit"
                    data-testid="edit-button-save"
                    disabled={ disable }
                    onClick={ this.onHandleClick }
                  >
                    Salvar
                  </button>
                </form>
              </div>)}
          { updated && <Redirect to="/profile" exact />}
        </div>
      </>
    );
  }
}
