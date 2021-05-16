import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
  return (
    <form>
      <TextField
        type="text"
        variant="outlined"
        id="nome"
        label="Nome"
        fullWidth="true"
        margin="normal"
      />

      <TextField
        type="text"
        variant="outlined"
        id="sobrenome"
        label="Sobrenome"
        fullWidth="true"
        margin="normal"
      />

      <TextField
        type="text"
        variant="outlined"
        id="cpf"
        label="CPF"
        fullWidth="true"
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
