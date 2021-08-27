import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                if (possoEnviar()) {
                    event.preventDefault();
                    aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
                }
            }}
        >
            <TextField
                id="nome"
                name="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={nome}
                required
                onChange={(event) => {
                    let tmpNome = event.target.value;
                    if (tmpNome.length >= 3) {
                        tmpNome = tmpNome.substr(0, 3);
                    }
                    setNome(tmpNome);
                }}
            />
            <TextField
                id="sobrenome"
                name="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"
                value={sobrenome}
                required
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
            />
            <TextField
                id="cpf"
                name="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cpf}
                required
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                onBlur={validarCampos}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}
            />
            <FormControlLabel
                label="Promoções"
                control={
                    <Switch
                        name="promocoes"
                        checked={promocoes}
                        color="primary"
                        onChange={(event) => {
                            setPromocoes(event.target.checked);
                        }}
                    />
                }
            />
            <FormControlLabel
                label="Novidades"
                control={
                    <Switch
                        name="novidades"
                        checked={novidades}
                        color="primary"
                        onChange={(event) => {
                            setNovidades(event.target.checked);
                        }}
                    />
                }
            />
            <Button variant="contained" color="primary" type="submit">
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;
