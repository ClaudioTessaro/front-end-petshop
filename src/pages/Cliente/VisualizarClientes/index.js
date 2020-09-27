import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import { TextField } from "unform-material-ui";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { MdAddCircleOutline } from "react-icons/md";
import SearchIcon from "@material-ui/icons/Search";
import Layout from "../../../components/Layout";
import ListarClientes from "../../../components/ListarClientes";

import { ButtonPosition, BuscaPosition } from "./styles";

export default function VisualizarPacientes() {
  function handleSubmit(data) {}

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <BuscaPosition>
          <TextField
            name="nome"
            style={{ backgroundColor: "#fff", width: 950 }}
            label="Procurar Cliente"
            margin="dense"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton type="submit" onSubmit={handleSubmit}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </BuscaPosition>
        <ButtonPosition>
          <Link to="/adicionarClientes">
            <Button
              variant="contained"
              color="primary"
              startIcon={<MdAddCircleOutline />}
            >
              Adicionar Cliente
            </Button>
          </Link>
        </ButtonPosition>
      </Form>
      <ListarClientes />
    </Layout>
  );
}
