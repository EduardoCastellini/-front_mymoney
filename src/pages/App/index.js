import React, { Component } from "react";

import Menu from "./components/Menu"

import { Container } from "./styles";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    alert('Vou cadastrar');
  };

  render() {
    return (
        <Container>
            <Menu />
            <hr />

            <h1> My-Money</h1>
        </Container>
    );
  }
}

export default App;