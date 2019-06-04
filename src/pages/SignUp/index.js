import React, { Component } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/avatar.png";
import api from "../../services/api";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {

    e.preventDefault();
    
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos campos para continuar!" });
    } else {
      try {
        const response = await api.post("/users", { username, email, password });
        console.log(response);
        alert("Usuario Cadastrado");
        this.props.history.push("/");
      } catch (err) {
        this.setState({
          error:
            "Houve um problema ao realizar o cadastro. Tente novamente mais tarde"
        });
      }
    }

  };

  render() {
    return (
        <Container>
            <Form onSubmit={this.handleSignUp}>
                <img src={Logo} alt="My Money" />
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    onChange={e => this.setState({ username: e.target.value })}
                />
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit">Cadastrar</button>
                <hr />
                <Link to="/">Fazer login</Link>
            </Form>
        </Container>
    );
  }
}

export default SignUp;