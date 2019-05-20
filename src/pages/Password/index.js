import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import { Form, Container } from "./styles";

class Password extends Component {
  state = {
    email: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();

  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="My Money" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <button type="submit">Solicitar</button>
          <hr />
          <Link to="/">retornar a tela de login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Password);