import React from 'react';
import { TextField, Button } from '@material-ui/core';

function FormularioCadastro() {
  return (
    <form>
      <TextField
        type="text"
        variant="outlined"
        id="nome"
        label="Nome"
        fullWidth="true"
      />

      <TextField
        type="text"
        variant="outlined"
        id="sobrenome"
        label="Sobrenome"
        fullWidth="true"
      />

      <TextField
        type="text"
        variant="outlined"
        id="cpf"
        label="CPF"
        fullWidth="true"
      />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
