import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Loading from '../components/Loading';
// import { createUser } from '../services/userAPI';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      load: false,
      loginSave: false,
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmitBtn = this.onSubmitBtn.bind(this);
  }

  onHandleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async onSubmitBtn(e) {
    const { loginName } = this.state;
    e.preventDefault();
    this.setState({
      load: true,
    });
    await createUser({ name: loginName });
    this.setState({
      load: false,
      loginSave: true,
    });
  }
  // https://v5.reactrouter.com/web/api/Redirect

  render() {
    const { loginName, load, loginSave } = this.state;
    const MINLETTERS = 3;
    if (loginSave) return <Redirect to="/search" />;
    return (
      <div data-testid="page-login">
        <h2>Login</h2>
        <form>
          <label htmlFor="login-input">
            Login:
            <input
              type="text"
              data-testid="login-name-input"
              id="login-input"
              value={ loginName }
              name="loginName"
              onChange={ this.onHandleChange }
            />
          </label>
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ loginName.length < MINLETTERS }
            onClick={ this.onSubmitBtn }
          >
            Entrar
          </button>
          {(load) && <Loading /> }
        </form>
      </div>
    );
  }
}
