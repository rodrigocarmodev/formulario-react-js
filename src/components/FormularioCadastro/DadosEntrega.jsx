import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({ cep, endereco, numero, estado, cidade });
        }}>
            <TextField id="cep" name="cep" label="CEP" type="number" variant="outlined" fullWidth margin="normal" value={cep} onChange={(e) => { setCep(e.target.value); }} />
            <TextField id="endereco" name="endereco" label="Endereço" type="text" variant="outlined" fullWidth margin="normal" value={endereco} onChange={(e) => { setEndereco(e.target.value); }} />
            <TextField id="numero" name="numero" label="Número" type="number" variant="outlined" margin="normal" value={numero} onChange={(e) => { setNumero(e.target.value); }} />
            <TextField id="estado" name="estado" label="Estado" type="text" variant="outlined" margin="normal" value={estado} onChange={(e) => { setEstado(e.target.value); }} />
            <TextField id="cidade" name="cidade" label="Cidade" type="text" variant="outlined" margin="normal" value={cidade} onChange={(e) => { setCidade(e.target.value); }} />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}

export default DadosEntrega;