import React, { useState, useEffect } from "react";
import { Form } from "@unform/web";
import { MenuItem } from "@material-ui/core";
import { TextField, Select } from "unform-material-ui";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { Link } from "react-router-dom";

import Layout from "../../../components/Layout";

import api from "../../../services/api";
import history from "../../../services/history";

import ContainerBasico from "../../../components/Layout/PlanoFundo";

import { Content, Container, Label } from "./styles";

const servico = [
  {
    id: 1,
    tipo: "Tosa",
  },
  {
    id: 2,
    tipo: "Banho",
  },
  {
    id: 3,
    tipo: "Banho e tosa",
  },
];

export default function CadastrarEditar(path) {
  const [pet, setPet] = useState();

  const { id } = path.match.params;

  async function buscarPet(id) {
    const cliente = await api.get(`/cliente/${id}`);
    setPet(cliente.data.pet);
  }

  useEffect(() => {
    buscarPet(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(data, { reset }) {
    await api.post("/servico", data);
    history.goBack();
  }

  return (
    <Layout>
      <h1>Adicionar Serviços</h1>
      <ContainerBasico>
        <Content>
          <Container>
            <h3>Geral</h3>
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={4}>
                <Grid container item xs={4}>
                  <Label>Nome do Pet</Label>
                  <TextField
                    id="outlined-full-width"
                    disabled
                    variant="outlined"
                    type="text"
                    name="pet"
                    margin="dense"
                    style={{
                      width: "50ch",
                    }}
                    required
                    value={pet}
                  />
                </Grid>
                <Grid container item xs={2}>
                  <Label>Tipo de serviço</Label>
                  <Select
                    id="demo-customized-select-native"
                    variant="outlined"
                    name="tipo"
                    margin="dense"
                    required
                    style={{
                      width: "30ch",
                    }}
                  >
                    {servico.map((tipo) => (
                      <MenuItem key={tipo.id} value={tipo.tipo}>
                        {tipo.tipo}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid container item xs={2}>
                  <Label>Preco</Label>
                  <TextField
                    id="outlined-full-width"
                    variant="outlined"
                    type="number"
                    name="preco"
                    margin="dense"
                    style={{
                      width: "50ch",
                    }}
                    required
                    step="any"
                  />
                </Grid>
                <Grid container item xs={4}>
                  <Label>Descrição</Label>
                  <TextField
                    id="outlined-full-width"
                    variant="outlined"
                    type="text"
                    name="descricao"
                    margin="dense"
                    style={{
                      width: "50ch",
                    }}
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
