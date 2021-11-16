import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      load: true,
    };
    this.getUserAndRemoveLoad = this.getUserAndRemoveLoad.bind(this);
  }

  componentDidMount() {
    this.getUserAndRemoveLoad();
  }

  async getUserAndRemoveLoad() {
    await getUser().then(({ name }) => this.setState({
      loginName: name,
      load: false,
    }));
  }

  render() {
    const { loginName, load } = this.state;
    return ((load) ? <Loading />
      : (
        <section data-testid="header-component">
          <Link to="/search" data-testid="link-to-search">
            Buscar
          </Link>
          <Link to="/favorites" data-testid="link-to-favorites">
            Favoritos
          </Link>
          <Link to="/profile" data-testid="link-to-profile">
            Perfil
          </Link>
          <h2>Cabeçalho</h2>
          <h2 data-testid="header-user-name">{loginName}</h2>
        </section>
      )
    );
  }
}
