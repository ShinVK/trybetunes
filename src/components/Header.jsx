import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      load: false,
    };
    this.getUserAndRemoveLoad = this.getUserAndRemoveLoad.bind(this);
  }

  componentDidMount() {
    this.getUserAndRemoveLoad();
  }

  async getUserAndRemoveLoad() {
    this.setState({ load: true });
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
          <h2>Cabeçalho</h2>
          <h2 data-testid="header-user-name">{loginName}</h2>
        </section>
      )
    );
  }
}
