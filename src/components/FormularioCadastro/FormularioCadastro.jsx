import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCPF] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: '' } });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          let tempNome = event.target.value;
          if (tempNome.length >= 3) {
            tempNome = tempNome.substr(0, 3);
          }
          setNome(tempNome);
        }}
        type="text"
        variant="outlined"
        id="nome"
        label="Nome"
        fullWidth
        margin="normal"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        type="text"
        variant="outlined"
        id="sobrenome"
        label="Sobrenome"
        fullWidth
        margin="normal"
      />

      <TextField
        value={cpf}
        onChange={(event) => setCPF(event.target.value)}
        onBlur={(event) => {
          setErros({
            cpf: validarCPF(event.target.value),
          });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        type="text"
        variant="outlined"
        id="cpf"
        label="CPF"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => setPromocoes(event.target.checked)}
            name="promocoes"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => setNovidades(event.target.checked)}
            name="Novidades"
            color="primary"
          />
        }
      />
      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
