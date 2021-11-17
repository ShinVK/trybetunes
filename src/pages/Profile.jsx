import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
      dataUsr: [],
    };
    this.fetchUser = this.fetchUser.bind(this);
  }

  componentDidMount() {
    this.fetchUser();
  }

  async fetchUser() {
    this.setState({ load: true });
    await getUser().then((dataU) => this.setState({
      dataUsr: dataU,
    }));
    this.setState({ load: false });
  }

  render() {
    const { load, dataUsr } = this.state;
    return (
      <>
        <Header />
        <div data-testid="page-profile">
          {(load)
            ? <Loading />
            : (
              <div className="cardProfile">
                <img
                  src={ dataUsr.image }
                  alt="Autorretrato do usuário"
                  data-testid="profile-image"
                />
                <h2>Nome</h2>
                <p>{ dataUsr.name }</p>
                <h2>Email</h2>
                <p>{ dataUsr.email }</p>
                <h2>Descrição</h2>
                <p>{ dataUsr.description }</p>
                <Link to="/profile/edit">Editar perfil</Link>
              </div>
            )}
        </div>
      </>
    );
  }
}
