import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
  const [nome, setNome] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome);
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        type="text"
        variant="outlined"
        id="nome"
        label="Nome"
        fullWidth
        margin="normal"
      />

      <TextField
        type="text"
        variant="outlined"
        id="sobrenome"
        label="Sobrenome"
        fullWidth
        margin="normal"
      />

      <TextField
        type="text"
        variant="outlined"
        id="cpf"
        label="CPF"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" color="primary" defaultChecked />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="Novidades" color="primary" />}
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
