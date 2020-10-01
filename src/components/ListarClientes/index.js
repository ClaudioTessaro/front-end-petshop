import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { deepPurple } from "@material-ui/core/colors";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  MdDateRange,
  MdEmail,
  MdPhone,
  MdPets,
  MdDeleteSweep,
} from "react-icons/md";
import { useDispatch } from "react-redux";

import api from "../../services/api";

import { pink } from "@material-ui/core/colors";

import { Container, CardPosition, TitlePosition } from "./styles";
import * as actions from "../../store/modules/cliente/action";

export default function ListarPacientes() {
  const dispatch = useDispatch();
  const [client, setClient] = useState([]);

  async function handleDelete(id) {
    await api.delete(`/cliente/${id}`);
    window.location.reload(true);
  }

  function handleServicos(id) {
    dispatch(actions.postRequest(id));
  }

  function handlegetServicos(id) {
    dispatch(actions.getRequest(id));
  }

  useEffect(() => {
    async function buscarClientes() {
      const clientes = await api.get("/cliente");
      setClient(clientes.data);
    }
    buscarClientes();
  }, []);

  return (
    <Container>
      {client.map((cliente) => (
        <CardPosition>
          <Card style={{ width: 210, borderRadius: 20, height: 210 }}>
            <CardContent>
              <TitlePosition>
                <Avatar
                  style={{
                    backgroundColor: deepPurple[500],
                  }}
                  onClick={() => handlegetServicos(cliente._id)}
                >
                  {cliente.nome.substring(0, 2).toUpperCase()}
                </Avatar>
                <Typography color="textSecondary" style={{ marginTop: -5 }}>
                  {cliente.nome}
                </Typography>
              </TitlePosition>

              <Typography color="textSecondary" style={{ fontSize: 15 }}>
                <MdEmail style={{ marginRight: 10, marginTop: 5 }} />
                <span>{cliente.email}</span>
              </Typography>
              <Typography color="textSecondary" style={{ fontSize: 15 }}>
                <MdPets style={{ marginRight: 10, marginTop: 5 }} />
                <span>{cliente.pet}</span>
              </Typography>
              <Typography color="textSecondary" style={{ fontSize: 15 }}>
                <MdPhone style={{ marginRight: 10, marginTop: 5 }} />
                <span>{cliente.telefone}</span>
              </Typography>
              <div style={{ display: "flex", float: "left", marginTop: 30 }}>
                <button
                  type="button"
                  style={{ backgroundColor: "white", border: 0 }}
                >
                  <MdDeleteSweep
                    size={20}
                    onClick={() => handleDelete(cliente._id)}
                  />
                </button>
              </div>
              <div style={{ display: "flex", float: "right", marginTop: 30 }}>
                <Avatar
                  style={{
                    height: 25,
                    width: 25,
                    marginLeft: 10,
                    color: "#fff",
                  }}
                >
                  <MdDateRange />
                </Avatar>
                <button
                  type="button"
                  style={{ backgroundColor: "white", border: 0 }}
                >
                  <Avatar
                    style={{
                      height: 25,
                      width: 25,
                      marginLeft: 10,
                      color: "#fff",
                      backgroundColor: pink[500],
                    }}
                  >
                    <AssignmentIcon
                      titleAccess="Cadastrar Serviços"
                      onClick={() => handleServicos(cliente._id)}
                    />
                  </Avatar>
                </button>
              </div>
            </CardContent>
          </Card>
        </CardPosition>
      ))}
    </Container>
  );
}
