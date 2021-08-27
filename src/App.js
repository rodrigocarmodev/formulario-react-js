import './App.css';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from "@material-ui/core";
import '@fontsource/roboto';
import { validarCPF, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

class App extends Component {

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">Formulário de cadastro</Typography>
        <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha, nome: validarSenha}}>
          <FormularioCadastro aoEnviar={aoEnviarForm} />
        </ValidacoesCadastro.Provider>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App;
