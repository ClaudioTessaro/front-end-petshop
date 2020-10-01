import React, { useState } from "react";
import { Form } from "@unform/web";
import { MenuItem } from "@material-ui/core";
import { TextField, Select } from "unform-material-ui";
import InputMask from "react-input-mask";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { Link } from "react-router-dom";

import Layout from "../../../components/Layout";
import Mensagem from "../../../components/Mensagem";

import api from "../../../services/api";

import ContainerBasico from "../../../components/Layout/PlanoFundo";

import { Content, Container, Label } from "./styles";

const sexo = [
  {
    value: "M",
    nome: "Masculino",
  },
  { value: "F", nome: "Feminino" },
];

const status = [
  {
    value: "A",
    nome: "Ativo",
  },
  {
    value: "I",
    nome: "Inativo",
  },
];

export default function CadastrarEditar() {
  const [abrirMensagem, setAbrirMensagem] = useState(false);
  const [mensagem, setMensagem] = useState();
  const [tipo, setTipo] = useState();

  async function handleSubmit(data, { reset }) {
    const cliente = await api.post("/cliente", data);
    setAbrirMensagem(true);
    setMensagem(cliente.data);
    setTipo("success");
    reset();
  }

  function handleClose(bool) {
    setAbrirMensagem(bool);
  }

  return (
    <Layout>
      <h1>Adicionar Cliente</h1>
      <ContainerBasico props={abrirMensagem}>
        <Content>
          <Container>
            <Mensagem
              tipo={tipo}
              abrirMensagem={abrirMensagem}
              mensagem={mensagem}
              callbackParent={(bool) => handleClose(bool)}
            />
            <h3>Geral</h3>
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid container item xs={4}>
                  <Label>Nome do Cliente</Label>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Digite o nome do Paciente"
                    variant="outlined"
                    type="text"
                    name="nome"
                    margin="dense"
                    style={{
                      width: "50ch",
                    }}
                    required
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>Nome do Pet</Label>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Digite o nome do Pet"
                    variant="outlined"
                    type="text"
                    name="pet"
                    margin="dense"
                    style={{
                      width: "50ch",
                    }}
                    required
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>CPF</Label>
                  <InputMask mask="999.999.999-99">
                    {(inputProps) => (
                      <TextField
                        placeholder="999.999.999-99"
                        id="outlined-full-width"
                        variant="outlined"
                        type="text"
                        name="cpf"
                        margin="dense"
                        required
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid container item xs={2}>
                  <Label>Nascimento</Label>
                  <TextField
                    id="outlined-full-width"
                    variant="outlined"
                    type="date"
                    name="nascimento"
                    margin="dense"
                    required
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>Sexo</Label>
                  <Select
                    id="demo-customized-select-native"
                    variant="outlined"
                    name="sexo"
                    margin="dense"
                    required
                    style={{
                      width: "30ch",
                    }}
                  >
                    {sexo.map((sex) => (
                      <MenuItem key={sex.value} value={sex.value}>
                        {sex.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid container spacing={5}>
                <Grid container item xs={2}>
                  <Label style={{ marginBottom: 10 }}>Status</Label>
                  <Select
                    id="demo-customized-select-native"
                    variant="outlined"
                    name="status"
                    margin="dense"
                    style={{
                      width: "30ch",
                    }}
                  >
                    {status.map((stat) => (
                      <MenuItem key={stat.value} value={stat.value}>
                        {stat.nome}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <h3>Contato</h3>
              <Grid container spacing={4}>
                <Grid container item xs={5}>
                  <Label>E-mail</Label>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Digite o e-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    margin="dense"
                    style={{
                      width: "60ch",
                    }}
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>Telefone</Label>
                  <InputMask mask="(99)9 9999-9999">
                    {(inputProps) => (
                      <TextField
                        placeholder="(99)9 9999-9999"
                        id="outlined-full-width"
                        variant="outlined"
                        type="text"
                        name="telefone"
                        margin="dense"
                        required
                      />
                    )}
                  </InputMask>
                </Grid>
                <Grid container item xs={2}>
                  <Label>Outro contato</Label>
                  <TextField
                    id="outlined-full-width"
                    variant="outlined"
                    type="text"
                    name="outro"
                    margin="dense"
                  />
                </Grid>
              </Grid>
              <h3>Endereço</h3>
              <Grid container spacing={3}>
                <Grid container item xs={5}>
                  <Label>Nome da Rua</Label>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Digite o nome da Rua"
                    variant="outlined"
                    type="text"
                    name="rua"
                    required
                    margin="dense"
                    style={{
                      width: "60ch",
                    }}
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>Numero</Label>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Numero"
                    variant="outlined"
                    type="number"
                    name="numero"
                    margin="dense"
                    required
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>Bairro</Label>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Bairro"
                    variant="outlined"
                    type="text"
                    name="bairro"
                    margin="dense"
                    required
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>Cidade</Label>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Cidade"
                    variant="outlined"
                    type="text"
                    name="cidade"
                    margin="dense"
                    required
                  />
                </Grid>
              </Grid>
              <DialogActions style={{ marginRight: 40, marginTop: 40 }}>
                <Button
                  variant="contained"
                  color="default"
                  size="large"
                  type="reset"
                >
                  Limpar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Salvar
                </Button>
              </DialogActions>
              <Link to="/clientes">
                <Button
                  variant="outlined"
                  color="default"
                  size="large"
                  style={{ marginTop: -68 }}
                >
                  Voltar
                </Button>
              </Link>
            </Form>
          </Container>
        </Content>
      </ContainerBasico>
    </Layout>
  );
}
